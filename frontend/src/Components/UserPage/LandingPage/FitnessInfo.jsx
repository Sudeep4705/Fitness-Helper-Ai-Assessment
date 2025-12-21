import { motion } from "motion/react"
export default function FitnessInfo(){
    return(
        <><motion.h1 className="text-center w-full text-2xl md:text-5xl text-black md:text-center md:pt-4 md:pb-20" animate={{opacity:1}} initial={{opacity:0}} transition={{duration:2}}>Let’s make healthy happen</motion.h1>
        <div className="fitness md:w-full md:h-[400px]">
            <div className="w-full  md:flex md:w-full md:h-full">
                <div className="w-full md:w-[30%] md:h-full md:flex md:flex-col md:justify-center md:items-center">
                <p className="text-center md:pl-8 md:text-left  text-black md:text-5xl md:pl-3">Custom Workouts, Just<span className="text-gray-400"> For You</span></p>
                <p className="text-center md:pl-8 md:text-left text-black md:text-sm md:pl-3 mt-6">Designed around your unique needs, our smart system generates the ideal workout plan. It's your personal blueprint for achiveing your best results.</p>
                </div>
                <div className=" mt-5 w-full md:w-[70%] md:flex md:justify-center">
                    <img src="Image/fit1.jpg" alt="pic" className="w-full  md:object-cover md:h-full md:w-[90%] md:pl-20"  />
                </div>
            </div>
        </div>
        </>
    )
}