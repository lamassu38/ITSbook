console.log('hello world 2');
const pages = [ 
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

  text: `Mientras Erika obtenía una pequeña muestra de sangre, Cristian comenzó a sentirse más tranquilo.

💭 Cristian

Sé que esto es lo correcto.

Queremos empezar esta nueva etapa con tranquilidad.

💭 Angélica

Hacernos estas pruebas también es una forma de cuidarnos y demostrar cuánto nos importa nuestro bienestar.`

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

const pageImage= document.getElementById("page-image")
const pageTitle = document.getElementById("page-title")
const pageSubtitle = document.getElementById("page-subtitle")
const storyBox = document.getElementById("story-box")
const pageText = document.getElementById("page-text")
const speaker = document.getElementById("speaker")
const dialogText = document.getElementById("dialog-text")
const dialogBox = document.getElementById("dialog-box")
const prevBtn = document.getElementById("prev-btn")
const nextBtn = document.getElementById("next-btn")
const book = document.getElementById("book")

let currentPage = 0

function renderPage() {

    const page = pages[currentPage]

    pageImage.src = page.imageUrl

    pageTitle.textContent = page.title || ""

    pageSubtitle.textContent = page.subtitle || ""

    pageText.textContent = page.text || ""


book.classList.toggle("cover-layout", page.type === "cover");
book.classList.toggle("story-layout", page.type === "story");    

dialogBox.style.display = page.dialog ? "block" : "none";

speaker.textContent = page.speaker || "";
dialogText.innerHTML = page.dialog || "";

storyBox.style.display = page.text ? "block" : "none";
}


prevBtn.addEventListener("click", () => {
    changePage("prev");
});

nextBtn.addEventListener("click", () => {
    changePage("next");
});

function goToPage(pageIndex) {

  currentPage = pageIndex
  renderPage()
}

function nextPage (){
if (currentPage < pages.length -1) {
   goToPage(currentPage + 1)
}
}

function previousPage (){
   if (currentPage > 0){
    goToPage(currentPage - 1)
   } 
}

function changePage(direction) {
  const bookEl = document.getElementById("book");

  let newIndex = currentPage;

  if (direction === "next" && currentPage < pages.length - 1) {
    newIndex = currentPage + 1;
  }

  if (direction === "prev" && currentPage > 0) {
    newIndex = currentPage - 1;
  }

  if (newIndex === currentPage) return;

  const exitClass = direction === "next" ? "slide-left" : "slide-right";
  const enterClass = direction === "next" ? "slide-right" : "slide-left";

  // 1. salida
  bookEl.classList.add(exitClass);

  requestAnimationFrame(() => {

    // 2. cambiar data
    currentPage = newIndex;
    renderPage();

    // 3. preparar entrada
    bookEl.classList.add(enterClass);

    requestAnimationFrame(() => {
      bookEl.classList.remove(exitClass);
    });

    setTimeout(() => {
      bookEl.classList.remove(enterClass);
    }, 350);
  });
}

renderPage()