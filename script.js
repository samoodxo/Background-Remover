let submitButton = document.getElementById("submit-pic");
let imgForm = document.getElementsByClassName("imgForm");
const fileChooser = document.getElementById("choose-file");
const result = document.getElementById("result");
const before = document.getElementById("before");


function beforeUpload(){
    const file = fileChooser.files[0];
    const img = document.createElement("img");
    const url = URL.createObjectURL(file);
    img.src = url;
    img.style.maxWidth = "500px";
    img.style.maxHeight = "500px";
    before.append(img);

}



function upload(){
    const APIkey = "xmV7wRAj87LWUstoVXWKyoxM";
    const fileChooser = document.getElementById("choose-file");
    const file = fileChooser.files[0];
    const formData = new FormData();
    formData.append("image_file",file);
    formData.append("size","auto");
    fetch("https://api.remove.bg/v1.0/removebg",{
        method:"POST",
        headers:{
            "X-Api-Key": APIkey,
        },
        body:formData
    })
    .then(function(response){
        return response.blob();
    })
    .then(function(blob){
        console.log(blob);
        const url = URL.createObjectURL(blob);
        const img = document.createElement("img");
        img.src = url;
        img.style.maxWidth = "500px";
        img.style.maxHeight = "500px";
        result.appendChild(img);
    })
    .catch();

    console.log("pressed");
}

fileChooser.addEventListener("change",beforeUpload);
submitButton.addEventListener("click",upload);
