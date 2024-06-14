let loaded = (eventLoaded) => {

  window.alert("landing page loaded");
  console.log(eventLoaded);
  submitValues();

}

window.addEventListener("DOMContentLoaded", loaded);

let submitValues = () => {

  const form = document.getElementById('formulario');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const blog = document.getElementById('blog').value;

    const datos = {
      nombre: nombre,
      email: email,
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
        console.log(datos);
      })
      .catch(error => console.error(error));
  });

}

let map = new Map();

async function obtenerDatos() {
  const url = "'https://prueba-f6141-default-rtdb.firebaseio.com/collection.json'";
  const respuesta = await fetch(url);

  if (!respuesta.ok) {
    console.error("Error:", respuesta.status);
    return;
  }

  const datos = await respuesta.json();


}

obtenerDatos();