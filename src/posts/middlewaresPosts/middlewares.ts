// ...
/*import { Router, Response, Request, NextFunction } from "express";
import { body, validationResult } from "express-validator";

export const postRouter = Router();

const postTitleInputValidator = body("title").isString();

const postInputValidators = [
  postTitleInputValidator,
  body("blogId").custom(async (blogId, { req }) => {
    const blog = await blogRepository.find(blogId);
    if (!blog) {
      new Error("no blog!");
    }
    // return x === y
  }),
];

const inputCheckErrorsMiddleware = (req, res, next) => {
  const e = validationResult(req);
  const errors = e.array();
  if (errors.length) {
     res.status(400).json({ errorsMessages: errors.map(=>) })
    return;
  }

  next();
};

// ...

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
*/
