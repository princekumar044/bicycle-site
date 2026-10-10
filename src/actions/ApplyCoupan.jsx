
import couponCodes from "../utils/couponCodes";

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
