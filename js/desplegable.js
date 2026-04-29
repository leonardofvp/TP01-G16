document.addEventListener('DOMContentLoaded', () => {
    const botonesDetalles = document.querySelectorAll('.boton-detalles');

    botonesDetalles.forEach(boton => {
        boton.addEventListener('click', () => {
            // Seleccionamos solo la tarjeta donde se hizo clic
            const tarjeta = boton.closest('.proyecto-item');
            const detalle = tarjeta.querySelector('.detalle-proyecto');
            
            // Alternamos la clase 'visible' solo en este detalle
            detalle.classList.toggle('visible');

            // Cambiamos el texto del botón según si la clase está presente
            if (detalle.classList.contains('visible')) {
                boton.textContent = 'Ocultar detalles';
            } else {
                boton.textContent = 'Ver detalles';
            }
        });
    });
});