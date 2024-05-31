import { Request, Response } from "express";
import { db } from "../db/dbPost";
import { OutputErrorsType } from "../input-output-types/output-errors-type";

export const getPostsController = (
  req: Request,
  res: Response<OutputErrorsType[]>
) => {
  const posts = db.posts;
  res.status(200).json(posts);
};
