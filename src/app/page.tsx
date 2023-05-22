import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Service from "@/components/Service";
import Footer from "@/components/Footer";
import Form from "@/components/Form";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="max-w-[1225px] mx-auto">
        <Header />
      </div>
      <Hero />
      <Work />
      <Service />
      <Form />
      <Footer />
    </main>
  );
}
