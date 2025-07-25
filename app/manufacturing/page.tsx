import FloatingTextInner from "@/components/floating-text-inner";
import InnerHeader from "@/components/inner-header";
import Wrapper from "@/components/wrapper";
import Image from "next/image";

const manufacturingSteps = [
  "Sourcing natural, organic ingredients from trusted farms.",
  "Careful inspection and quality control of all raw materials.",
  "Gentle extraction and blending using eco-friendly methods.",
  "Small-batch production to ensure freshness and potency.",
  "Rigorous testing for purity, safety, and effectiveness.",
  "Sustainable packaging and responsible shipping."
];

const ManufacturingPage = () => {
  return (
    <div className="relative overflow-hidden">
      <FloatingTextInner title="Manufacturing" />
      <InnerHeader title="Our Manufacturing Process" />
      <Wrapper>
        <div className="py-20 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl mb-6 text-[#7fa68d]">How We Create Pure Beauty</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-4">
              {manufacturingSteps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/assets/images/banner.png"
              alt="Manufacturing process"
              width={500}
              height={500}
              className="rounded-xl shadow-2xl shadow-[#7fa68d]/30 bg-[#7fa68d]/10"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ManufacturingPage;
