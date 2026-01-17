import Layout from "../../components/layout/Layout";
import About from "../../components/sections/home2/About";
import Banner from "../../components/sections/home2/Banner";
import Blog from "../../components/sections/home2/Blog";
import Contact2 from "../../components/sections/home2/Contact2";
import Contact from "../../components/sections/home2/Contact";
import Services from "../../components/sections/home2/Services";
import Whychoose from "../../components/sections/home2/Whychoose";
import Skill from "../../components/sections/home2/Skill";
import Testimonial from "../../components/sections/home2/Testimonial";
import Experience from "../../components/sections/home2/Experience";
export default function Home() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={1}>
        <Banner />
        <Experience />
        <Services />
        <About />
        <Contact />
        <Whychoose />
        <Skill />
        <Testimonial />
        <Contact2 />
        <Blog />
      </Layout>
    </>
  );
}
