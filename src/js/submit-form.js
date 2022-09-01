export default {
    submitForm: (e) => {
        const name = e.target.name.value;
        fetch('./pages/thank-you.html', { method: 'GET'}).then((response) => {
            if(response.status == 200){
                window.location.href = `./pages/thank-you.html?name=${name}`;
            }
        })
    }
}
