
import { Box, Grid, IconButton } from '@mui/material';
import React, { useState } from 'react';
import SectionTitle from '../../Component/SectionTitle/SectionTitle';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CreativeCard from '../../Component/CreativeCard/CreativeCard';
import { cardData } from './CardData';

const OurWorks = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        console.log(newValue);
        setValue(newValue);
    };
    return (
        <Box sx={{
            my: 5,
        }}>
            {/* heading section  */}
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 2,
                }}>
                    <SectionTitle
                        title='Here are some of'
                        colored='Our Works'
                        sx={{
                            textAlign: 'left',
                        }}
                    />
                    <Box sx={{
                        width: '100%',
                        bgcolor: 'background.paper',
                        display: 'flex',
                        alignItems: 'center',

                    }}>
                        <Tabs value={value} onChange={handleChange} centered sx={{

                            '& .MuiTabs-indicator': {
                                display: 'none',
                            },
                            '& .Mui-selected': {
                                color: 'Primary.lime',
                                fontWeight: 'bold'
                            },
                            '& .MuiButtonBase-root': {
                                textTransform: 'capitalize',
                            }
                        }}>
                            <Tab label="All" />
                            <Tab label="Web Design" />
                            <Tab label="Mobile-application" />
                        </Tabs>
                        <Box>
                            <IconButton sx={{
                                border: '1px solid #959EAD',
                                mr: '1rem'
                            }}
                                onClick={() => setValue(value - 1)}
                                disabled={value === 0}
                            >
                                <ArrowBackIcon />
                            </IconButton>
                            <IconButton sx={{
                                border: '1px solid #959EAD'
                            }}
                                onClick={() => setValue(value + 1)}
                                disabled={value === 2}
                            >
                                <ArrowBackIcon sx={{ transform: 'rotate(180deg)' }} />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
            </Box>
            {/* card section  */}
            <Box>
                <Grid container spacing={3} justifyContent='center'>
                    {
                        cardData[value].map(image =>
                            <Grid item>
                                <CreativeCard image={image} />
                            </Grid>
                        )
                    }
                </Grid>
            </Box>
        </Box>
    );
};

export default OurWorks;