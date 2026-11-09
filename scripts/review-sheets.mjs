import sharp from 'sharp';
const BG = { r: 0x24, g: 0x24, b: 0x24, alpha: 1 };
async function onDark(src, out, w, pad = 80) {
  const img = await sharp(src).resize({ width: w }).png().toBuffer();
  const m = await sharp(img).metadata();
  await sharp({ create: { width: m.width + pad * 2, height: m.height + pad * 2, channels: 4, background: BG } })
    .composite([{ input: img, left: pad, top: pad }]).png().toFile(out);
}
await onDark('assets/plates/steel-mark.png', 'review-sheets/1-steel-mark.png', 1400);
await onDark('assets/plates/crane-rig.png', 'review-sheets/2-crane-rig.png', 1100);
await onDark('assets/plates/crane-boom.png', 'review-sheets/3-crane-boom.png', 1120);
await onDark('public/assets/logo/amzya-horizontal-reverse.svg', 'review-sheets/4-logo.png', 900, 100);
