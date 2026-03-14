// Esperamos a que todo el contenido HTML esté cargado
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleccionamos todos los elementos que tienen la clase 'fade-in'
    const elementosAnimables = document.querySelectorAll('.fade-in');

    // Configuramos nuestro "observador"
    const opciones = {
        root: null, // Usa el marco de la ventana (viewport)
        rootMargin: '0px',
        threshold: 0.15 // El 15% del elemento debe estar visible para lanzar la animación
    };

    const observador = new IntersectionObserver((entradas, observador) => {
        entradas.forEach(entrada => {
            // Si el elemento entra en la pantalla...
            if (entrada.isIntersecting) {
                // Le agregamos la clase que dispara la animación CSS
                entrada.target.classList.add('visible');
                
                // Dejamos de observarlo para que la animación solo ocurra una vez
                observador.unobserve(entrada.target);
            }
        });
    }, opciones);

    // Le decimos al observador que vigile cada uno de los elementos
    elementosAnimables.forEach(elemento => {
        observador.observe(elemento);
    });
});