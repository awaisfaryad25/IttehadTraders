import CTABanner from "./components/home/CTABanner"
import HeroSection from "./components/home/HeroSection"
import HowItWorks from "./components/home/HowItWorks"
import ProductRange from "./components/home/ProductRange"
import ProductsMarquee from "./components/home/ProductsMarquee"
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
        
        <Testimonials />
        <WhyUs />
        <CTABanner />
      </main>
      {/* <Hero />
      <FeaturedProducts />
      <Solutions />
      <Testimonials />
      <WhyUs />
      <BlogAndCta /> */}
    </>
  )
}

export default LandingPage


