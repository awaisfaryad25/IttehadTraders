import React from 'react'
import PageHero from '../components/global/PageHero'

const TermsOfService = () => {
  return (
    <main className="bg-background text-foreground">
      <PageHero
        badge="Legal"
        title="Simple Terms for Every Order"
        highlight="Simple"
        description="How quotes, orders, delivery and issues work when you buy from us."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]}
      />
    </main>
  )
}

export default TermsOfService