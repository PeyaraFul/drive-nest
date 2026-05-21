import AvailableCars from "@/components/AvailableCars";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <AvailableCars></AvailableCars>
      <Section1></Section1>
      <Section2></Section2>
    </>
  );
}
