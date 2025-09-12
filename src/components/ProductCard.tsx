import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

// Types
interface Product {
  id: number;
  title: string;
  category: string;
  price: string;
  oldPrice?: string;
  image: string;
  discount?: string;
  featured?: boolean;
}

// Dummy Data
const hotDeal = {
  id: 1,
  title: "Apple Watch Series 5",
  category: "Electronics",
  price: "$35.00",
  oldPrice: "$50.00",
  discount: "17% OFF",
  image: "/watchii.jpg",
  sold: 50,
  available: 75,
};

const featuredProducts: Product[] = [
  {
    id: 1,
    title: "Apple iPhone 11 Pro Max",
    category: "Electronics",
    price: "$199.00",
    oldPrice: "$254.00",
    discount: "22% OFF",
    image: "/iphone.jpg",
  },
  {
    id: 2,
    title: "JBL Wireless Bluetooth Speaker",
    category: "Electronics",
    price: "$96.00",
    featured: true,
    image: "/bltooth.jpeg",
  },
  {
    id: 3,
    title: "JBL On-Ear Headphones",
    category: "Electronics",
    price: "$124.00",
    featured: true,
    image: "/headphone.jpg",
  },
  {
    id: 4,
    title: "Samsung Gear 360 Camera",
    category: "Electronics",
    price: "$29.00",
    oldPrice: "$48.00",
    discount: "40% OFF",
    image: "/cammera.jpg",
  },
];

// Hot Deal Card
const HotDealCard: React.FC = () => (
  <div className="border rounded-2xl p-4 shadow-md w-full">
    <div className="relative">
      <img
        src={hotDeal.image}
        alt={hotDeal.title}
        className="rounded-xl w-full h-64 object-cover"
      />
      <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
        {hotDeal.discount}
      </span>
      <AiOutlineHeart className="absolute top-2 right-2 text-gray-500 w-5 h-5" />
    </div>
    <div className="mt-3">
      <p className="text-sm text-gray-500 uppercase">{hotDeal.category}</p>
      <h3 className="text-lg font-semibold">{hotDeal.title}</h3>
      <p className="text-yellow-600 font-bold">{hotDeal.price}</p>
      <div className="mt-3">
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-2 bg-yellow-500"
            style={{
              width: `${(hotDeal.sold / (hotDeal.sold + hotDeal.available)) * 100}%`,
            }}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>Already Sold: {hotDeal.sold}</span>
          <span>Available: {hotDeal.available}</span>
        </div>
      </div>
    </div>
  </div>
);

// Featured Products
const FeaturedProductsCard: React.FC = () => (
  <div className="border rounded-2xl p-4 shadow-md w-full">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl underline font-bold">Featured Products</h2>
      <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg font-semibold">
        VIEW ALL
      </button>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {featuredProducts.map((product) => (
        <div
          key={product.id}
          className="border rounded-xl p-3 shadow-sm relative flex flex-col"
        >
          {product.discount && (
            <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
              {product.discount}
            </span>
          )}
          {product.featured && (
            <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
              FEATURED
            </span>
          )}
          <AiOutlineHeart className="absolute top-2 right-2 text-gray-400 w-4 h-4" />

          <img
            src={product.image}
            alt={product.title}
            className="rounded-md mb-2 w-full h-48 object-cover"
          />
          <p className="text-xs text-gray-500 uppercase">{product.category}</p>
          <h3 className="text-sm font-semibold leading-tight flex-1">
            {product.title}
          </h3>
          <div className="flex items-center gap-2">
            <p className="text-yellow-600 font-bold text-sm">{product.price}</p>
            {product.oldPrice && (
              <p className="line-through text-gray-400 text-xs">
                {product.oldPrice}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Main Component
const ProductCard: React.FC = () => {
  return (
    <div className="p-6 grid gap-6 md:grid-cols-3 w-full">
      {/* Hot Deal - smaller */}
      <div className="md:col-span-1">
        <HotDealCard />
      </div>

      {/* Featured Products - dominant */}
      <div className="md:col-span-2">
        <FeaturedProductsCard />
      </div>
    </div>
  );
};

export default ProductCard;
