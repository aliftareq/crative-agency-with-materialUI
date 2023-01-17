import { Box, Grid } from '@mui/material';
import React from 'react';
import SectionTitle from '../../Component/SectionTitle/SectionTitle';
import Service from '../../Component/Service/Service';

const serviceImages = [
    'https://i.ibb.co/HNhykGp/iphone-1.png',
    'https://i.ibb.co/r0gHkvM/color-palette-1.png',
    'https://i.ibb.co/CvQwzKC/coding-1.png',
];

const Services = () => {
    return (
        <Box>
            <SectionTitle title={'Provide Awesome'} colored={'Services'} />
            <Grid container spacing={2} sx={{ mt: '20px' }}>
                {
                    serviceImages.map((image, idx) =>
                        <Grid item xs={12} sm={6} md={4} key={idx}>
                            <Service image={image} />
                        </Grid>
                    )}
            </Grid>
        </Box>
    );
};

export default Services;