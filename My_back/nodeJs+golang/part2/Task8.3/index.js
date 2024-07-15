const express = require('express')
const data = require('./db.js').users
const app = express()
require('dotenv').config()
app.set('port', process.env.PORT || 3000)
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/users', (req, res) => {
    data.getUsers((err, Users)=>{
        if(err) return next(err)
        res.send(Users)
        })
    })

app.get('/users/:id', (req, res) =>{
    const id = req.params.id
    data.getUserById(id, (err, User) => {
        if (err) return next(err)
        res.send(User)
    })
})
app.delete('/users/:id', (req, res) => {
    const id = req.params.id
    data.deleteUser(id, (err)=>{
        if (err) return next(err)
        res.send(`Пользователь с id = ${id} удален`)
    })
})
app.post("/users", (req, res, next) => {
    const { name, secondname } = req.body;
    if (!name || !secondname) {
        return res.status(400).send('Имя или фамилия не предоставлены');
    }
    data.createUser({ name, secondname }, (err) => {
        if (err) return next(err);
        res.send(`Пользователь отправлен`);
    });
});

app.listen(app.get('port'), ()=>{
    console.log(`Слушаем сревер по адресу http://127.0.0.1:${app.get('port')}`)
})
