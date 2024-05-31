export type DBType = {
  posts: any[];
};

export const db: DBType = {
  posts: [],
};

export const setDB = (dataset?: Partial<DBType>) => {
  if (!dataset) {
    // если в функцию ничего не передано - то очищаем базу данных
    db.posts = [];
    return;
  }

  // если что-то передано - то заменяем старые значения новыми
  db.posts = dataset.posts || db.posts;
  // db.some = dataset.some || db.some
};
