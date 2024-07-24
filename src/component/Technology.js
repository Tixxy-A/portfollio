import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";




function Tech() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="mt-24 mb-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-8">
        <div className="rounded-2xl p-3 border-4 text-cyan-500 border-neutral-800">
         <FaReact size={50}  />
        </div>
        <div className="rounded-2xl p-3 border-4 text-green-500 border-neutral-800">
         <FaNodeJs size={50} />
        </div>
        <div className="rounded-2xl p-3 border-4 text-green-700 border-neutral-800">
         <BiLogoMongodb size={50} />
        </div>
        <div className="rounded-2xl p-3 border-4 text-red-500 border-neutral-800">
         <SiMysql size={50} />
        </div>
        <div className="rounded-2xl p-3 border-4 text-green-500 border-neutral-800">
         <SiSpringboot size={50} />
        </div>
      </div>
    </div>
  );
}

export default Tech;
