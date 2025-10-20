const button = document.getElementById("change-color-btn");
const color = document.getElementById("color-box");
const container = document.getElementById("container");
//i have used arrow function because it is modern and it become a best practice
//mistake: math should Math
//there is a differnce between "" and ``
const getRandomColor = () =>{
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let p = `rgb(${x},${y},${z})`
    return p ;
}
//i want to see how event propagation actually occur here 
container.addEventListener("click",() =>{
    let newcolorr = getRandomColor();
    container.style.backgroundColor = newcolorr ;
    container.write(newcolorr)

})
button.addEventListener("click",()=>{
    let newcolor = getRandomColor();
    color.style.backgroundColor= newcolor ;

})