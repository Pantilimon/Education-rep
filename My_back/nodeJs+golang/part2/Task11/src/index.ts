import express, {Request, Response} from 'express';
import { config } from 'dotenv';
import bodyParser from 'body-parser';
import { Users_metods as data } from './db'; // Предполагаем, что у вас есть db.ts, который экспортирует users
// import { DataSource } from './db';


config(); // Загрузка конфигураций из .env файла

const app = express();
app.set('port', process.env.PORT || 3228);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/users', async (req: Request, res: Response) => {
    const userss = await data.getUsers()
    res.send(userss);
});

app.get('/users/:id', async (req: Request, res: Response) => {
    const id = +req.params.id;
    const userr = await data.getUserById(id);
    res.send(userr);
});

app.delete('/users/:id', async (req: Request, res: Response) => {
    const id = +req.params.id;
    const deleteduser = await data.deleteUser(id);
    res.send(deleteduser);
});

app.post('/users', async (req: Request, res: Response) => {
    const { name, secondname } = req.body;
    if (!name || !secondname) {
        return res.status(400).send('Имя или фамилия не предоставлены');
    }
    const aboba = await data.createUser({ name, secondname })
    res.send(`Пользователь ${aboba} создан`);
    });

app.listen(app.get('port'), () => {
    console.log(`Слушаем сервер по адресу http://127.0.0.1:${app.get('port')}`);
});
