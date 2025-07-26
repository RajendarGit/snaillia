"use client";
import React from "react";
import Wrapper from "@/components/wrapper";
import InnerHeader from "@/components/inner-header";
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
    <InnerHeader title="About Us" />
    <div className="py-10 lg:py-20 bg-gray-50 min-h-screen">
      <Wrapper>
        <div className="lg:flex gap-12 items-center">
          <div className="flex-1 mb-8 lg:mb-0">
            <p className="mb-6 text-gray-600 text-lg">
              Snaillia was founded with a passion for harnessing the power of nature to create skincare that truly cares for your skin. Our journey began with a simple belief: everyone deserves access to clean, safe, and effective beauty products.
            </p>
            <p className="mb-6 text-gray-600 text-lg">
              We are committed to using only the highest quality, ethically sourced ingredients—free from harsh chemicals and synthetic additives. Every product is thoughtfully formulated to deliver visible results while respecting your skin and the environment.
            </p>
            <p className="mb-6 text-gray-600 text-lg">
              Join us as we continue to innovate and inspire confidence through natural beauty. At Snaillia, your skin’s health and happiness are at the heart of everything we do.
            </p>
          </div>
          <Image
            src="/assets/images/about.png"
            alt="About Snaillia"
            width={400}
            height={400}
            className="rounded-xl shadow-2xl hidden lg:block bg-[#7fa68d]/10"
          />
        </div>
      </Wrapper>
    </div>
    </>
  );
};

export default AboutPage;