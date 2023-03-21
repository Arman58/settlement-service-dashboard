import express, {Express, Request, Response, urlencoded} from "express";

const dotenv = require('dotenv');
const mongoose = require("mongoose")

dotenv.config();

const app: Express = express();
mongoose.set('strictQuery', false)
app.use(express.json())
app.use(express.urlencoded({extended: true}))
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
]

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.get('/api/customers', (req: Request, res: Response) => {
    res.send({"customers": customers})
})
app.post('/api/customers', (req: Request, res: Response) => {
    console.log(req.body)
    res.send(req.body)
})

app.post("/", (req: Request, res: Response) => {
    res.send("this is a post request")
})


const start = async () => {
    try {
        await mongoose.connect("mongodb+srv://armanwork991315:dbarman111@cluster0.5ahua98.mongodb.net/?retryWrites=true&w=majority")
        app.listen(port, () => {
            console.log(`[server]: Server is running at http://localhost:${port}`);
        });
    } catch (e: any) {
        console.error(e.message)
    }
}

start()