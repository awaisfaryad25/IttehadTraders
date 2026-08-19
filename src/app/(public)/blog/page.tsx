import React from 'react'

const page = () => {
  return (
    <main className="bg-background text-foreground">
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