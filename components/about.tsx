import { BadgeCheck, Globe, Syringe } from "lucide-react";
import Wrapper from "./wrapper";

const About = () => {
  return (
    <div className="py-8 lg:py-20">
      <Wrapper>
        <div className="text-center mb-10">
          <h1 className="text-4xl uppercase mb-4">Why Snaillia?</h1>
          <p className="lg:w-[40%] mx-auto text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
            officiis earum esse tenetur nesciunt laboriosam!
          </p>
        </div>
        <div className="md:flex lg:w-[80%] lg:mx-auto">
          <div className="text-center text-gray-500">
            <Globe className="w-12 h-12 mx-auto mb-4 text-[#b8cabd]" />
            <h4 className="text-xl font-semibold mb-2">Natural</h4>
            <p className="lg:w-[70%] mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, alias?
            </p>
          </div>
          <div className="text-center text-gray-500">
            <Syringe className="w-12 h-12 mx-auto mb-4 text-[#b8cabd]" />
            <h4 className="text-xl font-semibold mb-2">No Side Effects</h4>
            <p className="lg:w-[70%] mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, alias?
            </p>
          </div>
          <div className="text-center text-gray-500">
            <BadgeCheck className="w-12 h-12 mx-auto mb-4 text-[#b8cabd]" />
            <h4 className="text-xl font-semibold mb-2">100% Organic</h4>
            <p className="lg:w-[70%] mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, alias?
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default About;
