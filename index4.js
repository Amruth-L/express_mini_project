const express = require("express");
const app = express();
//function that returns the boolean (if the age of person is more than 14)
function isOldEnough(age) {
    if (age >= 14) {
        return true;
    } else {
        return false;
    }
}
app.get("/ride1", function (req, res) {
    console.log(req.query);
    if (isOldEnough(req.query.age)) {
        res.json({
            msg: "you have successfully riden the ride 1"
        })
    } else {
        res.status(411).json({
            msg: "Sorry you are not at an age yet"
        })
    }

})
app.listen(3006);