import { Router, Response, Request, NextFunction } from "express";
import { body, validationResult } from "express-validator";
import { dbBlog } from "../../db/dbBlog";

const urlPattern = /([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$/;

export const blogInputValidation = [
  body("name").isLength({ max: 15 }).withMessage(""),
  body("description").isLength({ max: 500 }).withMessage(""),
  body("websiteUrl").isURL().matches(urlPattern).isLength({ max: 100 }),
];

export const postInputValidation = [
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

export const ADMIN_AUTH = "admin:qwerty"; // get from SETTINGS
const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const auth = req.headers["authorisation"] as string; // 'Basic xxxx'
  console.log(auth);
  if (!auth) {
    res.status(401).json({});
    return;
  }
  const buff = Buffer.from(auth.slice(6), "base64");
  const decodedAuth = buff.toString("utf8");

  const buff2 = Buffer.from(ADMIN_AUTH, "utf8");
  const codedAuth = buff2.toString("base64");

  // if (decodedAuth === ADMIN_AUTH || auth.slice(0, 5) !== 'Basic ') {
  if (auth.slice(6) !== codedAuth || auth.slice(0, 5) !== "Basic ") {
    res.status(401).json({});
    return;
  }

  next();
};
