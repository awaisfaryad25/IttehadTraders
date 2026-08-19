import CTABanner from "./components/home/CTABanner"
import HeroSection from "./components/home/HeroSection"
import HowItWorks from "./components/home/HowItWorks"
import ProductRange from "./components/home/ProductRange"
import ProductsMarquee from "./components/home/ProductsMarquee"
import TrustedBy from "./components/home/TrustedBy"


const LandingPage = () => {

  return (
    <>
      <main className="bg-background text-foreground">
        <HeroSection/>
        <TrustedBy/>
        <ProductsMarquee/>
        <ProductRange />
        <HowItWorks />

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


