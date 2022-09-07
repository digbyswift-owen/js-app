const express = require('express');
const app = express();
const submitForm = require('./src/public/js/submit-form');
app.use(express.static(__dirname + '/dist'));
app.use(express.urlencoded({extended: true}));
app.set('views', __dirname + '/src/views');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
    res.render('index.html');
});

app.post('/thanks', (req, res) => {
    submitForm(req, res);
});

app.listen(3000, () => console.log('App is listening on port 3000.'));
