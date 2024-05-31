import { Request, Response } from "express";
import { dbPost } from "../db/dbPost";
import {
  PostInputModel,
  PostViewModel,
} from "../input-output-types/posts-type";
import { OutputErrorsType } from "../input-output-types/output-errors-type";

export const updatePostController = (
  req: Request<any, any, PostInputModel>,
  res: Response<PostViewModel | OutputErrorsType>
) => {
  let updatePost;
  for (let i = 0; i < dbPost.posts.length; i++) {
    const post = dbPost.posts[i];
    if (post.id.toString() === req.params.id) {
      updatePost = post;
    } else {
      res.sendStatus(404);
    }
  }
  updatePost.title = req.body.title;
  updatePost.shortDescription = req.body.shortDescription;
  updatePost.content = req.body.content;
  updatePost.blogId = req.body.blogId;

  res.sendStatus(204);
  return;
};
