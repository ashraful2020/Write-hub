import React, { memo, useState } from "react";

const PostBlog = () => {
  const [img, setImg] = useState(null);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [subMessage, setSubMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Comment section interaction Coming soon");
  };
  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
  };

  console.log("render");
  return (
    <div className="bg-neutral-200">
      <div className=" mx-auto py-4 px-4 md:max-w-3xl md:py-0 md:px-16 lg:max-w-5xl">
        <form className="relative" onSubmit={handleSubmit}>
          <input
            className="absolute top-8 hidden rounded-sm bg-black px-12 py-4 text-sm font-semibold uppercase tracking-widest text-white hover:bg-sky-700  md:-right-10 lg:block xl:-right-16"
            type="Submit"
            defaultValue="publish"
          />
          <div className={`${!img && "py-7 md:py-24 lg:py-32"}`}>
            {img && (
              <img
                src={img}
                alt=""
                className=" mx-auto h-40 w-full object-contain text-center xl:h-72"
              />
            )}
            <label className="absolute -mt-4 px-4 text-[10px] text-purple-500 sm:text-sm">
            Image size cann't be 20kb longer
            </label>
            <label
              className={`${
                img ? "hidden" : ""
              } border-2 border-dotted border-gray-700   px-14 py-4 text-green-400 md:p-20   md:py-10 lg:py-16  lg:px-40`}
            >
              <ion-icon name="images"></ion-icon>
              <input className=" hidden" type="file" onChange={onImageChange} />
            </label>
          </div>

          {/*  This is Post title input tag */}
          <input
            className="post-input text-3xl md:text-4xl"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            required
          />

          <p className="-mt-2 text-[10px] text-red-500 sm:text-sm">
            Title cann't be greater than 40 character
          </p>

          {/*  This is Post details input tag */}
          <div className="relative flex">
            <textarea
              autoComplete="off"
              className="post-input h-40 text-lg md:text-xl"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell your story............."
              required
            />
            <p className="add-post" onClick={(e) => setSubMessage(true)}>
              +
            </p>
          </div>

          {/*  This is Post sub title input tag */}
          {subMessage && (
            <div className="relative md:flex">
              <textarea
                autoComplete="off"
                className="post-input h-40 text-xl"
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Summery of the post "
                required
              />
              <p className="add-post" onClick={(e) => setSubMessage(false)}>
                -
              </p>
            </div>
          )}
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

export default memo(PostBlog);
