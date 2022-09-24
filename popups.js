const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal_container.classList.add('show');  
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});



const button = document.querySelectorAll(".reserv input");

button.addEventListener("click", function(e){ 
          prueba(e.target.parentNode.parentNode);
      });

  
  
  function prueba(p){
      // console.log(p);
      p.classList.toggle("seleccionado");
  }