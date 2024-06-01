import { Router } from "express";
import { getBlogsController } from "./getBlogsController";
import { createBlogController } from "./createBlogController";
import { findBlogController } from "./findBlogController";
import { updateBlogController } from "./updateBlogController";
import { deleteBlogController } from "./deleteBlogController";
import { authMiddleware } from ".././posts/middlewaresPosts/middlewareForCreatePost";

export const blogRouter = Router();

blogRouter.get("/", getBlogsController);
blogRouter.post("/", createBlogController);
blogRouter.get("/:id", findBlogController);
blogRouter.put("/:id", updateBlogController);
blogRouter.delete("/:id", authMiddleware, deleteBlogController);
