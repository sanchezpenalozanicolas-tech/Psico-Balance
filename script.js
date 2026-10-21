// BANCO DE FRASES MOTIVACIONALES DINÁMICAS
const generalPhrases = [
  "Llévala contigo. Recuerda que tu vida importa.",
  "No tienes que poder con todo.",
  "Siempre hay una razón para pedir ayuda.",
  "Tu historia continúa.",
  "Hablar también es valentía.",
  "Un pequeño símbolo, un gran mensaje."
];

window.addEventListener('DOMContentLoaded', () => {
  const randomQuote = generalPhrases[Math.floor(Math.random() * generalPhrases.length)];
  const introQuoteElem = document.getElementById('intro-dynamic-quote');
  const desahogoQuoteElem = document.getElementById('desahogo-dynamic-quote');

  if (introQuoteElem) introQuoteElem.textContent = `"${randomQuote}"`;
  if (desahogoQuoteElem) desahogoQuoteElem.textContent = `"${randomQuote}"`;
});

const enterAppBtn = document.getElementById('enter-app-btn');
const introSplash = document.getElementById('intro-splash');
const onboardingScreen = document.getElementById('onboarding-screen');

if (enterAppBtn) {
  enterAppBtn.addEventListener('click', () => {
    introSplash.classList.add('hidden');
    onboardingScreen.classList.remove('hidden');
  });
}

// BASE DE DATOS MÁSTER DE INVESTIGACIÓN Y GUÍAS CLÍNICAS CON VIDEOS ESPECÍFICOS
const wikiDatabase = {
  ansiedad: {
    title: "Guía Integral: Ansiedad, Causas, Control y Prevención",
    definition: "La ansiedad es una respuesta adaptativa de anticipación ante amenazas percibidas o incertidumbre. La amígdala cerebral activa el eje Hipotálamo-Pituitaria-Adrenal (HPA), inundando el torrente sanguíneo con cortisol y adrenalina.",
    whyItHappens: "Ocurre debido a la hipervigilancia del sistema nervioso ante situaciones evaluadas como peligrosas (reales o imaginarias), patrones de pensamiento catastrofistas y predisposición al estrés prolongado.",
    howToAvoidOrControl: "Practicar respiración diafragmática 4-7-8, realizar ejercicio aeróbico regular, reducir el consumo de cafeína y aplicar técnicas de reestructuración cognitiva para cuestionar pensamientos anticipatorios negativos.",
    whatToDoIfFrequent: "Si ocurre con alta frecuencia, es fundamental establecer rutinas fijas de desconexión, llevar un registro diario de pensamientos ansiosos y considerar apoyo terapéutico cognitivo-conductual especializado.",
    professionalView: "La Terapia Cognitivo-Conductual (TCC) demuestra que la ansiedad se alimenta de la evitación; enfrentarla de manera gradual reduce su intensidad a largo plazo.",
    shortTermControl: "Respiración diafragmática 4-7-8, inmersión facial con agua fría y anclaje grounding 5-4-3-2-1.",
    longTermControl: "Reestructuración cognitiva sistemática, terapia de exposición y hábitos de higiene del sueño.",
    youtubeEmbedUrl: "https://www.youtube.com/embed/iEdv9X8JbsA",
    videoTitle: "Ansiedad: qué es y cómo reconocerla",
    sourceName: "National Institute of Mental Health (NIMH) / Mayo Clinic",
    sourceUrl: "https://www.nimh.nih.gov/health/topics/anxiety-disorders"
  },
  estres: {
    title: "Guía Integral: Estrés Crónico, Causas y Regulación",
    definition: "El estrés crónico es un estado de tensión fisiológica y neuroendocrina persistente que ocurre cuando las demandas del entorno superan los recursos de afrontamiento del individuo, generando sobrecarga alostática.",
    whyItHappens: "Se origina por la exposición continua a presiones laborales, académicas o personales sin periodos suficientes de recuperación y descanso físico o mental.",
    howToAvoidOrControl: "Establecer límites asertivos, priorizar actividades mediante la Matriz de Eisenhower, programar micro-descansos de 5 minutos cada hora y mantener una adecuada separación entre obligaciones y tiempo personal.",
    whatToDoIfFrequent: "Si el estrés es constante, puede provocar fatiga adrenal y debilitar el sistema inmune. Se aconseja renegociar cargas de trabajo, delegar responsabilidades y buscar acompañamiento psicológico.",
    professionalView: "Hans Selye demostró que el estrés mantenido sin pausas agota los recursos biológicos del organismo, dañando estructuras del hipocampo asociadas a la memoria.",
    shortTermControl: "Micro-pausas somáticas, estiramientos cervicales y respiración profunda.",
    longTermControl: "Gestión eficiente del tiempo, asertividad y desconexión digital obligatoria.",
    youtubeEmbedUrl: "https://www.youtube.com/embed/ErwsvIqoRyI",
    videoTitle: "Estrés crónico y su impacto",
    sourceName: "American Psychological Association (APA) - Stress Health",
    sourceUrl: "https://www.apa.org/topics/stress"
  },
  ira: {
    title: "Guía Integral: Ira y Rabia, Gestión y Autorregulación",
    definition: "La ira es una emoción primaria de defensa movilizada ante transgresiones de límites personales o injusticias, generando alta descarga simpática, taquicardia y contracción muscular.",
    whyItHappens: "Pasa cuando interpretamos una situación como una ofensa directa, una amenaza a nuestros intereses o cuando acumulamos frustraciones no expresadas previamente.",
    howToAvoidOrControl: "Aplicar la técnica del 'Tiempo Fuera' (pausa de 10 minutos antes de responder), canalizar la energía mediante ejercicio físico intenso y practicar la comunicación asertiva.",
    whatToDoIfFrequent: "Si la ira es recurrente y explosiva, afecta gravemente las relaciones interpersonales y la salud cardiovascular. Es necesario entrenar la inteligencia emocional y la tolerancia a la frustración.",
    professionalView: "En psicología clínica, la ira suele encubrir emociones vulnerables subyacentes como la impotencia, el miedo o la decepción profunda.",
    shortTermControl: "Pausa táctica de 10 minutos, respiración lenta y cambio de temperatura corporal.",
    longTermControl: "Entrenamiento en asertividad y canalización energética deportiva.",
    youtubeEmbedUrl: "https://www.youtube.com/embed/XX6RqNgn7Q0",
    videoTitle: "Ira o rabia: cómo gestionarla",
    sourceName: "American Psychological Association (APA) - Anger Management",
    sourceUrl: "https://www.apa.org/topics/anger"
  },
  tristeza: {
    title: "Guía Integral: Tristeza y Duelo, Afrontamiento y Pérdidas",
    definition: "Respuesta afectiva caracterizada por la reducción temporal de energía ante pérdidas, decepciones o cambios no deseados. Su valor evolutivo es inducir la introspección y el procesamiento cognitivo.",
    whyItHappens: "Ocurre como respuesta natural del cerebro ante la pérdida de un vínculo afectivo, un rol importante, un sueño o una expectativa significativa.",
    howToAvoidOrControl: "No reprimir el llanto, validar el dolor emocional sin juicios severos, mantener contacto con redes de apoyo seguras y permitir la expresión sincera de los sentimientos.",
    whatToDoIfFrequent: "Si la tristeza se prolonga impidiendo la funcionalidad diaria, puede derivar en un proceso de duelo complicado o depresión. Se recomienda consulta psicológica profesional.",
    professionalView: "El proceso de duelo requiere fases de aceptación y reestructuración del proyecto vital; la represión sistemática incrementa la carga somática.",
    shortTermControl: "Validación emocional, baños de agua templada y contacto con seres queridos.",
    longTermControl: "Activación conductual gradual y reconstrucción narrativa de la pérdida.",
    youtubeEmbedUrl: "https://www.youtube.com/embed/5UJJA79vauo",
    videoTitle: "Tristeza y duelo: cómo afrontar una pérdida",
    sourceName: "Organización Mundial de la Salud (OMS) / Salud Mental",
    sourceUrl: "https://www.who.int/es/news-room/fact-sheets/detail/depression"
  },
  miedo: {
    title: "Guía Integral: Miedo y Fobias, Superación y Control",
    definition: "Mecanismo biofisiológico ancestral activado por la amígdala ante estímulos de peligro inmediato, preparando al cuerpo para la respuesta de lucha o huida.",
    whyItHappens: "Surge ante la percepción de una amenaza real o anticipada que supera los recursos de seguridad de la persona.",
    howToAvoidOrControl: "Exposición gradual y controlada al estímulo temido, respiración regulada y análisis objetivo de probabilidades reales de riesgo.",
    whatToDoIfFrequent: "Cuando el miedo limita la vida cotidiana convirtiéndose en fobia o pánico, la terapia de desensibilización sistemática es el tratamiento clínico más eficaz.",
    professionalView: "La evitación sistemática fortalece el circuito del miedo en el cerebro; enfrentarlo con acompañamiento reduce la respuesta fóbica.",
    shortTermControl: "Enfoque visual en puntos fijos y respiración diafragmática.",
    longTermControl: "Desensibilización sistemática y reestructuración de pensamientos atemorizantes.",
    youtubeEmbedUrl: "https://www.youtube.com/embed/LOn8old496U",
    videoTitle: "Miedo y fobias: superación",
    sourceName: "Mayo Clinic - Anxiety & Fear Research",
    sourceUrl: "https://www.mayoclinic.org/diseases-conditions/anxiety/symptoms-causes/syc-20350961"
  },
  frustracion: {
    title: "Guía Integral: Frustración, Tolerancia y Bloqueo",
    definition: "Estado emocional displacentero que surge al encontrar interferencias insalvables entre una conducta orientada a una meta y la consecución efectiva del objetivo deseado.",
    whyItHappens: "Pasa cuando las expectativas sobre un resultado no coinciden con la realidad objetiva o cuando se presentan imprevistos fuera de nuestro control.",
    howToAvoidOrControl: "Flexibilidad cognitiva, descomponer metas grandes en micro-pasos alcanzables y aceptar que el error forma parte natural del aprendizaje.",
    whatToDoIfFrequent: "La baja tolerancia a la frustración genera irritabilidad crónica y abandono prematuro de proyectos. Es clave entrenar la resiliencia y la paciencia activa.",
    professionalView: "La resiliencia y la tolerancia a la frustración se entrenan aceptando las variables incontrolables del entorno y enfocándose en la acción resolutiva.",
    shortTermControl: "Distanciamiento momentáneo de la tarea y reformulación de objetivos.",
    longTermControl: "Entrenamiento en resiliencia y desarrollo de flexibilidad mental.",
    youtubeEmbedUrl: "https://www.youtube.com/embed/RAGsgaxfiMk",
    videoTitle: "Frustración: cómo aprender a manejarla",
    sourceName: "Harvard Health Publishing - Emotional Resilience",
    sourceUrl: "https://www.health.harvard.edu/mind-and-mood/emotional-resilience"
  },
  nose: {
    title: "Guía de Autodescubrimiento: ¿Cómo identificar lo que sientes?",
    definition: "Incapacidad temporal para codificar y nombrar el estado emocional (alexitimia transitoria). Ocurre cuando el córtex prefrontal pierde comunicación eficiente con el sistema límbico.",
    whyItHappens: "Sucede por saturación de estímulos, desconexión corporal prolongada o el hábito cultural de reprimir las señales físicas de las emociones.",
    howToAvoidOrControl: "Realizar escaneos corporales diarios de 3 minutos, registrar sensaciones térmicas y musculares, y practicar la escritura en diarios de desahogo.",
    whatToDoIfFrequent: "Si persiste la incapacidad de conectar con las emociones, se recomienda psicoterapia centrada en la conciencia corporal y mindfulness.",
    professionalView: "La granularidad emocional es la habilidad de distinguir matices precisos en lo que sentimos, mejorando drásticamente la regulación psicológica.",
    shortTermControl: "Escaneo somatosensorial consciente y registro de temperatura corporal.",
    longTermControl: "Uso constante del diario de desahogo y desarrollo de vocabulario emocional.",
    youtubeEmbedUrl: "https://www.youtube.com/embed/KsThEXZS9wI",
    videoTitle: "¿Cómo identificar lo que sientes?",
    sourceName: "Psychology Today - Emotional Intelligence & Awareness",
    sourceUrl: "https://www.psychologytoday.com/us/basics/emotional-intelligence"
  }
};

const symptomMap = {
  nudo: { title: "Nudo o presión en la garganta", emotions: ["Tristeza Contenida", "Represión Afectiva"], action: "Toma sorbos lentos de agua tibia y realiza suave vocalización para soltar los músculos laríngeos." },
  pecho: { title: "Opresión en el pecho", emotions: ["Ansiedad Aguda", "Angustia"], action: "Realiza presión firme con la mano en el esternón y practica respiración diafragmática profunda." },
  taquicardia: { title: "Corazón acelerado / Taquicardia", emotions: ["Hiperalerta Simpática", "Estrés Agudo"], action: "Aplica exhalaciones prolongadas de 8 segundos para activar el freno vagal del ritmo cardíaco." },
  temblor: { title: "Temblor muscular o sudor frío", emotions: ["Sobrecarga de Adrenalina", "Miedo"], action: "Sacude voluntariamente extremidades por 30 segundos para liberar la carga motora retenida." },
  mandibula: { title: "Mandíbula apretada / Tensión en cuello", emotions: ["Ira Contenida", "Frustración"], action: "Masajea suavemente el músculo masetero y realiza aperturas bucales progresivas." },
  estomago: { title: "Malestar o vacío en estómago", emotions: ["Estrés Gastrointestinal", "Incertidumbre"], action: "Coloca una compresa tibia sobre el abdomen y disminuye el ritmo de estimulación visual." },
  hormigueo: { title: "Hormigueo en manos o piernas", emotions: ["Alcalosis por Hiperventilación"], action: "Haz respiraciones lentas dentro de tus manos ahuecadas para nivelar los niveles de CO2." },
  pesadez: { title: "Agotamiento muscular profundo", emotions: ["Sobrecarga Alostática", "Duelo / Depresión"], action: "Haz una pausa de desaceleración total reposando con piernas elevadas durante 15 minutos." },
  calor: { title: "Calor o bochorno en la cara", emotions: ["Sobreactivación Vasoactiva", "Vergüenza / Rabia"], action: "Aplica agua fresca en tus muñecas y frente para autorregular el sistema vasoactivo." }
};

const activitiesConfig = {
  1: {
    title: "1. Respiración 4-7-8 Guiada",
    desc: "Sigue la expansión y pausa del círculo para desarmar la respuesta de alerta.",
    shapeClass: "shape-circle",
    isThreePhase: true,
    steps: [
      "Inhala suavemente por la nariz contando 4 segundos mientras la figura crece.",
      "Sostén el aire en tu abdomen durante 7 segundos mientras el círculo resplandece.",
      "Exhala despacio por la boca en 8 segundos liberando toda la tensión."
    ]
  },
  2: {
    title: "2. Grounding 5-4-3-2-1 Visual",
    desc: "Enfoca tu atención en la rotación del cuadrado para conectar con el presente.",
    shapeClass: "shape-square",
    isThreePhase: false,
    textIn: "Enfoca",
    textOut: "Respira",
    steps: [
      "Observa el movimiento y nombra 5 objetos reales de tu entorno.",
      "Toca 4 texturas cercanas fijándote en la sensación térmica.",
      "Escucha 3 sonidos lejanos de tu habitación o entorno."
    ]
  },
  3: {
    title: "3. Pausa Fisiológica Corporal",
    desc: "Sigue el movimiento de la cápsula para descompresión muscular.",
    shapeClass: "shape-capsule",
    isThreePhase: false,
    textIn: "Estira",
    textOut: "Relaja",
    steps: [
      "Eleva tus hombros hacia las orejas mientras la cápsula se expande.",
      "Mantén la contracción durante 3 segundos acumulando la tensión.",
      "Suelta los hombros de golpe hacia abajo dejando ir el peso."
    ]
  },
  4: {
    title: "4. Reflejo Térmico y Sensorial",
    desc: "Ajusta la atención al rombo para desacelerar la agitación interna.",
    shapeClass: "shape-diamond",
    isThreePhase: false,
    textIn: "Frío",
    textOut: "Calma",
    steps: [
      "Sostén un objeto frío o aplica agua fresca en tus muñecas.",
      "Fija la vista en el centro del rombo mientras sientes el estímulo.",
      "Percibe cómo el sistema nervioso baja el volumen de la alerta."
    ]
  }
};

let selectedActivityId = 1;
let activityTimeout = null;
let activityRunning = false;

const activeTitle = document.getElementById('active-act-title');
const activeDesc = document.getElementById('active-act-desc');
const activeStepsList = document.getElementById('active-steps-list');
const interactiveShape = document.getElementById('interactive-shape');
const shapeText = document.getElementById('shape-text');
const startActBtn = document.getElementById('start-act-btn');
const stopActBtn = document.getElementById('stop-act-btn');
const sideCards = document.querySelectorAll('.side-act-card');

sideCards.forEach(card => {
  card.addEventListener('click', () => {
    sideCards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');

    selectedActivityId = card.getAttribute('data-act');
    const conf = activitiesConfig[selectedActivityId];

    activeTitle.textContent = conf.title;
    activeDesc.textContent = conf.desc;

    activeStepsList.innerHTML = conf.steps.map(s => `<li>${s}</li>`).join('');
    interactiveShape.className = conf.shapeClass;
    shapeText.textContent = "Listo";
    stopActivity();
  });
});

function runBreathingSequence() {
  if (!activityRunning) return;

  interactiveShape.className = "shape-circle inhale-state";
  shapeText.textContent = "Inhala (4s)";

  activityTimeout = setTimeout(() => {
    if (!activityRunning) return;

    interactiveShape.className = "shape-circle hold-state";
    shapeText.textContent = "Sostén (7s)";

    activityTimeout = setTimeout(() => {
      if (!activityRunning) return;

      interactiveShape.className = "shape-circle exhale-state";
      shapeText.textContent = "Exhala (8s)";

      activityTimeout = setTimeout(() => {
        if (activityRunning) {
          runBreathingSequence();
        }
      }, 8000);

    }, 7000);

  }, 4000);
}

function runStandardActivity() {
  if (!activityRunning) return;
  const conf = activitiesConfig[selectedActivityId];

  let expanding = true;
  interactiveShape.classList.add('expand');
  shapeText.textContent = conf.textIn;

  const cycle = () => {
    if (!activityRunning) return;
    if (expanding) {
      interactiveShape.classList.remove('expand');
      shapeText.textContent = conf.textOut;
      expanding = false;
    } else {
      interactiveShape.classList.add('expand');
      shapeText.textContent = conf.textIn;
      expanding = true;
    }
    activityTimeout = setTimeout(cycle, 3500);
  };

  activityTimeout = setTimeout(cycle, 3500);
}

function startActivity() {
  activityRunning = true;
  startActBtn.classList.add('hidden');
  stopActBtn.classList.remove('hidden');

  const conf = activitiesConfig[selectedActivityId];
  if (conf.isThreePhase) {
    runBreathingSequence();
  } else {
    runStandardActivity();
  }
}

function stopActivity() {
  activityRunning = false;
  clearTimeout(activityTimeout);
  interactiveShape.className = activitiesConfig[selectedActivityId].shapeClass;
  shapeText.textContent = "Listo";
  startActBtn.classList.remove('hidden');
  stopActBtn.classList.add('hidden');
}

startActBtn.addEventListener('click', startActivity);
stopActBtn.addEventListener('click', stopActivity);

// ==================== LÓGICA GENERAL ====================
let selectedMoodKey = 'Ansiedad';
let selectedSymptoms = new Set();

const dashboardScreen = document.getElementById('dashboard-screen');
const loginForm = document.getElementById('login-form');
const moodButtons = document.querySelectorAll('.mood-btn');
const welcomeText = document.getElementById('welcome-text');
const greetingHeading = document.getElementById('greeting-heading');
const moodStatusText = document.getElementById('mood-status-text');
const changeMoodBtn = document.getElementById('change-mood-btn');
const mainVideoGrid = document.getElementById('main-video-grid');

const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

function applyTheme(color) {
  document.documentElement.style.setProperty('--current-theme-color', color);
}

moodButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    moodButtons.forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    const color = btn.getAttribute('data-color');
    selectedMoodKey = btn.getAttribute('data-mood');
    btn.style.setProperty('--btn-color', color);
    applyTheme(color);
  });
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const userName = document.getElementById('user-name').value.trim();
  const userAge = document.getElementById('user-age').value;
  const userRange = document.getElementById('user-age-range').value;
  const ageText = userAge ? `${userAge} años` : (userRange || "Edad no especificada");

  welcomeText.textContent = `¡Hola, ${userName}! (${ageText})`;
  greetingHeading.textContent = `Bienvenido/a, ${userName}`;
  
  const displayMood = selectedMoodKey === 'NoSe' ? 'No sé exactamente qué siento' : selectedMoodKey;
  moodStatusText.textContent = `Estado seleccionado: ${displayMood}`;

  renderInternalVideos();

  onboardingScreen.classList.add('hidden');
  dashboardScreen.classList.remove('hidden');

  renderEmotionDetail('ansiedad');
  searchWiki('ansiedad');
});

changeMoodBtn.addEventListener('click', () => {
  dashboardScreen.classList.add('hidden');
  onboardingScreen.classList.remove('hidden');
  stopActivity();
});

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => c.classList.add('hidden'));
    btn.classList.add('active');
    document.getElementById(btn.getAttribute('data-tab')).classList.remove('hidden');
  });
});

// VIDEOTECA EN MI ESPACIO ACTUALIZADA CON LOS NUEVOS VIDEOS SOLICITADOS
function renderInternalVideos() {
  const videos = [
    { title: "8. Gestión de la ira e inteligencia emocional", id: "1Uyp0YNpH8c" },
    { title: "9. Manejo del estrés diario y tensión mental", id: "0noAwrWY78U" },
    { title: "10. Comprensión de la ansiedad y herramientas prácticas", id: "gGNa8djVBhY" }
  ];

  mainVideoGrid.innerHTML = '';
  videos.forEach(v => {
    const card = document.createElement('div');
    card.className = 'video-card-internal';
    card.innerHTML = `
      <h4>${v.title}</h4>
      <div class="video-responsive">
        <iframe src="https://www.youtube.com/embed/${v.id}" title="${v.title}" allowfullscreen></iframe>
      </div>
    `;
    mainVideoGrid.appendChild(card);
  });
}

// SÍNTOMAS SOMÁTICOS
const symptomBtns = document.querySelectorAll('.symptom-btn');
const analyzeBtn = document.getElementById('analyze-symptoms-btn');
const symptomResult = document.getElementById('symptom-result');
const emotionBadges = document.getElementById('emotion-badges');
const symptomSteps = document.getElementById('symptom-steps');
const symptomComboTitle = document.getElementById('symptom-combo-title');
const symptomNeuroText = document.getElementById('symptom-neuro-text');
const symptomCustomPlan = document.getElementById('symptom-custom-plan');

const symptomTargetCircle = document.getElementById('symptom-target-circle');
const startSymptomActBtn = document.getElementById('start-symptom-act-btn');
let symptomTimeout = null;
let symptomRunning = false;

symptomBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.getAttribute('data-symptom');
    if (selectedSymptoms.has(key)) {
      selectedSymptoms.delete(key);
      btn.classList.remove('selected');
    } else {
      selectedSymptoms.add(key);
      btn.classList.add('selected');
    }
  });
});

analyzeBtn.addEventListener('click', () => {
  if (selectedSymptoms.size === 0) {
    alert('Por favor selecciona al menos un síntoma.');
    return;
  }

  const keys = Array.from(selectedSymptoms);
  const detectedEmotions = new Set();
  symptomSteps.innerHTML = '';
  emotionBadges.innerHTML = '';

  keys.forEach(key => {
    const data = symptomMap[key];
    if (data) {
      data.emotions.forEach(e => detectedEmotions.add(e));
      const li = document.createElement('li');
      li.style.marginBottom = '8px';
      li.innerHTML = `<strong>${data.title}:</strong> ${data.action}`;
      symptomSteps.appendChild(li);
    }
  });

  detectedEmotions.forEach(emo => {
    const span = document.createElement('span');
    span.className = 'badge';
    span.textContent = emo;
    emotionBadges.appendChild(span);
  });

  let comboTitle = "";
  let neuroText = "";
  let planText = "";
  const count = keys.length;

  if (keys.includes('taquicardia') && keys.includes('pecho') && keys.includes('hormigueo')) {
    comboTitle = "Respuesta Aguda de Hiperventilación e Hiperalerta Cardiorrespiratoria";
    neuroText = "La combinación de aceleración cardíaca, opresión en el tórax y parestesias indica activación simpática con alteración del CO2.";
    planText = "Realiza 3 minutos de respiración lenta exhalando el doble de tiempo para restablecer la perfusión sanguínea.";
  } else if (keys.includes('mandibula') && keys.includes('estomago') && keys.includes('pesadez')) {
    comboTitle = "Síndrome de Tensión Somática Acumulada y Carga Alostática";
    neuroText = "Esta combinación demuestra inhibición emocional prolongada afectando el eje cerebro-intestino y la tensión muscular.";
    planText = "Combina termoterapia local en el abdomen con estiramientos suaves de mandíbula y desconexión digital.";
  } else if (count >= 4) {
    comboTitle = "Sobreexcitación Multisistémica del Sistema Nervioso Autónomo";
    neuroText = `Has seleccionado ${count} síntomas simultáneos, reflejando sobrecarga neuroendocrina generalizada.`;
    planText = "Colócate en reposo con piernas elevadas e inicia de inmediato el ejercicio somático guiado de respiración 4-7-8.";
  } else {
    comboTitle = "Reacción de Tensión y Estrés Moderado Combinado";
    neuroText = `La combinación de los ${count} síntomas refleja fluctuación en tu tono neurovegetativo.`;
    planText = "Alterna relajación muscular progresiva con sorbos de agua y practica ciclos de respiración lenta.";
  }

  symptomComboTitle.textContent = comboTitle;
  symptomNeuroText.textContent = neuroText;
  symptomCustomPlan.innerHTML = `<strong>Plan de Acción Integrado:</strong> ${planText}`;
  symptomResult.classList.remove('hidden');
});

function runSymptomBreathing() {
  if (!symptomRunning) return;

  symptomTargetCircle.style.transform = "scale(1.5)";
  symptomTargetCircle.style.background = "#0284c7";
  symptomTargetCircle.textContent = "Inhala (4s)";

  symptomTimeout = setTimeout(() => {
    if (!symptomRunning) return;

    symptomTargetCircle.style.transform = "scale(1.5)";
    symptomTargetCircle.style.background = "#14b8a6";
    symptomTargetCircle.textContent = "Sostén (7s)";

    symptomTimeout = setTimeout(() => {
      if (!symptomRunning) return;

      symptomTargetCircle.style.transform = "scale(1)";
      symptomTargetCircle.style.background = "#0d9488";
      symptomTargetCircle.textContent = "Exhala (8s)";

      symptomTimeout = setTimeout(() => {
        if (symptomRunning) runSymptomBreathing();
      }, 8000);

    }, 7000);

  }, 4000);
}

startSymptomActBtn.addEventListener('click', () => {
  if (symptomRunning) {
    symptomRunning = false;
    clearTimeout(symptomTimeout);
    symptomTargetCircle.style.transform = "scale(1)";
    symptomTargetCircle.style.background = "#14b8a6";
    symptomTargetCircle.textContent = "Siente el ritmo";
    startSymptomActBtn.textContent = "Iniciar Ejercicio Somático";
  } else {
    symptomRunning = true;
    startSymptomActBtn.textContent = "Detener Ejercicio";
    runSymptomBreathing();
  }
});

// DESAHOGO
const desahogoPrompts = [
  "¿Qué situación u ocurrencia del día de hoy te robó la paz o te generó incomodidad?",
  "Si pudieras decirle todo a esa persona o situación sin filtros ni consecuencias, ¿qué expresarías?",
  "¿Qué necesita tu cuerpo y tu mente en este preciso momento para sentirse en un lugar seguro?",
  "¿Qué pensamiento recurrente no deja de dar vueltas en tu cabeza últimamente?",
  "Escribe libremente tres cosas que te gustaría liberar o soltar hoy mismo."
];

const getPromptBtn = document.getElementById('get-prompt-btn');
const promptQuestionText = document.getElementById('prompt-question-text');
const desahogoText = document.getElementById('desahogo-text');
const saveDesahogoBtn = document.getElementById('save-desahogo-btn');
const clearDesahogoBtn = document.getElementById('clear-desahogo-btn');
const desahogoMsg = document.getElementById('desahogo-msg');

getPromptBtn.addEventListener('click', () => {
  const randomPrompt = desahogoPrompts[Math.floor(Math.random() * desahogoPrompts.length)];
  promptQuestionText.textContent = randomPrompt;
  promptQuestionText.classList.remove('hidden');
});

saveDesahogoBtn.addEventListener('click', () => {
  const content = desahogoText.value.trim();
  if (!content) {
    alert("Por favor escribe algo en el cuadro de desahogo antes de guardar.");
    return;
  }
  localStorage.setItem('psicobalance_desahogo', content);
  desahogoMsg.textContent = "Nota guardada de forma confidencial en tu navegador.";
  desahogoMsg.classList.remove('hidden');
  setTimeout(() => desahogoMsg.classList.add('hidden'), 4000);
});

clearDesahogoBtn.addEventListener('click', () => {
  if (confirm("¿Estás seguro/a de querer borrar tu escrito? Esta es una buena forma de simular soltar lo que sientes.")) {
    desahogoText.value = "";
    localStorage.removeItem('psicobalance_desahogo');
    desahogoMsg.textContent = "El espacio ha sido limpiado. Has liberado esta nota.";
    desahogoMsg.classList.remove('hidden');
    setTimeout(() => desahogoMsg.classList.add('hidden'), 4000);
  }
});

// WIKI BUSCADOR
const wikiInput = document.getElementById('wiki-search-input');
const wikiBtn = document.getElementById('wiki-search-btn');
const wikiResult = document.getElementById('wiki-result');
const subtopicBtns = document.querySelectorAll('.subtopic-btn');

function normalizeText(text) {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}

function searchWiki(query) {
  const cleanQuery = normalizeText(query);
  let foundKey = null;

  if (cleanQuery.includes("no se") || cleanQuery.includes("identificar") || cleanQuery.includes("siento") || cleanQuery.includes("confusion")) {
    foundKey = "nose";
  } else if (cleanQuery.includes("estres") || cleanQuery.includes("agobi")) {
    foundKey = "estres";
  } else if (cleanQuery.includes("ansied")) {
    foundKey = "ansiedad";
  } else if (cleanQuery.includes("ira") || cleanQuery.includes("rabia")) {
    foundKey = "ira";
  } else if (cleanQuery.includes("trist") || cleanQuery.includes("duelo")) {
    foundKey = "tristeza";
  } else if (cleanQuery.includes("miedo") || cleanQuery.includes("fobia")) {
    foundKey = "miedo";
  } else if (cleanQuery.includes("frustra") || cleanQuery.includes("bloqueo")) {
    foundKey = "frustracion";
  }

  if (foundKey && wikiDatabase[foundKey]) {
    const info = wikiDatabase[foundKey];
    wikiResult.innerHTML = `
      <h4>${info.title}</h4>
      <p style="margin-top: 10px;"><strong>Definición Biológica y Neurocientífica:</strong> ${info.definition}</p>
      
      <div style="margin-top: 18px; display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 15px;">
        <div style="background: #f8fafc; padding: 14px; border-radius: 10px; border-left: 5px solid #14b8a6;">
          <strong>Control Inmediato:</strong>
          <p style="font-size:0.88rem; margin-top:4px;">${info.shortTermControl}</p>
        </div>
        <div style="background: #f8fafc; padding: 14px; border-radius: 10px; border-left: 5px solid var(--current-theme-color);">
          <strong>Manejo a Largo Plazo:</strong>
          <p style="font-size:0.88rem; margin-top:4px;">${info.longTermControl}</p>
        </div>
      </div>

      <div class="source-citation">
        <strong>Fuente y Referencia Bibliográfica Consultada:</strong> 
        <a href="${info.sourceUrl}" target="_blank" rel="noopener noreferrer">${info.sourceName}</a>
      </div>

      <div style="margin-top: 20px;">
        <strong>Video Explicativo Específico del Tema:</strong>
        <div class="video-responsive" style="margin-top: 8px;">
          <iframe src="${info.youtubeEmbedUrl}" title="${info.videoTitle}" allowfullscreen></iframe>
        </div>
      </div>
    `;
  } else {
    wikiResult.innerHTML = `
      <h4>No se encontró un expediente exacto para "${query}"</h4>
      <p>Prueba seleccionando una de las categorías superiores.</p>
    `;
  }
}

wikiBtn.addEventListener('click', () => {
  if (wikiInput.value) searchWiki(wikiInput.value);
});

subtopicBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const query = btn.getAttribute('data-query');
    wikiInput.value = query;
    searchWiki(query);
  });
});

// GUÍA COMPLETA POR EMOCIÓN
const emoSelectBtns = document.querySelectorAll('.emo-select-btn');
const emotionDetailContainer = document.getElementById('emotion-detail-container');

function renderEmotionDetail(emotionKey) {
  const info = wikiDatabase[emotionKey] || wikiDatabase['ansiedad'];

  emotionDetailContainer.innerHTML = `
    <h3>${info.title}</h3>
    <p style="margin-top: 10px; font-size: 0.95rem;">${info.definition}</p>
    
    <div style="margin-top: 15px; padding: 16px; background: #f8fafc; border-radius: 10px; border-left: 5px solid #0284c7;">
      <strong>¿Por qué pasa esta emoción? (Causas y Origen):</strong>
      <p style="color: var(--text-main); font-size: 0.9rem; margin-top:4px; line-height:1.5;">${info.whyItHappens || info.professionalView}</p>
    </div>

    <div style="margin-top: 15px; padding: 16px; background: #f0fdfa; border-radius: 10px; border-left: 5px solid #14b8a6;">
      <strong>¿Cómo podemos evitarla o controlarla? (Estrategias Preventivas):</strong>
      <p style="color: var(--text-main); font-size: 0.9rem; margin-top:4px; line-height:1.5;">${info.howToAvoidOrControl || info.shortTermControl}</p>
    </div>

    <div style="margin-top: 15px; padding: 16px; background: #faf5ff; border-radius: 10px; border-left: 5px solid #7c3aed;">
      <strong>¿Qué hacer si pasa frecuentemente? (Protocolo de Afrontamiento):</strong>
      <p style="color: var(--text-main); font-size: 0.9rem; margin-top:4px; line-height:1.5;">${info.whatToDoIfFrequent || info.longTermControl}</p>
    </div>

    <div class="source-citation" style="margin-top: 20px;">
      <strong>Referencia Bibliográfica Oficial:</strong> 
      <a href="${info.sourceUrl}" target="_blank" rel="noopener noreferrer">${info.sourceName}</a>
    </div>
  `;
}

emoSelectBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    emoSelectBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderEmotionDetail(btn.getAttribute('data-emo'));
  });
});