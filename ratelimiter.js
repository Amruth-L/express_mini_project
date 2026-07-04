const express = require("express");
const app = express();
let numberOfRequestsForUsers = {};
setInterval(() => {
    numberOfRequestsForUsers = {};

}, 1000)

app.use(function (req, res, next) {
    const userId = req.headers.userId;
    if (numberOfRequestsForUsers[userId]) {
        numberOfRequestsForUsers[userId] = numberOfRequestsForUsers[userId] + 1;
        if (numberOfRequestsForUsers[userId] > 5) {

            res.status(404).send("No Entry ")
        }
        else {
            next();
        }
    } else {
        numberOfRequestsForUsers[userId] = 1;
        next();
    }
});
app.get("/", (req, res) => {
    res.send("welcome");
});
app.listen(3008, () => {
    console.log("server running on port 3008");
});