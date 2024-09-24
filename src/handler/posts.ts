import { Request, Response } from "express";
import path from "path";
import posts from "../posts";

export function getPosts(req: Request, res: Response){
    res.send([]);
}

export function getPostById(req: Request, res: Response){
    res.send({});
}