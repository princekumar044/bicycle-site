import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Card = ({ limit }) => {
  const products = useSelector((state) => state.productReducer.Products);
  const displayedProducts = limit ? products.slice(0, limit) : products;

  return (
    <>
      {displayedProducts.length ? (
        displayedProducts.map((p, index) => (
          <Link to={`/details/${p.id}`} key={index}>
            <div className="flex flex-col h-full justify-between cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-105 bg-white p-2 rounded-lg shadow">
              <div className="relative w-full h-[200px]">
                <img
                  src={p.image[0]}
                  alt={p.title}
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
              <div className="mt-4 flex-1 flex flex-col justify-between text-center">
                <p className="text-sm md:text-[18px] font-bold">{p.title}</p>
                <p className="text-xs md:text-[16px] font-semibold text-gray-600 mt-1">
                  {p.price}
                </p>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p>Products Coming Soon</p>
      )}
    </>
  );
};
