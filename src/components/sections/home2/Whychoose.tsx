import Link from "next/link";

export default function WhyChoose() {
  return (
    <section className="relative block py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-lg font-semibold text-fixnix-lightpurple">
            Multimedia Library
          </span>
          <h2 className="text-3xl font-bold text-fixnix-darkpurple mt-2">
            A beacon of illumination
          </h2>
          <p className="text-gray-600 mt-3">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore <br /> eu fugiat nulla dolor atur with Lorem ipsum is
            simply
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: "icon-award", title: "Warranty Service" },
            { icon: "icon-customer-service", title: "Customer Service" },
            { icon: "icon-security", title: "Secured Device" },
            { icon: "icon-computer-1", title: "No Virus Threat" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-white shadow-md border border-transparent rounded-lg p-6 transition duration-500 hover:border-fixnix-lightpurple hover:-translate-y-2 hover:translate-x-2"
            >
              <div className="text-fixnix-lightpurple text-5xl">
                <span className={item.icon}></span>
              </div>
              <div className="ml-5">
                <h3 className="text-xl font-semibold text-fixnix-darkpurple hover:text-fixnix-lightpurple transition duration-500">
                  <Link href="/services-details">{item.title}</Link>
                </h3>
                <p className="text-gray-600 mt-2">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg font-semibold text-fixnix-darkpurple">
            Get proper services from us{" "}
            <Link
              href="/about"
              className="text-fixnix-lightpurple hover:text-fixnix-darkpurple transition duration-500"
            >
              guideline and knowledge
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
