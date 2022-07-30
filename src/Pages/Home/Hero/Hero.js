import React from "react";  
import img from "../../../Assets/images/50.png"

const Hero = () => { 
  return (
    <div>
      <div className="hero-warp grid grid-flow-col grid-rows-2 bg-stone-900 p-6 lg:p-8 lg:pt-14 xl:px-24">
        {/* first */}
        <div className="imgThree col-span-2 row-span-2">
          <img
            className="h-80 w-full  object-cover hover:brightness-50  md:h-full lg:h-full "
            src="https://i.ibb.co/MRG97hn/rock.jpg"
            alt="music"
          />
          <div className="relative">
            <div className="absolute bottom-1 p-5 text-left text-white sm:p-12 xl:bottom-14">
              <button className="bg-blue-300 px-3 py-1 font-bold uppercase">
                MUSIC
              </button>
              <h1 className="font-serif text-xl font-semibold lg:text-4xl">
                What Your Music Preference Says About You and Your Personality.
              </h1>
              <div className="flex items-center justify-start gap-6 text-gray-500">
                <img
                  className="hidden h-12 w-12 rounded-full object-cover text-sm lg:block"
                  src={img}
                  alt="author"
                />
                <p className="text-md font-black">Ashraful</p>
                <p className="text-md font-bold">December 29,2021</p>
              </div>
            </div>
          </div>
        </div>
        {/* second */}
        <div className="row-start-3 lg:row-start-1">
          <img
            className="h-72 w-full object-cover brightness-75 hover:brightness-50 lg:h-full"
            src="https://i.ibb.co/DgKPHcw/watch.png"
            alt="wealth"
          />
          <div className="relative">
            <div className="absolute bottom-1 p-5 text-left text-white xl:bottom-1">
              <button className="bg-lime-600 px-3 py-1 font-bold uppercase">
                Management
              </button>
              <h1 className="font-serif text-xl font-semibold">
                The Pomodoro Technique Really Works.
              </h1>
              <div className="flex items-center justify-start gap-6 text-neutral-300">
                <img
                  className="hidden h-12 w-12 rounded-full object-cover text-sm lg:block"
                  src={img}
                  alt="author"
                />
                <p className="text-md font-black">Ashraful</p>
                <p className="text-md font-bold">December 29,2021</p>
              </div>
            </div>
          </div>
        </div>
        {/*  third */}
        <div className="row-start-3 hidden   md:block lg:row-start-2">
          <img
            className="h-72 object-cover brightness-75 hover:brightness-50 lg:h-full"
            src="https://i.ibb.co/pZN7tG1/car.png"
            alt="health"
          />{" "}
          <div className="relative">
            <div className="absolute bottom-1 p-5 text-left text-white xl:bottom-1">
              <button className="bg-lime-600 px-3 py-1 font-bold uppercase">
                Life style
              </button>
              <h1 className="font-serif text-xl font-semibold">
                Throwback To The Good Old Days.
              </h1>
              <div className="flex items-center justify-start gap-6 text-gray-500">
                <img
                  className="hidden h-12 w-12 rounded-full object-cover text-sm lg:block"
                  src={img}
                  alt="author"
                />
                <p className="text-md font-black">Ashraful</p>
                <p className="text-md font-bold">December 29,2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
