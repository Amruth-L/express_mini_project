const express = require("express");
const app = express();
const users = [{
    name: "john",
    kidneys: [{
        healthy: false
    }]
}]
app.use(express.json());
app.get("/", function (req, res) {
    const johnkidneys = users[0].kidneys;
    const numberofkidneys = johnkidneys.length;
    let numberofhealthykidneys = 0;
    for (let i = 0; i < johnkidneys.length; i++) {
        if (johnkidneys[i].healthy) {
            numberofhealthykidneys = numberofhealthykidneys + 1;

        }
    }
    const numberofunhealthykidneys = numberofkidneys - numberofhealthykidneys;
    res.json({
        numberofkidneys,
        numberofhealthykidneys,
        numberofunhealthykidneys
    })
})
app.post("/", function (req, res) {

    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})
app.put("/", function (req, res) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;

    }
    res.json({});
})
app.delete("/", function (req, res) {
    const newkidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].healthy) {
            newkidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newkidneys;
    res.json({ msg: "done!!" })

})
app.listen(3003);
// app.put("/", function (req, res) {


// })
// app.delete("/", function (req, res) {


// })
// app.listen(3003);