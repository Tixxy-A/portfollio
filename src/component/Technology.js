import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { motion } from "framer-motion";

function Tech() {
  const iconVariants = (dura) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: dura,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-24 mb-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-8"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial={"initial"}
          animate={"animate"}
          className="rounded-2xl p-3 border-4 text-cyan-500 border-neutral-800"
        >
          <FaReact size={50} />
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial={"initial"}
          animate={"animate"}
          className="rounded-2xl p-3 border-4 text-green-500 border-neutral-800"
        >
          <FaNodeJs size={50} />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial={"initial"}
          animate={"animate"}
          className="rounded-2xl p-3 border-4 text-green-700 border-neutral-800"
        >
          <BiLogoMongodb size={50} />
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial={"initial"}
          animate={"animate"}
          className="rounded-2xl p-3 border-4 text-red-500 border-neutral-800"
        >
          <SiMysql size={50} />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial={"initial"}
          animate={"animate"}
          className="rounded-2xl p-3 border-4 text-green-500 border-neutral-800"
        >
          <SiSpringboot size={50} />
        </motion.div>
        <motion.div
          variants={iconVariants(5.5)}
          initial={"initial"}
          animate={"animate"}
          className="rounded-2xl p-3 border-4 text-green-500 border-neutral-800"
        >
          <SiSpringboot size={50} />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Tech;
