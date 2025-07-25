import FloatingTextInner from "@/components/floating-text-inner";
import InnerHeader from "@/components/inner-header";
import ProductCard from "@/components/product-card";
import Wrapper from "@/components/wrapper";
import { products } from "@/data/products";

const ProductsPage = () => {
  return (
    <div className="relative overflow-hidden">
      <FloatingTextInner title="Products" />
      <InnerHeader title="Our Products" />
      <Wrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-10 lg:py-20">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductsPage;
