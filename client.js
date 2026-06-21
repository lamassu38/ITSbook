export const pages = [ 
   {
    id: 0,
    type: "cover",
    title: "UN FUTURO PROTEGIDO",
    imageUrl: "images/cristianandangelacover.png",
    subtitle:"La historia de Cristian y Angelica",
    text: "Guía ilustrada sobre pruebas rápidas de VIH, VHC Y VDRL.",
   },
   
   {
    id: 1,
    type: "story",
    imageUrl: "images/cristianandangelaone.png",

    text: `Hola, soy Cristian y ella es mi novia, Angélica.

    Mientras paseábamos por el centro de la ciudad vimos un módulo de salud donde ofrecían pruebas rápidas gratuitas para detectar infecciones de transmisión sexual.`,

    speaker: "Cristian",

    dialog: "¿Qué detectan con estas pruebas?"
  },

  {  
    id: 2,
    type: "story",
    imageUrl: "images/erikaexplinationone.png",

    text: `Entramos al módulo y la química nos invitó a sentarnos para explicarnos, mediante unas láminas educativas, en qué consistían las pruebas.`,

    speaker: "Erika",

    dialog: `Estas pruebas detectan anticuerpos contra el VIH, la hepatitis C y la bacteria que causa la sífilis. Estas infecciones pueden transmitirse por contacto sexual, sangre o agujas contaminadas y, en algunos casos, durante el embarazo.`
  },
  
  {
    id: 3,
    type: "story",
    imageUrl: "images/erikaexplinationtwo.png",

    text: `Escuchamos atentamente mientras la química nos explicaba
    que muchas infecciones pueden prevenirse adoptando hábitos
    responsables y reduciendo situaciones de riesgo.`,

    speaker: "Erika",

    dialog: `Realizar estas pruebas de forma periódica permite detectar oportunamente una infección y reducir el riesgo de complicaciones para ti, tu pareja y tu futuro bebé.`
           
  },
  {
  id: 4,
    type: "story",
    imageUrl: "images/angelahablandothree.png",

    text: `Nos sorprendió saber que el procedimiento era gratuito, confidencial y no requiere venir en ayunas. En solo veinte minutos vamos a conocer nuestro resultado.`,

    speaker: "Angélica",

    dialog: `Cristian, creo que deberíamos hacernos las pruebas. Igual que revisarnos la glucosa o la presión arterial, conocer nuestro estado de salud también es importante.`
  },
  {
  id: 5,
  type: "story",
  imageUrl: "images/cristianbeentestedfour.png",

  text: `<p>Mientras Erika obtenía una pequeña muestra de sangre, Cristian comenzó a sentirse más tranquilo.</p>

  <h4>💭 Cristian </h4>

  <p> Sé que esto es lo correcto.</p>

  <p>Queremos empezar esta nueva etapa con tranquilidad.</p>

  <h4>💭 Angélica</h4>

  <p>Hacernos estas pruebas también es una forma de cuidarnos y demostrar cuánto nos importa nuestro bienestar.</p>`

},
{
  id: 6,
    type: "story",
    imageUrl: "images/erikaresultsfive.png",

    speaker: "Erika",

    dialog: `En esta ocasión, los resultados fueron no reactivos para las tres pruebas. Como medida preventiva, les recomendamos repetir la prueba una vez al año mientras continúen siendo sexualmente activos o antes si han tenido una situación de riesgo.`
  },
  {
  id: 7,
    type: "story",
    imageUrl: "images/erikainvitationsix.png",

    text: `Durante esta historia, Cristian y Angélica descubrieron que cuidar la salud sexual también es una forma de cuidar su relación y su futuro juntos.`,

    speaker: "Erika",

    dialog: `<p>Así como ellos, hoy tú también puedes dar este paso para cuidar de tu salud.</p>

<p>
    Acércate a tu centro de salud. Solicita la prueba. Conoce tu estado de salud.</li>
</p>

<h4>Centros disponibles</h4>

<ul>
    <li>CAPS Villas del Sol</li>
    <li>CAPS Petén</li>
    <li>CAPS Puerto Aventuras</li>
</ul>`
  },
]

const els = {
  pageImage: document.getElementById("page-image"),
  pageTitle: document.getElementById("page-title"),
  pageSubtitle: document.getElementById("page-subtitle"),
  pageText: document.getElementById("page-text"),
  speaker: document.getElementById("speaker"),
  dialogText: document.getElementById("dialog-text"),
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

/* ---------------------------
   1. GET PAGE DATA
----------------------------*/
function getPage() {
  return pages[currentPage];
}

/* ---------------------------
   2. RENDER CONTENT
----------------------------*/
function renderContent(page) {
  els.pageImage.src = page.imageUrl || "";

  els.pageTitle.textContent = page.title || "";
  els.pageSubtitle.textContent = page.subtitle || "";
  els.pageText.innerHTML = page.text || "";

  els.speaker.textContent = page.speaker || "";
  els.dialogText.innerHTML = page.dialog || "";
}

/* ---------------------------
   3. UPDATE LAYOUT
----------------------------*/
function updateLayout(page) {
  const isCover = page.type === "cover";

  els.book.classList.toggle("cover-layout", isCover);
  els.book.classList.toggle("story-layout", !isCover);

  els.coverOverlay.style.display = isCover ? "flex" : "none";

const hasStoryText = Boolean(page.text);
const hasDialog = Boolean(page.dialog);

els.storyBox.style.display =
    !isCover && hasStoryText ? "block" : "none";

els.dialogBox.style.display =
    hasDialog ? "block" : "none";

  els.prevBtn.style.visibility = isCover ? "hidden" : "visible";

  if (isCover) {
    els.coverTitle.textContent = page.title;
    els.coverSubtitle.textContent = page.subtitle;
    els.coverText.textContent = page.text;
  }
}

/* ---------------------------
   4. MAIN RENDER
----------------------------*/
function renderPage() {
  const page = getPage();

  renderContent(page);
  updateLayout(page);
}

/* ---------------------------
   5. NAVIGATION
----------------------------*/
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

/* ---------------------------
   6. EVENTS
----------------------------*/
els.prevBtn.addEventListener("click", () => changePage("prev"));
els.nextBtn.addEventListener("click", () => changePage("next"));

/* ---------------------------
   7. PRELOAD
----------------------------*/
function preloadImages() {
  pages.forEach(p => {
    const img = new Image();
    img.src = p.imageUrl;
  });
}

preloadImages();
renderPage();
