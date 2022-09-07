function submitForm(req, res) {
    const name = req.body.name;
    res.render('thank-you.html', {name: name});
    };


module.exports = submitForm;
