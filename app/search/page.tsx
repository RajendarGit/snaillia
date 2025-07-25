"use client";
import { products } from "@/data/products";
import { useSearchParams } from "next/navigation";
import Wrapper from "@/components/wrapper";
import ProductCard from "@/components/product-card";
import FloatingTextInner from "@/components/floating-text-inner";
import NotFound from "@/components/not-found";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "";
  const product = products.find((p) => p.name === name);

  return (
    <div className="relative overflow-hidden">
      <FloatingTextInner title={product?.name || "Not Found"} />
      <Wrapper>
        <div className="flex flex-col items-center">
          {product ? (
            <div className="py-20">
              <ProductCard key={product.id} product={product} />
            </div>
          ) : (
            <NotFound />
          )}
        </div>
      </Wrapper>
    </div>
  );
};

export default SearchPage;
