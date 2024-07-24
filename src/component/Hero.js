import {hero_description} from './Data';
import profile from './profile.jpeg'
function Hero() {
  return (
    <div className="border-b  border-neutral-800 pb-5 px-5 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl">Anuj Raut</h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">Full Stack developer</span>
            <p className="my-2 backdrop:max-w-xl py-6 font-light tracking-tight">{hero_description}</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
         <div className="flex justify-center">
           <img src={profile} className="rounded-full" alt="fuck"/>
         </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
