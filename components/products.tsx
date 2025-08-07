import { Droplet, FlaskConical } from "lucide-react";
import Wrapper from "./wrapper";
import { Icon } from "@iconify/react";

const Products = () => {
  return (
    <div className="py-8 lg:py-20">
      <Wrapper>
        <h1 className="text-4xl uppercase text-center mb-15">Our products</h1>
        <div className="grid grid-cols-2 md:grid-cols-5 items-center justify-between gap-4 lg:w-[70%] lg:mx-auto">
          <div className="text-center text-gray-500">
            <Droplet className="w-20 h-20 mx-auto mb-4 text-[#b8cabd] bg-white shadow-xl p-6 rounded-full" />
            <h4 className="text-md font-semibold mb-2 text-gray-400">Cream</h4>
          </div>
          <div className="text-center text-gray-500">
            <Icon
              icon="mdi:bottle-tonic-outline"
              width={20}
              height={20}
              className="w-20 h-20 mx-auto mb-4 text-[#b8cabd] bg-white shadow-xl p-6 rounded-full"
            />
            <h4 className="text-md font-semibold mb-2 text-gray-400">Serum</h4>
          </div>
          <div className="text-center text-gray-500">
            <Icon
              icon="mdi:lotion"
              width={20}
              height={20}
              className="w-20 h-20 mx-auto mb-4 text-[#b8cabd] bg-white shadow-xl p-6 rounded-full"
            />
            <h4 className="text-md font-semibold mb-2 text-gray-400">Lotion</h4>
          </div>
          <div className="text-center text-gray-500">
            <Droplet className="w-20 h-20 mx-auto mb-4 text-[#b8cabd] bg-white shadow-xl p-6 rounded-full" />
            <h4 className="text-md font-semibold mb-2 text-gray-400">
              Sunscreen
            </h4>
          </div>
          <div className="text-center text-gray-500">
            <FlaskConical className="w-20 h-20 mx-auto mb-4 text-[#b8cabd] bg-white shadow-xl p-6 rounded-full" />
            <h4 className="text-md font-semibold mb-2 text-gray-400">
              Coconut Oil
            </h4>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Products;
