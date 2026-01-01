import React from "react";
import Link from "next/link";

export default function TermsOfUse() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--fixnix-darkpurple)] mb-4">
            Terms of Use
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
              1. Welcome to Sufi Science Center
            </h2>
            <p className="text-gray-700">
              By accessing or using our website
              (<a href="http://www.sufiscience.org/" className="text-[var(--fixnix-lightpuple)] hover:underline">www.sufisciencecenter.info</a>), services,
              content, or products, you agree to be bound by these Terms of Use. If
              you do not agree, please do not use our platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--fixnix-darkpurple)] mb-4">
              2. Sacred and Respectful Use
            </h2>
            <p className="text-gray-700 mb-4">
              This platform is designed for <span className="font-medium">contemplative learning</span>, <span className="font-medium">spiritual
              growth</span>, and <span className="font-medium">collective upliftment</span>. You agree to:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Use content mindfully and not for harm</li>
              <li>Respect the sanctity of spiritual and cultural materials</li>
              <li>Avoid misuse, duplication, or misrepresentation of our teachings</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--fixnix-darkpurple)] mb-4">
              3. User Accounts
            </h2>
            <p className="text-gray-700 mb-4">
              To access certain features (courses, purchases, portals), you may be
              required to:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Create an account</li>
              <li>Maintain accurate and updated info</li>
              <li>Keep your login secure and confidential</li>
            </ul>
            <p className="mt-4 text-gray-700">
              You are solely responsible for activity under your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--fixnix-darkpurple)] mb-4">
              4. Intellectual Property
            </h2>
            <p className="text-gray-700 mb-4">
              All content including texts, graphics, videos, logos, designs, and
              teachings is owned by <span className="font-medium">Sufi Science Center</span> or used with
              permission.
            </p>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="mb-2"><span className="text-green-600 font-bold">✅ You may:</span> Access and use for personal spiritual study</p>
              <p><span className="text-red-600 font-bold">❌ You may not:</span> Reproduce, distribute, or modify content without written permission</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--fixnix-darkpurple)] mb-4">
              5. Use of E-Commerce & Digital Academy
            </h2>
            <p className="text-gray-700 mb-4">
              When engaging with our <span className="font-medium">Digital Academy</span> or <span className="font-medium">Sacred Gift Shop</span>, you agree to:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Provide accurate billing/shipping info</li>
              <li>Use secure payment methods</li>
              <li>Abide by return and refund policies (see below)</li>
              <li>Refrain from any fraudulent activity</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--fixnix-darkpurple)] mb-4">
              6. Community Standards
            </h2>
            <p className="text-gray-700 mb-4">
              In discussions, submissions, or communications:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Be respectful, inclusive, and non-harmful</li>
              <li>Avoid hate speech, spam, or offensive language</li>
              <li>Any violation may result in suspension of access</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--fixnix-darkpurple)] mb-4">
              7. Disclaimers
            </h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Content is for <span className="font-medium">educational and spiritual purposes only</span>.</li>
              <li>We do not offer medical, psychological, or legal advice.</li>
              <li>While we strive for accuracy, we are not liable for unintended errors or interruptions.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--fixnix-darkpurple)] mb-4">
              8. Limitation of Liability
            </h2>
            <p className="text-gray-700 mb-4">
              Sufi Science Center is not liable for:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Any indirect or consequential loss or damage</li>
              <li>User reliance on content for non-spiritual outcomes</li>
              <li>Temporary or permanent inaccessibility of the platform</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--fixnix-darkpurple)] mb-4">
              9. Termination
            </h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Suspend or terminate accounts violating these terms</li>
              <li>Modify, discontinue, or restrict access to parts of the site</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--fixnix-darkpurple)] mb-4">
              10. Modifications to Terms
            </h2>
            <p className="text-gray-700">
              We may update these Terms periodically. Continued use of the platform
              implies your acceptance of any revised terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--fixnix-darkpurple)] mb-4">
              11. Governing Law
            </h2>
            <p className="text-gray-700">
              These terms are governed by the laws of <span className="font-medium">India and the United States</span>,
              depending on user origin and transaction location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--fixnix-darkpurple)] mb-4">
              12. Contact Us
            </h2>
            <p className="text-gray-700">
              Have a question or concern? Reach out:<br />
              📧 <span className="font-medium">support@sufisciencecenter.info</span>
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