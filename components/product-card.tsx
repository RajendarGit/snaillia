"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import { Product } from "@/types/products";
import useAppDispatch from "@/custom-hook/use-app-dispatch";
import useAppSelector from "@/custom-hook/use-app-selector";
import { addFavourite } from "@/store/add-to-favourite-slice";
import { useRouter } from "next/navigation";

const ProductCard = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const user = useAppSelector((state) => state.user);
  const favourites = useAppSelector((state) => state.favourite.favourites);

  const isFavourite = favourites.includes(String(product.id));

  const handleAddToFavourite = () => {
    if (!user?.email) {
      router.push("/user-login");
      return;
    }
    dispatch(addFavourite(String(product.id)));
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
      <div className="flex">
        <Button variant="secondary" size="lg">
          <ShoppingCart className="w-5 h-5" />
          Add to cart
        </Button>
        <Button
          variant="ghost"
          size="lg"
          className="bg-gray-100 rounded-none"
          onClick={handleAddToFavourite}
          disabled={!user?.email || isFavourite}
        >
          <Heart className={`w-5 h-5 ${isFavourite ? "text-red-500" : ""}`} />
          {isFavourite ? "Added" : "Add to Favourite"}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
