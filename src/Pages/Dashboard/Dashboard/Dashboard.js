import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navLinkItem = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Dashboard", link: "/dashboard" },
    { id: 3, name: "Post Blog", link: "/dashboard/post-blog" },
    { id: 4, name: "Post Quote", link: "/dashboard/post-quote" },
    { id: 5, name: "My profile", link: "/dashboard/profile" },
  ];
  return (
    <div className="main-container text-center  md:flex  ">
      {/*  */}
      <div
        className={`sidebar backdrop-blur-7xl hidden h-full  w-0 bg-blue-100 shadow-2xl backdrop-blur-3xl md:block ${
          isOpen ? "md:w-72" : "md:w-12"
        }`}
      >
        <div className="backdrop-blur-3xl ">
          {/* No Need To Touch  */}
          <div className="my-5 hidden items-center justify-around text-black md:flex ">
            <h1 className={`text-3xl ${isOpen ? "block" : "hidden"}`}>
              Write hub
            </h1>
            <div className="text-4xl" onClick={() => setIsOpen(!isOpen)}>
              <ion-icon
                name={`${isOpen ? "close-sharp" : "menu-sharp"}`}
              ></ion-icon>
            </div>
          </div>
          {/* No Need To Touch  */}

          <div className={`${isOpen ? "" : "hidden"} text-black`}>
            {navLinkItem.map((navLink) => {
              return (
                <b key={navLink.id} className="dashboard-common mx-5">
                  <Link to={`${navLink.link}`}> {navLink.name}</Link>
                </b>
              );
            })}
            <b className="dashboard-common mx-5">Log Out</b>
          </div>
        </div>
      </div>
      {/*  Mobile Dashboard menu */}
      <div className={`block w-screen bg-blue-200 md:hidden`}>
        <div className="flex items-center justify-around">
          <h1 className={`text-7xl}`}>Dashboard</h1>
          <div className="text-3xl" onClick={() => setIsOpen(!isOpen)}>
            <ion-icon
              name={`${isOpen ? "menu-sharp" : "close-sharp"}`}
            ></ion-icon>
          </div>
        </div>

        <div className={`${isOpen ? "hidden" : ""} bg-violet-300 text-black`}>
          {navLinkItem.map((navLink) => {
            return (
              <b
                key={navLink.id}
                className="dashboard-link-mobile"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Link to={`${navLink.link}`}> {navLink.name}</Link>
              </b>
            );
          })}
          <b className="dashboard-link-mobile">Log Out</b>
        </div>
      </div>

      <div className="w-full bg-gradient-to-r from-indigo-50 via-lime-50 to-orange-50">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
