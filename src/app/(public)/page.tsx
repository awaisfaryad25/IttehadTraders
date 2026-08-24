import CTABanner from "./components/home/CTABanner"
import FeaturedProducts from "./components/home/FeaturedProducts"
import HeroSection from "./components/home/HeroSection"
import HowItWorks from "./components/home/HowItWorks"
import ProductRange from "./components/home/ProductRange"
import ProductsMarquee from "./components/home/ProductsMarquee"
import SolutionsSection from "./components/home/SolutionsSection"
import Testimonials from "./components/home/Testimonials"
import TrustedBy from "./components/home/TrustedBy"
import WhyUs from "./components/home/WhyUs"


const LandingPage = () => {

  return (
    <>
      <main className="bg-background text-foreground">
        <HeroSection/>
        <TrustedBy/>
        <ProductsMarquee/>
        <ProductRange />
        <HowItWorks />
        <FeaturedProducts />
        <SolutionsSection />
        <Testimonials />
        <WhyUs />
        <CTABanner />
      </main>
    </>
  )
}

export default LandingPage


