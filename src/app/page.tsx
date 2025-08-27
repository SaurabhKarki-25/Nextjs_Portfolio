import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Pages/About";
import Skills from "./Pages/Skill";
import Service from "./Pages/Service";
import MyRecentWork from "./Pages/MyRecentWork";
import Testimonial from "./Pages/Testinomial";
import MyUpcomingProjects from "./Pages/MyUpcomingProject";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import RightNav from "./Components/Navigation";
import SocialLinks from "./Components/SocialLinks"


export default function Home() {
  return (
    <>
      <Navbar />

      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="service">
        <Service />
      </section>

      <section id="work">
        <MyRecentWork />
      </section>

      <section id="projects">
        <MyUpcomingProjects />
      </section>

      <section id="testimonials">
        <Testimonial />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="footer">
        <Footer />
      </section>

      {/* Right-side Navigation */}
      <RightNav />

      <SocialLinks/>

    
    </>
  );
}


