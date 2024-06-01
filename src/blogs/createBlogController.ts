import { Request, Response } from "express";
import { dbBlog } from "../db/dbBlog";
import { BlogInputModel } from "../input-output-types/blogs-type";

export const createBlogController = (
  req: Request<any, any, BlogInputModel>,
  res: Response<any>
) => {
  const newBlog = {
    id: Date.now().toString(),
    name: req.body.name,
    description: req.body.description,
    websiteUrl: req.body.websiteUrl,
  };

  dbBlog.blogs.push(newBlog);
  res.status(201).json(newBlog);
};
