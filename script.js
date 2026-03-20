let ms = document.getElementById('ms');

ms.addEventListener("click", ()=>{
    if (document.getElementById('sidemenu').style.display === "block") {
        document.getElementById('sidemenu').style.display = "none";
    } else {
        document.getElementById('sidemenu').style.display = "block";
    }
})