// Named deviation (stardust/direction.md): rect of an element after a click — motion-observe samples
// widget frames but not the geometry of a revealed overlay.
import { chromium } from 'playwright';
const [url, click, target, width = '1440'] = process.argv.slice(2);
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: +width, height: 900 } });
await p.goto(url, { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(2500);
await p.locator(click).first().click(); await p.waitForTimeout(600);
const r = await p.locator(target).first().evaluate((e) => { const b = e.getBoundingClientRect(); const cs = getComputedStyle(e); let cb = e.parentElement; while (cb && getComputedStyle(cb).transform === "none" && getComputedStyle(cb).filter === "none" && getComputedStyle(cb).contain === "none" && getComputedStyle(cb).willChange === "auto") cb = cb.parentElement; return `cb ${cb ? cb.className.slice(0,60) + " tf=" + getComputedStyle(cb).transform + " wc=" + getComputedStyle(cb).willChange + " ct=" + getComputedStyle(cb).contain : "viewport"} left ${cs.left} right ${cs.right} style="${e.getAttribute("style")}" x ${Math.round(b.x)} y ${Math.round(b.y)} w ${Math.round(b.width)} h ${Math.round(b.height)} display ${cs.display} position ${cs.position} z ${cs.zIndex}`; });
console.log(`${url}  ${target}: ${r}`); await b.close();
