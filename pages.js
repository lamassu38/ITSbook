const pages = [
  {
    id: 0,
    type: "cover",
    title: { es: "UN FUTURO PROTEGIDO", en: "A SECURE FUTURE" },
    imageUrl: "images/cristianandangelacover.webp",
    imagePosition: "center 50%",
    imagePositionMobile: "center 50%",
    alt: { es: "Cristian y Angélica leen un folleto sobre pruebas rápidas de ITS junto a un módulo de salud en Parque Fundadores.", en: "Cristian and Angelica read a flyer about rapid STI tests next to a health tent in Parque Fundadores." },
    subtitle: { es: "La historia de Cristian y Angélica", en: "Cristian and Angelica's story" },
    text: { es: "Guía ilustrada sobre pruebas rápidas para VIH, hepatitis C y sífilis.", en: "Illustrated guide about rapid tests for HIV, Hepatitis C, and Syphilis." }
  },

  {
    id: 1,
    type: "story",
    imageUrl: "images/cristianandangelaone.webp",
    imagePosition: "center 50%",
    imagePositionMobile: "center",
    alt: { es: "Cristian y Angélica conversan con Erika frente al módulo de pruebas rápidas.", en: "Cristian and Angelica talk with Erika in front of the rapid testing tent." },
    narration: { es: `Esta es la historia de Cristian y Angélica. Mientras paseaban por el centro, vieron un módulo de salud con pruebas rápidas. Querían hablar de temas importantes antes de dar el siguiente paso en su relación.`, en: `This is Cristian and Angelica's story. While they were taking a walk near the town center, they saw a health tent. They wanted to talk about serious things before taking the next step in their relationship.` },
    bubbles: [
      {
        speaker: "Cristian",
        kind: "speech",
        text: { es: `Nunca me he hecho una prueba rápida. ¿Qué detectan?`, en: `I have never taken a quick test. What do these tests detect?` },
        position: "top-left",
        offset: { top: "0%", left: "20%" },
        offsetMobile: { top: "20%", left: "0%" },
        tail: "up-left",
        tailOffset: "30%"
      },
      {
        speaker: "Erika",
        kind: "speech",
        text: { es: `Ayudan a detectar VIH, sífilis y hepatitis C. Son gratuitas y confidenciales. Pasen al módulo y les explico cómo se realizan.`, en: `These tests detect HIV, Syphilis and Hepatitis C. These are free and confidential tests. I invite you to come inside the tent and I'm going to tell you more about the process.` },
        position: "bottom-right",
        offset: { bottom: "0%" },
        offsetMobile: { bottom: "0%", right: "5%" },
        tail: "down-right",
        tailOffset: "30%"
      }
    ]
  },

  {
    id: 2,
    type: "story",
    imageUrl: "images/erikaexplinationone.webp",
    imagePosition: "center 50%",
    imagePositionMobile: "center 50%",
    alt: { es: "Erika explica a Cristian y Angélica las diferentes causas de algunas infecciones de transmisión sexual.", en: "Erika explains to Cristian and Angelica the different causes of some sexually transmitted infections." },
    narration: { es: `Ya dentro del módulo, Erika les explicó qué infecciones pueden detectar las pruebas rápidas.`, en: `Inside the tent, Erika explained about the infections that can be detected.` },
    bubbles: [
      {
        speaker: "Erika",
        kind: "speech",
        text: { es: `No todas las ITS tienen la misma causa. El VIH y el VHC son virus; la sífilis es bacteriana.`, en: `Not all sexually transmitted infections (STI) have the same cause. HIV and Hepatitis C are viruses; Syphilis is bacterial.` },
        position: "top-right",
        offset: { top: "0%", right: "5%" },
        offsetMobile: { top: "18%", right: "0%" },
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
    alt: { es: "Angélica pregunta a Erika sobre las complicaciones de la hepatitis C y la sífilis.", en: "Angelica asks Erika about the complications of Hepatitis C and Syphilis." },
    narration: { es: `Al conocer un poco más sobre estas infecciones, Angélica quiso saber qué podía ocurrir si no se trataban.`, en: `After learning more about these infections, Angelica wanted to know what could happen if someone doesn't get treatment for these infections.` },
    bubbles: [
      {
        speaker: "Angélica",
        kind: "speech",
        text: { es: `Sé que el VIH sin tratamiento puede progresar a SIDA. ¿Qué ocurre con la hepatitis C y la sífilis?`, en: `I know HIV without treatment can cause AIDS. What can the consequences of Hepatitis C and Syphilis be?` },
        position: "top-left",
        offset: { top: "5%", left: "7%" },
        offsetMobile: { top: "15%", left: "0%" },
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
    alt: { es: "Erika explica las posibles complicaciones de la hepatitis C y la sífilis.", en: "Erika explains the possible complications of Hepatitis C and Syphilis." },
    narration: { es: `Erika les explicó por qué detectarlas y recibir atención a tiempo puede prevenir complicaciones en el futuro.`, en: `Erika explained to them that detecting and treating these infections on time can prevent complications in the future.` },
    bubbles: [
      {
        speaker: "Erika",
        kind: "speech",
        text: { es: `La hepatitis C puede causar cirrosis o cáncer de hígado. La sífilis puede afectar el cerebro, el sistema nervioso y el corazón.`, en: `Hepatitis C can cause cirrhosis or liver cancer. Syphilis can affect the brain, the nervous system and the heart.` },
        position: "top-right",
        offset: { top: "0%", right: "5%" },
        offsetMobile: { top: "23%", right: "0%" },
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
    alt: { es: "Cristian pregunta cuándo hacerse las pruebas y Erika explica que algunas infecciones pueden no causar síntomas.", en: "Cristian asks when to get tested and Erika explains that some infections may not cause symptoms." },
    narration: { es: `Después de escuchar las posibles complicaciones, Cristian tuvo otra duda: ¿qué pasa cuando una infección no causa síntomas?`, en: `After listening to the possible complications, Cristian had another doubt: What happens when an infection doesn't show any symptoms?` },
    bubbles: [
      {
        speaker: "Cristian",
        kind: "speech",
        text: { es: `Si me siento bien, ¿cómo sé cuándo debo hacerme las pruebas?`, en: `If I feel well, how do I know when I should get tested?` },
        position: "top-left",
        offset: { top: "2%", left: "0%" },
        offsetMobile: { top: "20%", left: "0%" },
        tail: "up-left",
        tailOffset: "28%"
      },
      {
        speaker: "Erika",
        kind: "speech",
        text: { es: `Algunas infecciones no causan síntomas. Si tuviste una posible exposición de riesgo, acércate al personal de salud para recibir orientación.`, en: `Some infections don't show any symptoms. If you had a possible risk exposure, you should talk to health center staff to find out when you should get tested.` },
        position: "bottom-right",
        offset: { bottom: "0%", right: "14%" },
        offsetMobile: { bottom: "8%", right: "0%" },
        tail: "down-right"
      }
    ]
  },

  {
    id: 6,
    type: "story",
    imageUrl: "images/angelahablandothree.webp",
    imagePosition: "center 40%",
    imagePositionMobile: "center 5%",
    alt: { es: "Cristian propone a Angélica hacerse las pruebas mientras la imagen muestra el proceso de una prueba rápida.", en: "Cristian proposes to Angelica that they get tested while the image shows the steps of a rapid test." },
    narration: { es: `Las pruebas rápidas requieren solo dos gotas de sangre y los resultados se leen ahí mismo. No necesitan orden médica ni acudir en ayunas.`, en: `The fast test requires only two drops of blood and the results can be read on site. Medical order and fasting aren't required.` },
    bubbles: [
      {
        speaker: "Cristian",
        kind: "speech",
        text: { es: `Angélica, ¿qué te parece si nos hacemos las pruebas?`, en: `Angelica, what do you think if we get tested now?` },
        position: "top-left",
        offset: { top: "0%", right: "25%" },
        offsetMobile: { top: "10%", left: "0%" },
        tail: "up-left",
        tailOffset: "20%"
      },
      {
        speaker: "Angélica",
        kind: "speech",
        text: { es: `Sí, hagámoslas.`, en: `Yes, we should do it.` },
        position: "top-right",
        offset: { top: "10%", right: "35%" },
        offsetMobile: { top: "22%", right: "28%" },
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
    alt: { es: "Erika obtiene una muestra de sangre del dedo de Cristian mientras Angélica llena el consentimiento informado.", en: "Erika takes a blood sample from Cristian's finger while Angelica fills out the informed consent form." },
    narration: { es: `Cristian y Angélica decidieron hacerse las pruebas. Mientras Angélica llenaba el consentimiento informado, Erika obtenía la muestra de sangre del dedo de Cristian.`, en: `Cristian and Angelica decided to get tested. While Angelica was filling the consent form, Erika was taking a blood sample from Cristian's finger.` },
    bubbles: [
      {
        speaker: "Cristian",
        kind: "thought",
        text: { es: `Queremos comenzar esta nueva etapa de nuestra relación con tranquilidad.`, en: `We want to initiate this new step in our relationship with peace of mind.` },
        position: "bottom-left",
        offset: { bottom: "0%", left: "0%" },
        offsetMobile: { bottom: "20%", left: "0%" },
        tailOffset: "35%"
      },
      {
        speaker: "Angélica",
        kind: "thought",
        text: { es: `Hacernos las pruebas también es una forma de cuidarnos.`, en: `Getting tested is another way to take care of ourselves.` },
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
    imagePosition: "center 50%",
    imagePositionMobile: "center 85%",
    alt: { es: "Erika entrega a Cristian y Angélica sus resultados no reactivos para VIH, VHC y sífilis.", en: "Erika hands Cristian and Angelica their non-reactive results for HIV, Hepatitis C and Syphilis." },
    narration: { es: `Transcurridos los 20 minutos, Erika interpretó las pruebas, les entregó sus resultados y explicó qué significaban.`, en: `After 20 minutes passed, Erika read and delivered the results. She explained to them what those results mean.` },
    bubbles: [
      {
        speaker: "Cristian",
        kind: "speech",
        text: { es: `¿Qué significa "no reactivo"?`, en: `What does "non-reactive" mean?` },
        position: "bottom-left",
        offset: { bottom: "5%", left: "0%" },
        offsetMobile: { bottom: "28%", left: "0%" },
        tail: "down-left",
        tailOffset: "20%"
      },
      {
        speaker: "Erika",
        kind: "speech",
        text: { es: `Significa que no se detectaron los marcadores de VIH, VHC ni sífilis.`, en: `It means the markers for HIV, Hepatitis C and Syphilis weren't detected.` },
        position: "bottom-right",
        offset: { bottom: "0%", right: "5%" },
        offsetMobile: { bottom: "12%", right: "0%" },
        tail: "down-right",
        tailOffset: "15%"
      }
    ]
  },

  {
    id: 9,
    type: "story",
    imageUrl: "images/angelica-pregunta-resultado-reactivo.webp",
    imagePosition: "center 40%",
    imagePositionMobile: "center 50%",
    alt: { es: "Angélica pregunta a Erika qué sucede cuando una prueba rápida resulta reactiva mientras Cristian escucha.", en: "Angelica asks Erika what happens when a rapid test comes back reactive while Cristian listens." },
    narration: { es: `Antes de despedirse, Angélica pensó en alguien que también podría necesitar una prueba y quiso aclarar una última duda.`, en: `Before leaving, Angelica thought about someone who might also need this type of test and wanted to resolve one more doubt.` },
    bubbles: [
      {
        speaker: "Angélica",
        kind: "speech",
        text: { es: `¿Y si una prueba sale reactiva, qué pasa después?`, en: `When a person's test result is reactive, what happens next?` },
        position: "top-left",
        offset: { top: "0%", left: "14%" },
        offsetMobile: { top: "15%", left: "5%" },
        tail: "up-right",
        tailOffset: "32%"
      }
    ]
  },

  {
    id: 10,
    type: "story",
    imageUrl: "images/erika-explica-resultado-reactivo.webp",
    imagePosition: "center 50%",
    imagePositionMobile: "center 50%",
    alt: { es: "Erika explica a Cristian y Angélica que un resultado reactivo debe confirmarse y requiere valoración médica.", en: "Erika explains to Cristian and Angelica that a reactive result must be confirmed and requires medical evaluation." },
    narration: { es: `Erika tomó un folleto y les mostró los pasos que deben seguirse cuando una prueba resulta reactiva.`, en: `Erika took a flyer and explained to them the steps that should be followed in case a test result is reactive.` },
    bubbles: [
      {
        speaker: "Erika",
        kind: "speech",
        text: { es: `Un resultado reactivo por prueba rápida no es un diagnóstico definitivo. Se necesita confirmación, valoración médica y, si es necesario, tratamiento.`, en: `A reactive result on the quick test needs confirmation, it is not a final diagnosis. Confirmation, a medical consult, and treatment could be needed.` },
        position: "bottom-right",
        offset: { bottom: "0%", right: "43%" },
        offsetMobile: { bottom: "18%", left: "2%" },
        tail: "right"
      }
    ]
  },

  {
    id: 11,
    type: "story",
    imageUrl: "images/erikainvitationsix-style-v1.webp",
    imagePosition: "center 15%",
    imagePositionMobile: "center 15%",
    alt: { es: "Erika mira al lector e invita a la comunidad a solicitar pruebas rápidas, mientras Cristian y Angélica se alejan juntos del módulo.", en: "Erika looks at the reader and invites the community to request rapid tests, while Cristian and Angelica walk away together from the tent." },
    narration: { es: `Cristian y Angélica comprendieron que detectar a tiempo y prevenir complicaciones también son formas de demostrarse afecto.`, en: `Cristian and Angelica understood that early detection can prevent future complications and are also a way to show affection.` },
    bubbles: [
      {
        speaker: "Erika",
        kind: "speech",
        paragraphs: {
          es: ["Tú también puedes acudir por tus pruebas rápidas a estos centros de salud: De lunes a viernes. 8:00 a.m. - 3:00 p.m."],
          en: ["You can also come get tested at any of our available health centers. Monday through Friday, 8:00 a.m. - 3:00 p.m."]
        },
        listTitle: { es: "Centros disponibles", en: "Available centers" },
        list: ["CAPS Villas del Sol", "CAPS Petén", "CAPS Puerto Aventuras", "CAPS Colosio"],
        position: "bottom-left",
        offset: { bottom: "0%", left: "3%" },
        tail: "right"
      }
    ]
  }
];
