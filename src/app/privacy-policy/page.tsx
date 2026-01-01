import React from "react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--fixnix-darkpurple)] mb-4">
            Privacy Policy
          </h1>
          <div className="flex justify-center items-center">
            <div className="h-1 w-24 bg-[var(--fixnix-lightpuple)]"></div>
          </div>
          <p className="mt-4 text-lg">
            <span className="font-medium">Sufi Science Center: The Next Generation Sufi Way Forward</span>
            <br />
                        <span className="text-gray-600">
            Last Updated: {new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}
            </span>

          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 md:p-8 lg:p-10 mb-10">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--fixnix-darkpurple)] mb-4">
              1. Our Commitment to Your Privacy
            </h2>
            <p className="text-gray-700">
              At the Sufi Science Center, your privacy is a sacred trust. As seekers
              of truth and unity, we value transparency and honor your personal data
              with utmost responsibility. This Privacy Policy outlines how we collect,
              use, and protect your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--fixnix-darkpurple)] mb-4">
              2. Information We Collect
            </h2>
            <p className="text-gray-700 mb-4">
              We may collect the following types of information:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li><span className="font-medium">Personal Identification</span> (Name, Email, Phone)</li>
              <li><span className="font-medium">Demographic Data</span> (Country, Language Preferences)</li>
              <li><span className="font-medium">Transactional Information</span> (Purchases, Donations)</li>
              <li><span className="font-medium">Browsing Behavior</span> (Page visits, Time on site, Clicks)</li>
              <li><span className="font-medium">User Submissions</span> (Forms, Abstracts, Feedback)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--fixnix-darkpurple)] mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-4">
              We use your data to:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Facilitate your learning journey and purchases</li>
              <li>Personalize your experience across our platform</li>
              <li>Process donations and support requests</li>
              <li>Send you newsletters, event updates, and spiritual insights (only with your consent)</li>
              <li>Improve our website and offerings through analytics</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--fixnix-darkpurple)] mb-4">
              4. Data Sharing & Third Parties
            </h2>
            <p className="text-gray-700 mb-4">
              We <span className="font-bold">never sell</span> your data.<br />
              We may share data with trusted partners strictly to:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Process payments (e.g., Stripe, Razorpay)</li>
              <li>Deliver products or digital materials</li>
              <li>Provide email or messaging services (e.g., Mailchimp)</li>
              <li>Ensure platform security and compliance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--fixnix-darkpurple)] mb-4">
              5. Your Rights
            </h2>
            <p className="text-gray-700 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Access or correct your data</li>
              <li>Withdraw consent</li>
              <li>Request deletion of your data</li>
              <li>Lodge complaints with a data protection authority</li>
            </ul>
            <p className="mt-4 text-gray-700">
              To exercise any of the above, email us at <span className="font-medium">privacy@sufisciencecenter.info</span>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--fixnix-darkpurple)] mb-4">
              6. Cookies & Tracking
            </h2>
            <p className="text-gray-700 mb-4">
              We use cookies to:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Enhance your site experience</li>
              <li>Remember your preferences</li>
              <li>Analyze visitor behavior</li>
            </ul>
            <p className="mt-4 text-gray-700">
              You may disable cookies via your browser, but some features may be limited.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--fixnix-darkpurple)] mb-4">
              7. Security
            </h2>
            <p className="text-gray-700">
              We use <span className="font-medium">SSL encryption</span>, <span className="font-medium">two-factor authentication</span>, 
              and <span className="font-medium">secure data storage protocols</span> to safeguard your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--fixnix-darkpurple)] mb-4">
              8. Children's Privacy
            </h2>
            <p className="text-gray-700">
              Our platform is intended for individuals aged <span className="font-medium">16 and above</span>. We do
              not knowingly collect data from children without parental consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--fixnix-darkpurple)] mb-4">
              9. International Users
            </h2>
            <p className="text-gray-700">
              If you're accessing from outside India or the USA, please note that
              your data may be stored and processed in servers located in either
              region, in compliance with local and global data protection laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--fixnix-darkpurple)] mb-4">
              10. Policy Updates
            </h2>
            <p className="text-gray-700">
              We may update this policy from time to time. The latest version will
              always be posted here with the updated date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--fixnix-darkpurple)] mb-4">
              11. Contact Us
            </h2>
            <p className="text-gray-700">
              If you have any questions or concerns, reach out to our Data Privacy Officer:<br />
              📧 <span className="font-medium">privacy@sufisciencecenter.info</span>
            </p>
          </section>
        </div>

        <div className="text-center">
          <Link 
            href="/"
            className="inline-block px-6 py-3 bg-[var(--fixnix-lightpuple)] text-white rounded-md hover:bg-[var(--fixnix-darkpurple)] transition-colors duration-300"
          >
            Return to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}