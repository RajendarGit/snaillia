"use client";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Logo from "./logo";
import { ShoppingCart, User, Menu as MenuIcon, X, Heart } from "lucide-react";
import Menu from "./menu";
import { Card, CardContent } from "./ui/card";
import { useState } from "react";
import SearchProduct from "./search-products";
import { useRouter } from "next/navigation";
import { RootState } from "@/store/store";
import { clearUser } from "@/store/user-slice";
import useAppSelector from "@/custom-hook/use-app-selector";
import useAppDispatch from "@/custom-hook/use-app-dispatch";
import useIsomorphicEffect from "@/custom-hook/use-isomorphic-effect";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const user = useAppSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useIsomorphicEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    dispatch(clearUser());
    localStorage.removeItem("user");
    setDropdownOpen(false);
    router.push("/user-login");
  };

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
              {!user?.name ? (
                <Button
                  onClick={() => router.push("/user-login")}
                  variant="ghost"
                  className="bg-transparent text-gray-800 dark:text-white hover:bg-transparent shadow-none font-semibold"
                >
                  <User className="w-5 h-5" />
                </Button>
              ) : (
                <div className="relative inline-block">
                  <Button
                    onClick={() => setDropdownOpen((prev) => !prev)}
                    variant="ghost"
                    className="bg-transparent text-gray-800 dark:text-white hover:bg-transparent shadow-none font-semibold flex items-center gap-2"
                  >
                    <User className="w-5 h-5" />
                    <span>{user.name}</span>
                  </Button>
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border rounded shadow-lg z-50">
                      <button
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => {
                          setDropdownOpen(false);
                          router.push("/admin");
                        }}
                      >
                        Admin Page
                      </button>
                      <button
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )}
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
