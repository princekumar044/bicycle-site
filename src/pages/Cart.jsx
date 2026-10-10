import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { applyCoupon, removeFromCart } from "../store/actions/cartActions";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems, discountAmount, coupon } = useSelector((state) => state.cart);
  const [couponCode, setCouponCode] = useState("");

  const getTotal = () => {
    return cartItems.reduce((acc, item) => {
      const price = parseFloat(item.price.replace(/[^\d.-]/g, ""));
      return acc + price;
    }, 0);
  };

  const subtotal = getTotal();
  const total = subtotal - discountAmount;

  const handleApplyCoupon = () => {
    dispatch(applyCoupon(couponCode, subtotal));
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-4 sm:p-6 bg-[#f5f8fc] min-h-screen">
      {/* Left Side - Shopping Bag */}
      <div className="w-full lg:flex-1 bg-white mt-10 sm:mt-16 md:mt-20 rounded-lg shadow-md p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Shopping Bag</h2>

        {cartItems.length === 0 ? (
          <div className="text-gray-600">
            Your cart is empty.{" "}
            <Link to="/" className="text-blue-500 underline">
              Shop now
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
              >
                <img
                  src={
                    Array.isArray(item.image)
                      ? item.image[0]
                      : item.image || "https://via.placeholder.com/100"
                  }
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded"
                />

                <div className="flex-1 text-center sm:text-left">
                  <h2 className="text-lg sm:text-xl font-semibold">{item.title}</h2>
                  <p className="text-gray-700">{item.price}</p>
                </div>

                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-sm text-red-600 underline mt-2 sm:mt-0"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right Side - Summary */}
      <div className="w-full lg:w-[350px] mt-10 sm:mt-16 md:mt-20 space-y-6">
        {/* Coupon Section */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
          <h3 className="font-semibold mb-4">Coupon Code</h3>
          <input
            type="text"
            placeholder="Enter Code (e.g. SHREYANSH50, PRANIT10)"
            className="w-full border rounded px-3 py-2 mb-4"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <button
            onClick={handleApplyCoupon}
            className="w-full bg-black text-white py-2 rounded"
          >
            Apply
          </button>
          {coupon && <p className="text-green-500 mt-2">Applied: {coupon}</p>}
        </div>

        {/* Total Summary */}
        <div className="bg-orange-100 p-4 sm:p-6 rounded-lg shadow-md">
          <h3 className="font-semibold mb-4">Cart Total</h3>
          <div className="flex justify-between text-sm mb-2">
            <p>Subtotal</p>
            <p>₹{subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between text-sm mb-2 text-red-500 font-semibold">
            <p>Discount</p>
            <p>- ₹{discountAmount.toFixed(2)}</p>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-semibold text-lg mb-4">
            <p>Total</p>
            <p>₹{total.toFixed(2)}</p>
          </div>
          <button
            onClick={handleCheckout}
            className="w-full bg-black text-white py-2 rounded"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
