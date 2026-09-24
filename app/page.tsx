import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Differentiator } from "./components/Differentiator";
import { Devices } from "./components/Devices";
import { StoreTeaser } from "./components/StoreTeaser";
import { Process } from "./components/Process";
import { Trust } from "./components/Trust";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";
import { WhatsAppFloat } from "./components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Differentiator />
        <Devices />
        <StoreTeaser />
        <Process />
        <Trust />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
