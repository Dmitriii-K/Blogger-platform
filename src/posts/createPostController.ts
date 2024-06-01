import { Request, Response } from "express";
import { dbPost } from "../db/dbPost";
import { dbBlog } from "../db/dbBlog";
import { PostInputModel } from "../input-output-types/posts-type";

export const createPostController = (
  req: Request<any, any, PostInputModel>,
  res: Response<any>
) => {
  const blog = dbBlog.blogs.find((blog) => blog.id === req.body.blogId);
  const newPost = {
    id: Date.now().toString(),
    title: req.body.title,
    shortDescription: req.body.shortDescription,
    content: req.body.content,
    blogId: req.body.blogId,
    blogName: blog.name,
  };

  dbPost.posts.push(newPost);
  res.status(201).json(newPost);
};
