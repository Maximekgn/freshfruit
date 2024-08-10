import apple from "../../assets/fruits/apple.png";
import avocado from "../../assets/fruits/avocado.png";
import cherry from "../../assets/fruits/cherry.png";
import orange from "../../assets/fruits/orange.png";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

interface MenuData {
  id: number;
  title: string;
  link: string;
  price: string;
  img: string;
}

const Menus: MenuData[] = [
  {
    id: 1,
    title: "Fresh Red Apples ",
    link: "#",
    price: "$10",
    img: apple,
  },
  {
    id: 2,
    title: "Fresh Oranges ",
    link: "#",
    price: "$10",
    img: orange,
  },
  {
    id: 3,
    title: "Fresh Avocados ",
    link: "#",
    price: "$10",
    img: avocado,
  },
  {
    id: 4,
    title: "Fresh Cherries  ",
    link: "#",
    price: "$10",
    img: cherry,
  },
];

const Menu = () => {
  useEffect(() => {
    aos.init();
  })
  return (
    <section>
      <div className="container">
        <h1 className="text-2xl font-bold text-left pb-10">Our Menu</h1>
        <div className="flex flex-wrap justify-between ">
          {Menus.map((item) => (
            <div 
                data-aos="fade-left"
                data-aos-delay={item.id * 200}
                key={item.id} className="flex gap-3  w-1/2 md:w-1/4 mb-5 shadow-md p-2 rounded-lg">
              <img src={item.img} className="w-[60px] lg:w-[100px] " />
              <div className="flex flex-col font-semibold lg:text-xl justify-center ">
                <h1>{item.title}</h1>
                <p className="text-secondary">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
