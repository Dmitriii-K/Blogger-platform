import { Request, Response } from "express";
import { dbPost } from "../db/dbPost";

export const findPostController = (req: Request, res: Response) => {
  const post = dbPost.posts.find((p) => p.id === req.params.id);
  if (post) {
    res.status(200).json(post);
  } else {
    res.sendStatus(404);
  }
};
