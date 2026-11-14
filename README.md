# Landing CV · Daniela Yañez

**Autora:** María Fernanda Daniela Yañez Cruz (Daniela Yañez) · Diseñadora Gráfica Digital · Universidad La Salle

Este repositorio contiene mi landing de CV y portafolio digital, y la referencia visual de mi sistema de diseño. El contenido sale de [`CV.md`](CV.md) y la identidad visual de [`DESIGN.md`](DESIGN.md).

## Páginas publicadas

- **Landing CV y portafolio:** https://dannielayanezc.github.io/Portfolio_TECEM/
- **Sistema de diseño:** https://dannielayanezc.github.io/Portfolio_TECEM/design.html

## Documentos

- [`CV.md`](CV.md): todo el contenido y los enlaces de la landing.
- [`DESIGN.md`](DESIGN.md): tokens y reglas del sistema de diseño.
- [`Arquitectura-CV.docx`](Arquitectura-CV.docx) · [PDF](assets/pdf/Arquitectura-CV.pdf): arquitectura de la información y contenidos.
- [`DESIGN.docx`](DESIGN.docx) · [PDF](assets/pdf/DESIGN.pdf): sistema de diseño completo.

## Contenido del repositorio

| Archivo | Qué es |
|---|---|
| `index.html` | Landing de CV y portafolio (tema oscuro con Liquid Aurora). |
| `design.html` | Referencia visual del sistema de diseño (tema claro con la misma estética). |
| `css/styles.css` | Estilos de la landing: tokens, aurora, componentes, responsivo (móvil y escritorio) e impresión. |
| `css/design.css` | Estilos de la página del sistema de diseño. |
| `js/main.js` | Aurora por sección, navegación y menú móvil, cinta de disciplinas, círculos de herramientas, cápsulas de proyecto con filtros, desglose de cada proyecto, visor de imágenes con gestos, vistas 360° y formulario de contacto. |
| `assets/img/` | Foto, conejito, logotipos e imágenes de los proyectos. |
| `assets/giro/` | Secuencias de las vistas 360° de los envases de Baygon. |
| `assets/pdf/` | Documentos del proyecto en PDF. |

Hecho con HTML, CSS y JavaScript, sin librerías externas. Tipografías: Capsule (Adobe Fonts) y Plus Jakarta Sans (Google Fonts).

## Proyectos incluidos

Estrellas Variables · Baygon · FICM · Kleenex Winter · Libro Azul · Femme Fatale · Sushi Roll

## Cómo verlo localmente

1. Abre `index.html` directamente en el navegador, o levanta un servidor local:
   ```bash
   python3 -m http.server 8765
   ```
2. Entra a `http://localhost:8765/`.

## Accesibilidad

- Navegación completa con teclado, incluido el visor de imágenes (← → para cambiar, Esc para cerrar).
- Enlace **Saltar al contenido**.
- Foco visible en todos los elementos interactivos.
- Texto en blanco o negro profundo, con contraste AA.
- Respeta la preferencia de **reducir movimiento**: la aurora y las animaciones se detienen.
- Áreas táctiles de mínimo 48 × 48 px en móvil.
- Estilos de impresión: fondo blanco, texto negro y lista de proyectos.
- Textos alternativos en todas las imágenes de los proyectos.
