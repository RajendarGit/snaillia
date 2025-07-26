"use client";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { Search, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Product } from "@/types/products";

const SearchProduct = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredProducts([]);
      setShowDropdown(false);
      return;
    }
    const filtered = products.filter((product: Product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
    setShowDropdown(filtered.length > 0);
  }, [searchTerm]);

  useEffect(() => {
    if (showSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showSearch]);

  const handleSearch = () => {
    setSearchTerm("");
    if (searchTerm.trim() !== "") {
      router.push(`/search?name=${encodeURIComponent(searchTerm)}`);
      setShowDropdown(false);
      setShowSearch(false);
    }
  };

  return (
    <>
      <Button
        variant="ghost"
        className="bg-transparent text-gray-800 dark:text-white hover:bg-transparent shadow-none font-semibold"
        onClick={() => setShowSearch(true)}
      >
        <Search className="w-5 h-5" />
      </Button>
      {showSearch && (
        <div className="absolute right-0 top-0 mt-[-14px] w-72 lg:w-100 z-50 bg-white p-2 rounded-lg">
          <div className="flex gap-2">
            <Button
              onClick={() => setShowSearch(false)}
              size="lg"
              aria-label="Close"
              type="button"
              variant="ghost"
            >
              <X className="w-5 h-5" />
            </Button>
            <input
              ref={inputRef}
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products..."
              className="input-box"
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
            />
            <Button variant="secondary" size="lg" onClick={handleSearch}>
              <Search className="w-5 h-5" />
            </Button>
          </div>
          {showDropdown && (
            <div className="bg-white border rounded shadow-lg mt-2 max-h-60 overflow-y-auto">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-[#e4f1e8]"
                  onClick={() => {
                    setSearchTerm(product.name);
                    setShowDropdown(false);
                  }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded object-cover"
                  />
                  <span className="text-gray-800">{product.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SearchProduct;
