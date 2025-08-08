const planets = document.querySelectorAll('.planet');
const modal = document.getElementById('planet-info');
const modalTitle = document.getElementById('planet-title');
const modalImage = document.getElementById('modal-planet-image');
const modalDescription = document.getElementById('planet-description');
const closeBtn = document.getElementById('close-modal');

const planetData = {
  sun: {
    name: "Mi Esencia",
    image: "./assets/sun.png",
    description: "Soy Juan David, estudiante de Ingeniería de Sistemas de 20 años. Soy una persona honesta y amable, que siempre busca aprender algo nuevo cada día. Por otra parte, mi curiosidad me impulsa a seguir creciendo, por lo que me gusta pensar que mi creatividad puede aportar algo positivo, aunque sé que tengo mucho camino por recorrer."
  },
  mercury: {
    name: "Mi Proceso de Aprendizaje",
    image: "./assets/mercury.png",
    description: "Como Mercurio, el planeta más rápido en orbitar el Sol, tengo facilidad para adaptarme a nuevas tecnologías o metodologías. En el desarrollo de software, trato de mantenerme actualizado con las tendencias, pero entiendo que la tecnología avanza tan rápido que es imposible saberlo todo. Por tal, me esfuerzo por absorber conocimientos de manera constante."
  },
  venus: {
    name: "Mi Forma de Trabajar",
    image: "./assets/venus.png",
    description: "Como Venus combina belleza con complejidad, intento mezclar creatividad con funcionalidad en mis proyectos. Por otro lado, me gusta colaborar con otros y creo que el trabajo en equipo siempre produce mejores resultados. Busco maneras elegantes de hacer las cosas, pero valoro mucho la retroalimentación de mis compañeros para mejorar."
  },
  earth: {
    name: "Mi Vida Cotidiana",
    image: "./assets/earth.png",
    description: "La Tierra es hogar, y mi día a día incluye estudiar programación, hacer ejercicio en el gimnasio y escuchar música. Estas actividades me ayudan a mantener un equilibrio. El ejercicio me ayuda a despejar la mente, y la música me inspira."
  },
  moon: {
    name: "Mi Madre - Mi Apoyo",
    image: "./assets/moon.png", 
    description: "Como la Luna orbita la Tierra, mi madre ha sido fundamental en mi vida, siempre cerca para apoyarme. Cuando dudo de mis capacidades, ella siempre cree en mí, por lo que su apoyo incondicional me da la confianza para enfrentar cualquier desafío."
  },
  mars: {
    name: "Lo que me Motiva",
    image: "./assets/mars.png",
    description: "Marte representa la energía y la pasión. Siento mucha motivación por el desarrollo de software, especialmente cuando logro resolver un problema complejo. Me emociona explorar nuevos lenguajes y frameworks, aunque a veces resulta abrumador con tantas opciones. Trato de tomar iniciativa en proyectos grupales, pero siempre estoy abierto a aprender de las ideas de otros."
  },
  jupiter: {
    name: "Mis Sueños",
    image: "./assets/jupiter.png",
    description: "Como Júpiter es el planeta más grande del sistema solar, representa mis aspiraciones más amplias. Sueño con convertirme en un buen desarrollador. Quiero crear software que pueda ayudar a otras personas, aunque sé que llegar ahí requiere años de práctica y aprendizaje constante. Tal vez algún día pueda contribuir a proyectos que generen un impacto positivo."
  },
  saturn: {
    name: "Mis Valores",
    image: "./assets/saturn.png",
    description: "Los anillos de Saturno representan los valores que me mantienen en órbita. Siendo honesto, responsable y perseverante en todo lo que hago. Por tal, me esfuerzo por ser constante en mis estudios y mantener mi rutina de ejercicio."
  },
  uranus: {
    name: "Mi Creatividad",
    image: "./assets/uranus.png",
    description: "Como Urano rota de manera única e impredecible, me gusta abordar los problemas desde diferentes puntos de vista y buscar soluciones creativas. A veces esto me lleva por caminos más largos, pero siento que aprendo más en el proceso, lo que me ayuda a entender mejor los conceptos y las bases."
  },
  neptune: {
    name: "Lo que Quiero Aprender",
    image: "./assets/neptune.png",
    description: "Neptuno, distante y misterioso, simboliza todo lo que aún desconozco. Hay tanto que me falta por aprender: inteligencia artificial, machine learning, desarrollo móvil, ciberseguridad. Cada día descubro nuevas áreas que me interesan y me doy cuenta de lo mucho que aún no sé."
  }
};

planets.forEach(planet => {
  planet.addEventListener('click', () => {
    // Determinar qué planeta se clickeó
    let planetClass;
    
    if (planet.classList.contains('earth-container')) {
      planetClass = 'earth';
    } else if (planet.classList.contains('moon-container')) {
      planetClass = 'moon';
    } else {
      // Para los otros planetas, tomar la segunda clase
      planetClass = Array.from(planet.classList)[1];
    }

    if (planetClass && planetData[planetClass]) {
      showModal(planetClass);
    }
  });
});

function showModal(planetKey) {
  const planet = planetData[planetKey];
  if (planet) {
    modalTitle.textContent = planet.name;
    modalImage.src = planet.image;
    modalImage.alt = planet.name;
    modalDescription.textContent = planet.description;

    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }
}

function closeModal() {
  modal.classList.remove('show');
  document.body.style.overflow = ''; // Restore scrolling
}

// Close modal events
closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('show')) {
    closeModal();
  }
});