import React from 'react'
import PageHero from '../components/global/PageHero'

const page = () => {
  return (
    <main className="bg-background text-foreground">

      <PageHero
        title="Packaging Picked for Your Business"
        highlight="Business"
        description="Solutions sorted by business type and occasion — find exactly what your kitchen needs."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Solutions" }]}
      />

      <section className="min-h-[80vh] h-full px-6">
        <div className="flex flex-col items-center justify-center gap-6 min-h-[80vh] text-center">
          <h1 className="text-4xl font-bold text-[#FFBB5C]">🚀 Coming Soon</h1>
          <h3 className="text-xl font-medium text-gray-500">🔧 Under Development</h3>
          <p className="text-lg text-gray-600">We're building something exceptional. Stay tuned!</p>
        </div>
      </section>

      <section className="bg-whit px-6 py-8 md:py-12 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
        </div>
      </section>
    </main>
  )
}

export default page