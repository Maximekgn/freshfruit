import image from "../../assets/banner-bg.jpg";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const bgStyle = {
  backgroundImage: `url(${image})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const Banner3 = () => {
  useEffect(() => {
    aos.init();
  }, []);

  return (
    <section data-aos="zoom-in-left" data-aos-duration="3000">
      <div
        style={bgStyle}
        className="rounded-lg container mx-auto flex flex-col md:flex-row justify-center items-center text-white py-14 space-y-6 md:space-y-0 md:space-x-6"
      >
        {/* Blank div for spacing */}
        <div className="hidden md:block w-1/4"></div>
        {/* Brand info */}
        <div className="flex flex-col justify-center text-center md:text-left px-4 md:w-3/4">
          <div data-aos="fade-up" data-aos-duration="2500">
            <h1 className="text-3xl font-bold">Brand INFO</h1>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At inventore libero voluptatem laborum? Et vel pariatur magnam dignissimos maxime nisi, magni, a sint suscipit ipsam quidem impedit laudantium ullam explicabo.
            </p>
            <p className="mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, qui praesentium eos eaque magnam nihil, commodi magni quos facilis atque, placeat non voluptates laborum quasi? Soluta ut ipsum mollitia veritatis.
            </p>
            <button className="primary-btn flex items-center gap-1 mt-5">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner3;