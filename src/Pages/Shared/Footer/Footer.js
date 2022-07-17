import React from 'react';

const Footer = () => {
    return ( 
        <div>
          <div className="mx-auto grid  gap-2 bg-black py-8 px-4 text-center text-2xl text-gray-500 sm:grid-cols-3 sm:text-sm lg:grid-cols-4 lg:py-16 lg:px-16 lg:text-left">
            <div className="mt-8 sm:mt-0">
              <div>
                <h3 className="pb-6 text-base font-bold text-white">
                  QUICK LINKS
                </h3>
              </div>
              <hr />
              <div className="pt-4">
                <div>Home</div>
                <div>Blog</div>
                <div>Styles</div>
                <div>About</div>
                <div>Contact</div>
                <div>Privacy Policy</div>
              </div>
            </div>

            <div className="mt-8 sm:mt-0">
              <div>
                <h3 className="pb-6 text-base font-bold text-white">
                  ARCHIVES
                </h3>
              </div>
              <hr />
              <div className="pt-4">
                <div>January 2021</div>
                <div>December 2020</div>
                <div>November 2019</div>
                <div>October 2018</div>
                <div>September 2017</div>
                <div>August 2017</div>
              </div>
            </div>

            <div className="mt-8 sm:mt-0">
              <div>
                <h3 className="pb-6 text-base font-bold text-white">SOCIAL</h3>
              </div>
              <hr />
              <div className="pt-4">
                <div>Facebook</div>
                <div>Instagram</div>
                <div>Twitter</div>
                <div>Pinterest</div>
                <div>Google+</div>
                <div>LinkedIn</div>
              </div>
            </div>

            <div className="mt-8 sm:col-span-3 sm:mt-0 lg:col-span-1">
              <div>
                <h3 className="pb-6 text-base font-bold text-white">
                  OUR NEWSLETTER
                </h3>
              </div>
              <hr />
              <div className="pt-4">
                <p>
                  Blogging is a great way to show your talents and interests to
                  prospective employers, while adding an edge to your resume. If
                  you blog consistently it shows your dedication, passions and
                  creativity – all of which are key attributes employers look
                  for in job candidates.
                </p>
              </div>
              <form className="">
                <div className="flex w-full items-center border-b border-teal-500 py-2">
                  <input
                    className="mr-3 w-full appearance-none border-none bg-transparent py-1 px-2 leading-tight text-gray-700 focus:outline-none"
                    type="text"
                    placeholder="Email Address"
                    aria-label="Email Address"
                  />
                  <button
                    className="flex-shrink-0 rounded border-4 border-teal-500 bg-teal-500 py-1 px-2 text-sm text-white hover:border-teal-700 hover:bg-teal-700"
                    type="button"
                  >
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="bg-black pb-8 pl-0 text-center text-gray-500 sm:pl-16">
            &copy; Copyright Writehub 2022 &nbsp;&nbsp;|&nbsp;&nbsp; Site
            template by <span className="text-white"> Ashraful islam </span>
          </div>
        </div> 
    );
};

export default Footer;