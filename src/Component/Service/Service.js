import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Service = ({ image }) => {
    return (
        <Card sx={{
            maxWidth: 345,
            boxShadow: 'none',
            mx: 'auto',
            '&:hover': {
                boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
            },
        }}>
            <CardMedia
                component='img'
                height='140'
                sx={{ width: 'auto', height: '100px', mx: 'auto', pt: '1rem' }}
                image={image}
                title="green iguana"

            />
            <CardContent sx={{
                textAlign: 'center'
            }}>
                <Typography gutterBottom variant="h5" component="div"
                    sx={{
                        fontWeight: 'bold'
                    }}>
                    Web & Mobile design
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    We craft stunning and amazing web UI, using a well drrafted UX to
                    fit your product.
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Service;