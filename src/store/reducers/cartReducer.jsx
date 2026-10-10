const initialState = {
  cartItems: [],
  coupon: null,
  discountAmount: 0,
   buyNowItem: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.id === item.id);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.id === item.id ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    case "APPLY_COUPON":
      return {
        ...state,
        coupon: action.payload.code,
        discountAmount: action.payload.amount,
      };
    case 'BUY_NOW':
  return {
    ...state,
    cartItems: [action.payload],
    coupon: null,
    discountAmount: 0,
  };

    default:
      return state;
  }
};

export default cartReducer;
