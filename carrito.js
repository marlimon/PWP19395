document.getElementById('agregarProducto').addEventListener('click', function() {
    // Obtener los valores de los inputs
    let producto = document.getElementById('producto').value;
    let cantidad = document.getElementById('cantidad').value;
    
    // Validar que los campos no estén vacíos
    if (producto && cantidad > 0) {
        // Crear un nuevo elemento de lista con el producto y la cantidad
        let li = document.createElement('li');
        li.textContent = `${producto} - Cantidad: ${cantidad}`;
        
        // Agregar el producto a la lista del carrito
        document.getElementById('productosCarrito').appendChild(li);
        
        // Limpiar los inputs
        document.getElementById('producto').value = '';
        document.getElementById('cantidad').value = '';
    } else {
        alert('Por favor, ingresa un producto y una cantidad válida.');
    }
});
