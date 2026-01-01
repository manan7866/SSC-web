import Link from "next/link";

interface BreadcrumbProps {
  breadcrumbTitle: string;
}

export default function Breadcrumb({ breadcrumbTitle }: BreadcrumbProps) {
  return (
    <>
      {/* Page Header Start */}
      <section className="relative block pt-[169px] pb-[166px] bg-fixnix-lightpurple z-10">
  <div
    className="absolute top-0 bottom-0 left-0 right-0 bg-cover bg-center bg-no-repeat mix-blend-multiply z-[-1]"
    
    aria-label="Page header background"
  ></div>

        <div className="container"></div>
      </section>
      {/* Page Header End */}
    </>
  );
}
