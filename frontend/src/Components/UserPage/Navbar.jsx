import { Link } from "react-router-dom";
import { motion } from "motion/react"

export default function Navbar(){
    return(
        <div className="navbar w-[500px]  sm:w-full md-full xl:w-full h-15 justify-center items-center absolute top-0 z-50">
        <div className="nav flex w-full h-full  justify-center  items-center pr-15 sm:justify-between md:justify-between lg:justify-between sm:pl-5 md:pl-5">
            <motion.span  className="nav1 text-black font-bold text-sm pr-10 sm:text-xl md:text-xl lg:text-xl" whileHover={{scale:1.2}}>
              <Link to="/">Fitness Helper</Link>  
            </motion.span>
            <span className="nav2 text-black pr-20 sm:pr-0 md:pr-0 lg:pr-0">
                <Link to="/about"  className="pl-7 pr-7 pt-2 pb-2 w-30 h-10 rounded-2xl text-white bg-black">
                About Us
                </Link>
            </span>
        </div>
    </div>
    )
}