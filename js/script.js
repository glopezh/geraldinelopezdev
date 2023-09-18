// Obtener todas las etiquetas de enlace del encabezado
const headerLinks = document.querySelectorAll(".header-link");

// Obtener todas las secciones de contenido
const contentSections = document.querySelectorAll(".content-section");

// Agregar un controlador de eventos clic a cada enlace de encabezado
headerLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    // Prevenir el comportamiento predeterminado de la etiqueta de anclaje
    event.preventDefault();

    // Eliminar la clase "active-section" de todas las secciones de contenido
    contentSections.forEach((section) => {
      section.classList.remove("active-section");
    });

    // Obtener el destino de la etiqueta de anclaje
    const targetId = link.getAttribute("href").substring(1);

    // Agregar la clase "active-section" a la sección de contenido correspondiente
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add("active-section");
    }
  });
});
