// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Capturar elementos del DOM que serán manipulados
    const itemInput = document.getElementById('item');       // Campo de entrada para nuevos ítems
    const agregarButton = document.getElementById('agregar'); // Botón para agregar un nuevo ítem
    const limpiarButton = document.getElementById('limpiar'); // Botón para limpiar la lista de ítems
    const contenedor = document.getElementById('contenedor'); // Contenedor donde se mostrarán los ítems

    // Función para cargar los ítems desde localStorage
    function loadItems() {
        const items = JSON.parse(localStorage.getItem('items')) || [];  // Recuperar los ítems desde localStorage o un array vacío si no hay ninguno
        contenedor.innerHTML = items.map(item => `<li class="list-group-item">${item}</li>`).join(''); // Actualizar el contenedor con los ítems guardados
    }

    // Función para agregar un nuevo ítem
    agregarButton.addEventListener('click', () => {
        const newItem = itemInput.value.trim(); // Obtener y limpiar el valor del campo de entrada
        if (newItem !== '') { // Verificar que el campo no esté vacío
            const items = JSON.parse(localStorage.getItem('items')) || []; // Recuperar la lista existente de ítems o un array vacío
            items.push(newItem); // Agregar el nuevo ítem a la lista
            localStorage.setItem('items', JSON.stringify(items)); // Guardar la lista actualizada en localStorage
            loadItems(); // Actualizar la lista mostrada en la página
            itemInput.value = ''; // Limpiar el campo de entrada para el próximo ítem
        }
    });

    // Función para limpiar la lista
    limpiarButton.addEventListener('click', () => {
        localStorage.removeItem('items'); // Eliminar todos los ítems guardados en localStorage
        loadItems(); // Actualizar la lista mostrada en la página para reflejar que está vacía
    });

    // Cargar los ítems al inicializar
    loadItems(); // Ejecutar la función al cargar la página para mostrar cualquier ítem guardado
});
