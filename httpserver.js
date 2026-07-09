const express = require("express");
const app = express();

function Middleware(req, res, next) {
    console.log("Method is = " + req.method);
    console.log("Host is = " + req.url);
    console.log(new Date());

    next();
}
app.use(Middleware);
app.get('/sum', function (req, res) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.json({
        answer: a + b
    })
})
app.get('/mul', function (req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        answer: a * b
    })
})
app.get('/div', function (req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        answer: a / b
    })
})
app.get('/sub/:a/:b', function (req, res) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.json({
        answer: a - b
    })
})
app.listen(3010);