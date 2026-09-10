import React from 'react'
import PageHero from '../components/global/PageHero'
import BlogCatalog from '../components/blog/BlogCatalog'
import CTABanner from '../components/home/CTABanner'

const page = () => {
  return (
    <main className="bg-background text-foreground">

      <PageHero
        title="Notes for Running a Leaner Kitchen"
        highlight="Leaner"
        description="Guides on packaging choices, regulation, and cutting waste — for food businesses across Pakistan."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />
 
      <BlogCatalog />

      <CTABanner />

      {/* <section className="bg-whit px-6 py-8 md:py-12 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
        </div>
      </section> */}
    </main>
  )
}

export default page