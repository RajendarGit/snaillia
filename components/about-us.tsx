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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
              praesentium iure hic vel maxime itaque qui animi in a accusantium
              adipisci quo, delectus facere. Atque eveniet dolor, tempore quae
              illo quia. Facilis, dolorum accusamus. Odit quae nihil possimus,
              numquam aspernatur, in asperiores beatae fugit eum porro vel eius
              provident labore nam culpa ipsum sint amet ut officiis assumenda
              odio. Quod deserunt soluta distinctio neque voluptate excepturi
              doloribus, non aperiam, quis, unde similique fugiat. Rem
              reprehenderit.
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
