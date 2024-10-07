function scrollMenu(direction) {
    const menu = document.querySelector('.menu-seleccion');
    const scrollAmount = 1; // Ajusta la cantidad de desplazamiento
    menu.scrollLeft += direction * scrollAmount;
}

function showSection(sectionId) {
    // Ocultar todas las secciones
    document.querySelectorAll('.food.container').forEach(section => {
        section.style.display = 'none';
    });

    // Mostrar la sección seleccionada
    document.getElementById(sectionId).style.display = 'block';
}

