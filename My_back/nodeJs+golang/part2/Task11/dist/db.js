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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users_metods = void 0;
// import { DataSource } from "typeorm"
const data_source_1 = require("./data-source");
const User_1 = require("./User");
// const myDataSource = new DataSource("./data-source")
const userRepository = data_source_1.PostgresDataSource.getRepository(User_1.User);
class Users_metods {
}
exports.Users_metods = Users_metods;
_a = Users_metods;
Users_metods.getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userRepository.find();
        return users;
    }
    catch (error) {
        return null;
    }
});
Users_metods.getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userRepository.findOneBy({ id });
        return user;
    }
    catch (error) {
        return null;
    }
});
Users_metods.createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = userRepository.create(user);
    yield userRepository.save(newUser);
    return `${user.name} ${user.secondname}`;
});
Users_metods.deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const deleteduser = yield userRepository.delete(id);
        return ((_b = deleteduser.affected) !== null && _b !== void 0 ? _b : 0) > 0;
    }
    catch (error) {
        return null;
    }
});
