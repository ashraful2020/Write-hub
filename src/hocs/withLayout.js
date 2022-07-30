import React from "react";
import Footer from "../Pages/Shared/Footer/Footer";
import Navigation from "../Pages/Shared/Navigation/Navigation";
import PopularPost from "../Pages/Shared/PopularPost/PopularPost";
import Tags from "../Pages/Shared/Tags/Tags";

const withLayout = (PageComponent) => {
    return function withPage({ ...props }) { 
    return (
      <div className="">
        <Navigation />
        {/*  */}
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