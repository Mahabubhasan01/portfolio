import React from 'react';
import CustomBlogs from './Blogs/CustomBlogs';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Hero from './Hero/HeroSection';
import Portfolio from './Portfolio/Portfolio';
import Profile from './Profile/Profile';
import Skills from './Skills/Skills';
import Subhero from './SubHero/Subhero';
import Testmonial from './Testmonial/Testmonial';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Profile/>
            <Subhero/>
            <Skills/>
            <Portfolio/>
            <Testmonial/>
            <CustomBlogs/>
            <Contact/>
           
        </div>
    );
};

export default Home;