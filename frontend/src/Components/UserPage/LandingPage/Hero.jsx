// Supports weights 200-900
import '@fontsource-variable/mulish';
import { motion } from "motion/react"
export default function Hero(){
    const parentvariants ={
        hidden:{
            opacity:0,
            y:-150
        },
        show:{
            opacity:1,
            y:0,
            transition:{
                staggerChildren:0.5,
                duration:2
            }
        }
    }

    const childVariants = {
        hidden:{
            opacity:0,
            y:150
        },
        show:{
            opacity:1,
            y:0,
            transition:{
            duration:2
        }
        }
    }
    return(
        <>
        <div className='pt-20'>
            <div className='w-screen h-20 z-30 mb-5 flex justify-between'>
            <div className="heading w-90">
            <motion.h1 className="text-black  text-xl sm:text-4xl md:text-4xl lg:text-4xl font-bold pl-3 mt-8 sm:pl-3 sm:mt-0 md:pl-8 md:mt-0 lg:pl-8 lg:mt-0" style={{fontFamily:"'Mulish Variable', sans-serif"}} animate={{opacity:1}} initial={{opacity:0}} transition={{duration:5,delay:0.5}}>UNLOCK YOUR POTENTIAL</motion.h1>  
        </div>
        <div className='pr-5 text-center h-full w-full sm:w-60'>
             <p className='text-black mt-15'>Fuel Your Journey</p>
        </div>
        </div>
            <div className="hero relative w-screen h-[500px] flex flex-col sm:flex-row md:flex-row lg:flex-row">
                 <video  autoPlay loop muted className="absolute h-full w-full object-cover inset-0">
                    <source src="Video/Hero3.mp4" type="video/mp4"/>
                </video> 
                <div className="bacground bg-black/20 absolute inset-0"></div>  
                {/* Texts */}
                <div className="absolute inset-0  w-full flex justify-center items-center">
                    <motion.div className='w-xl text-center' variants={parentvariants} animate="show" initial="hidden">
                         <motion.p className='text-white md:text-4xl' variants={childVariants}>AI-powered perosnal fitness assistant for improve your life</motion.p>
                         <motion.p className='text-white md:mt-10' variants={childVariants}>Start your fitness journey with confidence - simple,</motion.p>
                         <motion.p className='text-white' variants={childVariants}>perosnalized workouts designed just for you.</motion.p>
                    </motion.div>   
                </div> 
            </div>
        </div>
        </>
    )
}