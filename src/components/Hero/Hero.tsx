import { IoBagHandleOutline } from "react-icons/io5";
import HeroImg from "../../assets/fruit-plate.png";
import LeafImg from "../../assets/leaf.png";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    aos.init();
  });
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] pt-10">
        {/* Brand Info */}
        <div className="py-20 md:py-0 relative z-10">
          <div className="text-center md:text-left space-y-6 lg:max-w-[400px]">
            <h1
              data-aos="fade-right"
              data-aos-delay="600"
              className="text-5xl lg:text-6xl font-averia font-bold leading-relaxed xl:leading-loose"
            >
              Healthy
              <br />
              Fresh <span className="text-secondary">Fruits!</span>
            </h1>
            <p
              data-aos="fade-right"
              data-aos-delay="900"
              className="text-2xl tracking-wide"
            >
              Order Now For Fresh Healthy Life
            </p>
            <p
                data-aos = "fade-right"
                data-aos-delay="1200"
                 className="text-gray-400">
              Healthy and yummy food for fresh morning breakfast. Get clean
              health and Mind. Eat Daily for a Better Tomorrow. Order Now and
              get 20% off on your order
            </p>
            {/* Button Section  */}
            <div
                data-aos = "fade-right"
                data-aos-delay="1500"
                className="flex justify-center md:justify-start">
              <button className="primary-btn flex items-center gap-1">
                <span>
                  <IoBagHandleOutline />
                </span>
                Order Now
              </button>
            </div>
          </div>
        </div>
        {/* Hero Image  */}
        <div className="flex items-center justify-center">
          <img
            data-aos="fade-up-left"
            data-aos-delay="1000"
            src={HeroImg}
            alt="Hero Image"
            className="w-[350px] md:w-full drop-shadow-2xl"
          />
        </div>
        {/* Leaf section  */}
        <div className="absolute top-14 right-1/2 md:top-0 blur-sm opacity-80 rotate-[40deg]">
          <img 
          data-aos="fade-down-right"
          data-aos-delay="1000"
          src={LeafImg} alt="leaf" className="w-full md:max-w-[300px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
0;
