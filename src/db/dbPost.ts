export type DBPostType = {
  posts: any[];
};

export const dbPost: DBPostType = {
  posts: [],
};

export const setDB = (dataset?: Partial<DBPostType>) => {
  if (!dataset) {
    // если в функцию ничего не передано - то очищаем базу данных
    dbPost.posts = [];
    return;
  }

  // если что-то передано - то заменяем старые значения новыми
  dbPost.posts = dataset.posts || dbPost.posts;
  // db.some = dataset.some || db.some
};
