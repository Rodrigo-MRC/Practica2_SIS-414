document.addEventListener('DOMContentLoaded', function() {
    const textoUsuario = document.getElementById('textoUsuario');
    const aplicarBtn = document.getElementById('aplicarBtn');
    const resultadoDiv = document.getElementById('resultado');
    const contador = document.getElementById('contador');
    
    // Función para actualizar el contador de caracteres
    function actualizarContador() {
        contador.textContent = `${textoUsuario.value.length} caracteres`;
    }
    
    // Evento para el botón Aplicar
    aplicarBtn.addEventListener('click', function() {
        resultadoDiv.textContent = textoUsuario.value;
    });
    
    // Evento para actualizar el contador mientras se escribe
    textoUsuario.addEventListener('input', actualizarContador);
    
    // Inicializar el contador
    actualizarContador();
});