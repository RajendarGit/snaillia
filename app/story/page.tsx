import FloatingTextInner from "@/components/floating-text-inner"
import InnerHeader from "@/components/inner-header"
import TestimonialContent from "@/components/testimonial-content"
import Wrapper from "@/components/wrapper"

const StoryPage = () => {
  return (
    <div className="relative overflow-hidden">
      <FloatingTextInner title="Our Story" />
      <InnerHeader title="Our Story" />
      <Wrapper>
        <div className="py-20">
        <TestimonialContent />
        </div>
      </Wrapper>
    </div>
  );
}

export default StoryPage
