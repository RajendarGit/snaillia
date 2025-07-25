"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import Wrapper from "./wrapper";
import FloatingText from "./floating-text";
import SocialLinks from "./soacial-links";

const Hero = () => {
  const [size, setSize] = useState("small");

  return (
    <section className="bg-[#e4f1e8] dark:bg-gray-800 py-20 lg:py-30 relative overflow-hidden">
      <Wrapper>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex-1 order-2 lg:order-1">
            <h1 className="text-4xl lg:text-9xl font-bold mb-6 text-green-950">
              snaillia
            </h1>
            <p className="text-2xl font-semibold text-[#7fa58d] mb-2">
              Natural Inner Beauty
            </p>
            <p className="text-gray-500 mb-4 lg:w-[500px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              natus illo aliquam sed modi est quia incidunt, suscipit eveniet
              praesentium harum ipsa similique porro beatae quos eum enim
              temporibus. Quisquam?
            </p>
            <div>
              <p className="font-semibold mb-2">Sizes</p>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-1 cursor-pointer text-gray-500">
                  <input
                    type="radio"
                    name="size"
                    value="small"
                    checked={size === "small"}
                    onChange={() => setSize("small")}
                    className="accent-green-600"
                  />
                  Small
                </label>
                <label className="flex items-center gap-1 cursor-pointer text-gray-500">
                  <input
                    type="radio"
                    name="size"
                    value="large"
                    checked={size === "large"}
                    onChange={() => setSize("large")}
                    className="accent-green-600"
                  />
                  Large
                </label>
              </div>
              <div className="border-t border-gray-300 mt-6 mb-8 lg:w-[300px]"></div>
              <Button variant="secondary" size="lg" className="mt-4">
                Add to your cart
              </Button>
            </div>
          </div>
          <Image
            className="w-full lg:w-[500px] h-auto object-cover mt-8 lg:mt-0 order-1 lg:order-2 mb-8 lg:mb-0 shadow-2xl rounded-full"
            src="/assets/images/banner.png"
            alt="Hero"
            width={500}
            height={500}
          />
        </div>
      </Wrapper>
      <FloatingText />
      <SocialLinks />
    </section>
  );
};

export default Hero;
