const express = require('express');
const app = express();
app.use(express.static(__dirname + '/dist'));
app.set('views', __dirname + '/src/views');
app.engine('html', require('ejs').renderFile);


app.get('/', (req, res) => {
    res.render('index.html');
});

app.get('/thanks', (req, res) => {
    res.render('thank-you.html');
});

app.listen(3000, () => console.log('App is listening on port 3000.'));
