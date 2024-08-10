import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Banner3 from "./components/Banner/Banner3";
import Footer from "./components/Footer/footer";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <>
      <main>
        <Navbar/>
        <Hero/>
        <Menu/>
        <Banner/>
        <Banner2/>
        <Banner3/>
        <Footer/>
      </main>
    </>
  )
}