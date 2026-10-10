import { loadProducts } from "../reducers/ProductReducer";

// Load products from dummy/mock data (NO API)
export const asyncloadProducts = () => (dispatch) => {
  try {
    // Dummy product data (fully frontend only)
    const mockProducts = [
      {
        id: 1,
        title: "Hero Sprint Mountain Bike",
        price: 7999,
        image: [
          "/products/mtb1.png"
        ],
        description: "Strong MTB with dual disc brakes and steel frame",
        category: "Mountain Bike"
      },
      {
        id: 2,
        title: "Firefox Road Bike",
        price: 12999,
        image: [
          "/products/road1.png"
        ],
        description: "Lightweight aluminum road bike with 21 Shimano gears",
        category: "Road Bike"
      },
      {
        id: 3,
        title: "BTwin Kids Bicycle",
        price: 5999,
        image: [
          "/products/kids1.png"
        ],
        description: "Safe and comfortable kids' bike with support wheels",
        category: "Kids Bicycle"
      },
      {
        id: 4,
        title: "Electric Hybrid Bicycle",
        price: 28999,
        image: [
          "/products/electric1.png"
        ],
        description: "Electric hybrid cycle with 40km range",
        category: "Electric Bike"
      }
    ];

    dispatch(loadProducts(mockProducts));
  } catch (err) {
    console.log(err);
  }
};
