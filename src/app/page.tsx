import About from "@/components/About/About";
import Services from "@/components/Services/Services";
import Start from "@/components/Start/Start";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Start />
      <About />
      <Services />
    </main>
  );
}
