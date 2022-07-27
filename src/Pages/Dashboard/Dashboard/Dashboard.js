import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true); 
  return (
    <div className="flex text-center">
      <div
        className={`block h-screen w-0 bg-blue-300 ${
          isOpen ? "md:w-72" : "md:w-12"
        }`}
      >
        <div className="flex justify-around items-center my-5">
          <h1 className={`text-3xl ${isOpen ? "block" : "hidden"}`}>
            Write hub
          </h1>
          <div className="text-4xl" onClick={() => setIsOpen(!isOpen)}>
            <ion-icon
              name={`${isOpen ? "close-sharp" : "menu-sharp"}`}
            ></ion-icon>
          </div>
        </div>
        <div className={`${isOpen ? "" : "hidden"}`}>
         <b className="dashboard-link"> <Link to="/dashboard/post-blog" >blog</Link></b> 
         <b className="dashboard-link"> <Link to="/dashboard/post-blog1">blog 1</Link></b> 
         <b className="dashboard-link"> <Link to="/dashboard/post-blog2">blog 2</Link></b> 
         <b className="dashboard-link"> <Link to="/dashboard/post-blog" >blog</Link></b> 
         <b className="dashboard-link"> <Link to="/dashboard/post-blog1">blog 1</Link></b> 
         <b className="dashboard-link"> <Link to="/dashboard/post-blog2">blog 2</Link></b> 
       </div>
      </div>
      <div className="h-screen bg-green-200 text-7xl lg:w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
