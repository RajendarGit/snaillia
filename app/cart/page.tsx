"use client";
import InnerHeader from "@/components/inner-header";
import Wrapper from "@/components/wrapper";
import React from "react";
import useAppSelector from "@/custom-hook/use-app-selector";
import useAppDispatch from "@/custom-hook/use-app-dispatch";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "@/store/add-to-cart-slice";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const CartPage = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const subtotal = cartItems.reduce(
  (acc, item) => acc + Number(item.price) * item.quantity,
  0
);

  return (
    <>
      <InnerHeader title="Shopping Cart" />
      <div className="py-10 lg:py-20 bg-gray-50 min-h-screen">
        <Wrapper>
          {cartItems.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-500 text-2xl">Your cart is empty.</p>
            </div>
          ) : (
            <div className="lg:flex gap-8">
              <div className="flex-grow">
                <h2 className="text-2xl font-semibold mb-6">Your Items</h2>
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-4 border rounded-lg bg-white shadow-sm"
                    >
                      <div className="flex items-center gap-4">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="rounded-md object-cover"
                        />
                        <div>
                          <h3 className="font-semibold">{item.name}</h3>
                          <p className="text-gray-500 text-sm">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border rounded-md">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() =>
                              dispatch(decrementQuantity(String(item.id)))
                            }
                          >
                            -
                          </Button>
                          <span className="px-4">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() =>
                              dispatch(incrementQuantity(String(item.id)))
                            }
                          >
                            +
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-red-500 hover:text-red-700"
                          onClick={() => dispatch(removeItem(String(item.id)))}
                        >
                          <Trash2 className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/3 mt-8 lg:mt-0">
                <div className="p-6 bg-white rounded-lg shadow-sm border">
                  <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
                  <div className="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="border-t my-4"></div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <Button variant="secondary" size="lg" className="w-full mt-6">
                    Proceed to Checkout
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Wrapper>
      </div>
    </>
  );
};

export default CartPage;
