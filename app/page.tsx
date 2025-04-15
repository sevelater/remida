"use client"

import Header from "./components/header/page";
import Navbar from "./components/navbar/page";
import Slider from "./components/slider/page"
import Footer from "./components/footer/page";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Slider/>
      <Footer/>
    </div>
  );
}