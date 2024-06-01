import { Request, Response } from "express";
import { dbBlog } from "../db/dbBlog";

export const deleteBlogController = (req: Request, res: Response<any>) => {
  //
  const id = req.params.id;
  const deleteBlog = dbBlog.blogs.filter((b) => b.id !== id);
  if (deleteBlog.length < dbBlog.blogs.length) {
    dbBlog.blogs = deleteBlog;
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
};
