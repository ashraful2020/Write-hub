import React from "react";
import { useSelector } from "react-redux";
import Footer from "../Pages/Shared/Footer/Footer";
import Navigation from "../Pages/Shared/Navigation/Navigation";
import PopularPost from "../Pages/Shared/PopularPost/PopularPost";
import Tags from "../Pages/Shared/Tags/Tags";

const withLayout = (PageComponent) => {
  return function WithPage({ ...props }) {
    const { loading } = useSelector((state) => state.posts);
    return (
      <div className={`${loading ? "hidden" : "block"}`}>
        <Navigation />

        <div>
          <PageComponent {...props} />
        </div>
        <PopularPost />
        <Tags />
        <Footer />
      </div>
    );
  };
};

export default withLayout;
