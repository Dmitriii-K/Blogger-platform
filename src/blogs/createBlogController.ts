import { Request, Response } from "express";
import { db } from "../db/dbBlog";
import { BlogInputModel } from "../input-output-types/blogs-type";

export const createBlogController = (
  req: Request<any, any, BlogInputModel>,
  res: Response<any>
) => {
  const newBlog = {
    id: +new Date(),
    name: req.body.name,
    description: req.body.description,
    websiteUrl: req.body.websiteUrl,
  };

  db.blogs.push(newBlog);
  res.status(201).json(newBlog);
};
