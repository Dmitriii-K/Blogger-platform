import { Request, Response } from "express";
import { dbBlog } from "../db/dbBlog";

export const findBlogController = (req: Request, res: Response) => {
  const blog = dbBlog.blogs.find((b) => b.id === +req.params.id);
  if (blog) {
    res.status(200).json(blog);
  } else {
    res.sendStatus(404);
  }
};
