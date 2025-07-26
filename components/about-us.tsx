import Image from "next/image";
import { Button } from "./ui/button";
import Wrapper from "./wrapper";

const AboutUs = () => {
  return (
    <div className="py-10 lg:py-20 bg-gray-50">
      <Wrapper>
        <div className="lg:flex gap-8 items-center">
          <div className="flex-1">
            <h1 className="text-4xl mb-4">About Us</h1>
            <p className="mb-8 lg:w-[80%] text-gray-500">
              Snaillia was founded with a passion for harnessing the power of
              nature to create skincare that truly cares for your skin. Our
              journey began with a simple belief: everyone deserves access to
              clean, safe, and effective beauty products. We are committed to
              using only the highest quality, ethically sourced ingredients—free
              from harsh chemicals and synthetic additives. Every product is
              thoughtfully formulated to deliver visible results while respecting
              your skin and the environment. Join us as we continue to innovate
              and inspire confidence through natural beauty.
            </p>
            <Button variant="secondary" size="lg" className="mr-4">
              Buy Now
            </Button>
            <Button size="lg" className="rounded-none">
              View Details
            </Button>
          </div>
          <Image
            src="/assets/images/about.png"
            alt="about-us"
            width={500}
            height={500}
            className="bg-[#7fa68d]/10 mt-8 lg:mt-0 hidden lg:block shadow-2xl shadow-[#7fa68d]/30"
          />
        </div>
      </Wrapper>
    </div>
  );
}

export default AboutUs
