import React from 'react';
import Footer from '../../Component/Footer/Footer';
import Branding from './Branding';
import Brands from './Brands';
import FAQ from './FAQ';
import OurWorks from './OurWorks';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Branding />
            <Brands />
            <Services />
            <OurWorks />
            <FAQ />
        </div>
    );
};

export default Home;