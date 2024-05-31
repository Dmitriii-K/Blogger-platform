import { Request, Response } from "express";
import { dbPost } from "../db/dbPost";

export const deletePostController = (req: Request, res: Response<any>) => {
  const id = +req.params.id;
  const deletePost = dbPost.posts.filter((p) => p.id !== id);
  if (deletePost.length < dbPost.posts.length) {
    dbPost.posts = deletePost;
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
};

/*export const deletePostController = (req: Request, res: Response<any>) => {
  const id = +req.params.id;
  for (let i = 0; i < db.posts.length; i++) {
    const post = db.posts[i];
    if (post.id === id) {
      post.splice(i, 1);
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  }
};*/
