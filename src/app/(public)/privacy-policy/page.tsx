import React from "react";
import PageHero from "../components/global/PageHero";
import LegalLayout, {
  LegalP,
  LegalList,
  BUSINESS,
  type LegalSection,
} from "../components/legal/LegalLayout";

export const metadata = { title: "Privacy Policy — Ittehad Traders" };

const sections: LegalSection[] = [
  {
    id: "overview",
    title: "Overview",
    content: (
      <LegalP>
        This policy explains what personal information {BUSINESS.name} collects
        when you use our website, how we use it, and the choices you have. We
        keep it simple because we collect very little.
      </LegalP>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    content: (
      <>
        <LegalP>We only collect information you choose to give us:</LegalP>
        <LegalList
          items={[
            <><strong>Contact form:</strong> your name, phone number, email address and the message or order list you send.</>,
            <><strong>Newsletter:</strong> your email address, if you subscribe.</>,
            <><strong>WhatsApp:</strong> if you message us through the WhatsApp button, we see your phone number and whatever you write. WhatsApp is run by Meta and has its own privacy policy.</>,
            <><strong>Basic technical data:</strong> standard server and browser information such as IP address and pages visited, collected by our hosting provider.</>,
          ]}
        />
      </>
    ),
  },
  {
    id: "how-we-use-it",
    title: "How we use your information",
    content: (
      <LegalList
        items={[
          "To reply to your inquiries and prepare quotes or orders.",
          "To send you updates you signed up for, such as our newsletter.",
          "To keep the website secure and working properly.",
        ]}
      />
    ),
  },
  {
    id: "sharing",
    title: "Who we share it with",
    content: (
      <>
        <LegalP>We do not sell your personal information. We share it only with:</LegalP>
        <LegalList
          items={[
            // TODO: name the exact services you use (e.g. Resend, Formspree, Mailchimp)
            "Service providers that help us deliver form submissions and emails to us.",
            "Our hosting provider, which stores website data.",
            "Authorities, if we are legally required to.",
          ]}
        />
      </>
    ),
  },
  {
    id: "retention",
    title: "How long we keep it",
    content: (
      <LegalP>
        We keep inquiry details only as long as needed to handle your request
        and for our order records. Newsletter emails are kept until you
        unsubscribe.
      </LegalP>
    ),
  },
  {
    id: "your-choices",
    title: "Your choices",
    content: (
      <>
        <LegalP>You can contact us at any time to:</LegalP>
        <LegalList
          items={[
            "Ask what information we hold about you.",
            "Ask us to correct or delete it.",
            "Unsubscribe from the newsletter, or just ask us to remove you.",
          ]}
        />
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    content: (
      <LegalP>
        {/* TODO: if you add analytics or ad pixels, list them here and add a consent banner. */}
        This website does not use advertising or tracking cookies. Your browser
        may store small technical files needed for the site to display and
        function correctly.
      </LegalP>
    ),
  },
  {
    id: "security",
    title: "Security",
    content: (
      <LegalP>
        We take reasonable steps to protect your information, but no website
        or online service can be guaranteed completely secure.
      </LegalP>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    content: (
      <LegalP>
        If we change this policy, we will update the date at the top of this
        page. Please check back occasionally.
      </LegalP>
    ),
  },
];

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
      <LegalLayout sections={sections} lastUpdated="October 26, 2026" />
    </main>
  );
};

export default PrivacyPolicy;