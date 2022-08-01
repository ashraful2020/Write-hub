import React, { useState } from "react";

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const userInfo = {
    userId: "Wh-" + "0023",
    name: "Ashraful islam ",
    email: "mr.ashraful2020@gmail.com",
    portfolio: "https://ashraful.web.app/",
  };
  const [user, setUser] = useState(userInfo);
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    alert("User Updated Successfully");
    setEdit(false);
  };
  return (
    <div className="h-screen bg-gray-100">
      <div className="relative flex justify-around border-b py-6">
        <p className="text-4xl ">My Profile</p>
        {edit ? (
          <p className="text-3xl text-green-400">Editing Mode </p>
        ) : (
          <button
            className="text-lg text-red-800"
            onClick={() => setEdit(true)}
          >
            Edit
          </button>
        )}
      </div>
      {/*  User Info section  */}
      <div className="mx-12 flex flex-row">
        <div className="w-full basis-2/5 ">
          <img
            className="h-52 w-52 rounded-full"
            src="https://i.ibb.co/pZN7tG1/car.png"
            alt=""
          />
        </div>
        <div className="relative w-full basis-3/5 space-y-3 text-justify">
          {/*  Update User info */}
          {edit ? (
            <form onSubmit={handleOnSubmit}>
              <label> User Id </label>
              <input
                type="text"
                name="userId"
                onBlur={handleOnBlur}
                defaultValue={user.userId}
                className="profile-input"
              />
              <label> Name </label>
              <input
                type="text"
                name="name"
                onBlur={handleOnBlur}
                defaultValue={user.name}
                className="profile-input"
              />
              <label> Email </label>
              <input
                type="text"
                name="email"
                onBlur={handleOnBlur}
                defaultValue={user.email}
                className="profile-input"
              />
              <label> Portfolio </label>
              <input
                type="text"
                name="portfolio"
                onBlur={handleOnBlur}
                defaultValue={user.portfolio}
                className="profile-input"
              />
              <button className="absolute top-0 right-0 text-lg" type="submit">
                save
              </button>
            </form>
          ) : (
            <>
              <p className="text-lg">User Id: {user.userId}</p>
              <p className="text-3xl">Full name: {user.name}</p>
              <p className="text-xl">Email : {user.email}</p>
              <p className="text-xl">
                Portfolio :{" "}
                                  <a
                                      target="_blank"
                  href={user.portfolio}
                  className="text-blue-400 underline"
                >
                  {user.portfolio}
                </a>
              </p>
            </>
          )}
        </div>
      </div>
      <div className="w-full basis-3/5 space-y-3 pl-96 text-justify"></div>
    </div>
  );
};

export default Profile;
