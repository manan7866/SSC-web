import React from "react";
import Link from "next/link";

export default function ShippingPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 max-w-4xl">
        <div className="mb-6 sm:mb-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--fixnix-darkpurple)] mb-3 sm:mb-4">
            Shipping Policy
          </h1>
          <div className="flex justify-center items-center">
            <div className="h-1 w-16 sm:w-24 bg-[var(--fixnix-lightpuple)]"></div>
          </div>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg">
            <span className="font-medium">Sufi Science Center: The Next Generation Sufi Way Forward</span>
            <br />
            <span className="text-gray-600">
            Last Updated: {new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}
            </span>

          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 mb-6 sm:mb-10">
          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-[var(--fixnix-darkpurple)] mb-3 sm:mb-4">
              1. Our Commitment
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              At <span className="font-medium">Sufi Science Center</span>, we are committed to delivering every order
              with care, intention, and professionalism. Whether you're ordering
              sacred texts, artisan goods, or digital spiritual tools, your journey
              with us continues from checkout to delivery.
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-[var(--fixnix-darkpurple)] mb-3 sm:mb-4">
              2. Shipping Destinations
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
              We offer <span className="font-bold">domestic and international shipping</span> across all major regions.
            </p>
            
            <div className="bg-gray-50 p-3 sm:p-4 rounded-md mb-3 sm:mb-4">
              <p className="text-sm sm:text-base font-medium italic mb-2">Delivery Timeframes:</p>
              <ul className="list-disc ml-4 sm:ml-6 text-sm sm:text-base text-gray-700 space-y-1 sm:space-y-2">
                <li><span className="font-medium">U.S. Orders:</span> 5-7 business days after dispatch</li>
                <li><span className="font-medium">International Orders:</span> 10-21 business days, depending on destination and customs</li>
              </ul>
            </div>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-[var(--fixnix-darkpurple)] mb-3 sm:mb-4">
              3. Processing Times
            </h2>
            <ul className="list-disc ml-4 sm:ml-6 text-sm sm:text-base text-gray-700 space-y-1 sm:space-y-2">
              <li>Orders are processed within <span className="font-medium">2-4 business days</span></li>
              <li>Custom, made-to-order, or limited-release items may require <span className="font-medium">additional handling time</span></li>
              <li>During holidays, peak seasons, or spiritual observances, please allow slight delays</li>
            </ul>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-[var(--fixnix-darkpurple)] mb-3 sm:mb-4">
              4. Shipping Methods
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
              We partner with <span className="font-medium">trusted global carriers</span> including USPS, UPS, FedEx,
              DHL, and international logistics providers to ensure timely and
              trackable deliveries.
            </p>
            <ul className="list-disc ml-4 sm:ml-6 text-sm sm:text-base text-gray-700 space-y-1 sm:space-y-2">
              <li>Tracking information is shared via email upon dispatch</li>
              <li>Expedited shipping options may be available at checkout</li>
            </ul>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-[var(--fixnix-darkpurple)] mb-3 sm:mb-4">
              5. Order Tracking
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
              All shipments come with tracking:
            </p>
            <ul className="list-disc ml-4 sm:ml-6 text-sm sm:text-base text-gray-700 space-y-1 sm:space-y-2">
              <li>Customers will receive tracking details via email</li>
              <li>You can also view order progress via your <span className="font-medium">Customer Dashboard</span></li>
              <li className="break-words">If tracking is not received within 4 days of purchase, contact:<br />
                📧 <span className="font-medium">ot@sufisciencecenter.info</span></li>
            </ul>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-[var(--fixnix-darkpurple)] mb-3 sm:mb-4">
              6. Packaging & Presentation
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
              We use <span className="font-medium">eco-conscious packaging</span> whenever possible, reflecting the
              spiritual values of the Center.
            </p>
            <ul className="list-disc ml-4 sm:ml-6 text-sm sm:text-base text-gray-700 space-y-1 sm:space-y-2">
              <li>All orders are packaged with reverence and care</li>
              <li>Many shipments include story cards or spiritual context related to your chosen item</li>
            </ul>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-[var(--fixnix-darkpurple)] mb-3 sm:mb-4">
              7. Lost, Delayed, or Damaged Orders
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
              We take logistics seriously. In the event of a shipping issue:
            </p>
            <div className="bg-gray-50 p-3 sm:p-4 rounded-md mb-3 sm:mb-4">
              <ul className="list-disc ml-4 sm:ml-6 text-sm sm:text-base text-gray-700 space-y-1 sm:space-y-2">
                <li><span className="font-medium">Delayed or lost orders:</span> Contact us within 72 hours of expected delivery</li>
                <li><span className="font-medium">Damaged items:</span> Send clear photos within 48 hours of delivery to initiate a resolution</li>
              </ul>
            </div>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-[var(--fixnix-darkpurple)] mb-3 sm:mb-4">
              8. Duties, Taxes & Customs
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
              For international orders:
            </p>
            <ul className="list-disc ml-4 sm:ml-6 text-sm sm:text-base text-gray-700 space-y-1 sm:space-y-2">
              <li>Buyers are responsible for all <span className="font-medium">customs duties, VAT, and import taxes</span> as per their country's laws</li>
              <li>Sufi Science Center is not liable for customs delays or rejections</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-[var(--fixnix-darkpurple)] mb-3 sm:mb-4">
              9. Shipping Philosophy
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              At Sufi Science Center, every shipment is more than a transaction, it's a <span className="font-medium">sacred transmission</span>. 
              We view logistics as part of your spiritual experience and strive to deliver that experience with
              integrity and devotion.
            </p>
          </section>
        </div>

        <div className="text-center">
          <Link 
            href="/"
            className="inline-block px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-[var(--fixnix-lightpuple)] text-white rounded-md hover:bg-[var(--fixnix-darkpurple)] transition-colors duration-300"
          >
            Return to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}