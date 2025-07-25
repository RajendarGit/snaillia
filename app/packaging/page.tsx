import FloatingTextInner from "@/components/floating-text-inner";
import InnerHeader from "@/components/inner-header";
import Wrapper from "@/components/wrapper";
import Image from "next/image";

const packagingSteps = [
  "Eco-friendly materials sourced for all packaging.",
  "Minimalist design to reduce waste and environmental impact.",
  "All packaging is recyclable or biodegradable.",
  "Careful hand-packing to ensure product safety.",
  "Tamper-evident seals for customer assurance.",
  "Sustainable shipping practices for a greener planet."
];

const PackagingPage = () => {
  return (
    <div className="relative overflow-hidden">
      <FloatingTextInner title="Packaging" />
      <InnerHeader title="Our Packaging Process" />
      <Wrapper>
        <div className="py-20 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl mb-6 text-[#7fa68d]">How We Package With Care</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-4">
              {packagingSteps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/assets/images/newsletter.png"
              alt="Packaging process"
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

export default PackagingPage;
