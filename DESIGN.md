---
version: 1
name: Daniela Yañez — Sistema de diseño
description: Identidad visual de mi landing de CV y portafolio. Azules de marca, Liquid Aurora Gradients, Capsule + Plus Jakarta Sans y formas de cápsula.
colors:
  primary: "#2B59FF"          # azul eléctrico
  primary-deep: "#1E3BB3"     # azul rey
  on-primary: "#FFFFFF"
  ink: "#0A0A10"              # negro profundo
  background: "#06060C"       # fondo oscuro de la landing
  white: "#FFFFFF"
  sky: "#8FB4FF"              # azul cielo
  cyan: "#5CCBF0"             # cian aurora
  violet: "#7B5CFF"
  lavender: "#BBA9FF"
  orchid: "#E557A8"           # rosa orquídea
  pink-soft: "#F6A9CF"        # rosa suave
  lime: "#B9E25E"             # verde lima
  coral: "#FF8466"
  bunny: "#FFA4D0"            # rosa del conejito
  glass: "rgba(255, 255, 255, 0.10)"
  glass-border: "rgba(255, 255, 255, 0.20)"
typography:
  display:
    fontFamily: Capsule
    fontWeight: 400
    letterSpacing: 0.04em      # interletrado abierto para leer mejor
  hero:
    fontFamily: Capsule
    fontSize: clamp(88px, 18vw, 280px)
    lineHeight: 0.82
    letterSpacing: -0.01em     # solo PORT / FOLIO
  title:
    fontFamily: Capsule
    fontSize: 64px
    fontSizeMobile: 40px
    lineHeight: 1.05
  heading-bold:
    fontFamily: Plus Jakarta Sans
    fontWeight: 700
    fontSize: 28px
    fontSizeMobile: 20px
    lineHeight: 1.25
  subtitle:
    fontFamily: Plus Jakarta Sans
    fontWeight: 600
    fontSize: 22px
    fontSizeMobile: 20px
    lineHeight: 1.3
  button:
    fontFamily: Plus Jakarta Sans
    fontWeight: 600
    fontSize: 16px
    fontSizeMobile: 15px
    lineHeight: 1
    letterSpacing: 0.02em
  lead:
    fontFamily: Plus Jakarta Sans
    fontWeight: 500
    fontSize: 20px
    fontSizeMobile: 18px
    lineHeight: 1.5
  nav:
    fontFamily: Plus Jakarta Sans
    fontWeight: 500
    fontSize: 15px
    lineHeight: 1.2
  label:
    fontFamily: Plus Jakarta Sans
    fontWeight: 500
    fontSize: 13px
    fontSizeMobile: 12px
    lineHeight: 1.4
    letterSpacing: 0.08em
    textTransform: uppercase
  body:
    fontFamily: Plus Jakarta Sans
    fontWeight: 400
    fontSize: 16px
    lineHeight: 1.6
spacing:
  s1: 4px
  s2: 8px
  s3: 12px
  s4: 20px
  s5: 32px
  s6: 52px
  s7: 84px
  s8: 144px
  margin: 64px
  margin-mobile: 20px
  max-width: 1280px
rounded:
  pill: 999px
  container: 24px
  panel: 28px
  field: 14px
  panel-mobile: 14px
elevation:
  glass: "background {colors.glass}; blur 20px; border 1px {colors.glass-border}"
  glow: "0 12px 40px rgba(43, 89, 255, 0.35)"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    border: "1.5px solid {colors.primary}"
    typography: "{typography.button}"
    height: 48px
    padding: 14px 28px
    rounded: "{rounded.pill}"
    hover: "background {colors.white}; text {colors.primary}; scale 1.05; 0.25s"
    disabled: "background #000000; text {colors.white}"
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.white}"
    border: "1.5px solid {colors.white}"
    hover: "igual que el principal"
  nav:
    height: 72px
    scrolled: "{elevation.glass}"
    active: "punto de 5px en {colors.primary}"
  project-capsule:
    width: 200px
    widthHover: 260px
    widthMobile: 160px
    rounded: "{rounded.pill}"
    border: "1px rgba(255, 255, 255, 0.18)"
    hover: "{elevation.glow}"
    selected: "se centra completa con un recorrido de 0.55s; fija a 260px (190px en móvil), borde blanco 2px"
    controls: "arrastre, trackpad y flechas de cristal 52px (solo escritorio); inercia al soltar"
  chip:
    height: 40px
    heightMobile: 48px
    border: "1.5px solid {colors.white}"
    textColor: "{colors.white}"
    active: "background {colors.white}; text {colors.primary-deep}"
    rounded: "{rounded.pill}"
  field:
    backgroundColor: "{colors.white}"
    border: "1.5px solid {colors.sky}"
    focus: "border {colors.primary}; glow 0 0 0 4px rgba(43, 89, 255, 0.25)"
    height: 52px
    rounded: "{rounded.field}"
  palette-swatch:
    size: 120px x 160px
    rounded: "{rounded.pill}"
    label: "hex en Jakarta SemiBold 14px (12px en móvil)"
    mobile: "misma altura; hasta 4 por línea; 5 o más en filas de 3"
  image-viewer:
    backgroundColor: "rgba(6, 6, 12, 0.9) + blur 18px"
    image: "contenida, radio 20px (14px en móvil)"
    controls: "cerrar 48px, flechas 48px en escritorio, contador"
    gestures: "deslizar a los lados = cambiar imagen; deslizar hacia abajo = cerrar; ← → Esc"
    zoom: "móvil: pellizcar con dos dedos (1× a 4×) o doble toque; con zoom el dedo recorre la imagen"
  social-icon:
    size: 44px
    sizeMobile: 48px
    border: "1.5px solid {colors.primary}"
    iconColor: "{colors.sky}"
    hover: "background {colors.primary}; icon {colors.white}"
---

# Daniela Yañez — Sistema de diseño

Referencia visual: [`design.html`](design.html) · Documento completo: [`DESIGN.docx`](DESIGN.docx)

## Overview

La personalidad de mi marca es vibrante, auténtica y visualmente atractiva. Tiene una presencia que merece ser vista, pero que no necesita recurrir al exceso para destacar. Se caracteriza por sus matices, contrastes y una estética cuidadosamente equilibrada, donde cada elemento tiene un propósito y un lugar.

Es expresiva y tiene carácter, pero no es estridente ni caótica. Busca una armonía visual en la que la fuerza estética convive con el orden y la claridad. Se dirige a personas que disfrutan de una estética Y2K reinterpretada desde una perspectiva contemporánea, que aprecian la experimentación visual y no temen a las propuestas con personalidad propia.

## Colors

La identidad cromática es amplia, luminosa y versátil. El **azul eléctrico** es su principal distintivo, seguido del **azul rey**. A partir de ellos se construye una paleta de colores luminosos, sin tonalidades fosforescentes ni saturación excesiva. El color se trabaja con paletas análogas y encuentra su principal expresión en los **Liquid Aurora Gradients**.

### Azules de marca

| Token | Color | Uso |
|---|---|---|
| `{colors.primary}` | `#2B59FF` azul eléctrico | Botones de acción, acentos, enlaces y elementos clave. Punto de partida de casi todos los degradados. |
| `{colors.primary-deep}` | `#1E3BB3` azul rey | Peso y profundidad en fondos, bloques destacados y la parte más oscura de los degradados. |

### Neutros base

| Token | Color | Uso |
|---|---|---|
| `{colors.ink}` | `#0A0A10` negro profundo | Texto sobre fondos claros y fondo oscuro donde los degradados brillan más. |
| `{colors.white}` | `#FFFFFF` blanco | Texto sobre fondos oscuros, texto de botones y estado hover de los botones. |

### Colores aurora (degradados y acentos)

| Token | Color | Uso |
|---|---|---|
| `{colors.sky}` | `#8FB4FF` azul cielo | Puente entre los azules de marca y los tonos luminosos. |
| `{colors.cyan}` | `#5CCBF0` cian aurora | Frescura y luz en movimiento. |
| `{colors.violet}` | `#7B5CFF` violeta | Vecino natural del azul eléctrico; transición hacia los rosas. |
| `{colors.lavender}` | `#BBA9FF` lavanda | Zonas de luz dentro de los degradados. |
| `{colors.orchid}` | `#E557A8` rosa orquídea | La nota cálida y expresiva. |
| `{colors.pink-soft}` | `#F6A9CF` rosa suave | Halos, brillos y transiciones delicadas. |
| `{colors.lime}` | `#B9E25E` verde lima | Toque fresco y muy Y2K, bien dosificado. |
| `{colors.coral}` | `#FF8466` coral | Acento cálido ocasional en las auroras de tonos fuego. |

> El rosa del conejito (`#FFA4D0`) se reserva para mi motivo gráfico.

### Versión clara (design.html)

La página de referencia del sistema usa fondo casi blanco con la misma aurora en tonos cielo (`#7FA6FF`), lavanda (`#A88CFF`), rosa (`#F59BCB`) y cian (`#6FD3F5`), un poco más saturados para que el degradado se note y no rompa la unidad con la landing oscura. El texto se mantiene en negro profundo.

### Aurora por sección

Cada sección de la landing cambia la aurora del fondo; siempre son cuatro colores y siempre hay uno de mis azules. Cada proyecto abre con una aurora armada con sus propios colores, anclada en el azul eléctrico.

## Typography

**Capsule** (display, Adobe Fonts) aporta carácter y presencia; **Plus Jakarta Sans** (Google Fonts) aporta claridad, orden y legibilidad.

### Escala

| Rol | Familia y peso | Escritorio | Móvil | Interlineado |
|---|---|---|---|---|
| Composición del inicio (PORT / FOLIO) | Capsule Regular | hasta 280 px | ~96 px | 0.82 |
| Títulos de sección | Capsule Regular | 64 px | 40 px | 1.05 |
| Títulos protagonistas (KIT, TRABAJO, ¿CREAMOS ALGO?, proyectos) | Capsule Regular | 120–210 px | 52–76 px | 0.85–0.95 |
| Nombre y profesión del inicio | Jakarta Bold 700 | 28 px | 20 px | 1.25 |
| Subtítulos secundarios | Jakarta SemiBold 600 | 22 px | 20 px | 1.3 |
| Botones | Jakarta SemiBold 600 | 16 px | 15 px | 1.0 · +2 % |
| Textos destacados | Jakarta Medium 500 | 20 px | 18 px | 1.5 |
| Navegación | Jakarta Medium 500 | 15 px | 15 px | 1.2 |
| Etiquetas y pies de imagen | Jakarta Medium 500 | 13 px | 12 px | 1.4 · +8 % |
| Texto de cuerpo | Jakarta Regular 400 | 16 px | 16 px | 1.6 |

### Reglas tipográficas

- Capsule usa un solo peso (Regular) y un interletrado abierto de **+4 %**. Sus formas redondas y anchas tienden a juntarse, y con el tracking cerrado algunas palabras costaban trabajo de leer, sobre todo en tamaños medianos y en celular. Solo la composición del inicio (PORT / FOLIO) conserva −1 %, porque funciona como imagen tipográfica y no como texto de lectura.
- Plus Jakarta Sans trabaja con cuatro pesos: 700, 600, 500 y 400.
- Sin palabras huérfanas al final de los párrafos.

## Layout

### Espaciado

Escala de 4 px inspirada en Fibonacci: **4, 8, 12, 20, 32, 52, 84 y 144 px**.

| Rango | Uso |
|---|---|
| 4–12 px | Dentro de un mismo componente (ícono y texto). |
| 20–32 px | Interior de tarjetas y separación de grupos. |
| 52–84 px | Bloques dentro de una misma sección. |
| 144 px | Entre secciones grandes en escritorio. |

### Retícula y anchos

Retícula de 12 columnas con medianiles de 24 px, ancho máximo de contenido de 1280 px y márgenes de 64 px. Los degradados aurora se extienden a todo el ancho de la pantalla.

### Comportamiento responsivo

| Formato | Rango | Retícula | Márgenes | Entre secciones |
|---|---|---|---|---|
| Escritorio | 1024 px en adelante | 12 columnas · 24 px | 64 px | 144 px |
| Móvil | hasta 1023 px | 4 columnas · 16 px | 20 px | 52 px |

En móvil: menú a pantalla completa con fondo aurora y enlaces en Capsule; las cápsulas de proyecto siguen en horizontal (160 px); las paletas mantienen sus muestras a la misma altura; las muestras tipográficas se alinean a la izquierda con su proporción real; todo lo táctil mide mínimo 48 × 48 px; la aurora queda estática para cuidar la batería.

## Elevation & Depth

| Nivel | Especificación | Uso |
|---|---|---|
| Plano | Sin efectos | Texto, fondos y elementos en reposo. |
| Cristal | Blanco al 10 %, desenfoque de 20 px y borde blanco de 1 px al 20 % | Navegación al hacer scroll, formulario y paneles sobre la aurora. |
| Resplandor | `0 12px 40px rgba(43, 89, 255, .35)` | Hover de cápsulas e imágenes destacadas. |
| Aurora | Degradados de fondo animados | Profundidad atmosférica detrás del contenido. |

## Shapes

- Botones, etiquetas y cápsulas de proyecto: cápsula completa (`{rounded.pill}`, 999 px).
- Contenedores grandes y bloques destacados: 24 px.
- Imágenes y paneles dentro de cada proyecto: 20–28 px en escritorio y 10–14 px en móvil.
- Campos de formulario: 14 px.
- **Motivo gráfico:** un conejito sobre una flor, en líneas finas rosas (`#FFA4D0`) con destellos y un brillo rosa suave. Aparece en la navegación, en el footer (para volver al inicio) y como favicon.

## Components

### Botones

- **Principal:** `{colors.primary}` con texto blanco y borde de 1.5 px del mismo azul; 48 px de alto, 14 × 28 px de espacio interno, cápsula. En hover se pone blanco con texto azul y crece a escala 1.05 en 0.25 s; al presionarlo regresa a su tamaño. Deshabilitado: negro con texto blanco.
- **Secundario:** contorno blanco de 1.5 px, fondo transparente y texto blanco; mismo hover.

### Navegación

72 px de alto, transparente sobre el inicio y de cristal al hacer scroll. Conejito y nombre a la izquierda; enlaces en Jakarta Medium 15 px a la derecha; punto azul en la sección activa.

### Cápsulas de proyecto

Ventanas verticales de 200 px con el logotipo o nombre del proyecto sobre una aurora con sus colores y borde blanco translúcido de 1 px. En hover se ensanchan a 260 px, se iluminan con el resplandor y muestran categoría y año en Jakarta Medium 12 px. Al final de cada proyecto se repiten en miniatura (84 × 140 px).

- **Selección:** al elegir un proyecto, la línea hace un recorrido rápido (0.55 s, salida suave) hacia la izquierda o la derecha hasta dejar la cápsula completa y centrada; se queda fija a 260 px (190 px en móvil) con borde blanco de 2 px y su categoría visible. Así ninguna cápsula se queda partida en la orilla de la pantalla.
- **Recorrido libre:** la línea se puede mover sin esperar la vuelta completa: arrastrándola, deslizando en el trackpad o con dos flechas de cristal de 52 px a los lados (solo escritorio, mismo hover que los botones). Al soltarla conserva un poco de inercia y retoma su movimiento tras una pausa breve.

### Etiquetas

- **Filtros:** cápsulas de 40 px con contorno blanco, texto blanco en Jakarta Medium 12 px en mayúsculas; la activa se rellena de blanco con texto azul rey.
- **Intereses:** cápsulas de color sólido con texto blanco en Jakarta SemiBold 13 px.

### Campos y formularios

Fondo blanco, borde de 1.5 px en azul cielo, radio de 14 px y 52 px de alto; al enfocarse, borde azul eléctrico con resplandor suave. Etiquetas arriba en Jakarta Medium 13 px.

### Muestras de paleta

Cápsulas de color de 120 × 160 px con su código hex debajo; todas a la misma altura. En móvil se hacen más pequeñas para mantener el orden: hasta cuatro colores en una línea y, si son cinco o más, filas de tres (3 + 2 o 3 + 3), sin reducirlas tanto que pierdan presencia.

### Visor de imágenes

Al tocar una imagen, mockup o diseño dentro de un proyecto, se abre en grande sobre la página, con fondo oscuro de cristal, sin mover ni desplegar el contenido de abajo. Se cambia de imagen deslizando a los lados (o con flechas y teclado en escritorio) y se cierra deslizando hacia abajo o con el botón de cerrar. Así se ven los detalles de cada pieza sin perder el lugar en la landing. En celular se puede hacer y deshacer zoom pellizcando con dos dedos (hasta 4×) o con doble toque; con zoom, el dedo recorre la imagen y no cambia de imagen ni cierra el visor por accidente.

### Íconos sociales

Círculos de 44 px con contorno azul eléctrico e ícono azul cielo; en hover se rellenan de azul y el ícono se pone blanco.

### Pie de página

Franja aurora de lado a lado con mi nombre, mis redes, el enlace al sistema de diseño y el conejito para volver arriba.

## Do's and Don'ts

### Sí

- El azul eléctrico manda en todas las acciones importantes.
- Los degradados se arman con colores análogos y tienen uno de mis dos azules.
- El texto va en blanco o en negro profundo, según el fondo.
- Capsule solo va en títulos grandes, uno por sección.
- El espacio en blanco respira alrededor de los degradados.
- Formas de cápsula y redondeos suaves en todos los componentes.
- Con "reducir movimiento" activado, los degradados dejan de animarse.

### No

- Nada de colores fosforescentes ni súper saturados.
- No se pone texto sobre un degradado con zonas muy claras y muy oscuras a la vez.
- Un mismo degradado no lleva más de cuatro colores.
- No van dos elementos con resplandor uno junto al otro.
- Los componentes interactivos no llevan esquinas rectas.
- Los colores aurora no se usan para texto corrido; solo como acento en hover, íconos o mensajes de error.
- No compiten varias animaciones protagonistas en la misma pantalla.
