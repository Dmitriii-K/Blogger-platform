import { Request, Response } from "express";
import { dbPost } from "../db/dbPost";
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
    //blogName: db.blogs.blogName,
  };

  dbPost.posts.push(newPost);
  res.status(201).json(newPost);
};
