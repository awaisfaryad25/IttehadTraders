import HeroSection from "./components/home/HeroSection"
import ProductsMarquee from "./components/home/ProductsMarquee"
import TrustedBy from "./components/home/TrustedBy"


const LandingPage = () => {

  return (
    <>
      <main className="bg-background text-foreground">
        {/* <Hero /> */}
        <HeroSection/>
        <TrustedBy/>
        <ProductsMarquee/>
        
        <section className="min-h-[80vh] h-full px-6">
          <div className="flex flex-col items-center justify-center gap-6 min-h-[80vh] text-center">
            <h1 className="text-4xl font-bold text-[#FFBB5C]">🚀 Coming Soon</h1>
            <h3 className="text-xl font-medium text-gray-500">🔧 Under Development</h3>
            <p className="text-lg text-gray-600">We're building something exceptional. Stay tuned!</p>
          </div>
        </section>
      </main>
      {/* <Hero />
      <ProductRange />
      <HowItWorks />
      <FeaturedProducts />
      <Solutions />
      <Testimonials />
      <WhyUs />
      <BlogAndCta /> */}
    </>
  )
}

export default LandingPage


