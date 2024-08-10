import image from "../../assets/fruits-splash.png"
import aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
const Banner = () => {
  useEffect(() => {
    aos.init()
  })
  return (
    <section className="bg-secondary/10">
      <div className="container flex justify-center items-center space-y-6 sm:space-y-0 py-14 ">
        {/* Banner image */} 
        <img
          data-aos="fade-up"
          data-aos-duration="3000"
          src={image} alt="" className="w-[300px] md:max-w[400px] h-full object-cover" />
        {/* Brand info */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <div data-aos="fade-up" data-aos-duration="2500">
            <h1 className="text-3xl font-bold">brand INFO</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At inventore libero voluptatem laborum? Et vel pariatur magnam dignissimos maxime nisi, magni, a sint suscipit ipsam quidem impedit laudantium ullam explicabo.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, qui praesentium eos eaque magnam nihil, commodi magni quos facilis atque, placeat non voluptates laborum quasi? Soluta ut ipsum mollitia veritatis.

            </p>
            <button className="primary-btn flex items-center gap-1">
                Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner