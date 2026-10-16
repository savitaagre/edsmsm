// Named deviation (stardust/direction.md): motion-observe samples transform/color/background/boxShadow/opacity
// but not text-decoration; this one-off reads textDecorationLine before/after a real pointer hover.
import { chromium } from 'playwright';
const [url, ...sels] = process.argv.slice(2);
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto(url, { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(2500);
for (const s of sels) {
  const el = p.locator(s).first();
  const read = () => el.evaluate((e) => getComputedStyle(e).textDecorationLine);
  const before = await read(); await el.hover(); await p.waitForTimeout(400); const after = await read();
  await p.mouse.move(0, 0); console.log(`${s}\t${before} → ${after}`);
}
await b.close();
