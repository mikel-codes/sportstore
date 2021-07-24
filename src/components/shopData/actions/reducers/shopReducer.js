import { ActionTypes } from "../types";

export const ShopReducer = (store, action) => {
  switch (action.type) {
    case ActionTypes.DATA_LOAD: {
      return {
        ...store,
        [action.payload.dataType]: action.payload.data,
        [`${action.payload.dataType}_total`]: action.payload.num,
        [`${action.payload.dataType}_params`]: action.payload.params
      };
    }
    case ActionTypes.DATA_SET_PAGESIZE: {
      return { ...store, pageSize: action.payload };
    }

    case ActionTypes.DATA_SET_SORT_PROPERTY: {
      return { ...store, sortKey: action.payload };
    }
    case ActionTypes.DATA_STORE: {
      return { ...store, order: action.payload.data };
    }
    default: {
      return store || {};
    }
  }
};
