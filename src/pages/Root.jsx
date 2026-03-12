import NavBar from "../components/NavBar"
import { FaHouse } from "react-icons/fa6";
import { FaCircleInfo } from "react-icons/fa6";
import { MdHomeRepairService } from "react-icons/md";
import { RiContactsBook3Fill } from "react-icons/ri";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";


const Root = () => {
    const navItems =[
        {
            icon : <FaHouse />,
            content : "Home",
            url : ""
        },
        {
            icon : <FaCircleInfo />,
            content : "About",
            url : "/about"
        },
        {
            icon : <MdHomeRepairService />,
            content : "Service",
            url : "/Service"
        },
        {
            icon : <RiContactsBook3Fill />,
            content : "Contant",
            url : "/Contact"
        },
    ]
    return (
        <>
        <NavBar
        logo="Trippy"
        items = {navItems}
        btn = "Sing Up"
        />
        <Outlet/>
        <Footer
        trippy ="Trippy"
        des ="Choose your favourite destination."
        />
        </>
    )
}

export default Root
