import Router, { Request, Response } from "express";
import path from 'path';
import { constructionPage, getIndex, getPost, getPostStyle } from "../handler/pages";
const router = Router();


// Rota para a página inicial
router.get('/', getIndex);

router.get('/construcao', constructionPage)

router.get('/post-style/:postUid', getPostStyle);

// Rota para posts individuais
router.get('/:postUid', getPost);

export default router;