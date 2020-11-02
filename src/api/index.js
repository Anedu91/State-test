import db from "./db";

export const Animals = {
  list() {
    return db.animals;
  },
};
