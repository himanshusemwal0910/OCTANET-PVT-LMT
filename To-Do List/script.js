let inputs = document.getElementById('inp');
let text = document.querySelector(".text");
function Add(){
    if(inputs.value == ""){
        alert("Please enter your daily task. ");
    }else{
        let newElm = document.createElement("ul");
        newElm.innerHTML= `${inputs.value}<i class="fa-solid fa-trash"></i>`;
        text.appendChild(newElm);
        inputs.value="";
        newElm.querySelector("i").addEventListener("click", remove);
        function remove(){
            newElm.remove();
        }
    }
}
