"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import { Product } from "@/types/products";
import useAppDispatch from "@/custom-hook/use-app-dispatch";
import useAppSelector from "@/custom-hook/use-app-selector";
import { addFavourite, removeFavourite } from "@/store/add-to-favourite-slice";
import { useRouter } from "next/navigation";
import QuantityInput from "./quantity-input";
import { addItemsWithQuantity } from "@/store/add-to-cart-slice";

const ProductCard = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const user = useAppSelector((state) => state.user);
  const favourites = useAppSelector((state) => state.favourite.favourites);
  const [quantity, setQuantity] = useState(1);

  const isFavourite = favourites.includes(String(product.id));
  const isAddedToCart = useAppSelector((state) =>
    state.cart.items.some((item) => item.id === product.id)
  );

  const handleAddToFavourite = () => {
    if (!user?.email) {
      router.push("/user-login");
      return;
    }
    dispatch(addFavourite(String(product.id)));
  };

  const handleRemoveFromFavourite = () => {
    dispatch(removeFavourite(String(product.id)));
  };

  const handleAddToCart = () => {
    if (!user?.email) {
      router.push("/user-login");
      return;
    }
    dispatch(addItemsWithQuantity({ product, quantity }));
  };

  return (
    <div key={product.id} className="flex flex-col items-center text-center">
      <div className="p-8">
        <div className="w-40 h-40 mb-4 relative mx-auto">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover mx-auto"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>
        <h2 className="text-lg font-semibold mb-2 text-center">
          {product.name}
        </h2>
        <p className="text-gray-500 text-sm mb-4 text-center">
          {product.description}
        </p>
        <span className="text-[#7fa68d] font-semibold text-2xl">
          ${Number(product.price).toFixed(2)}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        {isAddedToCart ? <p className="text-[#7fa68d]">Added to cart</p> : <div className="flex gap-2">
          <Button variant="secondary" size="lg" onClick={handleAddToCart}>
            <ShoppingCart className="w-5 h-5" />
            Add to cart
          </Button>
          <QuantityInput quantity={quantity} setQuantity={setQuantity} />
        </div>}
        {isFavourite ? (
          <Button
            variant="ghost"
            size="lg"
            className="bg-red-700 rounded-none text-gray-50 hover:text-gray-500"
            onClick={handleRemoveFromFavourite}
          >
            <Heart className="w-5 h-5 text-red-400" />
            Remove Favourite
          </Button>
        ) : (
          <Button
            variant="ghost"
            size="lg"
            className="bg-gray-100 rounded-none"
            onClick={handleAddToFavourite}
          >
            <Heart className="w-5 h-5 text-red-700" />
            Add to Favourite
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
