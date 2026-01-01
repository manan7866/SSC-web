import React from "react";
import Link from "next/link";

export default function ReturnsPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--fixnix-darkpurple)] mb-4">
            Refunds & Returns Policy
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
              1. Our Ethos
            </h2>
            <p className="text-gray-700">
              We honor every exchange as sacred — a reflection of trust and mutual
              growth. If something doesn't meet your expectations, we'll do our best
              to make it right. Please read our policy carefully.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--fixnix-darkpurple)] mb-4">
              2. Digital Products — No Refunds
            </h2>
            <p className="text-gray-700 mb-4">
              Due to the nature of digital content (e.g., downloadable books, courses,
              audio meditations), all purchases are <span className="font-bold">non-refundable</span> once accessed
              or downloaded.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-md mb-4">
              <p className="font-medium italic mb-2">Exceptions:</p>
              <p className="mb-2">We may offer partial credit or alternate access in cases of:</p>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>Technical issues preventing access</li>
                <li>Duplicate purchase errors</li>
              </ul>
            </div>
            
            <p className="text-gray-700">
              Reach out within <span className="font-medium">7 days</span> of purchase:<br />
              📧 <span className="font-medium">support@sufisciencecenter.info</span>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--fixnix-darkpurple)] mb-4">
              3. Physical Items — Sacred Gift Shop
            </h2>
            <p className="text-gray-700 mb-4">
              If you're not fully satisfied with a physical product, we accept
              returns and exchanges within <span className="font-medium">15 days</span> of delivery under the following
              conditions:
            </p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-green-600 mb-2">
                ✅ Eligible for Return/Exchange:
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Item arrived damaged or defective</li>
                <li>Wrong item received</li>
                <li>Product significantly differs from description</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-red-600 mb-2">
                ❌ Not Eligible:
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Used or worn items (e.g., clothing, jewelry)</li>
                <li>Personalized or limited-edition goods</li>
                <li>Items returned after 15 days of delivery</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--fixnix-darkpurple)] mb-4">
              4. Return Process
            </h2>
            <ol className="list-decimal ml-6 text-gray-700 space-y-4">
              <li>
                Email us at <span className="font-medium">return@sufisciencecenter.info</span> with:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Order number</li>
                  <li>Reason for return</li>
                  <li>Photos (if item is damaged or incorrect)</li>
                </ul>
              </li>
              <li>Wait for approval and return instructions</li>
              <li>Ship the item to our provided address (customer bears return shipping unless it was our error)</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--fixnix-darkpurple)] mb-4">
              5. Refund Timeline
            </h2>
            <p className="text-gray-700 mb-4">
              Once your return is approved and received:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Refund will be processed within <span className="font-medium">7-10 business days</span></li>
              <li>Refunds are issued to the original payment method</li>
              <li>You'll be notified via email when processed</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--fixnix-darkpurple)] mb-4">
              6. Order Cancellations
            </h2>
            <p className="text-gray-700">
              Orders may be canceled <span className="font-medium">within 12 hours of purchase</span> by emailing us.
              After this window, cancellation is not guaranteed.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--fixnix-darkpurple)] mb-4">
              7. Exchanges
            </h2>
            <p className="text-gray-700">
              We offer <span className="font-medium">product exchanges</span> instead of refunds in some cases —
              especially for sizing issues or alternative preferences. Reach out and
              we'll guide you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--fixnix-darkpurple)] mb-4">
              8. Support Contact
            </h2>
            <p className="text-gray-700">
              For all refund, return, or exchange requests:<br />
              📧 <span className="font-medium">return@sufisciencecenter.info</span>
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