let loaded = (eventLoaded) => {


  submitValues();
  obtenerDatos();

}

window.addEventListener("DOMContentLoaded", loaded);

let submitValues = () => {

  const form = document.getElementById('formulario');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const blog = document.getElementById('BlogOptions').value;

    const datos = {
      email: email,
      nombre: nombre,
      blog: blog,
    };
    fetch('https://prueba-f6141-default-rtdb.firebaseio.com/collection.json', {
      method: 'POST',
      body: JSON.stringify(datos),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(respuesta => respuesta.json())
      .then(datos => {
        alert("¡Tu respuesta ha sido guardada con exito");
        obtenerDatos();

      })
      .catch(error => console.error(error));
  })
  obtenerDatos();

}

async function obtenerDatos() {
  const url = 'https://prueba-f6141-default-rtdb.firebaseio.com/collection.json';
  const respuesta = await fetch(url);
  if (!respuesta.ok) {
    console.error("Error:", respuesta.status);
    return;
  }
  const datos = await respuesta.json();
  const map = new Map;
  for (let data in datos) {
    const MapB= datos[data]
    console.log(MapB.blog);
    const Topic= MapB.blog
   if(map.has(Topic)){
      map.get(Topic).push(MapB.nombre);
    }
    else{
      map.set(Topic,[MapB.nombre])
    }
  }
  const newMap = Array.from(map.entries()).sort((a, b) => b[1].length  - a[1].length);

  const sortedMap = new Map(newMap);

  const Tabla = document.getElementById("tablebody");
  Tabla.innerHTML = "";
  sortedMap .forEach((Nombre, Topic)=>{
    const fila = Tabla.insertRow();
    fila.insertCell().textContent = Topic;
    fila.insertCell().textContent = Nombre.length;
  })
}

