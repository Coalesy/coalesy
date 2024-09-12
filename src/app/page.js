import Footer from "@/components/Footer";
import Future from "@/components/future/Future";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Platform from "@/components/platform/Platform";
import Possible from "@/components/possible/Possible";
import Trusted from "@/components/trusted/Trusted";
import Web from "@/components/web/Web";


export default function Home() {
  return (
    <main className="bg-[#0A0511]">
      <Navbar/>
      <Hero/>
      <Trusted/>
      <Web/>
      <Platform/>
      <Possible/>
      <Future/>
      <Footer/>
    </main>
  );
}
