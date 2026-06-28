const express = require('express');
const app = express();
const port = 3003;
//middleware
app.use(express.json());
const todo = [
    {
        id: 1,
        title: "Study Node.js",
    },
    {
        id: 2,
        title: "Study Express",
    },];


// route handlrs
app.get('/', (req, res) => {
    res.send("welcome to backend applicstion");
});
app.get('/todo', (req, res) => {
    res.json(todo);
});

// create todo
app.post('/todo', (req, res) => {
    console.log("Body:", req.body);//important 

    const newTodo = {
        id: todo.length + 1,
        title: req.body.title,
    };
    todo.push(newTodo);
    res.status(201).json(newTodo);
});

// update the todo 
app.put('/todo/:id', (req, res) => {
    const id = parseInt(req.params.id);
    for (let i = 0; i < todo.length; i++) {
        if (todo[i].id == id) {
            todo[i].title = req.body.title;
            return res.json(todo[i]);
        }
    }
    res.status(404).json({
        message: "Todo not found"
    });
});

app.delete('/todo/:id', (req, res) => {
    const id = parseInt(req.params.id);
    for (let i = 0; i < todo.length; i++) {
        if (todo[i].id == id) {
            todo.splice(i, 1);
            return res.json({
                message: "todo item deleted succesfully"
            });
        }
    }
    res.status(404).json({
        message: "todo not found"
    })
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});