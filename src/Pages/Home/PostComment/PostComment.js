import React, { useState } from "react";
import profile from "../SinglePost/3.jpg";

const PostComment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Comment section interaction Coming soon");
  };
  return (
    <div className="bg-neutral-200  ">
      <div className="mx-auto  lg:max-w-5xl">
        <p className=" pb-12 font-mono text-5xl italic">5 Comments</p>
        <div>
          {/*  */}
          <div className="max-w-4xl justify-evenly space-x-8 py-4 md:flex">
            <img
              className="hidden h-16 w-16 rounded-full md:block"
              src={profile}
              alt=""
            />
            <div>
              <h1 className="font-mono text-2xl font-normal capitalize">
                name
              </h1>
              <p>Dec 16, 2017 @ 25:05</p>
              <p className="py-4 text-justify leading-7">
                Alias aperiam at debitis deserunt dignissimos dolorem doloribus,
                fuga fugiat impedit laudantium magni maxime nihil nisi quidem
                quisquam sed ullam voluptas voluptatum. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
          {/*  */}
          {/*  Add Comment  */}
          <div className="mx-auto lg:max-w-4xl">
            <h1 className="font-serif text-4xl font-semibold">Add Comment</h1>
            <form className="mx-auto" onSubmit={handleSubmit}>
              <input
                className="post-input"
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Your Name"
                required
              />
              <input
                className="post-input"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Your Email"
                required
              />
              <input
                className="post-input"
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="Your website"
                required
              />
              <textarea
                autoComplete="off"
                className="post-input h-52"
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message"
                required
              />
              <input
                className="w-full rounded bg-black py-6 font-semibold uppercase tracking-widest text-white hover:bg-sky-700"
                type="Submit"
                defaultValue="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostComment;
