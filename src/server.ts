import express, { Request, Response } from 'express';
import path from 'path';
import pagesRouter from './routes/pages';
import sequelize from './database/database';

const PORT = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/', pagesRouter);

app.listen(PORT, async () => {

    try {
        sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    console.log(`Servidor rodando na porta ${PORT}`);
});

