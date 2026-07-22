export const site = {
  name: 'Mekon e Ingenieria S.A.S.',
  url: 'https://grupomekon.com',
  phone: '+57 318 282 1873',
  phoneHref: 'tel:+573182821873',
  commercialEmail: 'lidercomercial@grupomekon.com',
  managementEmail: 'gerencia@grupomekon.com',
  whatsapp: 'https://wa.me/573182821873?text=Buen%20dia.%20Quiero%20consultar%20un%20requerimiento%20tecnico%20con%20Mekon%20e%20Ingenieria.',
};

export const services = [
  { slug: 'montajes-mecanicos', title: 'Montajes mecanicos y sistemas de proceso', short: 'Ejecucion de equipos, tuberias, plataformas y sistemas asociados a procesos industriales.', image: '/images/services/service-01-process.jpg', summary: 'Fabricacion, instalacion y mantenimiento de equipos para oil & gas, plantas industriales y procesos productivos.', items: ['Separadores de crudo y tanques pulmon', 'Filtros micronicos y separadores coalescentes', 'Plataformas de recibo, despacho y mezclas', 'Montajes electromecanicos', 'Soldaduras ASME, API, TIG y MIG'] },
  { slug: 'tanques-industriales', title: 'Tanques industriales', short: 'Soluciones para almacenamiento, contencion y adecuacion de activos industriales.', image: '/images/services/service-02-tanks.jpg', summary: 'Construccion, intervencion y mantenimiento de tanques bajo criterios de integridad, operacion y seguridad.', items: ['Tanques API 650 y API 620', 'Escaleras helicoidales y plataformas', 'Juntas de dilatacion', 'Muros dique y sistemas de contencion'] },
  { slug: 'proteccion-contra-incendios', title: 'Proteccion contra incendios', short: 'Sistemas hidraulicos de deteccion, bombeo y respuesta para instalaciones criticas.', image: '/images/services/service-03-fire.jpg', summary: 'Diseno, suministro, montaje y mantenimiento de redes contra incendio y equipos de respuesta.', items: ['Redes hidraulicas y gabinetes', 'Cuartos de bombas y control', 'Pruebas de aceptacion y puesta en marcha', 'Equipos listados UL y aprobacion FM'] },
  { slug: 'infraestructura-civil', title: 'Infraestructura civil', short: 'Obra civil para activos industriales, operacion continua y ampliaciones de planta.', image: '/images/services/service-04-civil.jpg', summary: 'Ejecucion de obras complementarias con control tecnico de alcance, materiales y condiciones de sitio.', items: ['Movimientos de tierra', 'Cimentaciones para equipos y tanques', 'Pavimentos y estructuras de concreto', 'Adecuaciones y mantenimiento locativo'] },
  { slug: 'obras-electricas-automatizacion', title: 'Obras electricas y automatizacion', short: 'Energia, control e instrumentacion para procesos industriales confiables.', image: '/images/services/service-05-electrical.jpg', summary: 'Diseno e implementacion de redes, tableros y sistemas de control orientados a seguridad y disponibilidad.', items: ['Redes MT y BT', 'Subestaciones y puesta a tierra', 'Tableros e instrumentacion', 'Control de procesos, CCTV y alumbrado'] },
  { slug: 'tratamiento-de-fluidos', title: 'Tratamiento de fluidos', short: 'Sistemas para separacion, acondicionamiento y manejo tecnico de fluidos industriales.', image: '/images/services/service-06-fluids.jpg', summary: 'Integracion de equipos, tuberias y automatizacion para operaciones de manejo y tratamiento de fluidos.', items: ['Skids y sistemas de proceso', 'Filtracion y separacion', 'Integracion de bombas y tuberias', 'Soporte de operacion y mantenimiento'] },
  { slug: 'estructuras-y-fabricaciones', title: 'Estructuras y fabricaciones', short: 'Fabricacion metalmecanica para soportes, plataformas, tuberias y equipos especiales.', image: '/images/services/service-07-structures.jpg', summary: 'Desarrollo de soluciones metalmecanicas desde planos, suministro de materiales, fabricacion y montaje.', items: ['Estructuras metalicas', 'Plataformas y pasarelas', 'Spools y soporteria de tuberia', 'Recubrimientos y control de calidad'] },
  { slug: 'alquiler-de-equipos', title: 'Alquiler de equipos', short: 'Disponibilidad de equipos de apoyo para frentes operativos y actividades especializadas.', image: '/images/services/service-08-rental.jpg', summary: 'Alternativas de alquiler con soporte tecnico para responder a necesidades temporales de proyecto.', items: ['Equipos para manejo de fluidos', 'Soporte para mantenimiento', 'Movilizacion a sitio', 'Acompanamiento operativo'] },
  { slug: 'proteccion-catodica', title: 'Proteccion catodica e integridad', short: 'Control de corrosion y monitoreo para extender la vida util de activos metalicos.', image: '/images/integrity/integrity-hero-full-hd.jpg', summary: 'Diseno, diagnostico, instalacion y seguimiento de soluciones de proteccion catodica e integridad de activos.', items: ['Sistemas ICCP y anodos galvanicos', 'Rectificadores, telemetria y monitoreo', 'Inspeccion CIPS/DCVG y ultrasonido', 'Preparacion de superficie y recubrimientos'] },
] as const;

export const projects = [
  { title: 'Terminal de almacenamiento y transferencia', category: 'Sistemas de proceso', image: '/images/projects/loading-manifold-wide.jpg', text: 'Integracion de manifolds, lineas de transferencia y soportes para operacion de terminal.' },
  { title: 'Infraestructura para planta industrial', category: 'Montaje y obra civil', image: '/images/projects/plant-aerial-hero.jpg', text: 'Ejecucion coordinada de estructuras, equipos y adecuaciones de sitio.' },
  { title: 'Sistemas de bombeo y proceso', category: 'Mecanica y automatizacion', image: '/images/projects/process-pumps.jpg', text: 'Equipos, conexionado y control para continuidad de procesos industriales.' },
  { title: 'Cimentacion para tanque industrial', category: 'Infraestructura civil', image: '/images/projects/tank-foundation.jpg', text: 'Preparacion y construccion de bases para activos de almacenamiento.' },
  { title: 'Izaje y montaje de tanque', category: 'Montaje especializado', image: '/images/projects/tank-lifting.jpg', text: 'Planeacion de maniobras y soporte de montaje para equipos de gran formato.' },
  { title: 'Estructuras y tuberia industrial', category: 'Metalmecanica', image: '/images/projects/industrial-structure.jpg', text: 'Fabricacion y montaje de componentes estructurales y de proceso.' },
] as const;

export const clients = ['terpel', 'gerdau-diaco', 'cerrejon', 'copetran', 'conciviles', 'italcol', 'qmax', 'ismocol'];

export const locations = [
  { city: 'Bucaramanga', address: 'Cra. 23 # 5-23', phone: '(607) 634 7250', href: 'tel:+5776347250' },
  { city: 'Barranquilla', address: 'Metroparque, Calle 110 # 6-335, Bodega MA3' },
  { city: 'Cartagena', address: 'Cra. 56 # 2-54' },
  { city: 'Tubara', address: 'Calle 16 # 3A-36' },
  { city: 'Lima, Peru', address: 'Calle Los Zorzales 130, San Isidro', phone: '+51 992 204 190', href: 'tel:+51992204190' },
];
