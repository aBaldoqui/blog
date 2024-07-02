import express, { Request, Response } from 'express';
import path from 'path';
import { Post } from './types'; // Certifique-se de ter um tipo `Post` definido em um arquivo separado
import posts from './posts'; // Supondo que `posts` seja um array de objetos `Post`

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '..', 'public')));

// Rota para a página inicial
app.get('/', (req: Request, res: Response) => {
    res.render(path.join(__dirname, '..', 'public', 'index'));
});

app.get('/construcao', (req: Request, res: Response) => {
    res.render(path.join(__dirname, '..', 'public', 'inprogress'));
})

//app.get('/blog-style.css', (req, res) => {
//    res.sendFile(path.join(__dirname, 'public/css/styles.css'));
//});

// Rota para posts individuais
app.get('/:postUid', (req: Request, res: Response) => {
    const postUid = req.params.postUid;
    const post = posts.find((element) => element.uid = postUid);

    if (post) {
        res.render('post', { post });
    } else {
        res.status(404).send('Post não encontrado');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

