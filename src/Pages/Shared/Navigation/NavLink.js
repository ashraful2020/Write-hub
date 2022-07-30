import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavLink = () => {
  const links = [
    { name: "Home", link: "/", subMenu: false },
    {
      name: "Category",
      link: "/",
      subMenu: true,
      subLink: [
        { name: "Life Style", link: "/life-style" },
        { name: "Health", link: "/health" },
        { name: "Family", link: "/family" },
        { name: "Management", link: "/management" },
        { name: "Travel", link: "/" },
        { name: "Work", link: "/" },
      ],
    },
    {
      name: "Blog",
      link: "/",
      subMenu: true,
      subLink: [
        { name: "Video Post", link: "/video-post" },
        { name: "Audio Post", link: "/audio-post" },
        { name: "Gallery Post", link: "/gallery-post" },
        { name: "Standard Post", link: "/standard-post" },
      ],
    },
    { name: "Styles", link: "/styles", subMenu: false },
    { name: "Contact", link: "/contact", subMenu: false },
  ];

  const [heading, setHeading] = useState("");

  return (
    <>
      {links.map((link, index) => {
        return (
          <div key={index} className="group px-1 text-left md:cursor-pointer">
            <h1
              className="nav-link container flex justify-between"
              onClick={() =>
                heading !== link.name ? setHeading(link.name) : setHeading("")
              }
            >
              <Link to={link.link}>{link.name}</Link>

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
                    {link.subLink.map((slink, index) => {
                      return (
                        <div key={index}>
                          <h1 className="pt-2 font-normal text-gray-400 hover:font-semibold hover:text-white">
                            <Link to={slink.link}>{slink.name}</Link>
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
                {link.subLink.map((slink, index) => (
                  <p
                    key={index}
                    className="pl-10 pt-4 text-base font-normal text-gray-400 hover:font-medium hover:text-white"
                  >
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
