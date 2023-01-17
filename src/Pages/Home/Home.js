import React from 'react';
import Branding from './Branding';
import Brands from './Brands';
import OurWorks from './OurWorks';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Branding />
            <Brands />
            <Services />
            <OurWorks />
        </div>
    );
};

export default Home;