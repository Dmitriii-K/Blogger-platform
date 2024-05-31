import { Request, Response } from "express";
import { db } from "../db/dbBlog";

export const deleteBlogController = (req: Request, res: Response<any>) => {
  //
  const id = +req.params.id;
  const deleteBlog = db.blogs.filter((b) => b.id !== id);
  if (deleteBlog.length < db.blogs.length) {
    db.blogs = deleteBlog;
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
};
