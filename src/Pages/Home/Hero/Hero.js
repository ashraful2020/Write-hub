import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="hero-warp grid-flow-col bg-black p-4 md:p-0 md:grid md:grid-rows-2 md:pt-14 md:px-40 ">
        {/* first */}
        <div className="imgThree col-span-2 row-span-2">
          <div className="relative w-full">
            <div className="relative">
              <img
                className="max-h-screen"
                src="https://i.ibb.co/9yNHdw1/hero-rock.png"
                alt="music"
              />
              <div className="absolute bottom-4 pl-4 text-white md:bottom-14 md:pl-10">
                <button className="bg-blue-300 px-3 py-1 font-bold">
                  MUSIC
                </button>
                <h1 className="text-xl font-bold md:text-5xl">
                  What Your Music Preference Says About You and Your
                  Personality.
                </h1>
                <div className="flex items-center justify-start gap-6">
                  <img
                    className="hidden h-12 w-12 rounded-full object-cover text-sm md:block"
                    src="https://i.ibb.co/TbgyddX/hero-watch.png"
                    alt="author"
                  />
                  <p className="text-md font-black">Ashraful</p>
                  <p className="text-md font-bold">December 29,2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* second */}
        <div className="imageOne row-span-1">
          <div className="relative w-full">
            <div className="relative">
              <img
                className="w-full"
                src="https://i.ibb.co/TbgyddX/hero-watch.png"
                alt="wealth"
              />
              <div className="absolute bottom-4 pl-4 text-white md:bottom-14 md:pl-10">
                <button className="bg-blue-300 px-3 py-1 font-bold">
                  MUSIC
                </button>
                <h1 className="text-xl">
                  The Pomodoro Technique Really Works.
                </h1>
                <div className="flex items-center justify-start gap-6">
                  <img
                    className="hidden h-12 w-12 rounded-full object-cover text-sm md:block"
                    src="https://i.ibb.co/TbgyddX/hero-watch.png"
                    alt="author"
                  />
                  <p className="text-md font-black">Ashraful</p>
                  <p className="text-md font-bold">December 29,2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  third */}
        <div className="imgTwo col-span-1">
          <div className="relative w-full">
            <div className="relative">
              <img
                className="w-full"
                src="https://i.ibb.co/j3Lx6Ts/hero-car.png"
                alt="health"
              />
              <div className="absolute bottom-4 pl-4 text-white md:bottom-14 md:pl-10">
                <button className="bg-blue-300 px-3 py-1 font-bold">
                  MUSIC
                </button>
                <h1 className="text-xl">Throwback To The Good Old Days.</h1>
                <div className="flex items-center justify-start gap-6">
                  <img
                    className="hidden h-12 w-12 rounded-full object-cover text-sm md:block"
                    src="https://i.ibb.co/TbgyddX/hero-watch.png"
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
    </div>
  );
};

export default Hero;
