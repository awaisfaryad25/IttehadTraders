import React from 'react'
import PageHero from '../components/global/PageHero'

const PrivacyPolicy = () => {
  return (
    <main className="bg-background text-foreground">
      <PageHero
        badge="Legal"
        title="Your Privacy, Plainly Explained"
        highlight="Plainly"
        description="What we collect, why we collect it, and the choices you have."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />
    </main>
  )
}

export default PrivacyPolicy