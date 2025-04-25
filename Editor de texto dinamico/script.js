document.addEventListener('DOMContentLoaded', function() {
    const textoUsuario = document.getElementById('textoUsuario');
    const aplicarBtn = document.getElementById('aplicarBtn');
    const resultadoDiv = document.getElementById('resultado');
    const contador = document.getElementById('contador');
    
    function actualizarContador() {
        contador.textContent = `${textoUsuario.value.length} caracteres`;
    }

    aplicarBtn.addEventListener('click', function() {
        resultadoDiv.textContent = textoUsuario.value;
    });
    
    textoUsuario.addEventListener('input', actualizarContador);
    
    actualizarContador();
});