"use client";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Logo from "./logo";
import { ShoppingCart, User, Menu as MenuIcon, X, Heart } from "lucide-react";
import Menu from "./menu";
import { Card, CardContent } from "./ui/card";
import { useEffect, useState } from "react";
import SearchProduct from "./search-products";
import { useRouter } from "next/navigation";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 text-gray-800 dark:text-white font-semibold",
          scrolled
            ? "bg-white/20 backdrop-blur-md border-b border-white/20 shadow-sm"
            : "bg-[#e4f1e8] dark:bg-gray-800"
        )}
      >
        <div className="px-10">
          <div className="flex items-center justify-between">
            <Logo />
            <div className="hidden md:block">
              <Menu />
            </div>
            <div className="relative">
              <Button
                onClick={() => setMenuOpen(!menuOpen)}
                variant="ghost"
                className="md:hidden bg-transparent text-gray-800 dark:text-white hover:bg-transparent shadow-none font-semibold"
              >
                {menuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <MenuIcon className="w-5 h-5" />
                )}
              </Button>
              <SearchProduct />
              <Button
                variant="ghost"
                className="bg-transparent text-gray-800 dark:text-white hover:bg-transparent shadow-none font-semibold"
              >
                <ShoppingCart className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                className="bg-transparent text-gray-800 dark:text-white hover:bg-transparent shadow-none font-semibold"
              >
                <Heart className="w-5 h-5" />
              </Button>
              <Button
                onClick={() => router.push("/user-login")}
                variant="ghost"
                className="bg-transparent text-gray-800 dark:text-white hover:bg-transparent shadow-none font-semibold"
              >
                <User className="w-5 h-5" />
              </Button>
              {menuOpen && (
                <Card className="absolute top-17 left-0 w-full h-100 rounded-none">
                  <CardContent>
                    <Menu />
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
