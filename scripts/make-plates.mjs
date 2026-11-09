// Builds hero plates: Higgsfield steel, crane and boom artwork, masked to the official AMZYA mark paths.
import sharp from 'sharp';
const art = '.impeccable/art/';
const UPPER = 'M83 2L1278 0C1188 63 1128 108 1048 158L170 688V602L492 403C408 283 288 163 83 2ZM322 70H1041L579 353C518 256 428 153 322 70Z';
const LOWER = 'M0 825L1130 159V253L806 451C908 578 1038 698 1215 823L0 825ZM280 755L733 493C798 588 878 683 969 755H280Z';
const S = 2048 / 1278, W = 2048, H = Math.round(825 * S);
const svg = (body) => Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 1278 825">${body}</svg>`);

// Steel source maps to viewBox y -62..790, so restore the last 35 units by reflecting the base band.
const top = Math.round(62 * 1360 / 852);
const body = await sharp(art + 'steel.png').extract({ left: 0, top, width: 2048, height: 1360 - top })
  .resize(W, Math.round(790 * S), { fit: 'fill' }).png().toBuffer();
const stripH = H - Math.round(790 * S);
const strip = await sharp(body).extract({ left: 0, top: Math.round(790 * S) - stripH, width: W, height: stripH }).flip().png().toBuffer();
const steel = await sharp({ create: { width: W, height: H, channels: 3, background: '#000' } })
  .composite([{ input: body, left: 0, top: 0 }, { input: strip, left: 0, top: Math.round(790 * S) }]).png().toBuffer();

// Black gaps in open steel become transparent so the page ground shows through.
const knockBlack = async (buf, lo = 12, hi = 66) => {
  const { data, info } = await sharp(buf).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    const m = Math.max(data[i], data[i + 1], data[i + 2]);
    let t = Math.min(1, Math.max(0, (m - lo) / (hi - lo))); t = t * t * (3 - 2 * t);
    data[i + 3] = Math.round(data[i + 3] * t);
  }
  return sharp(data, { raw: info }).png().toBuffer();
};
const masked = (buf, shape) => sharp(buf).ensureAlpha().composite([{ input: svg(shape), blend: 'dest-in' }]).png().toBuffer();

const CUT = 560, BAR = 70;
const upperRest = `<defs><clipPath id="c"><path d="M0 ${BAR}H${CUT}V0H0ZM0 ${BAR}H1278V825H0Z"/></clipPath></defs><path clip-path="url(#c)" fill-rule="evenodd" d="${UPPER}"/>`;
const upperMember = `<defs><clipPath id="c"><rect x="${CUT}" y="0" width="${1278 - CUT}" height="${BAR}"/></clipPath></defs><path clip-path="url(#c)" fill-rule="evenodd" d="${UPPER}"/>`;
const lower = `<path fill-rule="evenodd" d="${LOWER}"/>`;
const chord = (clip) => svg(`<defs><clipPath id="c">${clip}</clipPath></defs><path clip-path="url(#c)" fill="none" stroke="#D9D9D6" stroke-width="5" fill-rule="evenodd" d="${UPPER}"/>`);
const restClip = `<path d="M0 ${BAR}H${CUT}V0H0ZM0 ${BAR}H1278V825H0Z"/>`, memberClip = `<rect x="${CUT}" y="0" width="${1278 - CUT}" height="${BAR}"/>`;
const truss = await sharp(await knockBlack(await masked(steel, upperRest))).composite([{ input: chord(restClip) }]).png().toBuffer();
const plateBase = svg(`<path fill="#5C1F2C" fill-rule="evenodd" d="${LOWER}"/>`);
const plate = await sharp(plateBase).composite([{ input: await knockBlack(await masked(steel, lower), 20, 44) }]).png().toBuffer();
await sharp({ create: { width: W, height: H, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
  .composite([{ input: truss }, { input: plate }]).png().toFile('assets/plates/steel-mark.png');

// Crane rig: hook + slings seated on the final truss member, exactly the 625x430 region at 2.4px per comp px.
const K = 2.4, rigW = Math.round(625 * K), rigH = Math.round(430 * K), frameH = Math.round(415 * K);
const noBoom = await sharp(art + 'rig.png').composite([{ input: { create: { width: 900, height: 330, channels: 3, background: '#000' } }, left: 1148, top: 0 }]).png().toBuffer();
const rigK = await knockBlack(await sharp(noBoom).resize(rigW, frameH, { fit: 'fill' }).png().toBuffer(), 10, 60);
const memberRaw = await sharp(await sharp(await knockBlack(await masked(steel, upperMember))).composite([{ input: chord(memberClip) }]).png().toBuffer()).extract({ left: Math.round(CUT * S), top: 0, width: W - Math.round(CUT * S), height: Math.round(BAR * S) }).resize(Math.round(619 * K), Math.round(60 * K), { fit: 'fill' }).png().toBuffer();
const rigTop = rigH - frameH - Math.round(60 * K) + 6;
const rigCrop = await sharp(rigK).extract({ left: 0, top: Math.max(0, -rigTop), width: rigW, height: frameH - Math.max(0, -rigTop) }).png().toBuffer();
await sharp({ create: { width: rigW, height: rigH, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
  .composite([{ input: rigCrop, left: 0, top: Math.max(0, rigTop) }, { input: memberRaw, left: Math.round((rigW - 619 * K) / 2), top: rigH - Math.round(60 * K) }]).png().toBuffer()
  // Clear the boom fragment that survives the source blackout in the top-right corner.
  .then((b) => sharp(b).composite([{ input: { create: { width: 240, height: 240, channels: 4, background: '#fff' } }, left: rigW - 240, top: 60, blend: 'dest-out' }]).png().toFile('assets/plates/crane-rig.png'));

// Boom: fitted to its region and faded at its far end, where it runs out of frame.
const boomW = 1120, boomH = 324;
const boom = await knockBlack(await sharp(art + 'boom.png').resize(boomW, boomH, { fit: 'fill' }).png().toBuffer(), 10, 60);
const fade = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${boomW}" height="${boomH}"><defs><linearGradient id="g"><stop offset=".62" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient></defs><rect width="${boomW}" height="${boomH}" fill="url(#g)"/></svg>`);
await sharp(boom).composite([{ input: fade, blend: 'dest-in' }]).png().toFile('assets/plates/crane-boom.png');
for (const f of ['steel-mark', 'crane-rig', 'crane-boom']) { const m = await sharp(`assets/plates/${f}.png`).metadata(); console.log(f, m.width, m.height, m.hasAlpha); }
