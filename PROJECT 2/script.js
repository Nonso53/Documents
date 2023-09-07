function generatePassword() {
    const lenght= document.getElementById("lenght");
    const word= document.getElementById("password");
    const el= document.querySelector("#prompt");
    lenght.innerHTML= "Lenght:"+ el.getAttribute("style").length;
    word.innerHTML= "Password generated";
}