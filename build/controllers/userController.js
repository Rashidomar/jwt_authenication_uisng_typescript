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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.registerUser = exports.getUsers = void 0;
const Users_1 = require("../models/Users");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield Users_1.User.find({});
    if (allUsers) {
        return res.json({
            "msg": "true",
            "users": allUsers
        });
    }
    else {
        return res.json({
            "msg": "false",
            "users": null
        });
    }
});
exports.getUsers = getUsers;
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // await connect('mongodb://127.0.0.1:27017/typescript');
    try {
        const { name, email, password } = req.body;
        if (!(name && email && password)) {
            return res.json({
                "message": "All fields are required"
            });
        }
        const newUser = yield Users_1.User.create({
            name: name,
            email: email,
            password: password
        });
        console.log(newUser);
        if (newUser) {
            return res.json({
                "message": "Registration Successful"
            });
        }
        else {
            return res.json({
                "message": "Registration failed"
            });
        }
    }
    catch (error) {
        return res.json({
            "message": error
        });
    }
});
exports.registerUser = registerUser;
// registerUser('Bill', 'bill@initech.com', "1234").catch(err => console.log(err));
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    if (!(name && email)) {
        return res.json({
            "message": "All fields are required"
        });
    }
    const updateUser = yield Users_1.User.findOneAndUpdate({ email: email }, { name: name });
    console.log(updateUser);
    if (updateUser) {
        return res.json({
            "message": "Registration Successful"
        });
    }
    else {
        return res.json({
            "message": "Registration failed"
        });
    }
});
exports.updateUser = updateUser;
// updateUser('billy', 'bill@initech.co').catch(err => console.log(err));
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    if (!(email)) {
        return res.json({
            "message": "All fields are required"
        });
    }
    const updateUser = yield Users_1.User.findOneAndDelete({ email: email });
    console.log(updateUser);
    if (updateUser) {
        return res.json({
            "message": "Registration Successful"
        });
    }
    else {
        return res.json({
            "message": "Registration failed"
        });
    }
});
exports.deleteUser = deleteUser;
// deleteUser('bill@initech.com').catch(err => console.log(err));
// export default {registerUser, getUsers}
