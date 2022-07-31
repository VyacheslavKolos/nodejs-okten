const express = require('express');
const path = require('path');
const {engine} = require('express-handlebars');
const e = require('express');

const users = [
    {
        firstName: 'Kokos',
        lastName: 'Brekham',
        email: 'asdwqe@gmail.com',
        password: 'qwerty1',
        age: 19,
        city: 'Lviv'
    },
    {
        firstName: 'pomidor',
        lastName: 'red',
        email: 'pomik@gmail.com',
        password: 'pomi123',
        age: 31,
        city: 'Kyiv'
    }
];

const userBySignIn = [];

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/users', (req, res) => {
    const {age, city} = req.query;
    if (age && city) {
        const filteredUsers = users.filter(user => user.age === Number(age) && user.city === city);
        res.render('user', {filteredUsers});
    } else {
        res.render('users', {users});
    }
});

app.get('/users/:userId', (req, res) => {
    const {userId} = req.params;
    res.json(users[userId - 1]);
});

app.get('/errorPage', (req, res) => {
    res.render('errorPage', {users});
});

app.get('/userBySignIn', (req, res) => {
    res.render('userBySignIn', {userBySignIn})
})

app.get('/signIn', (req, res) => {
    res.render('signIn');
});


app.post('/login', (req, res) => {
    users.map(user => {
        if (user.email !== req.body.email) {
            users.push(req.body);
            res.redirect('/users');
        } else {
            res.redirect('/errorPage');
        }
    });
});

app.post('/signIn', (req, res) => {
    const {email, password} = req.body
    users.map(user => {
        if (user.email === email && user.password === password) {
            userBySignIn.push(user);
            res.redirect('/userBySignIn')
        } else {
            res.redirect('/errorPage');
        }
    })
});


app.use((req, res) => {
    res.render('notFound');
});

app.listen(5200, () => {
    console.log('Server has started on port 5200!');
});


