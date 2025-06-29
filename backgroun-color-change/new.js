let modeBtn = document.querySelector("#btn");
let mode = "light";

modeBtn.addEventListener("click",()=>{
    if(mode === "light"){
        document.querySelector("body").style.backgroundColor = "black";
        mode="dark";
    } else{
        document.querySelector("body").style.backgroundColor = "white";
        mode= "light";
    }
    console.log(mode);
})