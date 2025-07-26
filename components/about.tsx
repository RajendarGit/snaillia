import { BadgeCheck, Leaf, Syringe } from "lucide-react";
import Wrapper from "./wrapper";

const About = () => {
  return (
    <div className="py-8 lg:py-20">
      <Wrapper>
        <div className="text-center mb-10">
          <h1 className="text-4xl uppercase mb-4">Why Snaillia?</h1>
          <p className="lg:w-[40%] mx-auto text-gray-500">
            Snaillia is dedicated to providing premium, all-natural skincare
            solutions inspired by the healing power of nature. Our products are
            carefully crafted with ethically sourced ingredients, ensuring both
            effectiveness and safety for all skin types. Experience the difference
            of clean beauty, where every formula is free from harsh chemicals and
            designed to nourish your skin from within. Join us on a journey
            towards healthier, more radiant skin with Snaillia.
          </p>
        </div>
        <div className="md:flex lg:w-[80%] lg:mx-auto">
          <div className="text-center text-gray-500">
            <Leaf className="w-12 h-12 mx-auto mb-4 text-[#b8cabd]" />
            <h4 className="text-xl font-semibold mb-2">Natural</h4>
            <p className="lg:w-[70%] mx-auto">
              Snaillia uses only plant-based, naturally derived ingredients, free
              from synthetic additives or artificial fragrances. Each formula is
              thoughtfully developed to harness the gentle yet effective
              properties of nature, supporting your skins natural beauty and
              appearance.
            </p>
          </div>
          <div className="text-center text-gray-500">
            <Syringe className="w-12 h-12 mx-auto mb-4 text-[#b8cabd]" />
            <h4 className="text-xl font-semibold mb-2">No Side Effects</h4>
            <p className="lg:w-[70%] mx-auto">
              Our products are formulated to be gentle and safe for all skin
              types, minimizing the risk of irritation or adverse reactions. We
              avoid harsh chemicals and unnecessary fillers, so you can enjoy
              healthy, glowing skin with complete peace of mind.
            </p>
          </div>
          <div className="text-center text-gray-500">
            <BadgeCheck className="w-12 h-12 mx-auto mb-4 text-[#b8cabd]" />
            <h4 className="text-xl font-semibold mb-2">100% Organic</h4>
            <p className="lg:w-[70%] mx-auto">
              Snaillia guarantees that every product is made with 100% certified
              organic ingredients, grown without pesticides or harmful chemicals.
              Our commitment to organic standards ensures purity, sustainability,
              and the highest quality for your skin and the planet.
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default About;
