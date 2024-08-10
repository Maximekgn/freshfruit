import { FaLeaf } from "react-icons/fa"
import { MdMenu, MdOutlineShoppingCart } from "react-icons/md"
import ResponsiveMenu from "./ResponsiveMenu"
import { useState , useEffect } from "react"
import aos from "aos" ;
import "aos/dist/aos.css"


interface NavbarLinks 
{
    id : number
    title : string
    link : string
}

const NavbarMenu:NavbarLinks[] = 
[
    {
        id  : 1,
        title : "Home",
        link : "/"
    } ,
    {
        id  : 2,
        title : "Products",
        link : "#"
    },
    {
        id  : 3,
        title : "About",
        link : "#"
    },
    {
        id  : 4,
        title : "Shop" ,
        link : "#"
    },
    {
        id  : 5,
        title : "Contact",
        link : "#"
    }
]
const Navbar = () => {

    const [open , setOpen]:[boolean,Function] = useState(false)
    const handleOpen = ():void => setOpen(!open)

    useEffect(() => {
        aos.init();
    }, [])

  return (
    <>
        <nav data-aos="fade-down" data-aos-duration="1000">
        <div className="container flex justify-between items-center py-4 md:pt-4 ">
            {/* Logo Section */}
            <div className="text-2xl font-bold upper flex items-center gap-2">
                <p className="text-primary">Fruit </p>
                <p className="text-secondary">Store</p>
                <FaLeaf className="text-green-500 "/>
            </div>
            {/* Menu Section  */}
            <div className="hidden md:block">
                <ul className="flex items-center gap-3 text-gray-600">
                    {
                    NavbarMenu.map((item)=>
                    <li key={item.id} className="text-xl">
                        <a href={item.link}
                            className=" py-1 px-3 hover:text-primary hover:shadow-[0_3px_0px_-1px_#ef4444] hover:shadow-primary font-semibold"
                        >{item.title}</a>
                    </li>)}
                    <button className="text-2xl hover:bg-primary
                        hover:text-white rounded-full p-2 duration-200">
                        <MdOutlineShoppingCart/>
                    </button>
                </ul>
            </div>
            {/* Mobile Menu tootle button  Section */}
            <div className="md:hidden">
                <button onClick={handleOpen}>
                    <MdMenu className="text-3xl"/>
                </button>
            </div>
        </div> 
    </nav>

    {/* Responsive Menu Section   */}
    <ResponsiveMenu open={open} />
    </>


  )
}

export default Navbar