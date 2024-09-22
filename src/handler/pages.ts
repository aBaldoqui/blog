import { Request, Response } from "express";
import path from "path";
import posts from "../posts";

export function constructionPage(req: Request, res: Response){
    res.render(path.join(__dirname, '..', '..', 'views', 'pages', 'inprogress'));
}

export function getPostStyle(req:Request, res:Response) {
    const postUid = req.params.postUid;
    const post = posts.find((element) => element.uid == postUid);

    if(post){
        res.sendFile(path.join(__dirname, '..', '..','views', post.filePath, 'styles.css'));
    }
}

export function getPost(req: Request, res: Response){
    const postUid = req.params.postUid;
    const post = posts.find((element) => element.uid == postUid);

    if (post) {
        res.render('pages/post', { post });
    } else {
        res.status(404).send('Post não encontrado');
    }
}

export function getIndex(req: Request, res: Response){
    res.render('pages/index', {posts});
}