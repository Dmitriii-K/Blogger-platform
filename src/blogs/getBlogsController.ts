import { Request, Response } from "express";
import { db } from "../db/dbBlog";
import { OutputErrorsType } from "../input-output-types/output-errors-type";

export const getBlogsController = (
  req: Request,
  res: Response<OutputErrorsType[]>
) => {
  const blogs = db.blogs;
  res.status(200).json(blogs);
};
