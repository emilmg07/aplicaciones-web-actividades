# Actividad 8 - Retiro Sustentable

## Estructura de la aplicación y módulos

La propuesta combina navegación MPA y una navegación interna de tipo SPA. La página `index.html` concentra la presentación y el catálogo de cabañas. Dentro de ella, el enlace “Cabañas” utiliza un ancla (`#catalogo`) para desplazarse a otra sección del mismo documento sin solicitar una nueva página, por lo que se adopta un comportamiento similar al de una SPA para la exploración del catálogo.

La página `reservas.html` se utiliza como un documento separado. Cuando la persona selecciona “Reservas” o pulsa el botón “Reservar” de una cabaña, el navegador carga otro archivo HTML. Esa parte responde al enfoque MPA, ya que la aplicación está compuesta por más de una página y existe navegación entre documentos.

SPA/MPA y CSR/SSR están relacionados, pero no significan lo mismo. Una SPA suele apoyarse en CSR (Client-Side Rendering), porque el navegador ejecuta JavaScript y actualiza partes de la interfaz sin recargar el documento completo. Una MPA suele relacionarse con SSR (Server-Side Rendering), porque cada navegación puede solicitar al servidor un nuevo HTML ya renderizado. Sin embargo, no es una relación obligatoria: una aplicación puede combinar estrategias. En esta práctica se trabaja con HTML estático, por lo que no se implementa un servidor de renderizado ni un framework de CSR; los conceptos se aplican para comprender la arquitectura de navegación.

## HTML

Se reemplazaron contenedores genéricos por elementos semánticos como `header`, `nav`, `main`, `section`, `article` y `footer`. Esto mejora la estructura del documento, la accesibilidad y la comprensión del código.

El isologotipo se incluyó en ambas páginas y funciona como enlace a `index.html`. También utiliza el atributo `alt`, importante porque proporciona una descripción textual a tecnologías de asistencia y sirve como alternativa cuando una imagen no puede visualizarse.

El catálogo incluye las cuatro cabañas, cada una con imagen, descripción, precio por día y un enlace hacia la página de reservas. El formulario incorpora etiquetas `label` correctamente vinculadas con los campos mediante `for` e `id`, y solicita nombre, teléfono, email, fecha desde, fecha hasta y comentario.

## CSS

Las reglas se organizaron priorizando la cascada: primero aparecen reglas generales con selectores de tipo y después reglas de clase para bloques y componentes. De esta manera se evita aumentar innecesariamente la especificidad.

Se utiliza `box-sizing: border-box` para aplicar el modelo de caja alternativo. La tipografía local Sora se declara con `@font-face` y se aplica desde el elemento raíz `html`, junto con un tamaño general de `16px`.

El encabezado utiliza `display: flex`, lo cual modifica el comportamiento de sus hijos y permite distribuir el logo y la navegación. Encabezado y pie comparten el mismo color de fondo. También se definieron reglas de clase para los principales bloques del layout, entre ellas `.encabezado`, `.contenido` y `.pie`, además de estilos específicos para catálogo, tarjetas y formulario.
