export default {
    disableFlip: (e, buttonId) => {
        if(e.target.value == ""){
            document.getElementById(buttonId).disabled = true;
        } else{
            document.getElementById(buttonId).disabled = false;
        }
    }
}