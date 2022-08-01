import React, { memo, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import uploadImage from "../../../Assets/images/upload.png";
const PostBlog = () => {
  const { user } = useAuth();
  const [img, setImg] = useState(null);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [addedSubMessage, setAddedSubMessage] = useState(false);
  const [summery, setSummery] = useState("");
  const [category, setCategory] = useState("");
  const formData = new FormData();
  formData.append("title", title);
  formData.append("message", message);
  formData.append("image", image);
  formData.append("summery", summery);
  formData.append("category", category);
  formData.append("author", user.displayName);
  formData.append("authorEmail", user.email);
  formData.append("authorPhoto", user.photoURL);
  formData.append("type",'blog');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image || !category) {
      return alert(`please add a ${!image ? " image " : "category"}`);
    }

    fetch("http://localhost:5000/posts", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        console.log(data.post);
      });
  };
  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImage(e.target.files[0]);
    setImg(URL.createObjectURL(file));
  };

  return (
    <div className="bg-neutral-200">
      <div className=" mx-auto py-4 px-4 md:max-w-3xl md:py-12 min-h-screen  lg:max-w-5xl">
        <form className="relative" onSubmit={handleSubmit}>
          <input
            className="absolute top-8 hidden rounded-sm bg-black px-12 py-4 text-sm font-semibold uppercase tracking-widest text-white hover:bg-sky-700  md:-right-10 lg:block xl:-right-16"
            type="Submit"
            defaultValue="publish"
          />
          <div>
            {img && (
              <>
                <img
                  src={img}
                  alt=""
                  className=" mx-auto h-40 w-full object-contain text-center xl:h-72"
                />
                <div className="w-72 border-blue-400 text-left">
                  <label htmlFor="Input_element" className="text-left text-xs">
                   Change Your image 
                  </label>
                  <input
                    className=" z-10 h-full w-full cursor-pointer opacity-90 "
                    type="file"
                    onChange={onImageChange}
                    accept="image/*"
                  />
                </div>
              </>
            )}

            {/*  There image upload form  */}
            {!img && (
              <div className="m-auto px-6 sm:w-8/12 sm:px-0 md:w-7/12 lg:w-6/12 xl:w-4/12">
                <div className="group relative flex h-64 w-full items-center justify-center">
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-white bg-opacity-80 shadow-2xl backdrop-blur-xl transition duration-300 group-hover:scale-110 group-hover:bg-opacity-70"></div>
                  <input
                    className="relative z-10 h-full w-full cursor-pointer opacity-0"
                    type="file"
                    accept="image/*"
                    onChange={onImageChange}
                  />
                  <div className="m-auo absolute top-0 right-0 bottom-0 left-0 flex h-full w-full items-center justify-center">
                    <div className="space-y-6 text-center">
                      <img
                        src={uploadImage}
                        className="m-auto w-32 sm:w-40"
                        alt="upload_image"
                      />
                      <p className="text-lg text-gray-700">
                        Image size cann't greater then 20 KB
                        <label
                          title="Upload a file"
                          className="relative z-20 block cursor-pointer text-blue-500 hover:text-blue-600"
                        >
                          Upload a file
                        </label>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
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
            <p className="add-post" onClick={(e) => setAddedSubMessage(true)}>
              +
            </p>
          </div>

          {/*  This is Post sub title input tag */}
          {addedSubMessage && (
            <div className="relative md:flex">
              <textarea
                autoComplete="off"
                className="post-input h-40 text-xl"
                onChange={(e) => setSummery(e.target.value)}
                placeholder="Summery of the post "
                required
              />
              <p
                className="add-post"
                onClick={(e) => setAddedSubMessage(false)}
              >
                -
              </p>
            </div>
          )}

          <select
            onChange={(e) => setCategory(e.target.value)}
            className="my-8 block h-full w-full rounded-lg border border-gray-300 bg-gray-50 py-5 px-5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            defaultValue={"DEFAULT"}
            required
          >
            <option value="DEFAULT" disabled>
              Choose a Category
            </option>
            <option value="Life style">Life style</option>
            <option value="health">Health</option>
            <option value="Family">Family</option>
            <option value="Management">Management</option>
            <option value="Travel">Travel</option>
            <option value="Work">Work</option>
          </select>
          <input
            className="w-full rounded-sm bg-black px-12 py-4 text-sm font-semibold uppercase tracking-widest text-white hover:bg-sky-700 lg:right-0 lg:hidden "
            type="Submit"
            defaultValue="publish"
          />
        </form>
      </div>
    </div>
  );
};

export default memo(PostBlog);
