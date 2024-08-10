import image from "../../assets/fruit-plate2.png";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner2 = () => {
  useEffect(() => {
    aos.init();
  }, []);

  return (
    <section className=" py-14">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
        {/* Brand info */}
        <div className="flex flex-col justify-center text-center md:text-left px-4">
          <div data-aos="fade-up" data-aos-duration="2500">
            <h1 className="text-3xl font-bold">Brand INFO</h1>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At inventore libero voluptatem laborum? Et vel pariatur magnam dignissimos maxime nisi, magni, a sint suscipit ipsam quidem impedit laudantium ullam explicabo.
            </p>
            <p className="mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, qui praesentium eos eaque magnam nihil, commodi magni quos facilis atque, placeat non voluptates laborum quasi? Soluta ut ipsum mollitia veritatis.
            </p>
            
           <div className="flex justify-center md:justify-start">
              <button className="primary-btn flex items-center gap-1 mt-5">
                Learn More
              </button>
           </div>
          </div>
        </div>
        {/* Banner image */}
        <img
          data-aos="fade-up"
          data-aos-duration="3000"
          src={image}
          alt="Fruit Plate"
          className="w-full max-w-xs md:max-w-md h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default Banner2;