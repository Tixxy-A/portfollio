import about from "./about.jpg";
import {motion} from "framer-motion"
import { ABOUT_TEXT } from "./Data";

function About() {
  return (
    <div className="mt-10 border-b border-neutral-800 pb-8">
      <motion.h1 whileInView={{y:0,opacity:1}}  initial={{y:100,opacity:0}} transition={{duration:0.5,delay:0.5}} 
      className="my-20 text-4xl text-center">
        About <span className="text-gray-500">Me</span>
      </motion.h1>
      <div className="flex flex-wrap">
        <motion.div whileInView={{x:0,opacity:1}}  initial={{x:-100,opacity:0}} transition={{duration:0.5,delay:0.5}}
         className="w-full lg:w-1/2">
          <div className="flex items-center justify-center">
            <img src={about} className="rounded-lg size-80" alt="fuvk" />
          </div>
        </motion.div>
        <motion.div  whileInView={{x:0,opacity:1}}  initial={{x:100,opacity:0}} transition={{duration:0.5,delay:0.5}}
        className="w-full lg:w-1/2">
          <div className="flex lg:justify-start justify-center">
            <p className="my-2 py-6 max-w-xl">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
