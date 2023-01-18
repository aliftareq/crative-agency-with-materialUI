import { Box, Button, Divider, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{
            bgcolor: '#23395d',
            py: 8
        }}>
            <Container sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Box>
                    <Typography sx={{
                        fontSize: '2.2rem',
                        color: 'white',
                    }}>
                        Creative Agency
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Typography sx={{
                        fontSize: '1.2rem',
                        color: 'rgba(255,255,255,0.7)'
                    }}>
                        Creative Agency
                    </Typography>
                    <Button sx={{
                        bgcolor: 'primary.lime',
                        '&:hover': {
                            bgcolor: 'primary.yellow',
                        },
                        ml: 2
                    }}>
                        Get Started
                    </Button>
                </Box>
                <Divider sx={{ mt: 3, bgcolor: 'rgba(255,255,255,0.7)' }} />
            </Container>
        </Box>
    );
};

export default Footer;