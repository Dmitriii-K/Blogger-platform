import { Request, Response } from "express";
import { Router } from "express";
import { dbPost } from "./db/dbPost";
import { dbBlog } from "./db/dbBlog";

export const deleteRouter = Router();

deleteRouter.delete("/all-data", (req: Request, res: Response) => {
  dbPost.posts = [];
  dbBlog.blogs = [];
  res.sendStatus(204);
  console.log("All data is deleted");
});
