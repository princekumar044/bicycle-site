import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { applyCoupon } from "../store/actions/cartActions";
import { useForm } from "react-hook-form";
import { nanoid } from "@reduxjs/toolkit";
import { asyncBuyerInfoStore } from "../store/actions/buyerActions";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems, discountAmount, coupon, buyNowItem } = useSelector(
    (state) => state.cart
  );
  const [couponCode, setCouponCode] = useState("");

  const itemsToShow = buyNowItem ? [buyNowItem] : cartItems;
  const { register, reset, handleSubmit } = useForm();

  const getTotal = () => {
    return itemsToShow.reduce((acc, item) => {
      const price = parseFloat(item.price.replace(/[^\d.-]/g, ""));
      return acc + price;
    }, 0);
  };

  const subtotal = getTotal();
  const shipping = itemsToShow.length ? 5 : 0;
  const total = subtotal + shipping - discountAmount;

  const handleApplyCoupon = () => {
    dispatch(applyCoupon(couponCode, subtotal));
  };

  const storeBuyerDetails = (data) => {
    data.id = nanoid();
    data.cartItems = itemsToShow;
    data.discountAmount = discountAmount;
    data.coupon = coupon;
    data.total = total;
    dispatch(asyncBuyerInfoStore(data));
    alert("order placed successfully")
    reset();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col md:flex-row gap-8">
      {/* Left: Shipping Form */}
      <div className="w-full mt-20 md:w-2/3 bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-4">Checkout</h2>

        <form
          onSubmit={handleSubmit(storeBuyerDetails)}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="col-span-2">
            <label className="block text-sm font-medium">Full name *</label>
            <input
              {...register("fullname")}
              type="text"
              className="mt-1 w-full p-2 border rounded"
              placeholder="Enter full name"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium">Email address *</label>
            <input
              {...register("email")}
              type="email"
              className="mt-1 w-full p-2 border rounded"
              placeholder="Enter email address"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium">Phone number *</label>
            <div className="flex items-center gap-2 mt-1">
              <span className="p-2 border rounded bg-gray-100">🇮🇳</span>
              <input
                {...register("number")}
                type="tel"
                className="flex-1 p-2 border rounded"
                placeholder="Enter phone number"
              />
            </div>
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium">Country *</label>
            <select
              {...register("country")}
              className="mt-1 w-full p-2 border rounded"
            >
              <option>Choose country</option>
              <option>India</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">City</label>
            <input
              {...register("city")}
              type="text"
              className="mt-1 w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">State</label>
            <input
              {...register("state")}
              type="text"
              className="mt-1 w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">ZIP Code</label>
            <input
              {...register("zip code")}
              type="text"
              className="mt-1 w-full p-2 border rounded"
            />
          </div>

          <div className="col-span-2 flex items-center mt-2">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-sm">
              I have read and agree to the Terms and Conditions.
            </label>
          </div>

          <button
            type="submit"
            className="col-span-2 mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Pay Now
          </button>
        </form>
      </div>

      {/* Right: Cart Summary */}
      <div className="w-full mt-20 md:w-1/3 bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold mb-4">Review your cart</h3>

        {/* Cart Items */}
        <div className="space-y-4">
          {itemsToShow.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            itemsToShow.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <img
                  src={
                    Array.isArray(item.image)
                      ? item.image[0]
                      : item.image || "https://via.placeholder.com/60"
                  }
                  alt={item.title}
                  className="w-16 h-16 rounded object-cover"
                />
                <div className="flex-1">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-500">1x</p>
                </div>
                <p>{item.price}</p>
              </div>
            ))
          )}
        </div>

        {/* Discount Code */}
        <div className="mt-6">
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Discount code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <button
            onClick={handleApplyCoupon}
            className="mt-2 w-full text-sm text-blue-600 font-medium"
          >
            Apply
          </button>
          {coupon && <p className="text-green-500 text-sm mt-1">Applied: {coupon}</p>}
        </div>

        {/* Pricing Summary */}
        <div className="mt-6 space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>₹{shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-red-600">
            <span>Discount</span>
            <span>- ₹{discountAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
        </div>

        {/* Secure Notice */}
        <div className="mt-4 text-xs text-gray-500 text-center">
          🔒 Secure Checkout - SSL Encrypted
          <br />
          Ensuring your financial and personal details are secure during every transaction.
        </div>
      </div>
    </div>
  );
};

export default Checkout;
