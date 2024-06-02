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
  const post = dbPost.posts.find((p) => p.id === req.params.id);
  if (!post) {
    res.sendStatus(404);
  } else {
    updatePost = post;
  }
  updatePost.title = req.body.title;
  updatePost.shortDescription = req.body.shortDescription;
  updatePost.content = req.body.content;
  updatePost.blogId = req.body.blogId;

  res.sendStatus(204);
  return;
};
