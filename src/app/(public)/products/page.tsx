import React from 'react'
import PageHero from '../components/global/PageHero'
import ProductsCatalog from '../components/products/ProductsCatalog'
import CTABanner from '../components/home/CTABanner'

const page = () => {
  return (
    <main className="bg-background text-foreground">
      
      <PageHero
        title="Everything Your Kitchen Packs With"
        highlight="Packs"
        description="Browse the full catalog — containers, glasses, cups, wrap and cutlery, sorted by category."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Catalog" }]}
      />

      <ProductsCatalog />
      <section className="bg-whit px-6 py-8 md:py-12 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
        </div>
      </section>

      <CTABanner />
    </main>
  )
}

export default page