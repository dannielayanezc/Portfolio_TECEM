/* =========================================================
   Portafolio · Daniela Yañez · main.js
   ========================================================= */

/* ---------- Ajustes rápidos ---------- */
const CORREO = 'dannielaycart@gmail.com';
const DIRECCION_TRABAJO = 1;              // 1 = las cápsulas avanzan a la derecha · -1 = a la izquierda
const DIRECCION_CINTA = -1;               // dirección de la cinta de disciplinas
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Datos ---------- */
// Cada proyecto: completa año, rol, modalidad, herramientas, reto, solución y enlace.
const PROYECTOS = [
  { id: 'estrellas-variables', nombre: 'Estrellas Variables', categoria: 'Interactivo · UX/UI', filtros: ['Interactivo', 'UX/UI'],
    descripcion: 'Visualización de datos interactiva sobre el cambio de brillo de las estrellas variables.',
    aurora: ['#0B1A55', '#5CCBF0', '#3B2A9A', '#2B59FF'],
    anio: '2026', rol: 'Diseño UX/UI y desarrollo web', modalidad: 'Individual', herramientas: 'HTML, CSS y JavaScript',
    imagen: 'assets/img/proyectos/estrellas-variables/cielo.jpg', cielo: 'assets/img/proyectos/estrellas-variables/cielo.jpg',
    logoPalabras: ['assets/img/proyectos/estrellas-variables/palabra-estrellas.svg', 'assets/img/proyectos/estrellas-variables/palabra-variables.svg'], logoAncho: 150,
    enlace: 'https://dannielayanezc.github.io/estrellas_variables_ycmfd/', enlaceTexto: 'Visitar sitio',
    contenido: {
      bloques: [
        { tipo: 'texto', titulo: 'El proyecto', parrafos: [
          'Este proyecto es una visualización de datos sobre un fenómeno en particular, las estrellas variables, que lleva la experiencia del usuario a una interacción informativa. Su propósito es facilitar la comprensión del fenómeno y poner su información al alcance de todas las personas interesadas.',
        ] },
        { tipo: 'flotante',
          astro: 'assets/img/proyectos/estrellas-variables/estrella.png',
          titulo: { src: 'assets/img/proyectos/estrellas-variables/titulo.svg', alt: 'Estrellas Variables' },
          concepto: { etiqueta: 'Concepto', nombre: 'Resplandor Efímero', parrafos: [
            'El concepto surge de la luminosidad cambiante de las estrellas variables: una estrella puede aumentar y disminuir su brillo a lo largo del tiempo.',
            'Resplandor representa el brillo y la intensidad de las estrellas, mientras que efímero enfatiza el carácter temporal de esos cambios.',
            'A través de la visualización interactiva, el proyecto busca hacer perceptible ese comportamiento y generar una reflexión sobre un universo en constante transformación. Así, Resplandor Efímero explora la belleza de los cambios de luminosidad de las estrellas variables como una expresión de la naturaleza cambiante del universo.',
          ] },
          cajas: [
            { titulo: 'El fenómeno', destacado: 'El cambio de brillo de las estrellas variables a través del tiempo.', parrafos: [
              'El proyecto se centra en observar cómo cambia la luminosidad de una estrella y cómo esos cambios pueden visualizarse y comprenderse mediante datos temporales.',
            ] },
            { titulo: 'La pregunta', destacado: '¿Qué revela el cambio de brillo de las estrellas variables sobre la manera en que observamos, interpretamos y comprendemos los fenómenos del universo?', parrafos: [
              'Revela que el universo está en constante transformación y que, al observar sus cambios a través del tiempo, podemos identificar patrones, interpretar su comportamiento y comprender mejor los procesos que ocurren en las estrellas.',
            ] },
            { titulo: 'Fuente de datos', parrafos: [
              'La fuente principal es la AAVSO (American Association of Variable Star Observers). Su International Database reúne observaciones de estrellas variables realizadas durante más de un siglo y se actualiza conforme se incorporan nuevas observaciones.',
              'Como fuente complementaria se consideró NASA/TESS, que monitorea objetos cuya luminosidad cambia, incluidas estrellas pulsantes y otros fenómenos variables.',
            ] },
            { titulo: 'Frase de construcción', parrafos: [
              'Mi proyecto explora las estrellas variables mediante la visualización interactiva de sus cambios de brillo, con el propósito de reflexionar sobre la naturaleza cambiante del universo.',
            ] },
            { titulo: 'La experiencia', parrafos: [
              'La visualización se recorre con las manos frente a la cámara. En la pantalla Tiempo, el movimiento avanza por una simulación del brillo de una estrella a lo largo de 5.37 días; en la pantalla Luminosidad, acercar o alejar la mano hace que su brillo aumente o disminuya.',
            ] },
          ] },
      ],
    } },
  { id: 'baygon', nombre: 'Baygon', categoria: 'Identidad y empaque', filtros: ['Empaque', 'Identidad'],
    descripcion: 'Rediseño integral de la identidad visual de Baygon y su aplicación en envases.',
    aurora: ['#8E1418', '#E12126', '#1F6B2A', '#2B59FF'],
    anio: '2025', rol: 'Rediseño de identidad y empaque', modalidad: 'Individual', herramientas: 'Illustrator y Photoshop',
    logoCapsula: 'assets/img/proyectos/baygon/baygon-palabra.svg', logoAncho: 150,
    contenido: {
      bloques: [
        { tipo: 'texto', titulo: 'El proyecto', parrafos: [
          'Este proyecto consistió en el rediseño integral de la identidad visual de Baygon, con el fin de fortalecer su posicionamiento como marca líder en el control de plagas domésticas. El objetivo fue modernizar su imagen y reforzar sus valores de eficacia, innovación y protección.',
          'Se desarrollaron los elementos centrales de la identidad —logotipo, paleta cromática, tipografía y estilo gráfico— y su aplicación en envases, manteniendo el reconocimiento de la marca y adaptándola a un contexto visual contemporáneo.',
        ] },
        { tipo: 'logo', src: 'assets/img/proyectos/baygon/baygon-logo.svg', alt: 'Logotipo rediseñado de Baygon', titulo: 'Rediseño de logo', glow: 'rgba(225, 33, 38, .75)',
          tipos: [{ src: 'assets/img/proyectos/baygon/tipografia-1.svg', w: 169.697, h: 8.509, alt: 'Muestra de la primera tipografía del logotipo' }, { src: 'assets/img/proyectos/baygon/tipografia-2.svg', w: 87.486, h: 8.755, alt: 'Muestra de la segunda tipografía del logotipo' }],
          parrafos: [
          'La elección de utilizar el logotipo de Baygon en caja alta busca reforzar su carácter contemporáneo, sólido y profesional. El uso exclusivo de mayúsculas aporta firmeza y uniformidad, y transmite modernidad, confianza y autoridad, en concordancia con la promesa de eficacia y protección de la marca.',
          'La composición se desarrolló a partir de dos tipografías distintas, que después fueron intervenidas para construir una identidad visual que proyecta solidez, seguridad y una imagen renovada, sin perder la esencia reconocible de Baygon.',
        ] },
        { tipo: 'texto', titulo: 'Paleta cromática', parrafos: [
          'La paleta cromática conserva los colores históricos de Baygon, lo que refuerza su reconocimiento y su continuidad visual. El rojo se mantiene como distintivo del logotipo, asociado con energía, alerta y acción inmediata, mientras que los verdes tradicionales de los empaques se refinan para preservar su familiaridad y transmitir frescura y protección del entorno doméstico.',
          'El negro se incorpora en la línea Max para comunicar mayor potencia, rendimiento y una imagen premium. Por su parte, el azul oscuro se reserva para productos como los espirales, y se vincula con la noche, el descanso y la tranquilidad que representa la protección continua.',
        ], paleta: ['#ACD8A7', '#024C26', '#E12126', '#000000'] },
        { tipo: 'envases', titulo: 'Rediseño de etiquetas', parrafos: [
          'Las etiquetas llevan la nueva identidad a cada línea de producto sin perder lo que el consumidor ya reconoce: el triángulo rojo del logotipo, las ilustraciones de los insectos, el ícono de la casa y el color que distingue a cada línea, verde para Casa y Jardín y para la vela de citronela, y una nueva propuesta de Baygon Max con una etiqueta negra.',
          'Esta propuesta se presenta en una textura metálica que eleva la percepción del producto hacia una experiencia más premium.',
          'La información de uso, las advertencias, los pictogramas de seguridad y el código de barras se concentran en el reverso, lo que mantiene limpio el frente y le&nbsp;da&nbsp;protagonismo&nbsp;a&nbsp;la&nbsp;marca.',
        ],
          destacado: { frames: 'assets/giro/baygon/citronela/', n: 144, w: 900, h: 637, titulo: 'Vela Citronela' },
          fila: [
            { frames: 'assets/giro/baygon/max/', n: 144, w: 520, h: 958, titulo: 'Max · 500 ml' },
            { frames: 'assets/giro/baygon/casa-jardin-400/', n: 144, w: 520, h: 958, titulo: 'Casa y Jardín · 400 ml' },
            { frames: 'assets/giro/baygon/casa-jardin-285/', n: 144, w: 520, h: 958, titulo: 'Casa y Jardín · 285 ml' },
          ] },
      ],
    } },
  { id: 'ficm', nombre: 'FICM', categoria: 'Campaña publicitaria', filtros: ['Campañas'],
    descripcion: 'Campaña publicitaria para el Festival Internacional de Cine de Morelia.',
    aurora: ['#7A2A06', '#EF6A00', '#C2410C', '#2B59FF'],
    anio: '2026', rol: 'Diseño de campaña publicitaria', modalidad: 'Individual', herramientas: 'Illustrator y Photoshop',
    imagen: 'assets/img/proyectos/ficm/cartel.jpg', posicion: '75% 35%',
    logoCapsula: 'assets/img/proyectos/ficm/ficm-logo.svg', logoAncho: 140,
    contenido: {
      bloques: [
        { tipo: 'cartel', src: 'assets/img/proyectos/ficm/cartel.jpg', alt: 'Cartel del Festival Internacional de Cine de Morelia con los rostros de Alfonso Cuarón, Guillermo del Toro, Alejandro G. Iñárritu y Greta Gerwig dentro de un carrete de película',
          titulo: 'El concepto', parrafos: [
          'La identidad de esta edición busca enaltecer la presencia de las grandes figuras de la industria del cine. En el festival, directores como Guillermo del Toro, Alfonso Cuarón, Alejandro G. Iñárritu y Greta Gerwig imparten clases magistrales y aulas de conversación, lo que ofrece al público una experiencia cercana con ellos.',
          'A lo largo de los años, el FICM ha presentado identidades que representan distintas temáticas del festival. El objetivo de esta propuesta es dar visibilidad a esa experiencia cercana que se vive al compartir espacio con grandes personalidades del medio, como actores y directores, bajo el mensaje “Entra a la conversación del cine”.',
        ] },
        { tipo: 'medios', titulo: 'La campaña en medios', items: [
          { src: 'assets/img/proyectos/ficm/metro.jpg', alt: 'Cartel de la campaña en vallas publicitarias', titulo: 'Vallas publicitarias' },
          { src: 'assets/img/proyectos/ficm/espectacular.jpg', alt: 'Cartel de la campaña en un espectacular', titulo: 'Espectacular' },
          { src: 'assets/img/proyectos/ficm/parabus.jpg', alt: 'Cartel de la campaña en un parabús', titulo: 'Parabús' },
          { src: 'assets/img/proyectos/ficm/redes.jpg', alt: 'Publicaciones de la campaña en redes sociales vistas en teléfonos', titulo: 'Redes sociales' },
        ] },
      ],
    } },
  { id: 'kleenex', nombre: 'Kleenex Winter', categoria: 'Submarca y empaque', filtros: ['Empaque', 'Identidad'],
    descripcion: 'Diseño de la submarca Winter de Kleenex y cuatro propuestas de empaque.',
    aurora: ['#16346B', '#427CBF', '#97D3F1', '#2B59FF'],
    anio: '2025', rol: 'Diseño de submarca y empaque', modalidad: 'Individual', herramientas: 'Illustrator y Photoshop',
    logoCapsula: 'assets/img/proyectos/kleenex/kleenex-winter-logo.svg', logoAncho: 150, capsulaFondo: 'linear-gradient(160deg, #EAF5FB 0%, #CAE5F3 55%, #97D3F1 100%)',
    contenido: {
      bloques: [
        { tipo: 'texto', titulo: 'El proyecto', parrafos: [
          'Diseño de una submarca para Kleenex, una marca ya posicionada. Se desarrollaron cuatro propuestas de empaque para este producto, diseñadas a partir del concepto de la submarca, Winter.',
        ] },
        { tipo: 'logo', src: 'assets/img/proyectos/kleenex/kleenex-winter-logo.svg', alt: 'Logotipo de Kleenex Winter', titulo: 'Logotipo de la submarca', claro: true,
          tipos: [{ src: 'assets/img/proyectos/kleenex/tipografia-1.svg', w: 165.988, h: 24.568, alt: 'Muestra de la primera tipografía del logotipo' }, { src: 'assets/img/proyectos/kleenex/tipografia-2.svg', w: 133.769, h: 23.758, alt: 'Muestra de la segunda tipografía del logotipo' }, { src: 'assets/img/proyectos/kleenex/tipografia-3.svg', w: 137.693, h: 35.463, alt: 'Muestra de la tercera tipografía del logotipo' }],
          tiposIguales: true,
          parrafos: [
          'El logotipo de la submarca se construyó mediante la combinación de tres tipografías, buscando transmitir una estética invernal. Se eligió un nombre sencillo y directamente relacionado con el concepto para facilitar su identificación.',
          'Asimismo, se optó por tipografías serif en lugar de script, lo que logra un equilibrio con el logotipo oficial y aporta elegancia y congruencia con las formas angulosas del módulo.',
        ] },
        { tipo: 'texto', titulo: 'Esencia de Invierno', parrafos: [], cita: [
          'Esencia de Invierno, <b>frescura</b> y <b>cuidado</b> en cada instante para brindarte tranquilidad y seguridad en tu día a día.',
          'Kleenex Esencia de Invierno: <b>evoca frescura y&nbsp;cuidado.</b>',
        ] },
        { tipo: 'texto', titulo: 'Paleta cromática', parrafos: [
          'Los empaques se lograron mediante la modificación cromática de un módulo de formas previamente diseñado, con una paleta que evocara el invierno, la frescura y el cuidado.',
        ], paleta: ['#97D3F1', '#CAE5F3', '#69A5D9', '#427CBF', '#DECEE5'] },
        { tipo: 'vitrina', titulo: 'Propuestas de empaque', items: [
          { src: 'assets/img/proyectos/kleenex/cilindrico.webp', alt: 'Empaque cilíndrico de Kleenex Winter', titulo: 'Cilíndrico' },
          { src: 'assets/img/proyectos/kleenex/piramidal.webp', alt: 'Empaque piramidal de Kleenex Winter', titulo: 'Piramidal' },
          { src: 'assets/img/proyectos/kleenex/cubico.webp', alt: 'Empaque cúbico de Kleenex Winter con un pañuelo saliendo', titulo: 'Cúbico' },
          { src: 'assets/img/proyectos/kleenex/rectangular.webp', alt: 'Empaque rectangular de Kleenex Winter con un pañuelo saliendo', titulo: 'Rectangular' },
        ] },
      ],
    } },
  { id: 'libro-azul', nombre: 'Libro Azul', categoria: 'Arte 3D', filtros: ['3D'],
    descripcion: 'Pieza artística en 3D sobre una experiencia personal y humana.',
    aurora: ['#060B3A', '#1A2FD6', '#3E7BFF', '#2B59FF'],
    anio: '2026', rol: 'Diseño de pieza artística 3D', modalidad: 'Individual', herramientas: 'Autodesk Maya, Substance 3D Painter y Photoshop',
    imagen: 'assets/img/proyectos/libro-azul/libro-azul-final.png', posicion: '50% 60%',
    textoCapsula: 'Libro<br>Azul',
    contenido: {
      bloques: [
        { tipo: 'cartel', src: 'assets/img/proyectos/libro-azul/libro-azul-final.png', alt: 'Render 3D de una niña dormida abrazando una estrella luminosa dentro de una burbuja azul, mientras dos sombras la acechan en su habitación',
          cuadrado: true,
          titulo: 'El proyecto', parrafos: [
          'El objetivo de este proyecto fue crear una pieza artística que hablara, desde lo personal, de una experiencia humana. Lo logré por medio de herramientas digitales 3D y con una paleta cromática compuesta en su mayoría por tonos azules, ya que la pieza está pensada para la reproducción digital e impresa de un proyecto que lleva por nombre Libro Azul.',
        ],
          titulo2: 'Descripción y significado', parrafos2: [
          'Una niña duerme abrazando su propia estrella: una estrella interna y metafórica que representa su luz y su inocencia, a las que se aferra a pesar de las adversidades. La niña dormida representa la vulnerabilidad, pero mientras duerme intenta sanar y liberarse del dolor y de la duda; confía y abraza su esencia, que es más fuerte que aquello que la lastima.',
          'La acechan dos sombras que representan, de forma simbólica, el hostigamiento que recibe:',
        ],
          rasgos: [
            ['Envidia', 'Una figura humanoide delgada y ligeramente encorvada, que se inclina hacia alguien más.'],
            ['Crueldad', 'Puntas, aristas y bordes filosos; brazos que terminan en formas rectas o “cortantes”.'],
            ['Inseguridad', 'No tiene rostro ni identidad propia: solo existe en función de lo que otros tienen o representan, algo que puede llegar a ser más que ella misma.'],
          ] },
      ],
    } },
  { id: 'femme-fatale', nombre: 'Femme Fatale', categoria: 'Identidad de marca', filtros: ['Identidad'],
    descripcion: 'Identidad gráfica para una marca de maquillaje inspirada en la feminidad oscura.',
    aurora: ['#7B5CFF', '#2B59FF', '#E557A8', '#BBA9FF'],
    imagen: 'assets/img/proyectos/femme-fatale/labiales.jpg', posicion: '50% 40%',
    rol: 'Diseño de identidad de marca', anio: '2025', modalidad: 'Individual', herramientas: 'Illustrator y Photoshop',
    logoCapsula: 'assets/img/proyectos/femme-fatale/logo-capsula.png', logoAncho: 150,
    contenido: {
      lema: 'Séduis, Piège, Domine.',
      lemaNota: 'Seduce, atrapa, domina.',
      bloques: [
        { tipo: 'texto', titulo: 'El proyecto', parrafos: [
          'Femme Fatale es la identidad gráfica de una marca de maquillaje. El logotipo nace de abstracciones previamente trabajadas y modificadas hasta llegar a su forma final.',
          'El concepto muestra fidelidad a la marca sin caer en lo obvio, a partir de las características del animal elegido: la araña.',
        ] },
        { tipo: 'logo', src: 'assets/img/proyectos/femme-fatale/logo.png', alt: 'Logotipo de Femme Fatale: una araña estilizada con un corazón al centro', titulo: 'Femme Fatale', parrafos: [
          'El término femme fatale describe a una mujer que encarna misterio, poder, seducción y peligro. Es una figura magnética e inalcanzable que utiliza su inteligencia, su encanto y su belleza para cautivar y dominar.',
          'No sigue las reglas: las impone. No solo es deseada, también es temida y admirada. Su esencia está en su independencia, su enigma y su aura irresistible, lo que la convierte en un símbolo de feminidad oscura y letal.',
        ] },
        { tipo: 'imagenes', items: [
          { src: 'assets/img/proyectos/femme-fatale/labiales.jpg', alt: 'Línea de cinco labiales Femme Fatale en tonos lila, rojo, morado y naranja' },
          { src: 'assets/img/proyectos/femme-fatale/frascos.jpg', alt: 'Frasco y gotero de iluminador Femme Fatale sobre fondo rosa' },
        ] },
        { tipo: 'lista', titulo: 'Concepto', clave: 'Arañas + maquillaje = Feminidad oscura',
          intro: 'La feminidad oscura es una expresión de lo femenino que combina magnetismo, misterio y poder. Se aleja de la dulzura tradicional para abrazar una energía más enigmática y seductora. Sus rasgos principales son:',
          items: [
            ['Misterio', 'No se revela de inmediato; conserva un aura enigmática.'],
            ['Seductora pero inaccesible', 'Es magnética, pero no se entrega con facilidad.'],
            ['Seguridad en sí misma', 'No busca validación externa; confía en su atractivo natural.'],
            ['Estética sofisticada', 'Recurre a colores oscuros, líneas marcadas y contrastes llamativos.'],
            ['Conexión con la sombra', 'No teme mostrar su lado profundo, complejo e incluso rebelde.'],
            ['Poder y autonomía', 'No se somete a las normas establecidas: las desafía con elegancia.'],
          ] },
        { tipo: 'texto', titulo: 'Psicología del color', parrafos: [
          'También consideré la psicología del color. Una femme fatale es enigmática, misteriosa y poderosa, las mismas cualidades que se asocian con el color morado.',
        ], paleta: ['#000000', '#C9B8CB', '#B39ABD'] },
      ],
    } },
  { id: 'menu', nombre: 'Sushi Roll', categoria: 'Diseño de menú', filtros: ['Fotografía'],
    descripcion: 'Diseño del menú de un restaurante de cocina japonesa, construido a partir de la identidad existente de la marca.',
    aurora: ['#123F1C', '#4CAF3A', '#0E7F63', '#2B59FF'],
    anio: '2024', rol: 'Diseño editorial y de menú',
    modalidad: '<b>Diseño:</b> individual · <b>Fotografías:</b> en equipo', modalidadSinTitulo: true, herramientas: 'Photoshop e Illustrator',
    imagen: 'assets/img/proyectos/sushi-roll/menu-1.jpg',
    logoCapsula: 'assets/img/proyectos/sushi-roll/logo-capsula.png', logoAncho: 160, logoEtiqueta: 'Diseño de menú',
    contenido: {
      bloques: [
        { tipo: 'texto', titulo: 'El proyecto', parrafos: [
          'Sushi Roll es el diseño del menú de un restaurante de cocina japonesa. La propuesta parte de la identidad que la marca ya tenía y la lleva a una pieza editorial de tres páginas que organiza su oferta en ensaladas, sopas, especialidades, bowls de arroz, postres y cócteles.',
          'El objetivo de este diseño fue aprender sobre la calidad y las técnicas fotográficas que se pueden aplicar a un shot de producto, para lograr una composición fiel a la marca que resalte los atributos del producto. Dando como resultado una lectura clara de cada platillo acompañada de una fotografía protagonista que ilustra&nbsp;el&nbsp;menú.',
        ] },
        { tipo: 'imagenes', fila: true, items: [
          { src: 'assets/img/proyectos/sushi-roll/menu-1.jpg', alt: 'Página de ensaladas y sopas del menú Sushi Roll' },
          { src: 'assets/img/proyectos/sushi-roll/menu-2.jpg', alt: 'Página de especialidades y bowls de arroz del menú Sushi Roll' },
          { src: 'assets/img/proyectos/sushi-roll/menu-3.jpg', alt: 'Página de postres y cócteles del menú Sushi Roll' },
        ] },
        { tipo: 'texto', titulo: 'La propuesta visual', parrafos: [
          'El fondo negro con una textura sutil y un patrón lineal de nubes tradicionales japonesas evoca el origen de la cocina sin saturar la composición. Sobre él, el verde de la marca da vida a los títulos de sección en una tipografía condensada que guía la lectura de un vistazo.',
          'Los nombres de los platillos van en blanco y en negritas, y las descripciones en un peso regular, para que la jerarquía sea inmediata. La fotografía de producto se recorta en formas circulares y ovaladas que rompen la retícula y le dan ritmo a cada página, mientras que la palabra MENU en contorno, vertical u horizontal, funciona como un elemento tipográfico que unifica las tres piezas.',
        ], paleta: ['#87C63F', '#222021', '#FFFFFF'] },
      ],
    } },
].map(p => ({
  anio: '[año]', rol: '[tu rol]', modalidad: '[individual / en equipo]', herramientas: '[herramientas]',
  reto: '[Qué se buscaba resolver en este proyecto.]', solucion: '[Cómo lo resolviste y qué decisiones tomaste.]',
  enlace: 'https://www.behance.net/danielayanez3', imagen: `assets/img/proyectos/${p.id}.jpg`, ...p,
}));

const FILTROS = ['Todo', 'Identidad', 'UX/UI', '3D', 'Interactivo', 'Campañas', 'Empaque', 'Fotografía'];

const DISCIPLINAS = [
  { nombre: 'Identidad de marca', filtro: 'Identidad' },
  { nombre: 'UX/UI', filtro: 'UX/UI' },
  { nombre: 'Modelado 3D de productos', filtro: '3D' },
  { nombre: 'Animación de producto', filtro: '3D' },
  { nombre: 'Fotografía', filtro: 'Fotografía' },
  { nombre: 'Tipografía', filtro: 'Identidad' },
  { nombre: 'Campañas publicitarias', filtro: 'Campañas' },
  { nombre: 'Envase y empaque', filtro: 'Empaque' },
];

const HERRAMIENTAS = [
  { abbr: 'Ai', nombre: 'Illustrator', color: '#FF8466' },
  { abbr: 'Ps', nombre: 'Photoshop', color: '#5CCBF0' },
  { abbr: 'Id', nombre: 'InDesign', color: '#E557A8' },
  { abbr: 'Ae', nombre: 'After Effects', color: '#7B5CFF' },
  { abbr: 'Fg', nombre: 'Figma', color: '#B9E25E' },
  { abbr: 'Pt', nombre: 'Substance 3D Painter', color: '#F6A9CF' },
  { abbr: 'My', nombre: 'Maya', color: '#8FB4FF' },
  { abbr: 'ZB', nombre: 'ZBrush', color: '#2B59FF' },
];

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const isMobile = () => window.innerWidth <= 1023;

/* =========================================================
   Aurora: cambia de colores según el momento visible
   ========================================================= */
const aurora = $('.aurora');
function setAurora(colors) {
  if (!colors) return;
  colors.forEach((c, i) => aurora.style.setProperty(`--a${i + 1}`, c));
}
const moments = $$('.moment');
const visible = new Map();
const momentObserver = new IntersectionObserver(entries => {
  entries.forEach(e => visible.set(e.target, e.intersectionRatio));
  let best = null, max = 0;
  visible.forEach((r, el) => { if (r > max && !el.hidden) { max = r; best = el; } });
  if (best) {
    setAurora(best.dataset.aurora && best.dataset.aurora.split(','));
    const id = best.id;
    $$('.nav__link').forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === `#${id}` || (id === 'proyecto' && a.getAttribute('href') === '#trabajo')));
  }
}, { threshold: [0, .15, .3, .45, .6, .75, .9] });
moments.forEach(m => momentObserver.observe(m));

/* ---------- Navegación ---------- */
const nav = $('#nav');
const onScrollNav = () => nav.classList.toggle('is-scrolled', window.scrollY > 24);
onScrollNav();
window.addEventListener('scroll', onScrollNav, { passive: true });

const toggle = $('#menuToggle');
const panel = $('#menuPanel');
function setMenu(open) {
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  panel.hidden = !open;
  document.body.style.overflow = open ? 'hidden' : '';
}
toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
$$('.menu-panel__link').forEach(a => a.addEventListener('click', () => setMenu(false)));

/* ---------- Aparición al hacer scroll ---------- */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); revealObserver.unobserve(e.target); } });
}, { threshold: .15 });
$$('[data-reveal]').forEach(el => revealObserver.observe(el));

/* =========================================================
   Marquesina: movimiento continuo, acelera con el scroll,
   se detiene al pasar el mouse y se puede arrastrar
   ========================================================= */
let scrollBoost = 0;
let lastY = window.scrollY;
window.addEventListener('scroll', () => {
  const dy = Math.abs(window.scrollY - lastY);
  lastY = window.scrollY;
  scrollBoost = Math.min(scrollBoost + dy * 0.6, 260);
}, { passive: true });

class Marquee {
  constructor(viewport, track, { speed = 40, dir = 1 } = {}) {
    this.viewport = viewport; this.track = track;
    this.base = reduceMotion ? 0 : speed; this.dir = dir;
    this.offset = 0; this.current = this.base; this.hover = false; this.static = false;
    this.drag = null; this.moved = false; this.inercia = 0; this.tween = null; this.pausa = 0;
    this.measure();
    viewport.addEventListener('mouseenter', () => { this.hover = true; });
    viewport.addEventListener('mouseleave', () => { this.hover = false; });
    viewport.addEventListener('pointerdown', e => this.down(e));
    window.addEventListener('pointermove', e => this.move(e));
    window.addEventListener('pointerup', () => this.up());
    window.addEventListener('pointercancel', () => this.up());
    viewport.addEventListener('click', e => { if (this.moved) { e.preventDefault(); e.stopPropagation(); } }, true);
    viewport.addEventListener('dragstart', e => e.preventDefault());
    // Trackpad o rueda horizontal (también Shift + rueda): mueve la línea sin esperar la vuelta
    viewport.addEventListener('wheel', e => {
      if (this.static) return;
      const dx = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : (e.shiftKey ? e.deltaY : 0);
      if (!dx) return;
      e.preventDefault();
      this.tween = null; this.inercia = 0; this.pausa = 1.5;
      this.offset -= dx;
    }, { passive: false });
    window.addEventListener('resize', () => this.measure());
  }
  measure() {
    $$('[data-clone]', this.track).forEach(c => { c.hidden = false; });
    const half = this.track.scrollWidth / 2;
    this.setWidth = half;
    this.static = half < this.viewport.clientWidth;
    this.viewport.classList.toggle('is-static', this.static);
    $$('[data-clone]', this.track).forEach(c => { c.hidden = this.static; });
    if (this.static) { this.setWidth = this.track.scrollWidth; this.track.style.transform = 'none'; this.track.style.willChange = 'auto'; }
    else { this.track.style.willChange = ''; }
  }
  down(e) {
    if (this.static || e.button !== 0) return;
    if (e.pointerType === 'mouse') e.preventDefault(); // evita seleccionar texto o arrastrar imágenes
    this.tween = null; this.inercia = 0;
    this.drag = { x: e.clientX, start: this.offset, lastX: e.clientX, lastT: performance.now(), vel: 0 }; this.moved = false;
  }
  move(e) {
    if (!this.drag) return;
    const dx = e.clientX - this.drag.x;
    if (Math.abs(dx) > 6) { this.moved = true; this.viewport.classList.add('is-dragging'); }
    const now = performance.now(), dt = Math.max(1, now - this.drag.lastT);
    this.drag.vel = (e.clientX - this.drag.lastX) / dt * 1000; // px por segundo
    this.drag.lastX = e.clientX; this.drag.lastT = now;
    this.offset = this.drag.start + dx;
  }
  up() {
    if (!this.drag) return;
    if (this.moved && performance.now() - this.drag.lastT < 80) this.inercia = Math.max(-2400, Math.min(2400, this.drag.vel));
    this.pausa = 1.2;
    this.drag = null; this.viewport.classList.remove('is-dragging');
    setTimeout(() => { this.moved = false; }, 0);
  }
  // Desliza la línea una distancia en un recorrido corto y suave
  glide(dx, dur = 550) {
    if (this.static || !dx) return;
    this.inercia = 0;
    this.tween = { from: this.offset, to: this.offset + dx, t0: performance.now(), dur: reduceMotion ? 1 : dur };
  }
  // Coloca completa y centrada la cápsula del proyecto (la copia más cercana al centro)
  centrar(id) {
    if (this.static) return;
    const vp = this.viewport.getBoundingClientRect();
    const mid = vp.left + vp.width / 2;
    let mejor = null;
    $$(`.capsule[data-id="${id}"]`, this.track).forEach(c => {
      if (c.hidden || c.classList.contains('is-out')) return;
      const r = c.getBoundingClientRect();
      const ancho = isMobile() ? 190 : 260; // ancho final de la cápsula seleccionada
      const d = mid - (r.left + ancho / 2);
      if (!mejor || Math.abs(d) < Math.abs(mejor)) mejor = d;
    });
    if (mejor !== null && Math.abs(mejor) > 2) this.glide(mejor);
  }
  tick(dt) {
    if (this.static || !this.setWidth) return;
    if (this.pausa > 0) this.pausa -= dt;
    const quieto = this.hover || this.drag || this.locked || this.tween || this.pausa > 0;
    const target = quieto ? 0 : this.base + (reduceMotion ? 0 : scrollBoost);
    this.current += (target - this.current) * Math.min(1, dt * 4);
    if (this.tween) {
      const t = Math.min(1, (performance.now() - this.tween.t0) / this.tween.dur);
      const e = 1 - Math.pow(1 - t, 3);
      this.offset = this.tween.from + (this.tween.to - this.tween.from) * e;
      if (t >= 1) this.tween = null;
    } else if (!this.drag) {
      this.offset += this.dir * this.current * dt;
      if (this.inercia) {
        this.offset += this.inercia * dt;
        this.inercia *= Math.exp(-dt * 4);
        if (Math.abs(this.inercia) < 5) this.inercia = 0;
      }
    }
    const w = this.setWidth;
    const pos = ((this.offset % w) + w) % w;
    this.track.style.transform = `translate3d(${(-w + pos).toFixed(2)}px,0,0)`;
  }
}

/* =========================================================
   Disciplinas (cinta)
   ========================================================= */
const ribbonTrack = $('#ribbonTrack');
const spark = '<svg class="ribbon__spark" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0z"/></svg>';
function ribbonSet(clone) {
  const frag = document.createElement('div');
  frag.className = 'ribbon__item';
  if (clone) { frag.dataset.clone = ''; frag.setAttribute('aria-hidden', 'true'); }
  frag.innerHTML = DISCIPLINAS.map(d =>
    `<button class="ribbon__word" data-filter="${d.filtro}" ${clone ? 'tabindex="-1"' : ''}>${d.nombre}</button>${spark}`
  ).join('');
  return frag;
}
ribbonTrack.append(ribbonSet(false), ribbonSet(true));
const ribbon = new Marquee($('#ribbon'), ribbonTrack, { speed: 45, dir: DIRECCION_CINTA });
ribbonTrack.addEventListener('click', e => {
  const b = e.target.closest('[data-filter]');
  if (!b) return;
  applyFilter(b.dataset.filter);
  $('#trabajo').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
});

/* =========================================================
   Herramientas: círculos de luz sobrepuestos
   ========================================================= */
const stage = $('#toolsStage');
function drawTools() {
  const cols = isMobile() ? 2 : 4;
  const rows = Math.ceil(HERRAMIENTAS.length / cols);
  const r = 150, d = 230, pad = 24;
  const W = (cols - 1) * d + 2 * r + 2 * pad;
  const H = (rows - 1) * d + 2 * r + 2 * pad;
  const h = Math.sqrt(r * r - (d / 2) * (d / 2));
  const pos = HERRAMIENTAS.map((t, i) => ({ ...t, i, cx: pad + r + (i % cols) * d, cy: pad + r + Math.floor(i / cols) * d }));

  let defs = '<filter id="lensGlow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="7" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>';
  let rings = '', lenses = '';
  pos.forEach(p => {
    defs += `<radialGradient id="rg${p.i}"><stop offset="0" stop-color="${p.color}" stop-opacity=".08"/><stop offset="1" stop-color="${p.color}" stop-opacity=".45"/></radialGradient>`;
    rings += `<circle class="tools__ring" data-i="${p.i}" cx="${p.cx}" cy="${p.cy}" r="${r}" fill="url(#rg${p.i})" fill-opacity="1" stroke="${p.color}" stroke-opacity=".55" stroke-width="1.5"><title>${p.nombre}</title></circle>`;
  });
  pos.forEach(a => {
    const right = pos.find(b => b.cy === a.cy && b.cx === a.cx + d);
    const below = pos.find(b => b.cx === a.cx && b.cy === a.cy + d);
    if (right) {
      const mx = a.cx + d / 2, id = `lh${a.i}`;
      defs += `<linearGradient id="${id}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${a.color}"/><stop offset="1" stop-color="${right.color}"/></linearGradient>`;
      lenses += `<path d="M${mx} ${a.cy - h} A${r} ${r} 0 0 1 ${mx} ${a.cy + h} A${r} ${r} 0 0 1 ${mx} ${a.cy - h}Z" fill="url(#${id})"/>`;
    }
    if (below) {
      const my = a.cy + d / 2, id = `lv${a.i}`;
      defs += `<linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a.color}"/><stop offset="1" stop-color="${below.color}"/></linearGradient>`;
      lenses += `<path d="M${a.cx - h} ${my} A${r} ${r} 0 0 1 ${a.cx + h} ${my} A${r} ${r} 0 0 1 ${a.cx - h} ${my}Z" fill="url(#${id})"/>`;
    }
  });

  const labels = pos.map(p =>
    `<span class="tools__label" style="left:${(p.cx / W * 100).toFixed(3)}%;top:${(p.cy / H * 100).toFixed(3)}%"><span class="tools__abbr">${p.abbr}</span><span class="tools__name">${p.nombre}</span></span>`
  ).join('');
  const groups = cols === 4
    ? `<span class="tools__group" style="top:${((pad + r) / H * 100).toFixed(3)}%">Diseño y animación</span><span class="tools__group" style="top:${((pad + r + d) / H * 100).toFixed(3)}%">Interfaz y 3D</span>`
    : '';

  stage.innerHTML =
    `<div class="tools__canvas"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Programas que manejo: ${HERRAMIENTAS.map(t => t.nombre).join(', ')}"><defs>${defs}</defs>${rings}<g class="tools__lenses" filter="url(#lensGlow)" stroke="#FFFFFF" stroke-width="2.5" stroke-opacity=".9" fill-opacity=".78" pointer-events="none">${lenses}</g></svg>${labels}${groups}</div>`;
  stage.dataset.cols = cols;
  stage.style.setProperty('--s', ($('.tools__canvas', stage).clientWidth / W).toFixed(3));
}
drawTools();
let toolsCols = stage.dataset.cols;
window.addEventListener('resize', () => {
  const cols = isMobile() ? '2' : '4';
  if (cols !== toolsCols) { toolsCols = cols; drawTools(); }
  else { stage.style.setProperty('--s', ($('.tools__canvas', stage).clientWidth / parseFloat($('svg', stage).viewBox.baseVal.width)).toFixed(3)); }
});

/* =========================================================
   Mi trabajo: cápsulas en movimiento continuo + filtros
   ========================================================= */
const chipsEl = $('#chips');
chipsEl.innerHTML = FILTROS.map(f => `<button class="chip" data-chip="${f}" aria-pressed="${f === 'Todo'}">${f}</button>`).join('');
chipsEl.addEventListener('click', e => { const c = e.target.closest('[data-chip]'); if (c) applyFilter(c.dataset.chip); });

const workTrack = $('#workTrack');
const ALTURAS = [440, 370, 470, 390, 450, 360, 420, 380, 460];
const ONDA = [0, -40, 20, -30, 30, -20, 40, -10, 10];
function capsuleHTML(p, i, clone) {
  return `<button class="capsule${p.logoCapsula || p.logoPalabras || p.textoCapsula ? ' capsule--marca' : ''}${p.capsulaFondo ? ' capsule--claro' : ''}" data-id="${p.id}" ${clone ? 'data-clone aria-hidden="true" tabindex="-1"' : ''}
    style="--h:${ALTURAS[i % ALTURAS.length]}px;--y:${ONDA[i % ONDA.length]}px;--d:${(i * .5).toFixed(1)}s"
    aria-label="${p.nombre}, ${p.categoria}">
    ${p.logoCapsula || p.logoPalabras || p.textoCapsula
      ? `<span class="capsule__brand" style="--c1:${(p.capsulaColores || p.aurora)[0]};--c2:${(p.capsulaColores || p.aurora)[1]};--c3:${(p.capsulaColores || p.aurora)[2]};--logo-w:${p.logoAncho || 150}px${p.capsulaFondo ? `;background:${p.capsulaFondo}` : ''}">${p.fondoCapsula ? `<img class="capsule__fondo" src="${p.fondoCapsula}" alt="" loading="lazy">` : ''}<span class="capsule__mark">${p.logoEtiqueta ? `<span class="capsule__kicker">${p.logoEtiqueta}</span>` : ''}${p.textoCapsula ? `<span class="capsule__texto">${p.textoCapsula}</span>` : p.logoPalabras ? p.logoPalabras.map(src => `<img class="capsule__palabra" src="${src}" alt="" loading="lazy">`).join('') : `<img src="${p.logoCapsula}" alt="" loading="lazy">`}</span></span>`
      : `<img src="${p.imagen}" alt="" loading="lazy" style="object-position:${p.posicion || '50% 50%'}">`}
    <span class="capsule__info"><span class="capsule__name">${p.nombre}</span><span class="capsule__meta">${p.categoria} – ${p.anio}</span></span>
  </button>`;
}
workTrack.innerHTML = PROYECTOS.map((p, i) => capsuleHTML(p, i, false)).join('') + PROYECTOS.map((p, i) => capsuleHTML(p, i, true)).join('');
const work = new Marquee($('#workViewport'), workTrack, { speed: 34, dir: DIRECCION_TRABAJO });

let filtroActual = 'Todo';
function applyFilter(f) {
  filtroActual = f;
  $$('.chip', chipsEl).forEach(c => c.setAttribute('aria-pressed', String(c.dataset.chip === f)));
  $$('.capsule', workTrack).forEach(c => {
    const p = PROYECTOS.find(x => x.id === c.dataset.id);
    c.classList.toggle('is-out', f !== 'Todo' && !p.filtros.includes(f));
  });
  setTimeout(() => work.measure(), 650);
}
// Vuelve a medir cuando las cápsulas terminan de encogerse o crecer
let remeasure = null;
workTrack.addEventListener('transitionend', e => {
  if (e.propertyName !== 'width' || !e.target.classList.contains('capsule')) return;
  cancelAnimationFrame(remeasure);
  remeasure = requestAnimationFrame(() => work.measure());
});

// Flechas de escritorio: recorren la línea sin esperar la vuelta completa
const PASO = () => (isMobile() ? 180 : 228) * 2;
$$('.work__flecha').forEach(b => b.addEventListener('click', () => {
  work.pausa = 2;
  work.glide(b.dataset.dir === 'next' ? -PASO() : PASO());
}));

workTrack.addEventListener('click', e => {
  const c = e.target.closest('.capsule');
  if (c) openProject(c.dataset.id);
});

/* =========================================================
   Dentro de un proyecto
   ========================================================= */
const projectEl = $('#proyecto');

// Une las dos últimas palabras para que ningún párrafo termine con una palabra suelta
function sinViuda(t) { return t.replace(/\s+(\S+)\s*$/, '&nbsp;$1'); }

function renderBloque(b) {
  if (b.tipo === 'flotante') {
    const c = b.concepto;
    return `<div class="pblock pblock--flot">
      <div class="flot__top">
        <figure class="flot__fig">
          <span class="astro"><span class="astro__luz"></span><span class="astro__onda"></span><span class="astro__onda astro__onda--2"></span><img class="astro__img" src="${b.astro}" alt="Estrella luminosa que gira"></span>
          <img class="flot__titulo" src="${b.titulo.src}" alt="${b.titulo.alt}">
        </figure>
        <div class="flot__concepto">
          <p class="display flot__etiqueta">${c.etiqueta}</p>
          <h3 class="flot__nombre">${c.nombre}</h3>
          ${c.parrafos.map(t => `<p>${sinViuda(t)}</p>`).join('')}
        </div>
      </div>
      <div class="flot__cajas">
        ${b.cajas.map(k => `<div class="flot__caja"><h3>${k.titulo}</h3>${k.destacado ? `<p class="flot__destacado">${sinViuda(k.destacado)}</p>` : ''}${k.parrafos.map(t => `<p>${sinViuda(t)}</p>`).join('')}</div>`).join('')}
      </div>
    </div>`;
  }
  if (b.tipo === 'texto') {
    const paleta = b.paleta ? `<ul class="paleta${b.paleta.length >= 5 ? ' paleta--filas' : ''}" style="--n:${b.paleta.length}">${b.paleta.map(h => `<li><span class="paleta__chip" style="background:${h}"></span><span class="paleta__hex">${h}</span></li>`).join('')}</ul>` : '';
    const cita = b.cita ? `<blockquote class="pcita">${b.cita.map(t => `<p>${sinViuda(t)}</p>`).join('')}</blockquote>` : '';
    return `<div class="pblock pblock--texto"><h3>${b.titulo}</h3>${b.parrafos.map(t => `<p>${sinViuda(t)}</p>`).join('')}${cita}${paleta}</div>`;
  }
  if (b.tipo === 'logo') {
    return `<div class="pblock pblock--logo">
      <figure class="pblock__logo${b.claro ? ' pblock__logo--claro' : ''}"${b.glow ? ` style="--glow:${b.glow}"` : ''}><img src="${b.src}" alt="${b.alt}"></figure>
      <div><h3>${b.titulo}</h3>${b.parrafos.map(t => `<p>${sinViuda(t)}</p>`).join('')}${b.tipos ? `<div class="pblock__tipos${b.tiposIguales ? ' pblock__tipos--iguales' : ''}">${b.tipos.map(t => `<img src="${t.src}"${t.w ? ` width="${t.w}" height="${t.h}"` : ''} alt="${t.alt}">`).join('')}</div>` : ''}</div>
    </div>`;
  }
  if (b.tipo === 'envases') {
    const vid = v => `<figure class="giro"><div class="giro__vidrio"><canvas class="giro__canvas" width="${v.w}" height="${v.h}" data-frames="${v.frames}" data-n="${v.n}" role="img" aria-label="${v.titulo}, vista en 360 grados. Arrastra para girarlo."></canvas></div><figcaption>${v.titulo}</figcaption></figure>`;
    return `<div class="pblock pblock--envases">
      <div class="envases__top">
        <div><h3>${b.titulo}</h3>${b.parrafos.map(t => `<p>${sinViuda(t)}</p>`).join('')}</div>
        ${vid(b.destacado)}
      </div>
      <div class="envases__fila">${b.fila.map(vid).join('')}</div>
    </div>`;
  }
  if (b.tipo === 'cartel') {
    return `<div class="pblock pblock--cartel${b.cuadrado ? ' pblock--obra' : ''}">
      <figure class="pcartel"><img src="${b.src}" alt="${b.alt}" loading="lazy"></figure>
      <div><h3>${b.titulo}</h3>${b.parrafos.map(t => `<p>${sinViuda(t)}</p>`).join('')}${b.titulo2 ? `<h3>${b.titulo2}</h3>${b.parrafos2.map(t => `<p>${sinViuda(t)}</p>`).join('')}` : ''}${b.rasgos ? `<dl class="rasgos">${b.rasgos.map(([n, t]) => `<div><dt>${n}</dt><dd>${sinViuda(t)}</dd></div>`).join('')}</dl>` : ''}</div>
    </div>`;
  }
  if (b.tipo === 'medios') {
    return `<div class="pblock pblock--medios"><h3>${b.titulo}</h3><div class="medios">${b.items.map(i => `<figure class="pshot medio"><img src="${i.src}" alt="${i.alt}" loading="lazy"><figcaption>${i.titulo}</figcaption></figure>`).join('')}</div></div>`;
  }
  if (b.tipo === 'imagenes') {
    return `<div class="pblock pblock--imagenes${b.fila ? ' pblock--fila' : ''}">${b.items.map(i => `<figure class="pshot"><img src="${i.src}" alt="${i.alt}" loading="lazy"></figure>`).join('')}</div>`;
  }
  if (b.tipo === 'vitrina') {
    return `<div class="pblock pblock--vitrina"><h3>${b.titulo}</h3><div class="vitrina">${b.items.map(i => `<figure class="giro"><div class="giro__vidrio vitrina__panel"><img src="${i.src}" alt="${i.alt}" loading="lazy"></div><figcaption>${i.titulo}</figcaption></figure>`).join('')}</div></div>`;
  }
  if (b.tipo === 'lista') {
    return `<div class="pblock pblock--lista">
      <h3>${b.titulo}</h3>
      ${b.clave ? `<p class="pblock__clave">${b.clave}</p>` : ''}
      <p>${b.intro}</p>
      <ul class="pblock__items">${b.items.map(([t, d]) => `<li><b>${t}</b><span>${d}</span></li>`).join('')}</ul>
      ${b.cierre ? `<p>${b.cierre}</p>` : ''}
    </div>`;
  }
  return '';
}

function contenidoBase(p) {
  return `
      <p class="lead">${p.descripcion}</p>
      <div class="project__story">
        <div><h3>El reto</h3><p>${p.reto}</p></div>
        <div><h3>La solución</h3><p>${p.solucion}</p></div>
      </div>
      <div class="project__gallery">
        <figure class="shot shot--main shot--wide"><img src="${p.imagen}" alt="Imagen principal de ${p.nombre}"><figcaption>Imagen principal</figcaption></figure>
        <figure class="shot"><figcaption>Detalle</figcaption></figure>
        <figure class="shot"><figcaption>Proceso</figcaption></figure>
        <figure class="shot shot--wide"><figcaption>Resultado</figcaption></figure>
      </div>`;
}

/* Giro 360°: secuencia de imágenes con fondo transparente sobre cristal.
   Gira solo (una vuelta cada 10 s) y se puede arrastrar para girarlo a mano. */
function iniciarGiro(cv) {
  const n = +cv.dataset.n, base = cv.dataset.frames, ctx = cv.getContext('2d');
  const imgs = new Array(n); let cargadas = 0, actual = -1, pos = 0, ultimo = performance.now(), visible = true;
  let arrastre = null, pausaHasta = 0;
  const vuelta = 10;                           // segundos por vuelta
  const dibujar = i => {
    i = ((Math.round(i) % n) + n) % n;
    let k = i; while (k >= 0 && !imgs[k]?.complete) k--;
    if (k < 0 || k === actual) return;
    actual = k; ctx.clearRect(0, 0, cv.width, cv.height); ctx.drawImage(imgs[k], 0, 0, cv.width, cv.height);
  };
  for (let i = 0; i < n; i++) {
    const im = new Image(); im.decoding = 'async';
    im.onload = () => { cargadas++; if (i === 0) dibujar(0); };
    im.src = `${base}f${String(i).padStart(3, '0')}.webp`; imgs[i] = im;
  }
  new IntersectionObserver(es => { visible = es[0].isIntersecting; }).observe(cv);
  cv.addEventListener('pointerdown', e => { arrastre = { x: e.clientX, pos }; cv.setPointerCapture(e.pointerId); });
  cv.addEventListener('pointermove', e => { if (arrastre) { pos = arrastre.pos - (e.clientX - arrastre.x) / cv.clientWidth * n * 0.8; dibujar(pos); } });
  const soltar = () => { arrastre = null; pausaHasta = performance.now() + 1500; };
  cv.addEventListener('pointerup', soltar); cv.addEventListener('pointercancel', soltar);
  const paso = t => {
    if (!cv.isConnected) return;               // el proyecto se cerró
    const dt = (t - ultimo) / 1000; ultimo = t;
    if (visible && !arrastre && !reduceMotion && t > pausaHasta && cargadas > n * 0.5) { pos += dt * n / vuelta; dibujar(pos); }
    requestAnimationFrame(paso);
  };
  requestAnimationFrame(paso);
}

function openProject(id) {
  const p = PROYECTOS.find(x => x.id === id);
  if (!p) return;
  const otros = PROYECTOS.filter(x => x.id !== id);
  const c = p.contenido;
  projectEl.dataset.aurora = p.aurora.join(',');
  projectEl.classList.toggle('has-cielo', !!p.cielo);
  projectEl.innerHTML = `
    <div class="project__clip">${p.cielo ? `<div class="project__cielo" style="background-image:url('${p.cielo}')"></div>` : ''}
    <div class="container project__inner">
      <div class="project__top">
        <p class="eyebrow">${p.categoria} · ${p.anio}</p>
        <button class="btn btn--secondary js-close">Cerrar</button>
      </div>
      <h2 class="display project__title">${p.nombre}</h2>
      ${c && c.lema ? `<p class="project__lema">“${c.lema}”${c.lemaNota ? `<span>${c.lemaNota}</span>` : ''}</p>` : ''}
      <ul class="project__facts">
        <li><b>Categoría:</b> ${p.categoria}</li>
        <li><b>Año:</b> ${p.anio}</li>
        ${p.rol ? `<li><b>Rol:</b> ${p.rol}</li>` : ''}
        <li>${p.modalidadSinTitulo ? '' : '<b>Modalidad:</b> '}${p.modalidad}</li>
        <li><b>Herramientas:</b> ${p.herramientas}</li>
      </ul>
      ${c ? c.bloques.map(renderBloque).join('') : contenidoBase(p)}
      <div class="project__actions">
        <a class="btn btn--primary" href="${p.enlace}" target="_blank" rel="noopener">${p.enlaceTexto || 'Ver en Behance'}</a>
        <button class="btn btn--secondary js-back">Volver al trabajo</button>
      </div>
      <div class="project__more">
        <p class="eyebrow">Más proyectos</p>
        <div class="project__more-list">
          ${otros.map(o => `<button class="mini" data-open="${o.id}">${o.logoPalabras
            ? `<span class="mini__brand" style="--c1:${o.aurora[0]};--c2:${o.aurora[1]};--c3:${o.aurora[2]}">${o.fondoCapsula ? `<img class="mini__fondo" src="${o.fondoCapsula}" alt="">` : ''}<span class="mini__palabras">${o.logoPalabras.map(src => `<img src="${src}" alt="">`).join('')}</span></span>`
            : o.textoCapsula
            ? `<span class="mini__brand" style="--c1:${o.aurora[0]};--c2:${o.aurora[1]};--c3:${o.aurora[2]}"><span class="mini__texto">${o.textoCapsula}</span></span>`
            : o.logoCapsula
            ? `<span class="mini__brand" style="--c1:${o.aurora[0]};--c2:${o.aurora[1]};--c3:${o.aurora[2]}${o.capsulaFondo ? `;background:${o.capsulaFondo}` : ''}"><img src="${o.logoCapsula}" alt=""></span>`
            : `<img src="${o.imagen}" alt="" style="object-position:${o.posicion || '50% 50%'}">`}<span>${o.nombre}</span></button>`).join('')}
        </div>
      </div>
    </div>
    </div>`;
  $$('.giro__canvas', projectEl).forEach(iniciarGiro);
  const wasOpen = projectEl.classList.contains('is-open');
  projectEl.hidden = false;
  momentObserver.observe(projectEl);
  work.locked = true;
  $$('.capsule', workTrack).forEach(cap => cap.classList.toggle('is-current', cap.dataset.id === id));
  requestAnimationFrame(() => work.centrar(id));
  setAurora(p.aurora);
  if (!wasOpen) {
    void projectEl.offsetHeight;            // fuerza el estado cerrado antes de desplegar
    projectEl.classList.add('is-open');
    requestAnimationFrame(() => {
      const y = $('#workViewport').getBoundingClientRect().bottom + window.scrollY - 90;
      window.scrollTo({ top: y, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  } else {
    requestAnimationFrame(() => projectEl.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' }));
  }
}
function closeProject(scrollToWork) {
  work.locked = false;
  $$('.capsule', workTrack).forEach(c => c.classList.remove('is-current'));
  projectEl.classList.remove('is-open');
  const fin = () => { if (!projectEl.classList.contains('is-open')) { projectEl.hidden = true; projectEl.innerHTML = ''; } };
  if (reduceMotion) fin(); else setTimeout(fin, 800);
  if (scrollToWork) $('#trabajo').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
}
projectEl.addEventListener('click', e => {
  if (e.target.closest('.js-close')) closeProject(true);
  else if (e.target.closest('.js-back')) closeProject(true);
  else { const m = e.target.closest('[data-open]'); if (m) openProject(m.dataset.open); }
});

/* =========================================================
   Contacto
   ========================================================= */
/* ---------- Lista de proyectos para impresión ---------- */
const printList = $('#printProyectos');
if (printList) printList.innerHTML = PROYECTOS.map(p => `<li><b>${p.nombre}</b> · ${p.categoria} · ${p.anio}<br>${p.descripcion}</li>`).join('');

$$('.js-mail').forEach(a => { a.href = `mailto:${CORREO}`; });
const form = $('#contactForm');
const formError = $('#formError');
form.addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(form);
  const nombre = (data.get('nombre') || '').trim();
  const correo = (data.get('correo') || '').trim();
  const mensaje = (data.get('mensaje') || '').trim();
  if (!nombre || !correo || !mensaje) { formError.textContent = 'Completa tu nombre, correo y mensaje.'; return; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) { formError.textContent = 'Revisa que tu correo esté bien escrito.'; return; }
  formError.textContent = '';
  const asunto = encodeURIComponent(`Proyecto · ${nombre}`);
  const cuerpo = encodeURIComponent(`${mensaje}\n\n${nombre} · ${correo}`);
  window.location.href = `mailto:${CORREO}?subject=${asunto}&body=${cuerpo}`;
});
form.addEventListener('input', () => { formError.textContent = ''; });

/* =========================================================
   Bucle de animación
   ========================================================= */
let last = performance.now();
function loop(now) {
  const dt = Math.min((now - last) / 1000, 0.05);
  last = now;
  scrollBoost *= Math.pow(0.04, dt);   // el impulso del scroll se desvanece
  ribbon.tick(dt);
  work.tick(dt);
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
window.addEventListener('load', () => { ribbon.measure(); work.measure(); });

/* =========================================================
   Visor de imágenes: se sobrepone al contenido sin moverlo.
   Desliza a los lados para cambiar de imagen y hacia abajo
   para cerrar. También funciona con teclado (← → Esc).
   ========================================================= */
const VISOR_SEL = '.pshot img, .medio img, .vitrina__panel img, .pcartel img';
const visor = document.createElement('div');
visor.className = 'visor';
visor.hidden = true;
visor.setAttribute('role', 'dialog');
visor.setAttribute('aria-modal', 'true');
visor.setAttribute('aria-label', 'Visor de imágenes del proyecto');
visor.innerHTML = `
  <div class="visor__barra">
    <span class="visor__contador" aria-live="polite"></span>
    <button class="visor__cerrar" type="button" aria-label="Cerrar visor">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>
    </button>
  </div>
  <div class="visor__escena">
    <button class="visor__flecha visor__flecha--prev" type="button" aria-label="Imagen anterior">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>
    </button>
    <div class="visor__pista"></div>
    <button class="visor__flecha visor__flecha--next" type="button" aria-label="Imagen siguiente">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>
    </button>
  </div>
  <p class="visor__ayuda">Desliza a los lados para cambiar de imagen · desliza hacia abajo para cerrar</p>`;
document.body.appendChild(visor);

const visorPista = $('.visor__pista', visor);
const visorContador = $('.visor__contador', visor);
const visorPrev = $('.visor__flecha--prev', visor);
const visorNext = $('.visor__flecha--next', visor);
let visorItems = [], visorI = 0, visorOrigen = null, visorGesto = null;

function visorPie(img) {
  const fig = img.closest('figure');
  const cap = fig && fig.querySelector('figcaption');
  return cap ? cap.textContent.trim() : '';
}
function visorIr(i, animar = true) {
  visorI = Math.max(0, Math.min(visorItems.length - 1, i));
  visorPista.classList.toggle('is-anim', animar && !reduceMotion);
  visorPista.style.transform = `translateX(${-visorI * 100}%)`;
  visorContador.textContent = `${visorI + 1} / ${visorItems.length}`;
  visorPrev.disabled = visorI === 0;
  visorNext.disabled = visorI === visorItems.length - 1;
}
function visorAbrir(img) {
  const imgs = $$(VISOR_SEL, projectEl);
  visorItems = imgs.map(el => ({ src: el.currentSrc || el.src, alt: el.alt, pie: visorPie(el) }));
  visorPista.innerHTML = visorItems.map(it => `<figure class="visor__slide"><img src="${it.src}" alt="${it.alt}" draggable="false">${it.pie ? `<figcaption>${it.pie}</figcaption>` : ''}</figure>`).join('');
  visorOrigen = document.activeElement;
  visor.hidden = false;
  document.documentElement.style.overflow = 'hidden';
  visorIr(imgs.indexOf(img), false);
  $('.visor__ayuda', visor).textContent = visorItems.length > 1
    ? 'Pellizca para hacer zoom · desliza a los lados para cambiar de imagen · hacia abajo para cerrar'
    : 'Pellizca para hacer zoom · desliza hacia abajo para cerrar';
  visorPrev.hidden = visorNext.hidden = visorItems.length < 2;
  requestAnimationFrame(() => visor.classList.add('is-open'));
  $('.visor__cerrar', visor).focus({ preventScroll: true });
}
function visorCerrar() {
  visor.classList.remove('is-open');
  document.documentElement.style.overflow = '';
  setTimeout(() => {
    visor.hidden = true;
    visor.style.removeProperty('--visor-fondo');
    visorPista.innerHTML = '';
  }, reduceMotion ? 0 : 300);
  if (visorOrigen && visorOrigen.focus) visorOrigen.focus({ preventScroll: true });
}

projectEl.addEventListener('click', e => {
  const img = e.target.closest(VISOR_SEL);
  if (img) visorAbrir(img);
});
$('.visor__cerrar', visor).addEventListener('click', () => visorCerrar());
visorPrev.addEventListener('click', () => visorIr(visorI - 1));
visorNext.addEventListener('click', () => visorIr(visorI + 1));
document.addEventListener('keydown', e => {
  if (visor.hidden) return;
  if (e.key === 'Escape') visorCerrar();
  else if (e.key === 'ArrowLeft') visorIr(visorI - 1);
  else if (e.key === 'ArrowRight') visorIr(visorI + 1);
  else if (e.key === 'Tab') { // el foco se queda dentro del visor
    const f = $$('button:not([disabled])', visor);
    const i = f.indexOf(document.activeElement);
    e.preventDefault();
    f[(i + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus();
  }
});

/* Gestos del visor:
   · un dedo hacia los lados: cambia de imagen · un dedo hacia abajo: cierra
   · dos dedos: zoom (pellizcar para acercar o alejar) · doble toque: acerca o regresa
   · con zoom, un dedo mueve la imagen para recorrer sus detalles */
const escena = $('.visor__escena', visor);
const dedos = new Map();
let zoom = { s: 1, x: 0, y: 0 }, pellizco = null, ultimoToque = 0;

function imgActual() { const sl = visorPista.children[visorI]; return sl && $('img', sl); }
function aplicarZoom(animar) {
  const img = imgActual();
  if (!img) return;
  img.style.transition = animar ? 'transform .25s var(--ease)' : 'none';
  img.style.transform = zoom.s > 1 ? `translate(${zoom.x}px, ${zoom.y}px) scale(${zoom.s})` : '';
  visor.classList.toggle('is-zoom', zoom.s > 1);
}
function limitarZoom() {
  const img = imgActual();
  if (!img) return;
  // tamaño de la imagen sin zoom (offsetWidth no cambia con transform)
  const bx = Math.max(0, (img.offsetWidth * zoom.s - escena.clientWidth) / 2 + 16);
  const by = Math.max(0, (img.offsetHeight * zoom.s - escena.clientHeight) / 2 + 16);
  zoom.x = Math.max(-bx, Math.min(bx, zoom.x));
  zoom.y = Math.max(-by, Math.min(by, zoom.y));
}
function reiniciarZoom(animar = false) { zoom = { s: 1, x: 0, y: 0 }; aplicarZoom(animar); }
// Acerca o aleja manteniendo fijo el punto (px, py) de la pantalla
function zoomEn(nuevo, px, py) {
  const img = imgActual();
  if (!img) return;
  const r = escena.getBoundingClientRect();
  const cx = px - (r.left + r.width / 2), cy = py - (r.top + r.height / 2);
  const k = nuevo / zoom.s;
  zoom.x = cx - (cx - zoom.x) * k;
  zoom.y = cy - (cy - zoom.y) * k;
  zoom.s = nuevo;
  if (zoom.s <= 1.02) { zoom = { s: 1, x: 0, y: 0 }; }
}

const _visorIr = visorIr;
visorIr = function (i, animar = true) { if (zoom.s > 1) reiniciarZoom(); _visorIr(i, animar); };
const _visorCerrar = visorCerrar;
visorCerrar = function () { reiniciarZoom(); _visorCerrar(); };

escena.addEventListener('pointerdown', e => {
  if (e.target.closest('button')) return;
  escena.setPointerCapture(e.pointerId);
  dedos.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (dedos.size === 2) {
    const [a, b] = [...dedos.values()];
    pellizco = { d: Math.hypot(a.x - b.x, a.y - b.y), s: zoom.s, mx: (a.x + b.x) / 2, my: (a.y + b.y) / 2, x: zoom.x, y: zoom.y };
    visorGesto = null;
    return;
  }
  // doble toque: acerca al punto tocado o regresa al tamaño normal
  const ahora = performance.now();
  if (e.pointerType !== 'mouse' && ahora - ultimoToque < 300) {
    ultimoToque = 0;
    if (zoom.s > 1) reiniciarZoom(true); else { zoomEn(2.5, e.clientX, e.clientY); limitarZoom(); aplicarZoom(true); }
    visorGesto = null;
    return;
  }
  visorGesto = { x: e.clientX, y: e.clientY, t: ahora, eje: null, dx: 0, dy: 0, zx: zoom.x, zy: zoom.y };
});
escena.addEventListener('pointermove', e => {
  if (!dedos.has(e.pointerId)) return;
  dedos.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (pellizco && dedos.size >= 2) {
    const [a, b] = [...dedos.values()];
    const d = Math.hypot(a.x - b.x, a.y - b.y);
    const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
    zoom.s = pellizco.s; zoom.x = pellizco.x + (mx - pellizco.mx); zoom.y = pellizco.y + (my - pellizco.my);
    zoomEn(Math.max(1, Math.min(4, pellizco.s * d / pellizco.d)), mx, my);
    aplicarZoom(false);
    return;
  }
  const g = visorGesto;
  if (!g) return;
  g.dx = e.clientX - g.x; g.dy = e.clientY - g.y;
  if (zoom.s > 1) { // con zoom, el dedo recorre la imagen
    zoom.x = g.zx + g.dx; zoom.y = g.zy + g.dy;
    limitarZoom(); aplicarZoom(false);
    return;
  }
  if (!g.eje && Math.hypot(g.dx, g.dy) > 8) g.eje = Math.abs(g.dx) > Math.abs(g.dy) ? 'x' : 'y';
  const slide = visorPista.children[visorI];
  if (g.eje === 'x') {
    visorPista.classList.remove('is-anim');
    const borde = (visorI === 0 && g.dx > 0) || (visorI === visorItems.length - 1 && g.dx < 0) ? .3 : 1;
    visorPista.style.transform = `translateX(calc(${-visorI * 100}% + ${g.dx * borde}px))`;
  } else if (g.eje === 'y' && slide) {
    const dy = Math.max(0, g.dy);
    const p = Math.min(1, dy / 400);
    slide.classList.remove('is-suelto');
    slide.style.transform = `translateY(${dy}px) scale(${1 - p * .15})`;
    slide.style.opacity = String(1 - p * .5);
    visor.style.setProperty('--visor-fondo', String(.9 - p * .6));
  }
});
function visorSoltar(e) {
  dedos.delete(e.pointerId);
  if (pellizco) {
    if (dedos.size < 2) {
      pellizco = null; ultimoToque = 0;
      if (zoom.s <= 1.02) reiniciarZoom(true); else { limitarZoom(); aplicarZoom(true); }
      // el dedo que queda sigue moviendo la imagen desde aquí
      const resto = [...dedos.values()][0];
      visorGesto = resto ? { x: resto.x, y: resto.y, t: performance.now(), eje: null, dx: 0, dy: 0, zx: zoom.x, zy: zoom.y } : null;
    }
    return;
  }
  const g = visorGesto;
  visorGesto = null;
  if (!g) return;
  const rapido = performance.now() - g.t < 250;
  // un toque corto y sin movimiento cuenta para el doble toque
  ultimoToque = e.pointerType !== 'mouse' && rapido && Math.hypot(g.dx, g.dy) < 10 ? performance.now() : 0;
  if (zoom.s > 1) return;
  const slide = visorPista.children[visorI];
  if (g.eje === 'x') {
    const umbral = escena.clientWidth * .18;
    if (g.dx < -umbral || (rapido && g.dx < -40)) visorIr(visorI + 1);
    else if (g.dx > umbral || (rapido && g.dx > 40)) visorIr(visorI - 1);
    else visorIr(visorI);
  } else if (g.eje === 'y' && slide) {
    if (g.dy > 120 || (rapido && g.dy > 60)) { visorCerrar(); return; }
    slide.classList.add('is-suelto');
    slide.style.transform = ''; slide.style.opacity = '';
    visor.style.removeProperty('--visor-fondo');
  }
}
escena.addEventListener('pointerup', visorSoltar);
escena.addEventListener('pointercancel', visorSoltar);
// En computadora: pellizco del trackpad (Ctrl + rueda) también acerca y aleja
escena.addEventListener('wheel', e => {
  if (!e.ctrlKey) return;
  e.preventDefault();
  zoomEn(Math.max(1, Math.min(4, zoom.s * Math.exp(-e.deltaY * 0.01))), e.clientX, e.clientY);
  limitarZoom(); aplicarZoom(false);
}, { passive: false });
