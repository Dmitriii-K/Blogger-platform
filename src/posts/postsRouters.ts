import { Router } from "express";
import { getPostsController } from "./getPostsController";
import { createPostController } from "./createPostController";
import { findPostController } from "./findPostController";
import { updatePostController } from "./updatePostController";
import { deletePostController } from "./deletePostController";

export const postRouter = Router();

// ...

/*postRouter.get(
  "/",
  authMiddleware,
  // postTitleInputValidator, // и это мидлвэер
  // ...postInputValidators, // это тоже мидлвэеры
  // inputCheckErrorsMiddleware, // и это мидлвэер
  (req, res, next) => {
    // и это мидлвэер

    // ...
    if (some) {
      res.status(400).json({});
      return;
    }
    next();
  },
  (req, res, next) => {
    // и это мидлвэер

    // ...
    next();
  },
  (req, res, next) => {
    // и это мидлвэер, несмотря на то что это контроллер, так как может передать упправление следующему мидлвэеру
    res.status(200).json({});
    // next()
  },
  (req, res, next) => {
    // и это мидлвэер
    saveSameLogs(req);
  }
);
*/
postRouter.get("/", getPostsController);
postRouter.post("/", createPostController);
postRouter.get("/:id", findPostController);
postRouter.put("/:id", updatePostController);
postRouter.delete("/:id", deletePostController);
