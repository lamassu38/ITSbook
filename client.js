const els = {
  pageImage: document.getElementById("page-image"),
  pageTitle: document.getElementById("page-title"),
  pageSubtitle: document.getElementById("page-subtitle"),
  pageText: document.getElementById("page-text"),
  dialogBox: document.getElementById("dialog-box"),
  storyBox: document.getElementById("story-box"),
  coverOverlay: document.getElementById("cover-overlay"),
  coverTitle: document.getElementById("cover-title"),
  coverSubtitle: document.getElementById("cover-subtitle"),
  coverText: document.getElementById("cover-text"),
  book: document.getElementById("book"),
  prevBtn: document.getElementById("prev-btn"),
  nextBtn: document.getElementById("next-btn"),
  langToggle: document.getElementById("lang-toggle"),
};

const LANG_KEY = "itsbook-lang";
const PAGE_KEY = "itsbook-page";
const SUPPORTED_LANGS = ["es", "en"];

function getStoredLang() {
  const stored = localStorage.getItem(LANG_KEY);
  return SUPPORTED_LANGS.includes(stored) ? stored : "es";
}

function getStoredPage() {
  const stored = Number(localStorage.getItem(PAGE_KEY));
  return Number.isInteger(stored) && stored >= 0 && stored < pages.length ? stored : 0;
}

let currentLang = getStoredLang();
let currentPage = getStoredPage();
let isAnimating = false;
let animationTimeout;


function getPage() {
  return pages[currentPage];
}

function isMobileViewport() {
  return window.matchMedia("(max-width: 768px)").matches;
}

function pickValue(obj, key) {
  const mobileKey = key + "Mobile";
  if (isMobileViewport() && obj[mobileKey] !== undefined) {
    return obj[mobileKey];
  }
  return obj[key];
}

// Extracts the current-language string from a { es, en } translation object.
// Non-translated values (numbers, arrays, plain strings) pass through unchanged.
function t(value) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value[currentLang] ?? value.es ?? "";
  }
  return value;
}

function setLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang) || lang === currentLang) return;

  currentLang = lang;
  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.lang = lang;
  if (els.langToggle) {
    els.langToggle.textContent = lang === "es" ? "EN" : "ES";
  }
  renderPage();
}

function renderContent(page) {
  els.pageImage.src = page.imageUrl || "";
  els.pageImage.alt = t(page.alt) || "";
  els.pageImage.style.objectPosition = pickValue(page, "imagePosition") || "center 20%";

  els.pageTitle.textContent = t(page.title) || "";
  els.pageSubtitle.textContent = t(page.subtitle) || "";
  els.pageText.textContent = t(page.narration) || t(page.text) || "";

  renderBubbles(page.bubbles || []);
}

function renderBubbles(bubbles) {
  els.dialogBox.innerHTML = "";

  bubbles.forEach(bubble => {
    const bubbleEl = document.createElement("div");
    bubbleEl.classList.add(bubble.kind === "thought" ? "thought-bubble" : "speech-bubble");
    bubbleEl.classList.add("pos-" + (pickValue(bubble, "position") || "bottom-left"));

    const tailValue = pickValue(bubble, "tail");
    if (bubble.kind !== "thought" && tailValue) {
      if (tailValue.includes("-")) {
    const [vertical, horizontal] = tailValue.split("-");
    bubbleEl.classList.add("tail-" + vertical, "tail-" + horizontal);
  } else {
    bubbleEl.classList.add("tail-side-" + tailValue); // "left" o "right"
  }
    }

    if (bubble.offset || bubble.offsetMobile) {
      Object.assign(bubbleEl.style, pickValue(bubble, "offset"));
    }

    const tailOffsetValue = pickValue(bubble, "tailOffset");
    if (tailOffsetValue) {
      bubbleEl.style.setProperty("--tail-offset", tailOffsetValue);
    }

    const widthValue = pickValue(bubble, "width");
    if (widthValue) {
      bubbleEl.style.setProperty("--bubble-width", widthValue);
    }

    if (bubble.kind !== "thought") {
      const speakerEl = document.createElement("h3");
      speakerEl.classList.add("bubble-speaker");
      speakerEl.textContent = bubble.speaker || "";
      bubbleEl.appendChild(speakerEl);
    }

renderBubbleContent(bubble, bubbleEl);

els.dialogBox.appendChild(bubbleEl);
  });

}

function renderBubbleContent(bubble, container) {
  if (bubble.text) {

    const p = document.createElement("p");
    p.classList.add("bubble-text");
    p.textContent = t(bubble.text);
    container.appendChild(p);
    return;
  }

  if (bubble.paragraphs) {
    t(bubble.paragraphs).forEach(paragraph => {
      const p = document.createElement("p");
      p.classList.add("bubble-text");
      p.textContent = paragraph;
      container.appendChild(p);
    });
  }

  if (bubble.listTitle) {
    const h4 = document.createElement("h4");
    h4.textContent = t(bubble.listTitle);
    container.appendChild(h4);
  }

  if (bubble.list) {
    const ul = document.createElement("ul");
    bubble.list.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });
    container.appendChild(ul);
  }
}

function updateLayout(page) {
  const isCover = page.type === "cover";

  els.book.classList.toggle("cover-layout", isCover);
  els.book.classList.toggle("story-layout", !isCover);

  els.coverOverlay.style.display = isCover ? "flex" : "none";

  const hasStoryText = Boolean(page.narration || page.text) && !isCover;
  const hasBubbles = Boolean(page.bubbles && page.bubbles.length > 0);

  els.storyBox.style.display = hasStoryText ? "block" : "none";
  els.dialogBox.style.display = hasBubbles ? "block" : "none";

  els.prevBtn.disabled = isCover;
  els.nextBtn.disabled = currentPage === pages.length - 1;

  if (isCover) {
    els.coverTitle.textContent = t(page.title);
    els.coverSubtitle.textContent = t(page.subtitle);
    els.coverText.textContent = t(page.text);
  }
}

function renderPage() {
  const page = getPage();

  renderContent(page);
  updateLayout(page);
}


function changePage(direction) {
  if (isAnimating) return;

  let newIndex = currentPage;

  if (direction === "next" && currentPage < pages.length - 1) {
    newIndex++;
  }

  if (direction === "prev" && currentPage > 0) {
    newIndex--;
  }

  if (newIndex === currentPage) return;

  isAnimating = true;

  const bookEl = els.book;

  const exitClass = direction === "next" ? "slide-left" : "slide-right";
  const enterClass = direction === "next" ? "slide-right" : "slide-left";

  bookEl.classList.add(exitClass);

  requestAnimationFrame(() => {
    currentPage = newIndex;
    localStorage.setItem(PAGE_KEY, String(currentPage));
    renderPage();

    bookEl.classList.add(enterClass);

    requestAnimationFrame(() => {
      bookEl.classList.remove(exitClass);
    });

    clearTimeout(animationTimeout);
    animationTimeout = setTimeout(() => {
      bookEl.classList.remove(enterClass);
      isAnimating = false;
    }, 350);
  });
}


els.prevBtn.addEventListener("click", () => changePage("prev"));
els.nextBtn.addEventListener("click", () => changePage("next"));

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") changePage("prev");
  if (e.key === "ArrowRight") changePage("next");
});

if (els.langToggle) {
  els.langToggle.textContent = currentLang === "es" ? "EN" : "ES";
  els.langToggle.addEventListener("click", () => {
    setLanguage(currentLang === "es" ? "en" : "es");
  });
}
document.documentElement.lang = currentLang;

let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(renderPage, 200);
});

function preloadImages() {
  pages.forEach(p => {
    const img = new Image();
    img.src = p.imageUrl;
  });
}

preloadImages();
renderPage();
