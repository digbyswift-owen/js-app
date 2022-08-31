const express = require('express');
const { nameList } = require('./src/js/names.js');

const app = express();
const port = 3000;

app.use(express.urlencoded({extended:true}));

app.post('/form-post', (req, res) => {
    const name = req.body.name;
    nameList.push(name);
    res.status(200).send('Thank You For Submitting');
})

app.get('/names', (req, res) => {
    res.sendFile(__dirname + '/src/pages/submitted-names.html');
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.listen(port, () => console.log(`Listening on ${port}`))