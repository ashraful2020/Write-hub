import React, { useState } from 'react';

const PostBlog = () => {
  const [img, setImg] = useState(null);
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Comment section interaction Coming soon");
  };
    const onImageChange = (e) => {
      const [file] = e.target.files;
      setImg(URL.createObjectURL(file));
    };
   
  return (
    <div>
      <div className="bg-neutral-200">
        <form className="mx-auto max-w-3xl " onSubmit={handleSubmit}>
          <div className={`${!img && "py-32"}`}>
            {img && (
              <img
                src={img}
                alt=""
                className=" mx-auto h-80 w-full object-contain text-center"
              />
            )}
            <label
              className={`${
                img ? "hidden" : ""
              } border-4 border-dotted border-gray-700 py-16 px-40  text-green-400`}
            >
              <ion-icon className="h-screen w-96" name="images"></ion-icon>
              <input className=" hidden" type="file" onChange={onImageChange} />
            </label>
          </div>
          <input
            className="post-title text-7xl"
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Title"
            title="Hello"
            required
          />

          <textarea
            autoComplete="off"
            className="post-textarea2 h-96 text-4xl"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell your story............."
            required
          />
          <input
            className="post-title2"
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Sub title"
            title="Hello"
            required
          />
          <textarea
            autoComplete="off"
            className="post-textarea3 h-96 text-4xl"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell your story............."
            required
          />
          <input
            className="w-full rounded bg-black py-6 text-lg font-semibold uppercase tracking-widest text-white hover:bg-sky-700"
            type="Submit"
            defaultValue="Submit"
          />
        </form>
      </div>
      {/* */}
    </div>
  );
};

export default PostBlog;