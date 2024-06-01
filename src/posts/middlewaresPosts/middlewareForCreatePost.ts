import { Router, Response, Request, NextFunction } from "express";
import { body, validationResult } from "express-validator";
import { dbBlog } from "../../db/dbBlog";
import { ADMIN_AUTH } from "../../settings";

const urlPattern = /([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$/;

export const blogInputValidation = [
  body("name")
    .isString()
    .isLength({ max: 15 })
    .withMessage("Имя слишком длинное"),
  body("description")
    .isString()
    .isLength({ max: 500 })
    .withMessage("Описание превышает максимальное кол-во символов"),
  body("websiteUrl")
    .isString()
    .isURL()
    .matches(urlPattern)
    .withMessage("URL сайта не соответствует шаблону")
    .isLength({ max: 100 })
    .withMessage("URL-адрес веб-сайта слишком длинный"),
];

export const postInputValidation = [
  body("title")
    .isString()
    .isLength({ max: 30 })
    .withMessage("Заголовок слишком длинный"),
  body("shortDescription")
    .isString()
    .isLength({ max: 100 })
    .withMessage("Описание превышает максимальное кол-во символов"),
  body("content")
    .isString()
    .isLength({ max: 1000 })
    .withMessage("Содержание превышает максимальное кол-во символов"),
  body("blogId")
    .isString()
    .custom((value) => {
      const blog = dbBlog.blogs.find((blog) => blog.id === value);
      if (!blog) {
        throw new Error("no blog!");
      }
      return true;
    })
    .withMessage(""),
];

export const inputCheckErrorsMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const e = validationResult(req);
  const errors = e.array({ onlyFirstError: true }) as {
    path: string;
    msg: string;
  }[];
  if (errors.length) {
    res.status(400).json({
      errorsMessages: errors.map((error) => {
        return { message: error.msg, field: error.path };
      }),
    });
    return;
  }
  next();
};

// get from SETTINGS
export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const auth = req.headers["authorisation"] as string;
  console.log(auth);
  if (!auth) {
    res.status(401).json({});
    return;
  }
  // const buff = Buffer.from(auth.slice(6), "base64");
  // const decodedAuth = buff.toString("utf8");

  const buff2 = Buffer.from(ADMIN_AUTH, "utf8");
  const codedAuth = buff2.toString("base64");

  // if (decodedAuth === ADMIN_AUTH || auth.slice(0, 5) !== "Basic dmain:qwerty") {
  //   res.status(401).json({});
  //   return;
  // }
  if (auth.slice(6) !== codedAuth || auth.slice(0, 5) !== "Basic") {
    res.status(401).json({});
    return;
  }

  next();
};
