var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// console.log(css);
// console.log(color1);
// console.log(color2);
console.log(body);

// color1.addEventListener("input", function(){
//     console.log(color1.value);
//     body.style.background = 
//         "linear-gradient(to right, "
//                         +color1.value
//                         +","
//                         +color2.value
//                         +")";
// })

// color2.addEventListener("input", function(){
//     console.log(color2.value);
//     body.style.background = 
//         "linear-gradient(to right, "
//                         +color1.value
//                         +","
//                         +color2.value
//                         +")";
// })

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, "
                    +color1.value
                    +","
                    +color2.value
                    +")";
    
    css.textContent = body.style.background+";";
}

// setGradient() needs to be removed, as it sets the gradient when page loads
// but we want setGradient to fire as part of input action not separate call
// so the () brackets are removed when calling setGradient

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);