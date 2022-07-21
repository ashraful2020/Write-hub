import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import PopularPost from '../../Shared/PopularPost/PopularPost';
import Tags from '../../Shared/Tags/Tags';
import Hero from '../Hero/Hero'; 
import Post from '../Post/Post';

const Home = () => {
    return (
      <div>
        <Navigation />
        <Hero />
        <Post /> 
        <PopularPost />
        <Tags />
        <Footer />
      </div>
    );
};

export default Home;