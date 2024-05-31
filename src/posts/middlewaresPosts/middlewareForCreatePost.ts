import { Router, Response, Request, NextFunction } from "express";
import { body, validationResult } from "express-validator";
import { dbBlog } from "../../db/dbBlog";

export const createInputValidation = [
  body("title").isLength({ max: 30 }).withMessage(""),
  body("shortDescription").isLength({ max: 100 }).withMessage(""),
  body("content").isLength({ max: 1000 }).withMessage(""),
  body("blogId").custom(async (blogId, { req }) => {
    const blog = await dbBlog.blogs.find(blogId).withMessage("");
    if (!blog) {
      new Error("no blog!");
    }
  }),
];

export const inputCheckErrorsMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const e = validationResult(req);
  const errors = e.array();
  if (errors.length) {
    res.status(400).json({ errorsMessages: errors.map((error) => error.msg) });
  }
  next();
};
