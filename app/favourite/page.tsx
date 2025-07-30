"use client";
import React from "react";
import Wrapper from "@/components/wrapper";
import useAppSelector from "@/custom-hook/use-app-selector";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { removeFavourite } from "@/store/add-to-favourite-slice";
import useAppDispatch from "@/custom-hook/use-app-dispatch";
import Image from "next/image";
import { Product } from "@/types/products";
import { products } from "@/data/products";

// Define the Product type based on your productsData structure
const FavouritePage = () => {
    const favourites: string[] = useAppSelector((state: RootState) => state.favourite.favourites);
  const dispatch = useAppDispatch();
  const router = useRouter();

  // Get product details for favourite IDs
interface FavouriteState {
    favourites: string[];
}

interface RootState {
    favourite: FavouriteState;
}

const favouriteProducts: Product[] = products.filter((product: Product) =>
    favourites.includes(String(product.id))
);

  const handleRemove = (id: string) => {
    dispatch(removeFavourite(id));
  };

  return (
    <Wrapper>
      <div className="relative overflow-hidden">
        {favouriteProducts.length === 0 ? (
          <div className="text-center py-10 text-gray-500">No favourites yet.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {favouriteProducts.map((product: Product) => (
              <div
                key={product.id}
                className="border rounded-lg p-6 flex flex-col items-center text-center shadow"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={128}
                  height={128}
                  className="w-32 h-32 object-cover mb-4 rounded"
                />
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-gray-500 mb-2">{product.description}</p>
                <span className="text-[#7fa68d] font-semibold text-xl mb-4">
                  ${Number(product.price).toFixed(2)}
                </span>
                <Button
                  variant="destructive"
                  onClick={() => handleRemove(String(product.id))}
                >
                  Remove
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default FavouritePage;