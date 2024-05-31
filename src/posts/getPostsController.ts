import { Request, Response } from "express";
import { db } from "../db/dbPost";
import { OutputErrorsType } from "../input-output-types/output-errors-type";

export const getPostsController = (
  req: Request,
  res: Response<OutputErrorsType[]> // получаем в ответе типизированное видео
) => {
  const posts = db.posts; // получаем видео из базы данных

  res.status(200).json(posts); // отдаём видео в качестве ответа
};
