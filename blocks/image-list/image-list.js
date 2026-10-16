/**
 * image-list — wknd 4-up image list (Recent Articles / Where do you want to
 * go?): 260px cards — 260×200 image, uppercase title link, one-line
 * ellipsised description.
 *
 * Contract: stardust/eds-schema/us-en-html.json → sections[2] / sections[4]
 * "image-list" (4 × LI unit, uniform: 1 cta + 1 img + description).
 * Model: cards — ONE ROW PER CARD, two cells: image | text
 *   image cell: <picture>/<img> (alt + title carried verbatim)
 *   text cell : <p><a href>Title</a></p> (the card link), <p> description
 * Decode tier: reconstructive (repeat group). One card per row when the block
 * has several rows; a flattened single cell is segmented on the card link /
 * image boundary. Authored nodes are MOVED (EW1): the title paragraph keeps
 * its link (decorateButtons' button classes and derived title are undone —
 * a card link is not a CTA); the image is wrapped in a generated, text-free
 * anchor to the same href (the source's image link).
 */

function el(tag, className) {
  const n = document.createElement(tag);
  if (className) n.className = className;
  return n;
}

// Cell-level collector (#62/#68/#104) — expands a media-led cell folded into one <p>.
function collectNodes(scope) {
  const out = [];
  scope.querySelectorAll(':scope > div').forEach((cell) => {
    let kids = [...cell.children];
    if (kids.length === 1 && kids[0].tagName === 'P' && kids[0].querySelector('picture, img')) {
      kids = [...kids[0].childNodes].map((n) => {
        if (n.nodeType === 1) return n;
        // HARNESS-ONLY fallback (EW5): bare text beside an image → move the node into a <p>
        if (n.textContent.trim()) {
          const p = document.createElement('p');
          p.append(n);
          return p;
        }
        return null;
      }).filter(Boolean);
    }
    if (kids.length) out.push(...kids);
    else if (cell.textContent.trim()) {
      // HARNESS-ONLY fallback (EW5): wrap the existing text nodes, never copy text
      const p = document.createElement('p');
      p.append(...cell.childNodes);
      out.push(p);
    }
  });
  return out;
}

const mediaOf = (n) => (n.matches('picture, img') ? n : n.querySelector('picture, img'));
const isTitle = (n) => {
  if (n.matches('a')) return true;
  const links = n.matches('p, h2, h3, h4, h5, h6') ? n.querySelectorAll('a') : [];
  return links.length === 1 && n.textContent.trim() === links[0].textContent.trim();
};

function newCard() {
  return { media: null, title: null, body: [] };
}

function place(card, n) {
  const m = mediaOf(n);
  if (m && !card.media) card.media = m.closest('picture') || m;
  else if (isTitle(n) && !card.title) card.title = n;
  else if (n.textContent.trim() || m) card.body.push(n);
}

function toCards(block) {
  const rows = [...block.children];
  if (rows.length > 1) {
    return rows.map((row) => {
      const card = newCard();
      collectNodes(row).forEach((n) => place(card, n));
      return card;
    }).filter((c) => c.media || c.title || c.body.length);
  }
  const cards = [];
  let card = newCard();
  collectNodes(rows[0] || block).forEach((n) => {
    const opens = (mediaOf(n) && card.media) || (isTitle(n) && card.title);
    if (opens) {
      cards.push(card);
      card = newCard();
    }
    place(card, n);
  });
  cards.push(card);
  return cards.filter((c) => c.media || c.title || c.body.length);
}

// a card link is not a CTA: undo decorateButtons() on it
function unbutton(node) {
  if (node.matches('p')) node.classList.remove('button-wrapper');
  if (!node.classList.length) node.removeAttribute('class');
  const a = node.matches('a') ? node : node.querySelector('a');
  if (!a) return null;
  a.classList.remove('button', 'primary', 'secondary', 'accent');
  if (!a.classList.length) a.removeAttribute('class');
  if (a.title === a.textContent) a.removeAttribute('title');
  return a;
}

// The pipeline delivers an authored image title as data-title: restore it.
function restoreTitles(root) {
  root.querySelectorAll('img[data-title]').forEach((img) => {
    if (!img.title) img.title = img.dataset.title;
    img.removeAttribute('data-title');
  });
}

// Interim (stardust/rollout/foundation-requests.md): the section's trailing CTA
// ("All Articles") carries the source aria-label ("read our articles") as its
// authored link title — DA has no aria-label field. A title that differs from
// the link text becomes the accessible name; one equal to it (derived by
// decorateButtons) is dropped.
function promoteCtaLabels(block) {
  const section = block.closest('.section');
  if (!section) return;
  section.querySelectorAll('.default-content-wrapper p a[title]').forEach((a) => {
    if (a.title !== a.textContent) a.setAttribute('aria-label', a.title);
    a.removeAttribute('title');
  });
}

export default async function decorate(block) {
  promoteCtaLabels(block);
  const cards = toCards(block);
  const list = el('ul', 'items');

  cards.forEach((card) => {
    const li = el('li', 'item');
    const article = el('article');
    const link = card.title ? unbutton(card.title) : null;
    const href = link ? link.getAttribute('href') : null;

    if (card.media) {
      const image = el('div', 'image');
      image.append(card.media);
      if (href) {
        const imageLink = el('a', 'image-link');
        imageLink.href = href;
        imageLink.append(image);
        article.append(imageLink);
      } else {
        article.append(image);
      }
    }
    if (card.title) {
      const title = el('div', 'title');
      title.append(card.title);
      article.append(title);
    }
    if (card.body.length) {
      const description = el('div', 'description');
      description.append(...card.body);
      article.append(description);
    }
    li.append(article);
    list.append(li);
  });

  block.replaceChildren(list);
  restoreTitles(block);
}
