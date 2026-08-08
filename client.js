const pages = [
  {
    id: 0,
    type: "cover",
    title: "UN FUTURO PROTEGIDO",
		imageUrl: "images/cristianandangelacover.webp",
		imagePosition: "center 50%",
		imagePositionMobile: "center 50%",
    alt: "Cristian y Angélica leen un folleto sobre pruebas rápidas de ITS junto a un módulo de salud en Parque Fundadores.",
    subtitle: "La historia de Cristian y Angélica",
    text: "Guía ilustrada sobre las pruebas rápidas para la detección de VIH, hepatitis C y sífilis."
  },

  {
    id: 1,
    type: "story",
		imageUrl: "images/cristianandangelaone.webp",
		imagePosition: "center 50%",
		imagePositionMobile: "center 35%",
    alt: "Cristian y Angélica conversan con Erika frente al módulo de pruebas rápidas.",
    narration: `Esta es la historia de Cristian y Angélica. Mientras paseaban por el centro de la ciudad, vieron un módulo de salud que ofrecía pruebas rápidas. Llevaban algunos meses saliendo y querían hablar de temas importantes antes de dar el siguiente paso en su relación.`,
    bubbles: [
      {
        speaker: "Cristian",
        kind: "speech",
        text: `Nunca me he hecho una prueba rápida. ¿Qué detectan exactamente?`,
        position: "top-left",
				offset: { top: "0%", left: "20%" },
        offsetMobile: { top: "17%", left: "0%" },
        tail: "up-left",
        tailOffset: "30%"
      },
      {
        speaker: "Erika",
        kind: "speech",
        text: `Qué bueno que se acercaron. Las pruebas son gratuitas y confidenciales, y ayudan a detectar VIH, hepatitis C y sífilis. Si gustan, pasen al módulo y les explico cómo se realizan.`,
        position: "bottom-right",
        offset: { bottom: "0%" },
				tail: "down-right",

      }
    ]
  },

  {
    id: 2,
    type: "story",
    imageUrl: "images/erikaexplinationone.webp",
		imagePosition: "center 50%",
		imagePositionMobile: "center 15%",
    alt: "Erika explica a Cristian y Angélica qué infecciones ayudan a identificar las pruebas rápidas.",
    narration: `Entraron al módulo y Erika, la química, utilizó una lámina para explicarles que las pruebas rápidas ayudan a prevenir e identificar las Infecciones de Transmisión Sexual o ITS.`,
    bubbles: [
      {
        speaker: "Erika",
        kind: "speech",
        text: `¿Sabían que no todas las ITS son causadas por lo mismo? El VIH y el VHC son virus; la sífilis es una infección causada por una bacteria. Estas pruebas buscan anticuerpos relacionados con las tres infecciones.`,
        position: "top-right",
				offset: { top: "0%", right: "15%" },
        offsetMobile: { top: "10%", right: "0%" },
        tail: "up-right"
      }
    ]
  },

  {
    id: 3,
    type: "story",
		imageUrl: "images/erikaexplinationquestion.webp",
		imagePosition: "center 40%",
		imagePositionMobile: "center 15%",
    alt: "Angélica pregunta a Erika por las complicaciones causadas por el VHC y Treponema pallidum.",
    narration: `Al observar la siguiente lámina, Angélica quiso saber qué complicaciones podían causar estas infecciones.`,
    bubbles: [
      {
    speaker: "Angélica",
    kind: "speech",
    text: `Sé que, sin tratamiento, el VIH puede progresar a sida, pero ¿qué complicaciones pueden provocar el VHC y la bacteria Treponema pallidum?`,
    position: "top-left",
				offset: { top: "0%", left: "4%" },
    offsetMobile: { top: "11%", left: "0%" },
    tail: "up-right"
  }
    ]
  },

  {
    id: 4,
    type: "story",
		imageUrl: "images/erikaexplinationtwo.webp",
		imagePosition: "center 62%",
		imagePositionMobile: "center 50%",
    alt: "Erika explica las posibles complicaciones de la hepatitis C y la sífilis.",
    narration: `Erika respondió con ejemplos sencillos y explicó por qué es importante detectar estas infecciones a tiempo.`,
    bubbles: [
      {
        speaker: "Erika",
        kind: "speech",
        text: `La hepatitis C puede causar inflamación crónica, cirrosis o cáncer de hígado. La sífilis, si no se trata, puede afectar el cerebro, los nervios y el corazón.`,
        position: "top-right",
        offset: { top: "0%", right: "18%" },
				offsetMobile: { top: "20%", right: "0%" },
        tail: "up-right"
      }
    ]
  },

  {
    id: 5,
    type: "story",
    imageUrl: "images/erikatestingtiming.webp",
		imagePosition: "center 50%",
		imagePositionMobile: "center 50%",
    alt: "Cristian pregunta cuándo hacerse las pruebas y Erika explica que algunas infecciones pueden no causar síntomas.",
    narration: `La explicación llevó a Cristian a plantear una duda frecuente: cuándo hacerse las pruebas si no hay síntomas.`,
    bubbles: [
      {
        speaker: "Cristian",
        kind: "speech",
        text: `Si me siento bien, ¿cómo sé cuándo debo hacerme estas pruebas?`,
        position: "top-left",
				offset: { top: "2%", left: "0%" },
        offsetMobile: { top: "17%", left: "0%" },
        tail: "up-left",
        tailOffset: "38%"
      },
      {
        speaker: "Erika",
        kind: "speech",
        text: `Algunas infecciones no causan síntomas y aun así pueden transmitirse. Si crees que tuviste una exposición, acércate al personal de salud. Te orientarán sobre cuándo hacer cada prueba o repetirla, porque sus periodos de ventana son diferentes.`,
        position: "bottom-right",
				offset: { bottom: "0%", right: "14%" },
				offsetMobile: { bottom: "0%", right: "0%" },
        tail: "down-right"
      }
    ]
  },

  {
    id: 6,
    type: "story",
    imageUrl: "images/angelahablandothree.webp",
    imagePosition: "center 64%",
    imagePositionMobile: "center 5%",
    alt: "Angélica propone a Cristian hacerse las pruebas y él acepta mientras Erika espera junto a la lámina del proceso.",
    narration: `Erika les explicó el proceso: no necesitaban una orden médica ni acudir en ayunas y podían solicitar las pruebas directamente en el módulo.`,
    bubbles: [
       {
        speaker: "Cristian",
        kind: "speech",
        text: `Angélica, ¿qué te parece si nos hacemos las pruebas?`,
        position: "top-left",
				offset: { top: "0%", right: "25%" },
				offsetMobile: { top: "17%", left: "0%" },
        tail: "up-left",
        tailOffset: "20%"
      },
      {
        speaker: "Angélica",
        kind: "speech",
        text: `Sí, hagámoslas.`,
        position: "top-right",
				offset: { top: "0%", right: "35%" },
				offsetMobile: { top: "30%", right: "38%" },
        tail: "up-left",
        tailOffset: "38%"
      }

    ]
  },

  {
    id: 7,
    type: "story",
		imageUrl: "images/cristianbeentestedfour.webp",
		imagePosition: "center 10%",
		imagePositionMobile: "center 70%",
    alt: "Erika obtiene una muestra de sangre del dedo de Cristian mientras Angélica llena el consentimiento informado.",
    narration: `Ambos aceptaron realizarse las pruebas. Mientras Erika obtenía una pequeña muestra de sangre del dedo de Cristian, Angélica llenaba el consentimiento informado. Los dos se sentían tranquilos con su decisión.`,
    bubbles: [
      {
        speaker: "Cristian",
        kind: "thought",
        text: `Sé que esto es lo correcto. Queremos comenzar esta nueva etapa con tranquilidad.`,
        position: "bottom-left",
				offset: { bottom: "0%", left: "0%" },
				offsetMobile: { bottom: "20%", left: "0%" },
        tailOffset: "35%"
      },
      {
        speaker: "Angélica",
        kind: "thought",
        text: `Hacernos estas pruebas también es una forma de cuidarnos y demostrar cuánto nos importa nuestro bienestar.`,
        position: "bottom-right",
				offset: { bottom: "0%", right: "20%" },
        offsetMobile: { bottom: "30%", right: "0%" },
        tailOffset: "80%"
      }
    ]
  },

  {
    id: 8,
    type: "story",
		imageUrl: "images/erikaresultsfive.webp",
		imagePositionMobile: "center 85%",
    alt: "Erika muestra a Cristian y Angélica un reporte con resultados no reactivos para VIH, VHC y sífilis.",
    narration: `Después del tiempo de espera, Erika les mostró el reporte y explicó el significado de los resultados.`,
    bubbles: [
      {
        speaker: "Cristian",
        kind: "speech",
        text: `¿Qué significa “no reactivo”?`,
        position: "top-left",
				offset: { top: "10%", left: "0%" },
				offsetMobile: { top: "10%", left: "0%" },
        tail: "up-left",
        tailOffset: "20%"
      },
      {
        speaker: "Erika",
        kind: "speech",
        text: `Significa que, en la muestra analizada hoy, no se detectaron los anticuerpos que buscan estas pruebas para VIH, hepatitis C ni sífilis. Es un resultado favorable. Si hubo una exposición reciente, sigan la orientación sobre cuándo repetirlas.`,
        position: "bottom-right",
				offset: { bottom: "0%", right: "0%" },
				offsetMobile: { bottom: "0%", right: "0%" },
				tail: "down-right",
				tailOffset: "10%"
      }
    ]
  },

  {
    id: 9,
    type: "story",
    imageUrl: "images/erikainvitationsix-style-v1.webp",
		imagePosition: "center 15%",
		imagePositionMobile: "center 15%",
    alt: "Erika mira al lector e invita a la comunidad a solicitar las pruebas rápidas, mientras Cristian y Angélica se alejan juntos del módulo.",
    narration: `A lo largo de esta historia, Cristian y Angélica descubrieron que cuidar su salud sexual también es una forma de cuidar su relación y el futuro que desean construir juntos.`,
    bubbles: [
      {
        speaker: "Erika",
        kind: "speech",
        paragraphs: [
          "Las mejores historias de amor empiezan con confianza, comunicación y prevención.",
          "Acércate a tu centro de salud y solicita tus pruebas rápidas."
        ],
        listTitle: "Centros disponibles",
        list: [
          "CAPS Villas del Sol",
          "CAPS Petén",
					"CAPS Puerto Aventuras",
          "CAPS Colosio"
        ],
        position: "bottom-left",
        offset: { bottom: "0%", left: "3%" },
				tail: "right",

      }
    ]
  }
];


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
};

let currentPage = 0;


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

function renderContent(page) {
  els.pageImage.src = page.imageUrl || "";
  els.pageImage.alt = page.alt || "";
  els.pageImage.style.objectPosition = pickValue(page, "imagePosition") || "center 20%";

  els.pageTitle.textContent = page.title || "";
  els.pageSubtitle.textContent = page.subtitle || "";
  els.pageText.innerHTML = page.narration || page.text || "";

  renderBubbles(page.bubbles || []);
}

function renderBubbles(bubbles) {
  els.dialogBox.innerHTML = "";

  bubbles.forEach(bubble => {
    const bubbleEl = document.createElement("div");
    bubbleEl.classList.add(bubble.kind === "thought" ? "thought-bubble" : "speech-bubble");
    bubbleEl.classList.add("pos-" + (bubble.position || "bottom-left"));

    if (bubble.kind !== "thought" && bubble.tail) {
      if (bubble.tail.includes("-")) {
    const [vertical, horizontal] = bubble.tail.split("-");
    bubbleEl.classList.add("tail-" + vertical, "tail-" + horizontal);
  } else {
    bubbleEl.classList.add("tail-side-" + bubble.tail); // "left" o "right"
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
    p.textContent = bubble.text;
    container.appendChild(p);
    return;
  }

  if (bubble.paragraphs) {
    bubble.paragraphs.forEach(paragraph => {
      const p = document.createElement("p");
      p.classList.add("bubble-text");
      p.textContent = paragraph;
      container.appendChild(p);
    });
  }

  if (bubble.listTitle) {
    const h4 = document.createElement("h4");
    h4.textContent = bubble.listTitle;
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

  els.prevBtn.style.visibility = isCover ? "hidden" : "visible";

  if (isCover) {
    els.coverTitle.textContent = page.title;
    els.coverSubtitle.textContent = page.subtitle;
    els.coverText.textContent = page.text;
  }
}

function renderPage() {
  const page = getPage();

  renderContent(page);
  updateLayout(page);
}


function changePage(direction) {
  let newIndex = currentPage;

  if (direction === "next" && currentPage < pages.length - 1) {
    newIndex++;
  }

  if (direction === "prev" && currentPage > 0) {
    newIndex--;
  }

  if (newIndex === currentPage) return;

  const bookEl = els.book;

  const exitClass = direction === "next" ? "slide-left" : "slide-right";
  const enterClass = direction === "next" ? "slide-right" : "slide-left";

  bookEl.classList.add(exitClass);

  requestAnimationFrame(() => {
    currentPage = newIndex;
    renderPage();

    bookEl.classList.add(enterClass);

    requestAnimationFrame(() => {
      bookEl.classList.remove(exitClass);
    });

    setTimeout(() => {
      bookEl.classList.remove(enterClass);
    }, 350);
  });
}


els.prevBtn.addEventListener("click", () => changePage("prev"));
els.nextBtn.addEventListener("click", () => changePage("next"));

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
