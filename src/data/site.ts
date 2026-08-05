export const site = {
  name: 'Mekon e Ingeniería S.A.S.',
  shortName: 'Mekon',
  url: 'https://grupomekon.com',
  phone: '+57 305 235 9506',
  phoneRaw: '573052359506',
  commercialEmail: 'lidercomercial@grupomekon.com',
  managementEmail: 'gerencia@grupomekon.com',
  whatsapp:
    'https://wa.me/573052359506?text=Buen%20d%C3%ADa%2C%20deseo%20recibir%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20Mekon%20e%20Ingenier%C3%ADa.',
};

export const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Empresa', href: '/empresa/' },
  { label: 'Servicios', href: '/servicios/' },
  { label: 'Integridad de activos', href: '/integridad-de-activos/' },
  { label: 'Proyectos', href: '/proyectos/' },
  { label: 'Referencias', href: '/referencias/' },
  { label: 'Contacto', href: '/contacto/' },
];

export const services = [
  {
    slug: 'montajes-mecanicos',
    number: '01',
    title: 'Montajes mecánicos y sistemas de proceso',
    short: 'Ejecución de equipos, tuberías, plataformas y sistemas asociados a procesos industriales.',
    image: '/images/services/service-01-process.jpg',
    summary:
      'Fabricación, instalación y mantenimiento de equipos para oil & gas, plantas industriales y procesos productivos.',
    items: [
      'Separadores de crudo y tanques pulmón',
      'Filtros micrónicos y separadores coalescentes',
      'Plataformas de recibo, despacho y mezclas',
      'Montajes electromecánicos',
      'Soldaduras ASME, API, TIG y MIG',
    ],
    gallery: [
      { src: '/images/services/service-01-process.jpg', alt: 'Montaje de sistema de proceso industrial' },
      { src: '/images/projects/piping-manifold.jpg', alt: 'Tubería y manifold industrial' },
      { src: '/images/gallery/industrial-piping-fabrication.jpeg', alt: 'Fabricación de tubería industrial' },
    ],
  },
  {
    slug: 'tanques-industriales',
    number: '02',
    title: 'Tanques industriales',
    short: 'Soluciones para almacenamiento, contención y adecuación de activos industriales.',
    image: '/images/services/service-02-tanks.jpg',
    summary:
      'Construcción, intervención y mantenimiento de tanques bajo criterios de integridad, operación y seguridad.',
    items: [
      'Tanques API 650 y API 620',
      'Escaleras helicoidales y estructuras de acceso',
      'Juntas de dilatación y conexiones de proceso',
      'Muros dique y sistemas de contención',
    ],
    gallery: [
      { src: '/images/gallery/tank-construction-aerial.jpeg', alt: 'Construcción de tanque industrial vista aérea' },
      { src: '/images/gallery/tank-roof-installation.jpeg', alt: 'Instalación de cubierta de tanque' },
      { src: '/images/gallery/storage-tanks-finished.jpeg', alt: 'Tanques de almacenamiento terminados' },
    ],
  },
  {
    slug: 'proteccion-contra-incendios',
    number: '03',
    title: 'Protección contra incendios',
    short: 'Sistemas hidráulicos de detección, bombeo y respuesta para instalaciones críticas.',
    image: '/images/services/service-03-fire.jpg',
    summary:
      'Diseño, suministro, montaje y mantenimiento de redes hidráulicas, equipos y sistemas de respuesta.',
    items: [
      'Redes hidráulicas y gabinetes',
      'Sistemas de bombeo y cuartos de máquinas',
      'Hidrantes, válvulas y dispositivos de control',
      'Pruebas de aceptación y equipos listados UL con aprobación FM',
    ],
    gallery: [
      { src: '/images/gallery/fire-pump-installation.jpeg', alt: 'Instalación de bomba contra incendios' },
      { src: '/images/gallery/fire-pump-control.jpeg', alt: 'Controlador de bomba contra incendios' },
      { src: '/images/gallery/fire-system-flow-test.jpeg', alt: 'Prueba de flujo del sistema contra incendios' },
    ],
  },
  {
    slug: 'infraestructura-civil',
    number: '04',
    title: 'Infraestructura civil',
    short: 'Obra civil para activos industriales, operación continua y expansión de instalaciones.',
    image: '/images/services/service-04-civil.jpg',
    summary:
      'Ejecución de obras complementarias con control técnico, coordinación de frentes y enfoque operativo.',
    items: [
      'Cimentaciones, pavimentos y placas industriales',
      'Movimientos de tierra y adecuación de terrenos',
      'Estructuras de concreto y obras de drenaje',
      'Adecuaciones locativas y mantenimiento de infraestructura',
    ],
    gallery: [
      { src: '/images/services/service-04-civil.jpg', alt: 'Infraestructura civil industrial' },
      { src: '/images/projects/tank-foundation.jpg', alt: 'Cimentación para tanque industrial' },
      { src: '/images/gallery/tank-construction-aerial.jpeg', alt: 'Preparación de base para tanque' },
    ],
  },
  {
    slug: 'obras-electricas-automatizacion',
    number: '05',
    title: 'Obras eléctricas y automatización',
    short: 'Energía, control e instrumentación para procesos industriales confiables.',
    image: '/images/services/service-05-electrical.jpg',
    summary:
      'Diseño e implementación de redes, tableros y sistemas de control para operación, seguridad y continuidad.',
    items: [
      'Redes MT/BT y subestaciones',
      'Tableros e instrumentación',
      'Puesta a tierra y sistemas de protección',
      'Control de procesos, CCTV y alumbrado',
    ],
    gallery: [
      { src: '/images/services/service-05-electrical.jpg', alt: 'Instalación eléctrica industrial' },
      { src: '/images/gallery/electrical-control-panel.jpeg', alt: 'Tablero de control industrial' },
      { src: '/images/projects/process-pumps.jpg', alt: 'Instrumentación para sistema de bombeo' },
    ],
  },
  {
    slug: 'tratamiento-de-fluidos',
    number: '06',
    title: 'Tratamiento de fluidos',
    short: 'Equipos y sistemas para separación, filtración y manejo de fluidos industriales.',
    image: '/images/services/service-06-fluids.jpg',
    summary:
      'Integración de soluciones de proceso para optimizar calidad, confiabilidad y desempeño operativo.',
    items: [
      'Separadores y filtros de proceso',
      'Unidades de tratamiento y acondicionamiento',
      'Skids, spools y conjuntos prefabricados',
      'Tuberías y accesorios para manejo de fluidos',
    ],
    gallery: [
      { src: '/images/services/service-06-fluids.jpg', alt: 'Sistema de tratamiento de fluidos' },
      { src: '/images/projects/process-pumps.jpg', alt: 'Bombas de proceso industrial' },
      { src: '/images/projects/loading-manifold-detail.jpg', alt: 'Detalle de manifold de transferencia' },
    ],
  },
  {
    slug: 'estructuras-y-fabricaciones',
    number: '07',
    title: 'Estructuras y fabricaciones',
    short: 'Fabricación metalmecánica para soportar procesos, equipos e infraestructura industrial.',
    image: '/images/services/service-07-structures.jpg',
    summary:
      'Desarrollo de estructuras, soportes, plataformas y elementos a medida según alcance técnico y condiciones de sitio.',
    items: [
      'Estructuras metálicas y plataformas',
      'Soportes para tubería y equipos',
      'Spools, manifolds y elementos especiales',
      'Recubrimientos y acabados industriales',
    ],
    gallery: [
      { src: '/images/services/service-07-structures.jpg', alt: 'Estructura metálica industrial' },
      { src: '/images/gallery/tank-roof-structure.jpeg', alt: 'Estructura de cubierta para tanque' },
      { src: '/images/gallery/tank-roof-installation.jpeg', alt: 'Montaje de estructura metálica' },
    ],
  },
  {
    slug: 'alquiler-de-equipos',
    number: '08',
    title: 'Alquiler de equipos',
    short: 'Disponibilidad de equipos y apoyo operativo para frentes de obra e intervención industrial.',
    image: '/images/services/service-08-rental.jpg',
    summary:
      'Suministro y movilización de equipos con acompañamiento para requerimientos específicos de ejecución.',
    items: [
      'Equipos para mantenimiento y montaje',
      'Herramientas especializadas',
      'Apoyo logístico para obra',
      'Movilización y asistencia técnica',
    ],
    gallery: [
      { src: '/images/services/service-08-rental.jpg', alt: 'Equipo de apoyo industrial' },
      { src: '/images/gallery/tank-transport.jpeg', alt: 'Movilización de equipo industrial' },
      { src: '/images/projects/tank-lifting.jpg', alt: 'Maniobra de izaje industrial' },
    ],
  },
  {
    slug: 'proteccion-catodica',
    number: '09',
    title: 'Protección catódica e integridad',
    short: 'Control de corrosión y monitoreo para extender la vida útil de activos metálicos.',
    image: '/images/integrity/integrity-hero-full-hd.jpg',
    summary:
      'Diseño, diagnóstico, instalación y seguimiento de sistemas de protección catódica e integridad de activos.',
    items: [
      'Sistemas ICCP y ánodos galvánicos',
      'Rectificadores, telemetría y monitoreo',
      'Inspección CIPS/DCVG y levantamientos de campo',
      'Preparación de superficie y recubrimientos',
    ],
    gallery: [
      { src: '/images/integrity/integrity-hero-full-hd.jpg', alt: 'Protección catódica de activos industriales' },
      { src: '/images/integrity/integrity-monitoring-full-hd.jpg', alt: 'Monitoreo de integridad de activo' },
      { src: '/images/integrity/integrity-coatings-full-hd.jpg', alt: 'Aplicación de recubrimiento industrial' },
    ],
  },
];

export const projects = [
  {
    title: 'Terminal de combustibles',
    category: 'Montajes y proceso',
    image: '/images/projects/loading-manifold-wide.jpg',
    alt: 'Infraestructura industrial para terminal de combustibles',
    text: 'Integración de manifolds, líneas de transferencia y soportes para operación de terminal.',
  },
  {
    title: 'Sistema contra incendios',
    category: 'Protección activa',
    image: '/images/projects/plant-aerial-hero.jpg',
    alt: 'Infraestructura para planta industrial',
    text: 'Ejecución coordinada de estructuras, equipos y adecuaciones de sitio.',
  },
  {
    title: 'Sistemas de bombeo y proceso',
    category: 'Mecánica y automatización',
    image: '/images/projects/process-pumps.jpg',
    alt: 'Sistema de bombeo industrial',
    text: 'Equipos, conexionado e instrumentación para condiciones operativas definidas.',
  },
  {
    title: 'Infraestructura para tanques',
    category: 'Obra civil',
    image: '/images/projects/tank-foundation.jpg',
    alt: 'Obra civil para tanque industrial',
    text: 'Cimentación, contención y obras complementarias para activos de almacenamiento.',
  },
  {
    title: 'Izaje y montaje de tanque',
    category: 'Montaje especializado',
    image: '/images/projects/tank-lifting.jpg',
    alt: 'Izaje y montaje de tanque industrial',
    text: 'Planeación de maniobras y soporte de montaje para equipos de gran formato.',
  },
  {
    title: 'Estructuras y tubería industrial',
    category: 'Metalmecánica',
    image: '/images/projects/industrial-structure.jpg',
    alt: 'Estructura industrial metálica',
    text: 'Fabricación y montaje de componentes para infraestructura industrial.',
  },
];

export const clients = [
  { name: 'Terpel', logo: '/images/clients/terpel.png' },
  { name: 'Gerdau Diaco', logo: '/images/clients/gerdau-diaco.png' },
  { name: 'Cerrejón', logo: '/images/clients/cerrejon.png' },
  { name: 'Copetrán', logo: '/images/clients/copetran.png' },
  { name: 'Conciviles', logo: '/images/clients/conciviles.png' },
  { name: 'Italcol', logo: '/images/clients/italcol.png' },
  { name: 'QMax', logo: '/images/clients/qmax.png' },
  { name: 'Primax', logo: '/images/clients/primax.png' },
  { name: 'Petromil', logo: '/images/clients/petromil.png' },
  { name: 'Procargo', logo: '/images/clients/procargo.png' },
  { name: 'Joapetrol', logo: '/images/clients/joapetrol.png' },
];

export const locations = [
  { city: 'Bucaramanga', address: 'Cra. 23 # 5-23', phone: '+57 305 235 9506', href: 'tel:+573052359506' },
  { city: 'Barranquilla', address: 'Metroparque, Calle 110 # 6-335, Bodega MA3' },
  { city: 'Cartagena', address: 'Cra. 56 # 2-54' },
  { city: 'Túbara', address: 'Calle 16 # 3A-36' },
  { city: 'Lima, Perú', address: 'Calle Los Zorzales 130, San Isidro', phone: '+51 992 204 190', href: 'tel:+51992204190' },
];
