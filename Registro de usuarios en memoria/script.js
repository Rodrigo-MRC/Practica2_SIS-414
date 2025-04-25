document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario-usuario');
    const listaUsuarios = document.getElementById('lista-usuarios');
    const errorDiv = document.getElementById('error');
    const totalUsuarios = document.getElementById('total-usuarios');
    const buscador = document.getElementById('buscador');
    
    let usuarios = [];
    let usuariosMostrados = [];
    
    function mostrarUsuarios(usuariosAMostrar = usuarios) {
        listaUsuarios.innerHTML = '';
        usuariosMostrados = usuariosAMostrar;
        
        usuariosAMostrar.forEach((usuario, index) => {
            const realIndex = usuarios.findIndex(u => 
                u.nombre === usuario.nombre && 
                u.email === usuario.email && 
                u.edad === usuario.edad
            );
            
            const li = document.createElement('li');
            li.innerHTML = `
                ${usuario.nombre} (${usuario.edad} años) - ${usuario.email}
                <button class="eliminar-btn" data-id="${realIndex}">Eliminar</button>
            `;
            listaUsuarios.appendChild(li);
        });
        
        totalUsuarios.textContent = `Total: ${usuariosAMostrar.length}`;
        
        document.querySelectorAll('.eliminar-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = parseInt(this.getAttribute('data-id'));
                usuarios.splice(id, 1);
                filtrarUsuarios(buscador.value);
            });
        });
    }
    
    function filtrarUsuarios(terminoBusqueda) {
        const busqueda = terminoBusqueda.toLowerCase();
        const usuariosFiltrados = usuarios.filter(user =>
            user.nombre.toLowerCase().includes(busqueda)
        );
        mostrarUsuarios(usuariosFiltrados);
    }
    
    buscador.addEventListener('input', (e) => {
        filtrarUsuarios(e.target.value);
    });
    
    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const edad = document.getElementById('edad').value.trim();
        
        if (!nombre || !email || !edad) {
            errorDiv.textContent = 'Todos los campos son obligatorios';
            return;
        }
        
        if (isNaN(edad) || parseInt(edad) <= 0) {
            errorDiv.textContent = 'La edad debe ser un número válido';
            return;
        }
        
        errorDiv.textContent = '';
        
        usuarios.push({
            nombre,
            email,
            edad: parseInt(edad)
        });
        
        filtrarUsuarios(buscador.value);
        
        formulario.reset();
    });
    
    mostrarUsuarios();
});