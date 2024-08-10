import Banner from "./components/Banner/Banner";
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
      </main>
    </>
  )
}