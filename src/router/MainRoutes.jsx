import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PreLoader from "../components/preLoader/PreLoader";



// Lazy load all pages
const Home = lazy(() => import("../pages/Home"));
const Details = lazy(() => import("../pages/Details"));
const About = lazy(() => import("../pages/About"));
const Products = lazy(() => import("../pages/Products"));
const SignUp = lazy(() => import("../pages/SignUp"));
const Login = lazy(() => import("../pages/Login"));
const Contact = lazy(() => import("../pages/Contact"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const Cart = lazy(() => import("../pages/Cart"));
const Checkout = lazy(()=> import("../pages/Checkout"))

const MainRoutes = () => {
  return (
    <Suspense fallback={<PreLoader/>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;
