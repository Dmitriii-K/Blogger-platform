import { Request, Response } from "express";
import { Router } from "express";
import { db } from "./db/dbPost";

export const deleteRouter = Router();

deleteRouter.delete("/all-data", (req: Request, res: Response) => {
  db.posts = [];
  res.sendStatus(204);
  console.log("All data is deleted");
});
