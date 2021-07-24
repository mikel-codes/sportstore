import { ActionTypes, DataTypes } from "./types";
//import { data as sportData } from "../data";
import { RestDataSource } from "../restDataSouce";

const dataSource = new RestDataSource();

export const loadData = (dataType, params) => ({
  type: ActionTypes.DATA_LOAD,
  payload: dataSource.GetData(dataType, params).then(response => ({
    dataType,
    data: response.data,
    num: Number(response.headers["x-total-count"]),
    params
  }))
});

export const placeOrder = order => ({
  type: ActionTypes.DATA_STORE,
  payload: dataSource
    .SaveData(DataTypes.ORDERS, order)
    .then(response => ({ dataType: DataTypes.ORDERS, data: response.data }))
});
export const setPageSize = newSize => ({
  type: ActionTypes.DATA_SET_PAGESIZE,
  payload: newSize
});

export const setSortProperty = newProp => ({
  type: ActionTypes.DATA_SET_SORT_PROPERTY,
  payload: newProp
});

export const addToCart = (product, quantity) => ({
  type: ActionTypes.CART_ADD,
  payload: {
    product,
    quantity: quantity || 1
  }
});

export const updateCartQuantity = (product, quantity) => ({
  type: ActionTypes.CART_UPDATE,
  payload: {
    product,
    quantity: quantity
  }
});

export const removeFromCart = product =>
  // removes a product from the cart
  ({
    type: ActionTypes.CART_REMOVE,
    payload: {
      product: product
    }
  });

export const clearCart = () => ({
  // removes all the product from the cart
  type: ActionTypes.CART_CLEAR
});
