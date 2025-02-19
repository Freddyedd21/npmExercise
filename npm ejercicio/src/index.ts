import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv'; 
import { userRouter } from './routes/user.route';
dotenv.config();
const app: Express = express();
const port: number = process.env.PORT as any || 3000;

app.use('/user', userRouter);

app.get('/', (req, res) => { res.send('Hello World!') });

app.get('/error', (req, res) => { res.status(500).send('Error!') });

app.get('/not-found', (req, res) => { res.status(404).send('Not Found!') });

app.listen(port, () => {
    console.log(`Server is running on port 3000 ${port}`);
    });
