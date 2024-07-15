"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = require("./db"); // Предполагаем, что у вас есть db.ts, который экспортирует users
// import { DataSource } from './db';
(0, dotenv_1.config)(); // Загрузка конфигураций из .env файла
const app = (0, express_1.default)();
app.set('port', process.env.PORT || 3228);
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userss = yield db_1.Users_metods.getUsers();
    res.send(userss);
}));
app.get('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = +req.params.id;
    const userr = yield db_1.Users_metods.getUserById(id);
    res.send(userr);
}));
app.delete('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = +req.params.id;
    const deleteduser = yield db_1.Users_metods.deleteUser(id);
    res.send(deleteduser);
}));
app.post('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, secondname } = req.body;
    if (!name || !secondname) {
        return res.status(400).send('Имя или фамилия не предоставлены');
    }
    const aboba = yield db_1.Users_metods.createUser({ name, secondname });
    res.send(`Пользователь ${aboba} создан`);
}));
app.listen(app.get('port'), () => {
    console.log(`Слушаем сервер по адресу http://127.0.0.1:${app.get('port')}`);
});
