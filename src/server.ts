import express, {Request, Response, NextFunction} from 'express';
import 'express-async-errors';
import {router} from './routes';
import {Pool} from 'pg';

const port = 3333;
const app = express();
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'wishlist',
    password: '1234',
    port: 5432,
})

app.use(express.json());

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return response.status(400).json({
            error: err.message,

        })
    }

    return response.status(500).json({
        status: 'error',
        message: 'Internal server Error'
    })
})

app.listen(port, async () => {
    console.log(`Server rodando na porta : (${port})`);

})