import Hero from "@/components/hero";
import Counter from "@/components/counter";
import About from "@/components/about";
import AboutUs from "@/components/about-us";
import Products from "@/components/products";
import Testimonials from "@/components/testimonials";
import Newsletter from "@/components/newsletter";

export default function Home() {
  return (
    <>
      <Hero />
        <Counter />
        <About />
        <AboutUs />
        <Products />
        <Testimonials />
        <Newsletter />
    </>
  );
}
