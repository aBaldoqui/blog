import express, { Request, Response } from 'express';
import path from 'path';
import  pagesRouter from './routes/pages';

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/', pagesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

