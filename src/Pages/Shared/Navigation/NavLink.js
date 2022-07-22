import React, { useState } from "react";

const NavLink = () => {
  const links = [
    { name: "Home", link: "Home", subMenu: false },
    {
      name: "Category",
      link: "Category",
      subMenu: true,
      subLink: [
        { name: "Life Style", link: "" },
        { name: "Health", link: "" },
        { name: "Family", link: "" },
        { name: "Management", link: "" },
        { name: "Travel", link: "" },
        { name: "Work", link: "" },
      ],
    },
    {
      name: "Blog",
      link: "blog",
      subMenu: true,
      subLink: [
        { name: "Video Post", link: "Video Post" },
        { name: "Audio Post", link: "Audio Post" },
        { name: "Gallery Post", link: "Gallery Post" },
        { name: "Standard Post", link: "Standard Post" },
      ],
    },
    { name: "Styles", link: "Styles", subMenu: false },
    { name: "About", link: "About", subMenu: false },
    { name: "Contact", link: "Contact", subMenu: false }, 
  ];

  const [heading, setHeading] = useState("");

  return (
    <>
      {links.map((link,index) => {
        return (
          <div key={index} className="group px-1 text-left md:cursor-pointer">
            <h1
              className="container flex justify-between pt-6 text-left font-bold uppercase text-gray-400 hover:text-white md:pt-0"
              onClick={() =>
                heading !== link.name ? setHeading(link.name) : setHeading("")
              }
              >
              {link.name} 
              {link.subMenu && (
                <span className=" inline text-xl md:ml-2 md:block group-hover:md:-mt-2 group-hover:md:rotate-180">
                  <ion-icon
                    name={`${
                      heading === link.name ? "chevron-up" : "chevron-down"
                    }`}
                  ></ion-icon>
                </span>
              )}
            </h1>
            {link.subMenu && (
              <div>
                <div className="top-15 absolute hidden hover:md:block group-hover:md:block">
                  <div className="z-0 py-3">
                    <div className="absolute left-3 mt-1 h-4 w-4 rotate-45 bg-black "></div>
                  </div>
                  <div className=" z-50  bg-black  px-6 py-4 ">
                    {link.subLink.map((slink,index) => {
                      return (
                        <div key={index}>
                          <h1 className="pt-2 font-normal text-gray-400 hover:font-semibold hover:text-white">
                            {slink.name}
                          </h1>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* mobile sub menu */}

            {link.subMenu && (
              <div
                className={`${heading === link.name ? "md:hidden" : "hidden"}`}
              >
                {link.subLink.map((slink,index) => (
                  <p key={index} className="pl-10 pt-4 text-base font-normal text-gray-400 hover:font-medium hover:text-white">
                    {slink.name}
                  </p>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default NavLink;
