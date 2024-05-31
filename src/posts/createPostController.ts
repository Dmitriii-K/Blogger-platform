import { Request, Response } from "express";
import { db } from "../db/dbPost";
import { PostInputModel } from "../input-output-types/posts-type";

export const createPostController = (
  req: Request<any, any, PostInputModel>,
  res: Response<any>
) => {
  const newPost = {
    id: +new Date(),
    title: req.body.title,
    shortDescription: req.body.shortDescription,
    content: req.body.content,
    blogId: req.body.blogId,
    //blogName: req.body.blogName,
  };

  db.posts.push(newPost);

  res.status(201).json(newPost);
};
