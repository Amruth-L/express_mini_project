const express = require("express");
const app = express();
let errorCount = 0;
app.get('/user', function (req, res) {
    throw new Error("user not found");
    res.status(200).json({ name: 'john' });
});
app.use(function (err, req, res, next) {
    res.status(404).send({})
    errorCount = errorCount + 1;
})
app.listen(3009);
module.exports = app;
