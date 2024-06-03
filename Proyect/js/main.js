let loaded = ( eventLoaded ) => {
  
    window.alert("landing page loaded");
    console.log( eventLoaded );
    let myform = document.getElementById('#formulario');

    myform.addEventListener('submit', ( eventSubmit ) => { 

      debugger;})
  
  }

  window.addEventListener("DOMContentLoaded", loaded);