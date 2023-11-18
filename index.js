const tareas = [];

function agregarTarea() {
  const nuevaTareaInput = document.getElementById('nuevaTarea');
  const nuevaTarea = nuevaTareaInput.value.trim();

  if (nuevaTarea !== '') {
    const tarea = { nombre: nuevaTarea, completada: false };
    tareas.push(tarea);
    actualizarListaTareas();
    nuevaTareaInput.value = '';
  }
}

function toggleCompletada(index) {
  tareas[index].completada = !tareas[index].completada;
  actualizarListaTareas();
}

function eliminarTarea(index) {
  tareas.splice(index, 1);
  actualizarListaTareas();
}

function actualizarListaTareas() {
  const listaTareas = document.getElementById('lista-tareas');
  listaTareas.innerHTML = '';

  tareas.forEach((tarea, index) => {
    const listItem = document.createElement('li');
    listItem.className = tarea.completada ? 'tarea completada' : 'tarea';
    listItem.innerHTML = `
      <span>${tarea.nombre}</span>
      <button onclick="toggleCompletada(${index})">Completar</button>
      <button onclick="eliminarTarea(${index})">Eliminar</button>
    `;
    listaTareas.appendChild(listItem);
  });
}
