
const button = document.querySelectorAll(".reserv input");
var reser = document.querySelector('input[value="reservar"]');


console.log(reser.value);
console.log(button);

 for (let i = 0; i < button.length; i++) {
button[i].addEventListener("click", function(e){ 
     prueba(e.target);
 });
    }

for (let i = 0; i < reser.length; i++) {
  reser[i].addEventListener("click", function(e){ 
    prueba(e.target);
  });
  console.log(reser.value);
console.log(button);

}
 
  function prueba(p){
    //   console.log(p);
    
    if (p.style.backgroundColor == "black" && reser.value == "Reservado") {
      p.style.backgroundColor = "white";
      reser.value = "Reservar";
      p.style.color = "black";
    } else {
      p.style.backgroundColor = "black";
      p.style.color = "green";
    reser.value = "Reservado";
    }
    
  }


//   var Myelement = document.getElementById("reser");
// console.log(Myelement.value);
// Myelement.value = "New value";
// console.log(Myelement.value);