//EJERCICIO GUIA

// function pintar(){
//     ele.style.backgroundColor = 'yellow'
//     }

// const ele = document.getElementById("ele1")
// ele.addEventListener("click", pintar);





//DESARROLLO 2.2
// function pintar(element){
//     element.style.backgroundColor = 'yellow'
//     }

// const ele = document.getElementById("ele1")
// ele.addEventListener("click", () => pintar(ele));





//DESARROLLO 2.3

function pintar(element, color = "green"){
    element.style.backgroundColor = color
    }

const ele = document.getElementById("ele1")
ele.addEventListener("click", () => pintar(ele, "yellow"));


