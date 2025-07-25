import Wrapper from "./wrapper";
import TestimonialContent from "./testimonial-content";

const Testimonials = () => {
  return (
    <div className="py-10 lg:py-20 bg-gray-50">
      <h2 className="text-4xl uppercase text-center mb-8">Testimonials</h2>
      <Wrapper>
        <TestimonialContent />
      </Wrapper>
    </div>
  );
};

export default Testimonials;
