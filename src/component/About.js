import about from "./about.jpg";
import { ABOUT_TEXT } from "./Data";
function About() {
  return (
    <div className="mt-10 border-b border-neutral-800 pb-8">
      <h1 className="my-20 text-4xl text-center">
        About <span className="text-gray-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex items-center justify-center">
            <img src={about} className="rounded-lg size-80" alt="fuvk" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex lg:justify-start justify-center">
            <p className="my-2 py-6 max-w-xl">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
