'use client'
import Wrapper from "./wrapper";
import { Button } from "./ui/button";
import Image from "next/image";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="py-10 lg:py-20 bg-gray-100">
      <Wrapper>
        <div className="lg:flex gap-8 items-center">
          <Image
            src="/assets/images/newsletter.png"
            alt="about-us"
            width={500}
            height={500}
            className="bg-[#7fa68d]/10 mt-8 lg:mt-0 hidden lg:block shadow-2xl shadow-[#7fa68d]/30"
          />
          <div className="flex-1 lg:ml-[10%]">
            <h1 className="text-4xl mb-4">Subscribe Newsletter</h1>
            <p className="mb-8 lg:w-[80%] text-gray-500">
              Enter your email below for daily updates
            </p>
            <div className="flex items-center gap-4">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="input-box"
              />
              <Button variant="secondary" size="lg" className="mr-4 shadow-2xl">
                Get started
              </Button>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
export default Newsletter;
