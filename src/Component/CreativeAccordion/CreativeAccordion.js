import { Box } from '@mui/material';
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const CustomExpandIcon = () => {
    return (
        <div>
            <div className='expandMore'>
                <AddIcon />
            </div>
            <div className='removeExpandIcon'>
                <RemoveIcon />
            </div>
        </div>
    );
}


const CreativeAccordion = ({ title, description }) => {
    return (
        <Box>
            <Accordion sx={{
                boxShadow: 'none',
                border: '1px solid #E5EAF4',
                p: 1,
                '& .Mui-expanded': {
                    '& .expandMore': {
                        display: 'none'
                    },
                    '& .removeExpandIcon': {
                        display: 'block',
                        '& svg': {
                            color: 'primary.lime'
                        }
                    }
                }
            }}>
                <AccordionSummary
                    sx={{
                        '& .removeExpandIcon': {
                            display: 'none'
                        },
                        "& p": {
                            color: 'primary.main',
                            fontWeight: 'bold'
                        },
                        '& .Mui-expanded': {
                            '& p': {
                                color: 'primary.lime',
                            }
                        }
                    }}
                    expandIcon={<CustomExpandIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{
                        color: '#5A7184'
                    }}>
                        {description}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default CreativeAccordion;