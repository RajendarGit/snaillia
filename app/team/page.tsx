import FloatingTextInner from "@/components/floating-text-inner";
import InnerHeader from "@/components/inner-header";
import Wrapper from "@/components/wrapper";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { Star, StarOff } from "lucide-react";

const TeamPage = () => {
  return (
    <div className="relative overflow-hidden">
      <FloatingTextInner title="Our Team" />
      <InnerHeader title="Our Team" />
      <Wrapper>
        <div className="py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {testimonials.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center bg-white rounded-xl shadow-lg p-8">
              <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-[#b8cabd] shadow-md">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#7fa68d] mb-2">{member.name}</h3>
              <p className="text-gray-500 text-center">{member.role}</p>
              <div className="flex items-center justify-center mt-2">
                {[...Array(5)].map((_, i) =>
                  member.rating && i < member.rating ? (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ) : (
                    <StarOff key={i} className="w-5 h-5 text-gray-300" />
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default TeamPage;
