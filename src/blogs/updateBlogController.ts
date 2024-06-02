import { Request, Response } from "express";
import { dbBlog } from "../db/dbBlog";
import {
  BlogInputModel,
  BlogViewModel,
} from "../input-output-types/blogs-type";
import { OutputErrorsType } from "../input-output-types/output-errors-type";

export const updateBlogController = (
  req: Request<any, any, BlogInputModel>,
  res: Response<BlogViewModel | OutputErrorsType>
) => {
  let updateBlog;
  const blog = dbBlog.blogs.find((b) => b.id === req.params.id);
  if (!blog) {
    res.sendStatus(404);
  } else {
    updateBlog = blog;
  }
  updateBlog.name = req.body.name;
  updateBlog.description = req.body.description;
  updateBlog.websiteUrl = req.body.websiteUrl;

  res.sendStatus(204);
  return;
};
