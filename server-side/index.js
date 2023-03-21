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
const dotenv = require('dotenv');
const mongoose = require("mongoose");
dotenv.config();
const app = (0, express_1.default)();
mongoose.set('strictQuery', false);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const port = process.env.PORT;
const customers = [
    {
        "name": "Caleb",
        "industry": "music"
    },
    {
        "name": "John",
        "industry": "networking"
    },
    {
        "name": "Sal",
        "industry": "sports medicine"
    }
];
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.get('/api/customers', (req, res) => {
    res.send({ "customers": customers });
});
app.post('/api/customers', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});
app.post("/", (req, res) => {
    res.send("this is a post request");
});
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose.connect("mongodb+srv://armanwork991315:dbarman111@cluster0.5ahua98.mongodb.net/?retryWrites=true&w=majority");
        app.listen(port, () => {
            console.log(`[server]: Server is running at http://localhost:${port}`);
        });
    }
    catch (e) {
        console.error(e.message);
    }
});
start();
