import { ActionTypes } from "../types";

export const CartReducer = (storeData, action) => {
  const newStore = { cart: [], cartItems: 0, cartPrice: 0, ...storeData };
  switch (action.type) {
    case ActionTypes.CART_ADD: {
      const p = action.payload.product;
      const q = action.payload.quantity;
      const existing = newStore.cart.find(item => item.product.id === p.id);
      if (existing) existing.quantity += q;
      else newStore.cart.push(action.payload);
      newStore.cartItems += q;
      newStore.cartPrice += p.price * q;
      return newStore;
    }
    case ActionTypes.CART_UPDATE: {
      // item is stored in product and quantity
      newStore.cart = newStore.cart.map(item => {
        if (item.product.id === action.payload.product.id) {
          const diff = action.payload.quantity - item.quantity;
          newStore.cartItems += diff;
          newStore.cartPrice += item.product.price * diff;
          return action.payload;
        } else {
          return item;
        }
      });
      return newStore;
    }

    case ActionTypes.CART_REMOVE: {
      const selectedItem = newStore.cart.find(
        item => item.product.id === action.payload.product.id
      );
      newStore.cartItems -= selectedItem.quantity;
      newStore.cartPrice -= selectedItem.quantity * selectedItem.product.price;
      newStore.cart = newStore.cart.filter(item => item !== selectedItem);
      return newStore;
    }

    case ActionTypes.CART_CLEAR: {
      return { ...storeData, cart: [], cartItems: 0, cartPrice: 0 };
    }
    default: {
      return storeData || {};
    }
  }
};
