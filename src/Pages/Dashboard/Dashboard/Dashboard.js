import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navLinkItem = [
    { id: 1, name: "Dashboard", link: "/dashboard" },
    { id: 2, name: "Post Blog 0", link: "/dashboard/post-blog" },
    { id: 3, name: "Post Blog 1", link: "/dashboard/post-blog1" },
    { id: 4, name: "Post Blog 2", link: "/dashboard/post-blog2" },
    { id: 5, name: "Post Blog ", link: "/dashboard/post-blog" },
    { id: 6, name: "Post Blog 1", link: "/dashboard/post-blog1" },
    { id: 7, name: "Post Blog 2", link: "/dashboard/post-blog2" },
  ];
  return (
    <div className="main-container text-center md:flex ">
      <div
        className={`sidebar hidden h-full w-0  border-r border-rose-200 bg-blue-200 md:block ${
          isOpen ? "md:w-72" : "md:w-12"
        }`}
      >
        {/* No Need To Touch  */}
        <div className="my-5 hidden items-center justify-around text-black md:flex">
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
              <b
                key={navLink.id}
                className="mx-5 block border-b border-gray-900 p-2 text-xl font-medium uppercase"
              >
                <Link to={`${navLink.link}`}> {navLink.name}</Link>
              </b>
            );
          })}
        </div>
      </div>
      {/*  Mobile Dashboard menu */}
      <div className={`block w-screen bg-red-200 md:hidden`}>
        <div className="flex items-center justify-around">
          <h1 className={`text-3xl}`}>Dashboard</h1>
          <div className="text-4xl" onClick={() => setIsOpen(!isOpen)}>
            <ion-icon
              name={`${isOpen ? "menu-sharp" : "close-sharp"}`}
            ></ion-icon>
          </div>
        </div>

        <div className={`${isOpen ? "hidden" : ""} bg-slate-700 text-white`}>
          {navLinkItem.map((navLink) => {
            return (
              <b key={navLink.id} className="dashboard-link" onClick={() => setIsOpen(!isOpen)}>
                <Link to={`${navLink.link}`}> {navLink.name}</Link>
              </b>
            );
          })}
        </div>
      </div>

      <div className="w-full text-7xl">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
