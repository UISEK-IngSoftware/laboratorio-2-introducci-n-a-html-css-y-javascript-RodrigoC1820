document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado - JavaScript funcionando');

    const toggleHabilidades = document.getElementById('toggle-habilidades');
    const habilidades = document.getElementById('habilidades');

    const toggleEducacion = document.getElementById('toggle-educacion');
    const educacion = document.getElementById('educacion');

    function toggleElement(element) {
        if (element.classList.contains('oculto')) {
            element.classList.remove('oculto');
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
            element.classList.add('oculto');
        }
    }

    if (toggleHabilidades && habilidades) {
        toggleHabilidades.addEventListener('click', function() {
            toggleElement(habilidades);
        });
    }

    if (toggleEducacion && educacion) {
        toggleEducacion.addEventListener('click', function() {
            toggleElement(educacion);
        });
    }

    const header = document.querySelector('header');

    if (header) {
        header.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });

        header.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
});