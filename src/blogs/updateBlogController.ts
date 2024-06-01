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
  for (let i = 0; i < dbBlog.blogs.length; i++) {
    const blog = dbBlog.blogs[i];
    if (blog.id.toString() !== req.params.id) {
      res.sendStatus(404);
    } else {
      updateBlog = blog;
    }
  }
  updateBlog.name = req.body.name;
  updateBlog.description = req.body.description;
  updateBlog.websiteUrl = req.body.websiteUrl;

  res.sendStatus(204);
  return;
};
