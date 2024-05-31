import { Request, Response } from "express";
import { dbBlog } from "../db/dbBlog";
import { OutputErrorsType } from "../input-output-types/output-errors-type";

export const getBlogsController = (
  req: Request,
  res: Response<OutputErrorsType[]>
) => {
  const blogs = dbBlog.blogs;
  res.status(200).json(blogs);
};
