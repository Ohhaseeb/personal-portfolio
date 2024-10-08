import Hero from "@/components/Hero";
import About from "@/components/About";
import Tools from "@/components/Tools";
import Navbar from "@/components/Navbar";
import Experience from "@/components/Experience"
import Projects from "@/components/Projects";
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Tools/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  );
}
