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
      { src: '/images/services/montajes-proceso-01.jpg', alt: 'Montaje de sistema de proceso industrial' },
      { src: '/images/services/montajes-proceso-02.jpg', alt: 'Tubería y manifold industrial' },
      { src: '/images/services/montajes-proceso-03.jpg', alt: 'Fabricación de tubería industrial' },
    ],
  },
  {
    slug: 'tanques-industriales',
    number: '02',
    title: 'Tanques industriales',
    short: 'Soluciones para almacenamiento, contención y adecuación de activos industriales.',
    summary:
      'Construcción, intervención y mantenimiento de tanques bajo criterios de integridad, operación y seguridad.',
    items: [
      'Tanques API 650 y API 620',
      'Escaleras helicoidales y estructuras de acceso',
      'Juntas de dilatación y conexiones de proceso',
      'Muros dique y sistemas de contención',
    ],
    gallery: [
      { src: '/images/services/tanques-01.jpg', alt: 'Construcción de tanque industrial vista aérea' },
      { src: '/images/services/tanques-02.jpg', alt: 'Instalación de tanque industrial' },
      { src: '/images/services/tanques-03.jpg', alt: 'Intervención de tanque de almacenamiento' },
    ],
  },
  {
    slug: 'proteccion-contra-incendios',
    number: '03',
    title: 'Protección contra incendios',
    short: 'Sistemas hidráulicos de detección, bombeo y respuesta para instalaciones críticas.',
    summary:
      'Diseño, suministro, montaje y mantenimiento de redes hidráulicas, equipos y sistemas de respuesta.',
    items: [
      'Redes hidráulicas y gabinetes',
      'Sistemas de bombeo y cuartos de máquinas',
      'Hidrantes, válvulas y dispositivos de control',
      'Pruebas de aceptación y equipos listados UL con aprobación FM',
    ],
    gallery: [
      { src: '/images/services/incendios-01.jpg', alt: 'Instalación de sistema contra incendios' },
      { src: '/images/services/incendios-02.jpg', alt: 'Bomba y tablero de control contra incendios' },
      { src: '/images/services/incendios-03.jpg', alt: 'Red hidráulica contra incendios' },
    ],
  },
  {
    slug: 'infraestructura-civil',
    number: '04',
    title: 'Infraestructura civil',
    short: 'Obra civil para activos industriales, operación continua y expansión de instalaciones.',
    summary:
      'Ejecución de obras complementarias con control técnico, coordinación de frentes y enfoque operativo.',
    items: [
      'Cimentaciones, pavimentos y placas industriales',
      'Movimientos de tierra y adecuación de terrenos',
      'Estructuras de concreto y obras de drenaje',
      'Adecuaciones locativas y mantenimiento de infraestructura',
    ],
    gallery: [
      { src: '/images/services/civil-01.jpg', alt: 'Cimentación para infraestructura industrial' },
      { src: '/images/services/civil-02.jpg', alt: 'Preparación de obra civil industrial' },
      { src: '/images/services/civil-03.jpg', alt: 'Ejecución de infraestructura industrial' },
    ],
  },
  {
    slug: 'obras-electricas-y-automatizacion',
    number: '05',
    title: 'Obras eléctricas y automatización',
    short: 'Energía, control e instrumentación para procesos industriales confiables.',
    summary:
      'Diseño e implementación de redes, tableros y sistemas de control para operación, seguridad y continuidad.',
    items: [
      'Redes MT/BT y subestaciones',
      'Tableros e instrumentación',
      'Puesta a tierra y sistemas de protección',
      'Control de procesos, CCTV y alumbrado',
    ],
    gallery: [
      { src: '/images/services/electrica-01.jpg', alt: 'Instalación eléctrica industrial' },
      { src: '/images/services/electrica-02.jpg', alt: 'Instrumentación y control industrial' },
      { src: '/images/services/electrica-03.jpg', alt: 'Tablero eléctrico industrial' },
    ],
  },
  {
    slug: 'tratamiento-de-fluidos',
    number: '06',
    title: 'Tratamiento de fluidos',
    short: 'Equipos y sistemas para separación, filtración y manejo de fluidos industriales.',
    summary:
      'Integración de soluciones de proceso para optimizar calidad, confiabilidad y desempeño operativo.',
    items: [
      'Separadores y filtros de proceso',
      'Unidades de tratamiento y acondicionamiento',
      'Skids, spools y conjuntos prefabricados',
      'Tuberías y accesorios para manejo de fluidos',
    ],
    gallery: [
      { src: '/images/services/fluidos-01.jpg', alt: 'Sistema de tratamiento de fluidos' },
      { src: '/images/services/fluidos-02.jpg', alt: 'Detalle de equipo de proceso' },
      { src: '/images/services/fluidos-03.jpg', alt: 'Instalación de tratamiento industrial' },
    ],
  },
  {
    slug: 'estructuras-y-fabricaciones',
    number: '07',
    title: 'Estructuras y fabricaciones',
    short: 'Fabricación metalmecánica para soportar procesos, equipos e infraestructura industrial.',
    summary:
      'Desarrollo de estructuras, soportes, plataformas y elementos a medida según alcance técnico y condiciones de sitio.',
    items: [
      'Estructuras metálicas y plataformas',
      'Soportes para tubería y equipos',
      'Spools, manifolds y elementos especiales',
      'Recubrimientos y acabados industriales',
    ],
    gallery: [
      { src: '/images/services/estructuras-01.jpg', alt: 'Fabricación de estructura metálica' },
      { src: '/images/services/estructuras-02.jpg', alt: 'Estructura y tubería industrial' },
      { src: '/images/services/estructuras-03.jpg', alt: 'Plataforma metálica industrial' },
    ],
  },
  {
    slug: 'alquiler-de-equipos',
    number: '08',
    title: 'Alquiler de equipos',
    short: 'Disponibilidad de equipos y apoyo operativo para frentes de obra e intervención industrial.',
    summary:
      'Suministro y movilización de equipos con acompañamiento para requerimientos específicos de ejecución.',
    items: [
      'Equipos para mantenimiento y montaje',
      'Herramientas especializadas',
      'Apoyo logístico para obra',
      'Movilización y asistencia técnica',
    ],
    gallery: [
      { src: '/images/services/equipos-01.jpg', alt: 'Equipos para operación industrial' },
      { src: '/images/services/equipos-02.jpg', alt: 'Equipo de apoyo para montaje' },
      { src: '/images/services/equipos-03.jpg', alt: 'Herramientas especializadas para obra' },
    ],
  },
  {
    slug: 'proteccion-catodica-e-integridad',
    number: '09',
    title: 'Protección catódica e integridad',
    short: 'Control de corrosión y monitoreo para extender la vida útil de activos metálicos.',
    summary:
      'Diseño, diagnóstico, instalación y seguimiento de sistemas de protección catódica e integridad de activos.',
    items: [
      'Sistemas ICCP y ánodos galvánicos',
      'Rectificadores, telemetría y monitoreo',
      'Inspección CIPS/DCVG y levantamientos de campo',
      'Preparación de superficie y recubrimientos',
    ],
    gallery: [
      { src: '/images/services/catodica-01.jpg', alt: 'Protección catódica en tanque industrial' },
      { src: '/images/services/catodica-02.jpg', alt: 'Aplicación de protección catódica' },
      { src: '/images/services/catodica-03.jpg', alt: 'Integridad de activos metálicos' },
    ],
  },
];

export const projects = [
  {
    title: 'Terminal de combustibles',
    category: 'Montajes y proceso',
    image: '/images/projects/proyecto-terminal.jpg',
    alt: 'Infraestructura industrial para terminal de combustibles',
    text: 'Integración de manifolds, líneas de transferencia y soportes para operación de terminal.',
  },
  {
    title: 'Sistema contra incendios',
    category: 'Protección activa',
    image: '/images/projects/proyecto-incendios.jpg',
    alt: 'Sistema contra incendios industrial instalado',
    text: 'Ejecución coordinada de bombeo, control y red hidráulica de respuesta.',
  },
  {
    title: 'Sistemas de bombeo y proceso',
    category: 'Mecánica y automatización',
    image: '/images/projects/proyecto-bombeo.jpg',
    alt: 'Sistema de bombeo industrial',
    text: 'Equipos, conexionado e instrumentación para condiciones operativas definidas.',
  },
  {
    title: 'Infraestructura para tanques',
    category: 'Obra civil',
    image: '/images/projects/proyecto-civil.jpg',
    alt: 'Obra civil para tanque industrial',
    text: 'Cimentación, contención y obras complementarias para activos de almacenamiento.',
  },
  {
    title: 'Redes de proceso',
    category: 'Tubería industrial',
    image: '/images/projects/proyecto-tuberias.jpg',
    alt: 'Red de tubería industrial',
    text: 'Planeación, fabricación e instalación de líneas de proceso y soportes.',
  },
  {
    title: 'Estructuras y tubería industrial',
    category: 'Metalmecánica',
    image: '/images/projects/proyecto-estructuras.jpg',
    alt: 'Estructura industrial metálica',
    text: 'Fabricación y montaje de componentes para infraestructura industrial.',
  },
];

export const clients = [
  { name: 'Terpel', logo: '/images/clients/terpel.svg' },
  { name: 'Gerdau Diaco', logo: '/images/clients/gerdau.svg' },
  { name: 'Cerrejón', logo: '/images/clients/cerrejon.svg' },
  { name: 'Copetrán', logo: '/images/clients/copetran.svg' },
  { name: 'Conciviles', logo: '/images/clients/conciviles.svg' },
  { name: 'Italcol', logo: '/images/clients/italcol.svg' },
  { name: 'QMax', logo: '/images/clients/qmax.svg' },
  { name: 'Primax', logo: '/images/clients/primax.svg' },
  { name: 'Petromil', logo: '/images/clients/petromil.svg' },
  { name: 'Procargo', logo: '/images/clients/procargo.svg' },
  { name: 'Joapetrol', logo: '/images/clients/joapetrol.svg' },
];

export const locations = [
  { city: 'Bucaramanga', address: 'Calle 19 # 16-57, Santander' },
  { city: 'Túbara', address: 'Atlántico, Colombia' },
  { city: 'Lima', address: 'Perú' },
];
