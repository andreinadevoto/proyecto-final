//Seeleccion de los elementos necesarios a manipular del HTML
const nextButton = document.getElementById("submit-answer");
const divColor1 = document.getElementById("color-1");
const divColor2 = document.getElementById("color-2");
const textColor1 = document.getElementById("option-1");
const textColor2 = document.getElementById("option-2");
const radioOption1 = document.getElementById("radio-option-1");
const radioOption2 = document.getElementById("radio-option-2");
const numberOfStep = document.getElementById("step");
const numberOfQuestion = document.getElementById("number-of-question");
const answers = document.getElementById("answers");
const paletteSelection = document.getElementById("palette-selection");
const toneSelection = document.getElementById("tone-selection");
const seasonSelection = document.getElementById("season-selection");
const finalSeasonSelection = document.getElementById("final-season-selection");
const stepInfo = document.getElementById("step-info");
const characteristicButton = document.getElementById("characteristics-button");
const input = document.getElementById("image_uploads");
const uploadFormText = document.querySelector(".upload-text");
const preview = document.querySelector(".preview");

//Variables necesarias para la seleccion entre las 16 estaciones
let question = 0;
let counterColdPalette = 0;
let counterWarmPalette = 0;
let palette = "";
let counterLightTone = 0;
let counterDarkTone = 0;
let tone = "";
let season = "";
let counterClosenessPure = 0;
let counterClosenessDark = 0;
let closest = "";
let counterPure = 0;
let counterTint = 0;
let counterTone = 0;
let counterShade = 0;
let seasonTone = "";

//Array con las carcateristicas a renderizar en cada pregunta segun las opciones elegidas
const questions = [
  { question: 0, counter_1: "cold", counter_2: "warm" },
  {
    question: 1,
    color_1: "rgba(244,130,31,255)",
    color_2: "rgba(236,0,139,255)",
    text_1: "Paleta Cálida",
    text_2: "Paleta Fria",
    counter_1: "warm",
    counter_2: "cold",
  },
  {
    question: 2,
    color_1: "rgb(245,245,220)",
    color_2: "rgb(255,250,250)",
    text_1: "Paleta Cálida",
    text_2: "Paleta Fria",
    counter_1: "warm",
    counter_2: "cold",
  },
  {
    question: 3,
    color_1_cold: "rgba(235,235,235,255)",
    color_1_warm: "rgba(247,237,212,255)",
    color_2_cold: "rgba(131,127,126,255)",
    color_2_warm: "rgba(210,201,182,255)",
    text_1: "Tono Claro",
    text_2: "Tono Oscuro",
    counter_1: "light",
    counter_2: "dark",
  },
  {
    question: 4,
    color_1_cold: "rgba(183,171,149,255)",
    color_1_warm: "rgba(147,148,152,255)",
    color_2_cold: "rgba(238,231,221,255)",
    color_2_warm: "rgba(188,189,191,255)",
    text_1: "Tono Oscuro",
    text_2: "Tono Claro",
    counter_1: "dark",
    counter_2: "light",
  },
  {
    question: 5,
    color_1_cold: "rgb(248,249,250)",
    color_1_warm: "rgb(248,249,250)",
    color_2_cold: "rgb(33,37,41)",
    color_2_warm: "rgb(33,37,41)",
    text_1: "Tono Claro",
    text_2: "Tono Oscuro",
    counter_1: "light",
    counter_2: "dark",
  },
  {
    question: 6,
    color_1_spring: "rgba(192,215,45,255)",
    color_1_summer: "rgba(68,184,111,255)",
    color_1_autumn: "rgba(0,133,62,255)",
    color_1_winter: "rgba(6,153,73,255)",
    color_2_spring: "rgba(212,223,59,255)",
    color_2_summer: "rgba(103,162,72,255)",
    color_2_autumn: "rgba(1,159,106,255)",
    color_2_winter: "rgba(50,178,101,255)",
    text_1: "Tono Estación Pura",
    text_2: "Tono Estación Oscura",
    counter_1: "pure season",
    counter_2: "dark season",
  },
  {
    question: 7,
    color_1_spring: "rgba(237,7,141,255)",
    color_1_summer: "rgba(238,20,81,255)",
    color_1_autumn: "rgba(243,115,32,255)",
    color_1_winter: "rgba(237,15,98,255)",
    color_2_spring: "rgba(235,65,100,255)",
    color_2_summer: "rgba(212,82,146,255)",
    color_2_autumn: "rgba(237,58,149,255)",
    color_2_winter: "rgba(203,63,150,255)",
    text_1: "Tono Estación Pura",
    text_2: "Tono Estación Oscura",
    counter_1: "pure season",
    counter_2: "dark season",
  },
  {
    question: 8,
    color_1_spring: "rgba(192,215,45,255)",
    color_1_summer: "rgba(252,226,113,255)",
    color_1_autumn: "rgba(247,205,61,255)",
    color_1_winter: "rgba(251,233,0,255)",
    color_2_spring: "rgba(212,223,59,255)",
    color_2_summer: "rgba(241,225,49,255)",
    color_2_autumn: "rgba(227,229,57,255)",
    color_2_winter: "rgba(246,190,17,255)",
    text_1: "Tono Estación Pura",
    text_2: "Tono Estación Oscura",
    counter_1: "pure season",
    counter_2: "dark season",
  },
  {
    question: 9,
    //SIEMPRE pure_tint en la posicion 0,
    //SIEMPRE tone_shade en la posicion 1
    color_1_spring: ["rgba(255,241,0,255)", "rgba(240,218,133,255)"],
    color_1_summer: ["rgba(0,173,239,255)", "rgba(142,194,233,255)"],
    color_1_autumn: ["rgba(4,146,72,255)", "rgba(110,161,94,255)"],
    color_1_winter: ["rgba(125,84,162,255)", "rgba(135,121,170,255)"],
    color_2_spring: ["rgba(255,247,149,255)", "rgba(245,203,55,255)"],
    color_2_summer: ["rgba(201,234,241,255)", "rgba(32,120,191,255)"],
    color_2_autumn: ["rgba(170,201,108,255)", "rgba(23,95,47,255)"],
    color_2_winter: ["rgba(154,133,190,255)", "rgba(60,26,100,255)"],
    text_1: ["Tono Puro", "Tono Neutro"],
    text_2: ["Tono Claro", "Tono Oscuro"],
    counter_1: ["pure season", "tone season"],
    counter_2: ["tint season", "shade season"],
  },
  {
    question: 10,
    //SIEMPRE pure_tint en la posicion 0,
    //SIEMPRE tone_shade en la posicion 1
    color_1_spring: ["rgba(232,26,36,255)", "rgba(181,80,62,255)"],
    color_1_summer: ["rgba(238,25,53,255)", "rgba(236,24,62,255)"],
    color_1_autumn: ["rgba(229,28,36,255)", "rgba(238,52,39,255)"],
    color_1_winter: ["rgba(232,28,37,255)", "rgba(198,31,38,255)"],
    color_2_spring: ["rgba(218,81,49,255)", "rgba(222,55,37,255)"],
    color_2_summer: ["rgba(226,25,33,255)", "rgba(205,30,37,255)"],
    color_2_autumn: ["rgba(239,60,64,255)", "rgba(220,29,37,255)"],
    color_2_winter: ["rgba(236,30,68,255)", "rgba(237,27,36,255)"],
    text_1: ["Tono Puro", "Tono Neutro"],
    text_2: ["Tono Claro", "Tono Oscuro"],
    counter_1: ["pure season", "tone season"],
    counter_2: ["tint season", "shade season"],
  },
  {
    question: 11,
    //SIEMPRE pure_tint en la posicion 0,
    //SIEMPRE tone_shade en la posicion 1,
    color_1_spring: ["rgba(27,188,214,255)", "rgba(1,183,169,255)"],
    color_1_summer: ["rgba(116,198,184,255)", "rgba(188,214,205,255)"],
    color_1_autumn: ["rgba(35,188,185,255)", "rgba(94,190,189,255)"],
    color_1_winter: ["rgba(107,199,186,255)", "rgba(184,214,214,255)"],
    color_2_spring: ["rgba(0,139,168,255)", "rgba(0,149,143,255)"],
    color_2_summer: ["rgba(130,206,193,255)", "rgba(114,171,190,255)"],
    color_2_autumn: ["rgba(116,198,184,255)", "rgba(22,169,159,255)"],
    color_2_winter: ["rgba(192,228,226,255)", "rgba(106,189,195,255)"],
    text_1: ["Tono Puro", "Tono Neutro"],
    text_2: ["Tono Claro", "Tono Oscuro"],
    counter_1: ["pure season", "tone season"],
    counter_2: ["tint season", "shade season"],
  },
];

//Función para borrar los botones luego de que se realizo una seleccion
function clearRadioButtons() {
  radioOption1.checked = false;
  radioOption2.checked = false;
}

//Asigna al botón siguiente pregunta una función distinta según en que número de pregunta este
nextButton.onclick = (event) => {
  if (question <= 2) {
    event.preventDefault();
    displayQuestion0to2();
  } else if (question > 2 && question <= 5) {
    event.preventDefault();
    displayQuestion3to5();
  } else if (question > 5 && question <= 8) {
    event.preventDefault();
    displayQuestion6to8();
  } else if (question > 8 && question <= 11) {
    event.preventDefault();
    displayQuestion9to11();
  }
};

//Funcion para subir foto
input.addEventListener("change", updateImageDisplay);

//Funcion para controlar si el tipo de archivo subido es valido
const fileTypes = [
  "image/apng",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/pjpeg",
  "image/png",
  "image/svg+xml",
  "image/tiff",
  "image/webp",
  "image/x-icon",
];

function validFileType(file) {
  return fileTypes.includes(file.type);
}

//Funcion para convertir el tamano de los archivos subidos
function returnFileSize(number) {
  if (number < 1024) {
    return `${number} bytes`;
  } else if (number >= 1024 && number < 1048576) {
    return `${(number / 1024).toFixed(1)} KB`;
  } else if (number >= 1048576) {
    return `${(number / 1048576).toFixed(1)} MB`;
  }
}

function updateImageDisplay() {
  console.log("hubo un cambio");
  while (preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }

  const curFiles = input.files;
  if (curFiles.length === 0) {
    const para = document.createElement("p");
    para.textContent = "No files currently selected for upload";
    preview.appendChild(para);
  } else {
    for (const file of curFiles) {
      if (validFileType(file)) {
        const image = document.createElement("img");
        preview.appendChild(image);
        image.src = URL.createObjectURL(file);
        image.setAttribute("id", "image");
        uploadFormText.setAttribute("hidden", "hidden");
        input.setAttribute("hidden", "hidden");
        divColor1.removeAttribute("hidden");
        divColor2.removeAttribute("hidden");
        answers.style.setProperty("visibility", "visible");
        numberOfStep.textContent = "Paso: 1";
        stepInfo.textContent =
          "El primer paso es determinar la temperatura del color. Hay que determinar si somos de paleta fría o cálida. Es importante no elegir los colores según nuestra preferencia, sino prestar atención a cual resalta mejor nuestras carcterísticas.";
        numberOfQuestion.textContent = "Pregunta: " + (question + 1) + "/12";
      } else {
        const para = document.createElement("p");
        para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
        preview.appendChild(para);
      }
    }
  }
}

//Función para las preguntas de 0 a 2, determina si eres paleta fría o cálida
function displayQuestion0to2() {
  if (!radioOption1.checked && !radioOption2.checked) {
    console.log("ninguno seleccionado");
    alert("Debes selecionar una opción para continuar");
  } else {
    console.log("pregunta", question);

    if (radioOption1.checked && questions[question].counter_1 === "cold") {
      counterColdPalette++;
    } else if (
      radioOption1.checked &&
      questions[question].counter_1 === "warm"
    ) {
      counterWarmPalette++;
    } else if (
      radioOption2.checked &&
      questions[question].counter_2 === "cold"
    ) {
      counterColdPalette++;
    } else if (
      radioOption2.checked &&
      questions[question].counter_2 === "warm"
    ) {
      counterWarmPalette++;
    }

    if (question === 2 && counterColdPalette > counterWarmPalette) {
      console.log("Eres paleta fria!");
      palette = "cold";
      question++;
      clearRadioButtons();

      divColor1.style.setProperty(
        "background-color",
        questions[question].color_1_cold
      );
      divColor2.style.setProperty(
        "background-color",
        questions[question].color_2_cold
      );

      textColor1.textContent = questions[question].text_1;
      textColor2.textContent = questions[question].text_2;

      numberOfStep.textContent = "Paso: 2";
      stepInfo.textContent =
        "Una vez determinada la paleta, se deberá elegir que tonos son los que favorecen el rostro, si los tonos claros o los tonos oscuros.";
      numberOfQuestion.textContent = "Pregunta: " + (question + 1) + "/12";
      paletteSelection.textContent = "Paleta: Fría";

      return;
    } else if (question === 2 && counterColdPalette < counterWarmPalette) {
      console.log("Eres paleta calida!");
      palette = "warm";
      question++;
      clearRadioButtons();

      divColor1.style.setProperty(
        "background-color",
        questions[question].color_1_warm
      );
      divColor2.style.setProperty(
        "background-color",
        questions[question].color_2_warm
      );

      textColor1.textContent = questions[question].text_1;
      textColor2.textContent = questions[question].text_2;

      numberOfStep.textContent = "Paso: 2";
      stepInfo.textContent =
        "Una vez determinada la paleta, se deberá elegir que tonos son los que favorecen el rostro, si los tonos claros o los tonos oscuros.";
      numberOfQuestion.textContent = "Pregunta: " + (question + 1) + "/12";
      paletteSelection.textContent = "Paleta: Cálida";

      return;
    }
    question++;
    divColor1.style.setProperty(
      "background-color",
      questions[question].color_1
    );
    divColor2.style.setProperty(
      "background-color",
      questions[question].color_2
    );
    textColor1.textContent = questions[question].text_1;
    textColor2.textContent = questions[question].text_2;

    numberOfQuestion.textContent = "Pregunta: " + (question + 1) + "/12";

    clearRadioButtons();
  }
}

//Función para las preguntas de 3 a 5, determina si eres tono claro u oscuro, y con la combinación paleta y tono se determina una de las cuatro estaciones (primavera, verano, otoño, invierno)
function displayQuestion3to5() {
  if (!radioOption1.checked && !radioOption2.checked) {
    console.log("ninguno seleccionado");
    alert("Debes selecionar una opción para continuar");
  } else {
    console.log("pregunta", question);
    if (radioOption1.checked && questions[question].counter_1 === "light") {
      counterLightTone++;
    } else if (
      radioOption1.checked &&
      questions[question].counter_1 === "dark"
    ) {
      counterDarkTone++;
    } else if (
      radioOption2.checked &&
      questions[question].counter_2 === "light"
    ) {
      counterLightTone++;
    } else if (
      radioOption2.checked &&
      questions[question].counter_2 === "dark"
    ) {
      counterDarkTone++;
    }

    if (question === 5 && counterLightTone > counterDarkTone) {
      console.log("Eres tono claro!");
      tone = "light";
      question++;
      clearRadioButtons();

      if (palette === "cold") {
        console.log("Eres tono claro y estación verano");
        seasonSelection.textContent = "Estación: Verano";
        season = "summer";
        divColor1.style.setProperty(
          "background-color",
          questions[question].color_1_summer
        );
        divColor2.style.setProperty(
          "background-color",
          questions[question].color_2_summer
        );
      } else if (palette === "warm") {
        console.log("Eres tono claro y estación primavera");

        seasonSelection.textContent = "Estación: Primavera";
        season = "spring";
        divColor1.style.setProperty(
          "background-color",
          questions[question].color_1_spring
        );
        divColor2.style.setProperty(
          "background-color",
          questions[question].color_2_spring
        );
      }
      textColor1.textContent = questions[question].text_1;
      textColor2.textContent = questions[question].text_2;

      numberOfStep.textContent = "Paso: 3";
      stepInfo.textContent =
        "Al determinar la paleta y el tono se obtiene la estación principal a la que pertence. Luego para determinar cual de las cuatro subestaciones es la seleccionada se debe elegir que tono es mas favorecedor entre los tonos puros u oscuros.";
      numberOfQuestion.textContent = "Pregunta: " + (question + 1) + "/12";
      toneSelection.textContent = "Tono: Claro";

      return;
    } else if (question === 5 && counterLightTone < counterDarkTone) {
      console.log("Eres tono oscuro!");
      tone = "dark";
      question++;
      clearRadioButtons();

      if (palette === "cold") {
        console.log("Eres invierno");

        seasonSelection.textContent = "Estación: Invierno";
        season = "winter";
        divColor1.style.setProperty(
          "background-color",
          questions[question].color_1_winter
        );
        divColor2.style.setProperty(
          "background-color",
          questions[question].color_2_winter
        );
      } else if (palette === "warm") {
        console.log("Eres otoño");
        seasonSelection.textContent = "Estación: Otoño";
        season = "autumn";
        divColor1.style.setProperty(
          "background-color",
          questions[question].color_1_autumn
        );
        divColor2.style.setProperty(
          "background-color",
          questions[question].color_2_autumn
        );
      }

      textColor1.textContent = questions[question].text_1;
      textColor2.textContent = questions[question].text_2;

      numberOfStep.textContent = "Paso: 3";
      stepInfo.textContent =
        "Al determinar la paleta y el tono se obtiene la estación principal a la que pertence. Luego para determinar cual de las cuatro subestaciones es la seleccionada se debe elegir que tono es mas favorecedor entre los tonos puros u oscuros.";
      numberOfQuestion.textContent = "Pregunta: " + (question + 1) + "/12";

      return;
    }
    question++;
    if (palette === "cold") {
      divColor1.style.setProperty(
        "background-color",
        questions[question].color_1_cold
      );
      divColor2.style.setProperty(
        "background-color",
        questions[question].color_2_cold
      );
    } else if (palette === "warm") {
      divColor1.style.setProperty(
        "background-color",
        questions[question].color_1_warm
      );
      divColor2.style.setProperty(
        "background-color",
        questions[question].color_2_warm
      );
    }
    textColor1.textContent = questions[question].text_1;
    textColor2.textContent = questions[question].text_2;

    numberOfQuestion.textContent = "Pregunta: " + (question + 1) + "/12";

    clearRadioButtons();
  }
}

//Función para las preguntas de 6 a 8, con la estación seleccionada, se determina si la persona esta mas cerca del tono puro o el tono oscuro.
function displayQuestion6to8() {
  if (!radioOption1.checked && !radioOption2.checked) {
    console.log("ninguno seleccionado");
    alert("Debes selecionar una opción para continuar");
  } else {
    console.log("pregunta", question);
    if (
      radioOption1.checked &&
      questions[question].counter_1 === "pure season"
    ) {
      counterClosenessPure++;
    } else if (
      radioOption1.checked &&
      questions[question].counter_1 === "dark season"
    ) {
      counterClosenessDark++;
    } else if (
      radioOption2.checked &&
      questions[question].counter_2 === "pure season"
    ) {
      counterClosenessPure++;
    } else if (
      radioOption2.checked &&
      questions[question].counter_2 === "dark season"
    ) {
      counterClosenessDark++;
    }

    if (question === 8 && counterClosenessPure > counterClosenessDark) {
      console.log("Estas mas cerca del tono puro!");
      closest = "pure";
      question++;

      clearRadioButtons();

      if (season === "spring") {
        divColor1.style.setProperty(
          "background-color",
          questions[question].color_1_spring[0]
        );
        divColor2.style.setProperty(
          "background-color",
          questions[question].color_2_spring[0]
        );
      } else if (season === "summer") {
        divColor1.style.setProperty(
          "background-color",
          questions[question].color_1_summer[0]
        );
        divColor2.style.setProperty(
          "background-color",
          questions[question].color_2_summer[0]
        );
      } else if (season === "autumn") {
        divColor1.style.setProperty(
          "background-color",
          questions[question].color_1_autumn[0]
        );
        divColor2.style.setProperty(
          "background-color",
          questions[question].color_2_autumn[0]
        );
      }

      textColor1.textContent = questions[question].text_1[0];
      textColor2.textContent = questions[question].text_2[0];

      numberOfStep.textContent = "Paso: 4";
      stepInfo.textContent =
        "Por último, al determinar que se está más cerca del tono puro, se debe elegir cual es el tono más favorecedor, si el tono puro o el tono claro.";
      numberOfQuestion.textContent = "Pregunta: " + (question + 1) + "/12";

      return;
    } else if (question === 8 && counterClosenessPure < counterClosenessDark) {
      console.log("Estas mas cerca del tono oscuro!");
      closest = "dark";
      question++;

      clearRadioButtons();

      if (season === "spring") {
        divColor1.style.setProperty(
          "background-color",
          questions[question].color_1_spring[1]
        );
        divColor2.style.setProperty(
          "background-color",
          questions[question].color_2_spring[1]
        );
      } else if (season === "summer") {
        divColor1.style.setProperty(
          "background-color",
          questions[question].color_1_summer[1]
        );
        divColor2.style.setProperty(
          "background-color",
          questions[question].color_2_summer[1]
        );
      } else if (season === "autumn") {
        divColor1.style.setProperty(
          "background-color",
          questions[question].color_1_autumn[1]
        );
        divColor2.style.setProperty(
          "background-color",
          questions[question].color_2_autumn[1]
        );
      }

      textColor1.textContent = questions[question].text_1[1];
      textColor2.textContent = questions[question].text_2[1];

      numberOfStep.textContent = "Paso: 4";
      stepInfo.textContent =
        "Por último, al determinar que se está más cerca del tono oscuro, se debe elegir cual es el tono más favorecedor, si el tono neutro o el tono oscuro.";
      numberOfQuestion.textContent = "Pregunta: " + (question + 1) + "/12";

      return;
    }

    question++;
    if (season === "spring") {
      divColor1.style.setProperty(
        "background-color",
        questions[question].color_1_spring
      );
      divColor2.style.setProperty(
        "background-color",
        questions[question].color_2_spring
      );
    } else if (season === "summer") {
      divColor1.style.setProperty(
        "background-color",
        questions[question].color_1_summer
      );
      divColor2.style.setProperty(
        "background-color",
        questions[question].color_2_summer
      );
    } else if (season === "autumn") {
      divColor1.style.setProperty(
        "background-color",
        questions[question].color_1_autumn
      );
      divColor2.style.setProperty(
        "background-color",
        questions[question].color_2_autumn
      );
    } else if (season === "winter") {
      divColor1.style.setProperty(
        "background-color",
        questions[question].color_1_winter
      );
      divColor2.style.setProperty(
        "background-color",
        questions[question].color_2_winter
      );
    }
    textColor1.textContent = questions[question].text_1;
    textColor2.textContent = questions[question].text_2;

    numberOfQuestion.textContent = "Pregunta: " + (question + 1) + "/12";

    clearRadioButtons();
  }
}

//Función para las preguntas de 9 a 11, con la estación seleccionada, y determinado si se acerca más al puro o al oscuro, se compara puro/claro o neutro/oscuro. y finalmente se determina la variante correspondiente entre las 16 estaciones
function displayQuestion9to11() {
  if (!radioOption1.checked && !radioOption2.checked) {
    console.log("ninguno seleccionado");
    alert("Debes selecionar una opción para continuar");
  } else {
    console.log("pregunta", question);
    if (
      radioOption1.checked &&
      questions[question].counter_1[0] === "pure season" &&
      closest === "pure"
    ) {
      counterPure++;
      console.log("pure", counterPure);
    } else if (
      radioOption1.checked &&
      questions[question].counter_1[0] === "tint season" &&
      closest === "pure"
    ) {
      counterTint++;
      console.log("tint", counterTint);
    } else if (
      radioOption1.checked &&
      questions[question].counter_1[1] === "tone season" &&
      closest === "dark"
    ) {
      counterTone++;
      console.log("counterTone++");
      console.log("tone", counterTone);
    } else if (
      radioOption1.checked &&
      questions[question].counter_1[1] === "shade season" &&
      closest === "dark"
    ) {
      counterShade++;
      console.log("counterShade++");
      console.log("shade", counterShade);
    } else if (
      radioOption2.checked &&
      questions[question].counter_2[0] === "pure season" &&
      closest === "pure"
    ) {
      counterPure++;
      console.log("pure", counterPure);
    } else if (
      radioOption2.checked &&
      questions[question].counter_2[0] === "tint season" &&
      closest === "pure"
    ) {
      counterTint++;
      console.log(counterTint);
    } else if (
      radioOption2.checked &&
      questions[question].counter_2[1] === "tone season" &&
      closest === "dark"
    ) {
      counterTone++;
      console.log("counterTone++");
      console.log("tone", counterTone);
    } else if (
      radioOption2.checked &&
      questions[question].counter_2[1] === "shade season" &&
      closest === "dark"
    ) {
      counterShade++;
      console.log("counterShade++");
      console.log("shade", counterShade);
    }

    if (question === 11 && closest === "pure" && counterPure > counterTint) {
      console.log("Eres tono Puro");

      if (season === "spring") {
        console.log("Eres Primavera Puro");
        seasonTone = "springPure";
        finalSeasonSelection.textContent = "Subestación: Primavera Pura";
        nextButton.style.visibility = "hidden";
        characteristicButton.style.visibility = "visible";
        characteristicButton.setAttribute("href", "#spring-pure");
      } else if (season === "summer") {
        console.log("Eres Verano Puro");
        seasonTone = "summerPure";
        finalSeasonSelection.textContent = "Subestación: Verano Puro";
        nextButton.style.visibility = "hidden";
        characteristicButton.style.visibility = "visible";
        characteristicButton.setAttribute("href", "#summer-pure");
      } else if (season === "autumn") {
        console.log("Eres Otoño Puro");
        seasonTone = "autumnPure";
        finalSeasonSelection.textContent = "Subestación: Otoño Puro";
        nextButton.style.visibility = "hidden";
        characteristicButton.style.visibility = "visible";
        characteristicButton.setAttribute("href", "#autumn-pure");
      } else if (season === "winter") {
        console.log("Eres Invierno Puro");
        seasonTone = "winterPure";
        finalSeasonSelection.textContent = "Subestación: Invierno Puro";
        nextButton.style.visibility = "hidden";
        characteristicButton.style.visibility = "visible";
        characteristicButton.setAttribute("href", "#winter-pure");
      }
    } else if (
      question === 11 &&
      closest === "pure" &&
      counterPure < counterTint
    ) {
      console.log("Eres tono Claro");
      if (season === "spring") {
        console.log("Eres Primavera Claro");
        seasonTone = "springTint";
        finalSeasonSelection.textContent = "Subestación: Primavera Clara";
        nextButton.style.visibility = "hidden";
        characteristicButton.style.visibility = "visible";
        characteristicButton.setAttribute("href", "#spring-tint");
      } else if (season === "summer") {
        console.log("Eres Verano Claro");
        seasonTone = "summerTint";
        finalSeasonSelection.textContent = "Subestación: Verano Claro";
        nextButton.style.visibility = "hidden";
        characteristicButton.style.visibility = "visible";
        characteristicButton.setAttribute("href", "#summer-tint");
      } else if (season === "autumn") {
        console.log("Eres Otoño Claro");
        seasonTone = "autumnTint";
        finalSeasonSelection.textContent = "Subestación: Otoño Claro";
        nextButton.style.visibility = "hidden";
        characteristicButton.style.visibility = "visible";
        characteristicButton.setAttribute("href", "#autumn-tint");
      } else if (season === "winter") {
        console.log("Eres Invierno Claro");
        seasonTone = "winterTint";
        finalSeasonSelection.textContent = "Subestación: Invierno Claro";
        nextButton.style.visibility = "hidden";
        characteristicButton.style.visibility = "visible";
        characteristicButton.setAttribute("href", "#winter-tint");
      }
    } else if (
      question === 11 &&
      closest === "dark" &&
      counterTone > counterShade
    ) {
      console.log("Eres tono Neutro");
      if (season === "spring") {
        console.log("Eres Primavera Neutro");
        seasonTone = "springTone";
        finalSeasonSelection.textContent = "Subestación: Primavera Neutra";
        nextButton.style.visibility = "hidden";
        characteristicButton.style.visibility = "visible";
        characteristicButton.setAttribute("href", "#spring-tone");
      } else if (season === "summer") {
        console.log("Eres Verano Neutro");
        seasonTone = "summerTone";
        finalSeasonSelection.textContent = "Subestación: Verano Neutro";
        nextButton.style.visibility = "hidden";
        characteristicButton.style.visibility = "visible";
        characteristicButton.setAttribute("href", "#summer-tone");
      } else if (season === "autumn") {
        console.log("Eres Otoño Neutro");
        seasonTone = "autumnTone";
        finalSeasonSelection.textContent = "Subestación: Otoño Neutro";
        nextButton.style.visibility = "hidden";
        characteristicButton.style.visibility = "visible";
        characteristicButton.setAttribute("href", "#autumn-tone");
      } else if (season === "winter") {
        console.log("Eres Invierno Neutro");
        seasonTone = "winterTone";
        finalSeasonSelection.textContent = "Subestación: Invierno Neutro";
        nextButton.style.visibility = "hidden";
        characteristicButton.style.visibility = "visible";
        characteristicButton.setAttribute("href", "#winter-tone");
      }
    } else if (
      question === 11 &&
      closest === "dark" &&
      counterTone < counterShade
    ) {
      console.log("Eres tono Oscuro");
      if (season === "spring") {
        console.log("Eres Primavera Oscuro");
        seasonTone = "springShade";
        finalSeasonSelection.textContent = "Subestación: Primavera Oscura";
        nextButton.style.visibility = "hidden";
        characteristicButton.style.visibility = "visible";
        characteristicButton.setAttribute("href", "#spring-shade");
      } else if (season === "summer") {
        console.log("Eres Verano Oscuro");
        seasonTone = "summerShade";
        finalSeasonSelection.textContent = "Subestación: Verano Oscuro";
        nextButton.style.visibility = "hidden";
        characteristicButton.style.visibility = "visible";
        characteristicButton.setAttribute("href", "#summer-shade");
      } else if (season === "autumn") {
        console.log("Eres Otoño Oscuro");
        seasonTone = "autumnShade";
        finalSeasonSelection.textContent = "Subestación: Otoño Oscuro";
        nextButton.style.visibility = "hidden";
        characteristicButton.style.visibility = "visible";
        characteristicButton.setAttribute("href", "#autumn-shade");
      } else if (season === "winter") {
        console.log("Eres Invierno Oscuro");
        seasonTone = "winterShade";
        finalSeasonSelection.textContent = "Subestación: Invierno Oscuro";
        nextButton.style.visibility = "hidden";
        characteristicButton.style.visibility = "visible";
        characteristicButton.setAttribute("href", "#winter-shade");
      }
    }
    question++;

    if (closest === "pure") {
      if (season === "spring") {
        divColor1.style.setProperty(
          "background-color",
          questions[question].color_1_spring[0]
        );
        divColor2.style.setProperty(
          "background-color",
          questions[question].color_2_spring[0]
        );
      } else if (season === "summer") {
        divColor1.style.setProperty(
          "background-color",
          questions[question].color_1_summer[0]
        );
        divColor2.style.setProperty(
          "background-color",
          questions[question].color_2_summer[0]
        );
      } else if (season === "autumn") {
        divColor1.style.setProperty(
          "background-color",
          questions[question].color_1_autumn[0]
        );
        divColor2.style.setProperty(
          "background-color",
          questions[question].color_2_autumn[0]
        );
      } else if (season === "winter") {
        divColor1.style.setProperty(
          "background-color",
          questions[question].color_1_winter[0]
        );
        divColor2.style.setProperty(
          "background-color",
          questions[question].color_2_winter[0]
        );
      }
      textColor1.textContent = questions[question].text_1[0];
      textColor2.textContent = questions[question].text_2[0];

      numberOfQuestion.textContent = "Pregunta: " + (question + 1) + "/12";
    } else if (closest === "dark") {
      if (season === "spring") {
        divColor1.style.setProperty(
          "background-color",
          questions[question].color_1_spring[1]
        );
        divColor2.style.setProperty(
          "background-color",
          questions[question].color_2_spring[1]
        );
      } else if (season === "summer") {
        divColor1.style.setProperty(
          "background-color",
          questions[question].color_1_summer[1]
        );
        divColor2.style.setProperty(
          "background-color",
          questions[question].color_2_summer[1]
        );
      } else if (season === "autumn") {
        divColor1.style.setProperty(
          "background-color",
          questions[question].color_1_autumn[1]
        );
        divColor2.style.setProperty(
          "background-color",
          questions[question].color_2_autumn[1]
        );
      } else if (season === "winter") {
        divColor1.style.setProperty(
          "background-color",
          questions[question].color_1_winter[1]
        );
        divColor2.style.setProperty(
          "background-color",
          questions[question].color_2_winter[1]
        );
      }
      textColor1.textContent = questions[question].text_1[1];
      textColor2.textContent = questions[question].text_2[1];
      numberOfQuestion.textContent = "Pregunta: " + (question + 1) + "/12";
    }

    clearRadioButtons();
  }
}
