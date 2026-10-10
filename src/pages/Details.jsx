import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ImageMagnifier from '../components/ImageMagnifier';
import { addToCart, buyNow } from '../store/actions/cartActions';

const Details = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.productReducer.Products);
  const dispatch = useDispatch();

  const clickProduct = products.find((p) => p.id === id);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = clickProduct?.image || [];

  if (!clickProduct) {
    return <div className="text-center mt-20 text-xl font-semibold">Product not found</div>;
  }

  const prevImage = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: clickProduct.id,
      title: clickProduct.title,
      price: clickProduct.price,
      image: clickProduct.image,
      qty: 1
    }));
  };
  const navigate = useNavigate();

const handleBuyNow = () => {
  dispatch(buyNow({
    id: clickProduct.id,
    title: clickProduct.title,
    price: clickProduct.price,
    image: clickProduct.image,
    qty: 1
  }));
  navigate('/checkout');
};

  return (
    <div className="w-full min-h-screen bg-white text-black font-sans p-6">
      <div className="max-w-[1200px] mx-auto mt-30 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Carousel */}
        <div className="w-full">
          <div className="relative w-full h-[500px] flex items-center justify-center">
            <button onClick={prevImage} className="absolute left-0 top-1/2 text-4xl text-shadow-sm  text-white z-10 p-2 ml-2 cursor-pointer transform -translate-y-1/2">←</button>
            <ImageMagnifier src={images[currentIndex]} zoom={2.5} />
            <button onClick={nextImage} className="absolute right-0 top-1/2 text-4xl text-shadow-sm text-white z-10 p-2 mr-2 cursor-pointer transform -translate-y-1/2">→</button>
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <div key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full cursor-pointer transition-all ${index === currentIndex ? 'bg-black scale-110' : 'bg-gray-400'}`}></div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">{clickProduct.title}</h2>
          <p className="text-sm text-gray-700">{clickProduct.description.slice(0, 200)}...</p>

          <div className="space-y-6 mt-10">
            <div>
              <p className="text-xs font-bold uppercase mb-1">Size</p>
              <div className="flex space-x-2">
                {['Kids', 'Adult', 'Women', 'Other'].map((size) => (
                  <button key={size} className="px-3 py-1 border text-sm hover:bg-black hover:text-white">{size}</button>
                ))}
              </div>
            </div>

            <div className="flex space-x-4 mt-20">
              <button onClick={handleAddToCart} className="w-1/2 py-3 bg-black text-white font-semibold">Add to Cart</button>
              <button onClick={handleBuyNow} className="w-1/2 py-3 border border-black font-semibold">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-[1200px] mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-sm text-gray-700">{clickProduct.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Specifications</h3>
            <ul className="list-disc ml-5 text-sm text-gray-700">
              {clickProduct.Specifications.split(',').map((item, idx) => (
                <li key={idx}>{item.trim()}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">What's included</h3>
            <ul className="list-disc ml-5 text-sm text-gray-700">
              {clickProduct.included.split(',').map((item, idx) => (
                <li key={idx}>{item.trim()}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <img src={clickProduct.partImg} alt="Parts" className="w-full object-cover rounded" />
        </div>
      </div>
    </div>
  );
};

export default Details;
