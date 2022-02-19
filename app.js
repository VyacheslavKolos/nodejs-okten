const express = require('express');
const path = require("path");
const {engine} = require("express-handlebars")
const e = require("express");

const users = [
    {
        firstName: "Kokos",
        lastName: "Brekham",
        email: "asdwqe@gmail.com",
        password: "qwerty1",
        age: 19,
        city: "Lviv"
    },
    {
        firstName: "pomidor",
        lastName: "red",
        email: "pomik@gmail.com",
        password: "pomi123",
        age: 31,
        city: "Kyiv"
    }
]


const app = express();

app.use(express.static(path.join(__dirname, 'files', 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'files', 'static'));

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/users', (req, res) => {
    const {age, city} = req.query;
    if (age && city) {
        const filtredUsers = users.filter(user => user.age === Number(age) && user.city === city)
        res.render('user', {filtredUsers});
    } else {
        res.render('users', {users});
    }
});

app.get('/errorPage', (req, res) => {
    res.render('errorPage');
});

app.get('/users/:userId', (req, res) => {
    const {userId} = req.params;
    const user = users[userId-1];
    res.json(user);
});

app.post('/login', (req, res) => {
    users.map(user => {
        if (user.email !== req.body.email) {
            users.push(req.body);
            res.redirect('/users');
        } else {
            res.redirect('/errorPage')
        }
    })
});

app.use((req, res) => {
    res.render('notFound');
});

app.listen(4700, () => {
    console.log("Server has started on PORT 4700")
});