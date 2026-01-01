import Layout from "../../components/layout/Layout";
import About from "../../components/sections/home1/About";
import Banner from "../../components/sections/home1/Banner";
import Experience from "../../components/sections/home1/Experience";
import Funfacts from "../../components/sections/home1/Funfacts";
import WhyChooseUs from "../../components/sections/home1/WhyChooseUs";
import Service from "../../components/sections/home1/Service";
import Skill from "../../components/sections/home1/Skill";
import Blog from "../../components/sections/home1/Blog";
import Faq from "../../components/sections/home1/Faq";
import Testimonial from "../../components/sections/home1/Testimonial";
import Contact from "../../components/sections/home1/Contact";
import Newsletter from "../../components/sections/home1/Newsletter";
import Link from "next/link";

export default function Home() {
  // Define values for headTitle, breadcrumbTitle, and wrapperCls
  const headTitle = "Welcome to Our Website";
  const breadcrumbTitle = "Home";
  const wrapperCls = "home-wrapper";

  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={1}
        headTitle={headTitle}
        breadcrumbTitle={breadcrumbTitle}
        wrapperCls={wrapperCls}
      >
        <Banner />
        <Experience />
        <About />
        <WhyChooseUs />
        <Service />
        <Faq />
        <Funfacts />
        <Testimonial />
        <Skill />
        <Contact />
        <Blog />
        <Newsletter />
      </Layout>
    </>
  );
}
