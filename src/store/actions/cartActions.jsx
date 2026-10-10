import { couponCodes } from "../../utils/couponCodes";


export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};
export const applyCoupon = (code, total) => {
  const upperCode = code.toUpperCase();
  const discount = couponCodes[upperCode];

  if (!discount) {
    return {
      type: "APPLY_COUPON",
      payload: { code: null, amount: 0 },
    };
  }

  const discountAmount = total * (discount / 100);
  return {
    type: "APPLY_COUPON",
    payload: { code: upperCode, amount: discountAmount },
  };
};


export const increaseQty = (productId) => {
  return {
    type: "INCREASE_QTY",
    payload: productId,
  };
};

export const decreaseQty = (productId) => {
  return {
    type: "DECREASE_QTY",
    payload: productId,
  };
};

export const removeFromCart = (id) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: id,
  };
};


export const buyNow = (product) => {
  return {
    type: "BUY_NOW",
    payload: product,
  };
};
export const cartAction = (product) => {
  return {
    type: "BUY_NOW",
    payload: product,
  };
};
