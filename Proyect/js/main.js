let loaded = ( eventLoaded ) => {
  
    window.alert("landing page loaded");
    console.log( eventLoaded );
    let myform = document.getElementById('#formulario');

    myform.addEventListener('submit', ( eventSubmit ) => { 

      debugger;})
  
  }

  window.addEventListener("DOMContentLoaded", loaded);

const form = document.getElementById('formulario');
form.addEventListener('submit', (event) => {
event.preventDefault();
const nombre = document.getElementById('nombre').value;
const email = document.getElementById('email').value;

const datos = {
nombre: nombre,
email: email,
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