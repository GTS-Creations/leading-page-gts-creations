import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Services from "@/components/Services/Services";
import Start from "@/components/Start/Start";
import Team from "@/components/Team/Team";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Start />
      <About />
      <Services />
      <Testimonials />
      <Team />
      <Contact />
    </main>
  );
}
