const express = require("express");
const app = express();
let requestCount = 0;
function requestIncreaser() {
    requestCount = requestCount + 1;
    console.log("Total number of request = " + requestCount);
}
app.get('/sum', requestIncreaser, function (req, res) {
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