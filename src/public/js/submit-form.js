export default {
    submitForm: (e) => {
        const name = e.target.name.value;
        fetch('/thanks', {method: 'GET'})
            .then((res) => {
                return res.text();
            })
            .then((text) => {
                document.getElementById('form-div').innerHTML = text;
                document.getElementById('name').innerHTML = name;
                document.getElementById('hide-button').style.display = 'none';
            });
    },
};

