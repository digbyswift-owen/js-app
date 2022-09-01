export default {   
   hideElement(){
        var form = document.getElementById("form-div");
        if (form.style.display === "none"){
            form.style.display = "block";
        } else {
            form.style.display = "none";
        }
    }
}

