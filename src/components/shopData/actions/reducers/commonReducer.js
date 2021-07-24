import { StoreData } from "../../store";

export const CommonReducer = (...reducers) => (store, action) => {
  for (let index = 0; index < reducers.length; index++) {
    const newStore = reducers[index](store, action);
    if (newStore !== store) {
      return newStore;
    }
  }
  return store;
};
