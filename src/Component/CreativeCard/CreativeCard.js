import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CreativeCard = ({ image }) => {
    return (
        <Card sx={{ maxWidth: 345, minWidth: 345, p: 2, borderRadius: '10px' }}>
            <CardMedia
                sx={{ height: 180, borderRadius: '10px' }}
                image={image}
            />
            <CardContent sx={{
                p: 0,
                pb: 0,
                pt: 4,
                '&:last-child': {
                    pb: 0,
                },
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
            }}>
                <Box>
                    <Typography gutterBottom variant="h5"
                        component="div"
                        color="text.secondary"
                        fontSize='16px'
                    >
                        Web development
                    </Typography>
                    <Typography variant="body2"
                        color='primary.main'
                        fontWeight='bold'
                        fontSize='20px'
                    >
                        Web design Research
                    </Typography>
                </Box>
                <IconButton>
                    <AddCircleOutlineIcon />
                </IconButton>
            </CardContent>
        </Card>
    );
};

export default CreativeCard;