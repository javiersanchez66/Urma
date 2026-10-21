// ===== SISTEMA DE IDIOMAS ES / EN – URMA =====
const traducciones = {
  // Navegación
  "nav-inicio": { es: "Inicio", en: "Home" },
  "nav-problemas": { es: "Problemas", en: "Problems" },
  "nav-consejos": { es: "Consejos", en: "Tips" },
  "nav-cantones": { es: "Cantones", en: "Cantons" },
  "nav-paquetes": { es: "Paquetes", en: "Packages" },

  // Header / Footer
  "footer1": { es: "Sitio informativo sobre la Provincia de El Oro – Ecuador", en: "Informative site about El Oro Province – Ecuador" },
  "footer2": { es: "Hecho para orientación de viajeros | 2026", en: "Made for traveler guidance | 2026" },
  "volver-inicio": { es: "Volver al inicio", en: "Back to home" },

  // Página Inicio
  "subtitulo-inicio": { es: "Guía turística interactiva de El Oro", en: "Interactive tourist guide of El Oro" },
  "hero-titulo": { es: "Bienvenido a El Oro con Urma", en: "Welcome to El Oro with Urma" },
  "hero-texto": {
    es: "Descubre los atractivos, los desafíos y los consejos prácticos para viajar por una de las provincias más productivas y diversas de Ecuador.",
    en: "Discover the attractions, challenges and practical tips for traveling through one of Ecuador's most productive and diverse provinces."
  },
  "btn-problemas": { es: "Ver problemas para turistas", en: "See problems for tourists" },
  "btn-consejos": { es: "Ver consejos de viaje", en: "See travel tips" },
  "btn-cantones": { es: "Explorar cantones", en: "Explore cantons" },
  "btn-paquetes": { es: "Ver paquetes turísticos", en: "See tour packages" },
  "que-encontrar": { es: "¿Qué encontrarás en este sitio?", en: "What will you find on this site?" },
  "tarjeta1-titulo": { es: "Problemas reales", en: "Real problems" },
  "tarjeta1-texto": { es: "Inseguridad, clima, infraestructura y otros desafíos que enfrentan los turistas.", en: "Insecurity, weather, infrastructure and other challenges faced by tourists." },
  "tarjeta1-link": { es: "Ir a Problemas →", en: "Go to Problems →" },
  "tarjeta2-titulo": { es: "Consejos prácticos", en: "Practical tips" },
  "tarjeta2-texto": { es: "Recomendaciones claras para viajar con más seguridad y tranquilidad.", en: "Clear recommendations to travel with more safety and peace of mind." },
  "tarjeta2-link": { es: "Ir a Consejos →", en: "Go to Tips →" },
  "tarjeta3-titulo": { es: "Los 14 cantones", en: "The 14 cantons" },
  "tarjeta3-texto": { es: "Conoce cada cantón de la provincia de forma interactiva.", en: "Get to know each canton of the province interactively." },
  "tarjeta3-link": { es: "Ver cantones →", en: "See cantons →" },
  "tarjeta4-titulo": { es: "Paquetes turísticos", en: "Tour packages" },
  "tarjeta4-texto": { es: "Planes económicos, intermedios y premium para disfrutar El Oro.", en: "Budget, mid-range and premium plans to enjoy El Oro." },
  "tarjeta4-link": { es: "Ver paquetes →", en: "See packages →" },
  "datos-titulo": { es: "Datos rápidos de El Oro", en: "Quick facts about El Oro" },
  "dato1": { es: "Capital: Machala", en: "Capital: Machala" },
  "dato2": { es: "Cantones: 14", en: "Cantons: 14" },
  "dato3": { es: "Población aproximada: más de 700.000 habitantes", en: "Approximate population: more than 700,000 inhabitants" },
  "dato4": { es: "Atractivos principales: Playas de Jambelí, Puerto Bolívar, Zaruma, Piñas, bosque petrificado de Puyango", en: "Main attractions: Jambelí beaches, Puerto Bolívar, Zaruma, Piñas, Puyango petrified forest" },

  // Problemas
  "subtitulo-problemas": { es: "Problemas que pueden enfrentar los turistas", en: "Problems that tourists may face" },
  "problemas-titulo": { es: "Principales problemas para turistas", en: "Main problems for tourists" },
  "problemas-intro": {
    es: "Antes de viajar es importante conocer los desafíos reales que se han reportado en los últimos años en la provincia de El Oro.",
    en: "Before traveling it is important to know the real challenges that have been reported in recent years in El Oro province."
  },
  "prob1-titulo": { es: "1. Inseguridad y delincuencia", en: "1. Insecurity and crime" },
  "prob1-resumen": { es: "Es el problema más reportado en zonas costeras.", en: "It is the most reported problem in coastal areas." },
  "prob1-detalle": {
    es: "En cantones como Machala, Puerto Bolívar, El Guabo, Bajo Alto y Huaquillas se han registrado episodios de violencia. Esto ha reducido la afluencia turística en playas y malecones, especialmente durante feriados.",
    en: "In cantons such as Machala, Puerto Bolívar, El Guabo, Bajo Alto and Huaquillas, violent episodes have been recorded. This has reduced tourist arrivals on beaches and boardwalks, especially during holidays."
  },
  "prob2-titulo": { es: "2. Percepción de riesgo", en: "2. Risk perception" },
  "prob2-resumen": { es: "La imagen de la provincia se ha visto afectada.", en: "The image of the province has been affected." },
  "prob2-detalle": {
    es: "Aunque no todos los cantones tienen el mismo nivel de riesgo, muchos turistas nacionales prefieren viajar a Perú (Máncora, Zorritos) o a otras provincias ecuatorianas por considerarlo más seguro.",
    en: "Although not all cantons have the same level of risk, many national tourists prefer to travel to Peru (Máncora, Zorritos) or other Ecuadorian provinces because they consider them safer."
  },
  "prob3-titulo": { es: "3. Condiciones climáticas y oleaje", en: "3. Weather conditions and waves" },
  "prob3-resumen": { es: "Alertas frecuentes en playas durante feriados.", en: "Frequent alerts on beaches during holidays." },
  "prob3-detalle": {
    es: "Es común que se emitan alertas por oleaje peligroso en playas como Jambelí. En temporada de lluvias (enero-abril) pueden ocurrir desbordamientos de ríos y cierres temporales de carreteras.",
    en: "It is common for dangerous wave alerts to be issued on beaches such as Jambelí. During the rainy season (January-April) river overflows and temporary road closures may occur."
  },
  "prob4-titulo": { es: "4. Infraestructura vial", en: "4. Road infrastructure" },
  "prob4-resumen": { es: "Algunas vías hacia la zona alta están en mal estado.", en: "Some roads to the highlands are in poor condition." },
  "prob4-detalle": {
    es: "Las carreteras hacia destinos de altura (Zaruma, Piñas, Portovelo) o hacia ciertas playas pueden presentar daños o trabajos de mantenimiento, lo que alarga los tiempos de viaje.",
    en: "Roads to highland destinations (Zaruma, Piñas, Portovelo) or to certain beaches may have damage or maintenance work, which lengthens travel times."
  },
  "prob5-titulo": { es: "5. Baja ocupación en zonas costeras", en: "5. Low occupancy in coastal areas" },
  "prob5-resumen": { es: "Hoteles y servicios reducidos en algunas playas.", en: "Hotels and services reduced on some beaches." },
  "prob5-detalle": {
    es: "En destinos como Bajo Alto, Jambelí y Puerto Bolívar la oferta turística se ha visto afectada. Algunos establecimientos cierran temporalmente o reducen servicios por falta de visitantes.",
    en: "In destinations such as Bajo Alto, Jambelí and Puerto Bolívar the tourist offer has been affected. Some establishments close temporarily or reduce services due to lack of visitors."
  },
  "prob6-titulo": { es: "6. Competencia con destinos fronterizos", en: "6. Competition with border destinations" },
  "prob6-resumen": { es: "Muchos prefieren cruzar a Perú.", en: "Many prefer to cross to Peru." },
  "prob6-detalle": {
    es: "La cercanía con Perú hace que muchos ecuatorianos elijan cruzar la frontera por precio y percepción de mayor seguridad, impactando directamente el turismo interno de El Oro.",
    en: "The proximity to Peru causes many Ecuadorians to choose to cross the border for price and perception of greater security, directly impacting El Oro's domestic tourism."
  },
  "ver-mas": { es: "Clic para más información ▼", en: "Click for more information ▼" },
  "aviso-titulo": { es: "Importante", en: "Important" },
  "aviso-texto": {
    es: "La situación de seguridad puede cambiar. Se recomienda consultar fuentes oficiales o medios locales antes de viajar, especialmente a zonas costeras.",
    en: "The security situation may change. It is recommended to check official sources or local media before traveling, especially to coastal areas."
  },

  // Consejos
  "subtitulo-consejos": { es: "Consejos prácticos para viajar con más seguridad", en: "Practical tips for safer travel" },
  "consejos-titulo": { es: "Consejos para viajar a El Oro", en: "Tips for traveling to El Oro" },
  "consejos-intro": {
    es: "Sigue estas recomendaciones para disfrutar tu viaje con mayor tranquilidad.",
    en: "Follow these recommendations to enjoy your trip with greater peace of mind."
  },
  "consejo1-titulo": { es: "Consulta la situación actual", en: "Check the current situation" },
  "consejo1-texto": { es: "Antes de salir, revisa noticias locales o fuentes oficiales sobre seguridad y estado de las carreteras.", en: "Before leaving, check local news or official sources about security and road conditions." },
  "consejo2-titulo": { es: "Prefiere desplazarte de día", en: "Prefer daytime travel" },
  "consejo2-texto": { es: "Evita circular por zonas poco transitadas durante la noche, especialmente en la zona costera.", en: "Avoid driving through low-traffic areas at night, especially in the coastal zone." },
  "consejo3-titulo": { es: "Presta atención al oleaje", en: "Pay attention to the waves" },
  "consejo3-texto": { es: "En playas como Jambelí sigue siempre las indicaciones de guardavidas y las alertas de Inocar.", en: "On beaches such as Jambelí always follow the indications of lifeguards and Inocar alerts." },
  "consejo4-titulo": { es: "Zona alta suele ser más tranquila", en: "The highlands are usually quieter" },
  "consejo4-texto": { es: "Los cantones de altura (Zaruma, Piñas, Portovelo, Atahualpa) generalmente reportan mejor percepción de seguridad.", en: "Highland cantons (Zaruma, Piñas, Portovelo, Atahualpa) generally report a better perception of security." },
  "consejo5-titulo": { es: "Usa transporte formal", en: "Use formal transport" },
  "consejo5-texto": { es: "Prefiere cooperativas conocidas o servicios de transporte oficial. Evita mostrar objetos de valor en la calle.", en: "Prefer known cooperatives or official transport services. Avoid displaying valuables on the street." },
  "consejo6-titulo": { es: "Informa tu itinerario", en: "Share your itinerary" },
  "consejo6-texto": { es: "Deja siempre a alguien de confianza saber a dónde vas y cuándo planeas regresar.", en: "Always let someone you trust know where you are going and when you plan to return." },
  "consejo7-titulo": { es: "Revisa el estado de las vías", en: "Check road conditions" },
  "consejo7-texto": { es: "Si viajas hacia la zona montañosa, confirma el estado de las carreteras (pueden haber deslizamientos en época de lluvia).", en: "If you travel to the mountainous area, confirm the condition of the roads (there may be landslides in the rainy season)." },
  "zona-titulo": { es: "¿Dónde hay más tranquilidad?", en: "Where is it quieter?" },
  "zona-texto": {
    es: "Según reportes de operadores turísticos, durante feriados los visitantes suelen preferir la parte alta de la provincia (Piñas, Zaruma, Portovelo y Atahualpa) por la percepción de mayor seguridad y la oferta de actividades culturales y de naturaleza.",
    en: "According to reports from tourism operators, during holidays visitors usually prefer the high part of the province (Piñas, Zaruma, Portovelo and Atahualpa) due to the perception of greater security and the offer of cultural and nature activities."
  },
  "btn-ver-cantones": { es: "Ver todos los cantones", en: "See all cantons" },

  // Cantones
  "subtitulo-cantones": { es: "Los 14 cantones de la provincia", en: "The 14 cantons of the province" },
  "cantones-titulo": { es: "Cantones de El Oro", en: "Cantons of El Oro" },
  "cantones-intro": {
    es: "Haz clic en cada cantón para ver información básica. Puedes filtrar por zona:",
    en: "Click on each canton to see basic information. You can filter by zone:"
  },
  "filtro-todos": { es: "Todos", en: "All" },
  "filtro-costa": { es: "Zona costera", en: "Coastal zone" },
  "filtro-altura": { es: "Zona alta", en: "Highland zone" },
  "cabecera-capital": { es: "Capital provincial", en: "Provincial capital" },
  "info-machala": { es: "Principal centro urbano y comercial. Puerto Bolívar es su puerto marítimo. Zona con mayor reportes de inseguridad en los últimos años.", en: "Main urban and commercial center. Puerto Bolívar is its seaport. Area with the highest reports of insecurity in recent years." },
  "info-pasaje": { es: "Importante cantón agrícola. Se encuentra entre Machala y la zona alta. Ha registrado episodios de violencia en feriados.", en: "Important agricultural canton. Located between Machala and the highlands. Has recorded violent episodes during holidays." },
  "info-santa-rosa": { es: "Uno de los cantones más grandes. Tiene aeropuerto y conexión con la frontera. Zona mixta de costa y valle.", en: "One of the largest cantons. It has an airport and connection to the border. Mixed coastal and valley area." },
  "info-huaquillas": { es: "Ciudad fronteriza con Perú. Alto movimiento comercial. Ha tenido reportes de inseguridad relacionados con su ubicación estratégica.", en: "Border city with Peru. High commercial activity. Has had insecurity reports related to its strategic location." },
  "info-el-guabo": { es: "Incluye la playa de Bajo Alto. Una de las zonas más afectadas por la baja de turismo debido a la inseguridad.", en: "Includes Bajo Alto beach. One of the areas most affected by the drop in tourism due to insecurity." },
  "info-arenillas": { es: "Cercano a la frontera. Zona agrícola y de paso. Ha reportado hechos violentos en años recientes.", en: "Close to the border. Agricultural and transit area. Has reported violent events in recent years." },
  "info-pinas": { es: "Conocida como “Orquidario del Ecuador”. Destino de la zona alta con buena percepción de seguridad y turismo cultural.", en: "Known as the “Orchidarium of Ecuador”. Highland destination with a good perception of security and cultural tourism." },
  "info-zaruma": { es: "Ciudad histórica y minera. Arquitectura colonial y turismo cultural. Una de las preferidas por visitantes que buscan tranquilidad.", en: "Historic and mining city. Colonial architecture and cultural tourism. One of the favorites of visitors looking for peace." },
  "info-portovelo": { es: "Histórica ciudad minera. Cercana a Zaruma. Destino de la zona alta con afluencia de turistas en feriados.", en: "Historic mining city. Close to Zaruma. Highland destination with tourist influx during holidays." },
  "info-atahualpa": { es: "Cantón de la zona alta. Paisajes montañosos y ambiente más tranquilo. Buena opción para turismo rural.", en: "Highland canton. Mountain landscapes and quieter environment. Good option for rural tourism." },
  "info-balsas": { es: "Pequeño cantón de la zona alta. Ambiente rural y tranquilo.", en: "Small highland canton. Rural and peaceful environment." },
  "info-marcabeli": { es: "Cantón de altura con economía agrícola. Poco flujo turístico masivo, ambiente sosegado.", en: "Highland canton with agricultural economy. Little mass tourist flow, calm environment." },
  "info-chilla": { es: "Uno de los cantones menos poblados. Zona montañosa y rural.", en: "One of the least populated cantons. Mountainous and rural area." },
  "info-las-lajas": { es: "Cantón pequeño de la zona alta. Ambiente rural y tranquilo.", en: "Small highland canton. Rural and peaceful environment." },

  // Paquetes
  "subtitulo-paquetes": { es: "Paquetes turísticos pensados para ti", en: "Tour packages designed for you" },
  "paquetes-titulo": { es: "Nuestros Paquetes Turísticos", en: "Our Tour Packages" },
  "paquetes-intro": {
    es: "Elige el plan que mejor se adapte a tu presupuesto y estilo de viaje. Todos incluyen orientación sobre seguridad y recomendaciones actualizadas.",
    en: "Choose the plan that best suits your budget and travel style. All include security guidance and up-to-date recommendations."
  },
  "etiqueta-economico": { es: "Económico", en: "Budget" },
  "etiqueta-intermedio": { es: "Intermedio", en: "Mid-range" },
  "etiqueta-premium": { es: "Premium", en: "Premium" },
  "mas-popular": { es: "Más popular", en: "Most popular" },
  "por-persona": { es: "/ persona", en: "/ person" },
  "paq1-nombre": { es: "Escapada Jambelí", en: "Jambelí Getaway" },
  "paq1-duracion": { es: "1 día", en: "1 day" },
  "paq1-i1": { es: "Transporte ida y vuelta desde Machala", en: "Round-trip transport from Machala" },
  "paq1-i2": { es: "Paseo en lancha a las islas de Jambelí", en: "Boat ride to the Jambelí islands" },
  "paq1-i3": { es: "Tiempo libre en playa", en: "Free time on the beach" },
  "paq1-i4": { es: "Almuerzo típico incluido", en: "Typical lunch included" },
  "paq1-i5": { es: "Guía local básico", en: "Basic local guide" },
  "paq1-i6": { es: "Recomendaciones de seguridad", en: "Safety recommendations" },
  "paq2-nombre": { es: "Costa & Sierra", en: "Coast & Highlands" },
  "paq2-duracion": { es: "2 días / 1 noche", en: "2 days / 1 night" },
  "paq2-i1": { es: "Día 1: Playas de Jambelí + Puerto Bolívar", en: "Day 1: Jambelí beaches + Puerto Bolívar" },
  "paq2-i2": { es: "Día 2: Zaruma + Portovelo (zona alta)", en: "Day 2: Zaruma + Portovelo (highlands)" },
  "paq2-i3": { es: "Hospedaje en hotel 3 estrellas", en: "3-star hotel accommodation" },
  "paq2-i4": { es: "Desayuno y 2 almuerzos", en: "Breakfast and 2 lunches" },
  "paq2-i5": { es: "Transporte privado entre destinos", en: "Private transport between destinations" },
  "paq2-i6": { es: "Guía bilingüe y asistencia 24h", en: "Bilingual guide and 24h assistance" },
  "paq2-i7": { es: "Entradas a atractivos principales", en: "Entrance fees to main attractions" },
  "paq3-nombre": { es: "Experiencia Orense Completa", en: "Complete Orense Experience" },
  "paq3-duracion": { es: "4 días / 3 noches", en: "4 days / 3 nights" },
  "paq3-i1": { es: "Machala + Puerto Bolívar + Jambelí", en: "Machala + Puerto Bolívar + Jambelí" },
  "paq3-i2": { es: "Zaruma, Portovelo y Piñas", en: "Zaruma, Portovelo and Piñas" },
  "paq3-i3": { es: "Bosque Petrificado de Puyango", en: "Puyango Petrified Forest" },
  "paq3-i4": { es: "Hoteles 4 estrellas / hosterías boutique", en: "4-star hotels / boutique lodges" },
  "paq3-i5": { es: "Todas las comidas incluidas", en: "All meals included" },
  "paq3-i6": { es: "Transporte privado + chofer", en: "Private transport + driver" },
  "paq3-i7": { es: "Guía profesional bilingüe", en: "Professional bilingual guide" },
  "paq3-i8": { es: "Seguro de viaje básico", en: "Basic travel insurance" },
  "paq3-i9": { es: "Actividades culturales y degustaciones", en: "Cultural activities and tastings" },
  "btn-reservar": { es: "Consultar disponibilidad", en: "Check availability" },
  "nota-paquetes-titulo": { es: "Nota importante", en: "Important note" },
  "nota-paquetes-texto": {
    es: "Los precios son referenciales y pueden variar según temporada y número de personas. Antes de reservar te damos información actualizada sobre seguridad en las zonas a visitar.",
    en: "Prices are referential and may vary according to season and number of people. Before booking we provide updated information on security in the areas to visit."
  }
};

let idiomaActual = localStorage.getItem("idioma") || "es";

function cambiarIdioma(nuevoIdioma) {
  idiomaActual = nuevoIdioma;
  localStorage.setItem("idioma", nuevoIdioma);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const clave = el.getAttribute("data-i18n");
    if (traducciones[clave] && traducciones[clave][nuevoIdioma]) {
      el.textContent = traducciones[clave][nuevoIdioma];
    }
  });

  document.querySelectorAll(".btn-idioma").forEach(btn => btn.classList.remove("activo"));
  const btnActivo = document.querySelector(`.btn-idioma[data-lang="${nuevoIdioma}"]`);
  if (btnActivo) btnActivo.classList.add("activo");

  document.documentElement.lang = nuevoIdioma;
}

document.addEventListener("DOMContentLoaded", () => {
  cambiarIdioma(idiomaActual);
});
