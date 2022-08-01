import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const QuotePost = () => {
  const { user } = useAuth();
  const [message, setMessage] = useState("");
  const [author, setAuthor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      email: user.email,
      message,
      type: "quote",
      author,
    };
    fetch("http://localhost:5000/quote", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        console.log(data.post);
      });
  };

  return (
    <div className="bg-neutral-200">
      <div className=" mx-auto min-h-screen py-4 px-4 md:max-w-3xl   md:py-12 lg:max-w-5xl">
        <form className="relative" onSubmit={handleSubmit}>
          <input
            className="absolute top-8 hidden rounded-sm bg-black px-12 py-4 text-sm font-semibold uppercase tracking-widest text-white hover:bg-sky-700  md:-right-10 lg:block xl:-right-16"
            type="Submit"
            defaultValue="publish"
          />
          <h1 className="pb-12 text-3xl md:text-5xl lg:text-7xl">
            Post your Quote{" "}
          </h1>
          {/*  This is Post details input tag */}
          <div>
            <input
              className="post-input text-3xl md:text-4xl"
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Author"
              required
            />
            <textarea
              autoComplete="off"
              className="post-input h-80 text-lg md:text-xl"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell your story............."
              required
            />
          </div>

          <input
            className="w-full rounded-sm bg-black px-12 py-4 text-sm font-semibold uppercase tracking-widest text-white hover:bg-sky-700 lg:right-0 lg:hidden "
            type="Submit"
            defaultValue="publish"
          />
        </form>
      </div>
      {/* */}
    </div>
  );
};

export default QuotePost;
