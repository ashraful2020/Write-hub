import React from 'react';

const PopularPost = () => {
    return (
      <div className=" md:flex md:flex-row">
        {/*  First flex */}
        <div className="basis-3/5 ">
          <h2 className="col-span-2 my-12 mx-8 text-left text-3xl font-semibold lg:mx-14">
            Popular Posts
          </h2>
          <div className="mt-10 ml-8 grid grid-cols-1 gap-6 lg:mx-14 lg:grid-cols-2 xl:grid-cols-2">
            {/* 1*/}
            <div className="flex gap-4">
              <div className="mb-12">
                {/* blog images  */}
                <img
                  src="https://i.ibb.co/sWNX5Dm/xbeetle-150-jpg-pagespeed-ic-M0-NVu-ANrc.webp"
                  className="h-16 w-16"
                  alt=""
                />
              </div>
              {/* blog content  */}
              <div>
                <h3 className="text-base font-bold hover:text-blue-800">
                  Throwback To The Good Old Days.
                </h3>
                <small className="text-gray-500">
                  By
                  <span className="text-black hover:text-blue-800">
                    John Doe
                  </span>
                  on Dec 14, 2017
                </small>
              </div>
            </div>
            {/*2 */}
            <div className="flex gap-4">
              <div className="mb-12">
                <img
                  src="https://i.ibb.co/12JDkgx/xcookies-150-jpg-pagespeed-ic-vc-CTHPth9m.webp"
                  className="h-16 w-16"
                  alt=""
                />
              </div>
              <div>
                <h3 className=" text-base font-bold hover:text-blue-800">
                  Absolutely No Sugar Oatmeal Cookies.
                </h3>
                <small className="text-gray-500">
                  By{" "}
                  <span className="text-black hover:text-blue-800">
                    John Doe
                  </span>{" "}
                  on Dec 14, 2017
                </small>
              </div>
            </div>
            {/*3 */}
            <div className="flex gap-4">
              <div className="mb-12">
                <img
                  src="https://i.ibb.co/YhwyMrH/xshutterbug-150-jpg-pagespeed-ic-76nc-Vj-CSl-R.jpg"
                  className="h-16 w-16"
                  alt=""
                />
              </div>
              <div>
                <h3 className=" text-base font-bold hover:text-blue-800">
                  Key Benefits Of Family Photography.
                </h3>
                <small className="text-gray-500">
                  By{" "}
                  <span className="text-black hover:text-blue-800">
                    John Doe
                  </span>{" "}
                  on Dec 14, 2017
                </small>
              </div>
            </div>
            {/* 4 */}
            <div className="flex gap-4">
              <div className="mb-12">
                <img
                  src="https://i.ibb.co/nnqWRx5/xtulips-150-jpg-pagespeed-ic-h-Ipd-B8-KAy-S.jpg"
                  className="h-16 w-16"
                  alt=""
                />
              </div>
              <div>
                <h3 className=" text-base font-bold hover:text-blue-800">
                  10 Interesting Facts About Caffeine.
                </h3>
                <small className="text-gray-500">
                  By{" "}
                  <span className="text-black hover:text-blue-800">
                    John Doe
                  </span>{" "}
                  on Dec 14, 2017
                </small>
              </div>
            </div>
            {/* 5 */}
            <div className="flex gap-4">
              <div className="mb-12">
                <img
                  src="https://i.ibb.co/NNSXL6X/xwheel-150-jpg-pagespeed-ic-f-B7-Lh-VNn-X.jpg"
                  className="h-16 w-16"
                  alt=""
                />
              </div>
              <div>
                <h3 className=" text-base font-bold hover:text-blue-800">
                  Visiting Theme Parks Improves Your Health.
                </h3>
                <small className="text-gray-500">
                  By{" "}
                  <span className="text-black hover:text-blue-800">
                    John Doe
                  </span>{" "}
                  on Dec 14, 2017
                </small>
              </div>
            </div>

            {/*6*/}
            <div className="flex gap-4">
              <div className="mb-12">
                <img
                  src="https://i.ibb.co/qCdcm2c/xsalad-150-jpg-pagespeed-ic-x-O-FVz-LWy4.jpg"
                  className="h-16 w-16"
                  alt=""
                />
              </div>
              <div>
                <h3 className=" text-base font-bold hover:text-blue-800">
                  Healthy Mediterranean Salad Recipes
                </h3>
                <small className="text-gray-500">
                  By{" "}
                  <span className="text-black hover:text-blue-800">
                    John Doe
                  </span>{" "}
                  on Dec 14, 2017
                </small>
              </div>
            </div>
          </div>
        </div>
        {/* Second flex */}
        <div className="basis-2/5 px-4 text-lg">
          <h2 className="my-12 mx-4 text-left text-3xl font-semibold lg:mx-14">
            About WriteHub
          </h2>
          <div className="my-12  mx-4 text-gray-500 lg:mx-14 text-justify tracking-wide leading-8">
            Looking for some free blog sites to help you start sharing your
            writing with the world? Whether you just want to share updates with
            your family and friends or you want to start a blog and build a
            broader audience, we’ve put together ten great sites where you can
            start a blog for free.We’ll also try to steer you towards the
            specific platform that’s best for you so that you can easily create
            a blog for free.The main characteristic of this platform is that it
            comes with drag-and-drop options, so you don’t have to handle
            anything in the back-end. The design is very intuitive and modern,
            which can be used by both beginners and advanced.
          </div>
          <div className="mt-6 text-center sm:text-left">
            {/* <FaFacebookF className="mr-4 inline h-6 w-6" />
            <FaTwitter className="mr-4 inline h-6 w-6" />
            <FaInstagram className="mr-4 inline h-6 w-6" />
            <FaPinterest className="mr-4 inline h-6 w-6" /> */}
          </div>
        </div>
      </div>
    );
};

export default PopularPost;