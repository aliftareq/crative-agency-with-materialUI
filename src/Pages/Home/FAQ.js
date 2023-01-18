import { Box } from '@mui/material';
import React from 'react';
import CreativeAccordion from '../../Component/CreativeAccordion/CreativeAccordion';
import SectionTitle from '../../Component/SectionTitle/SectionTitle';

const FAQ = () => {
    return (
        <Box sx={{
            mb: 8,
        }}>
            <SectionTitle title='Frequently Asked' colored='Question' />
            <Box sx={{
                my: 4,
                display: 'flex',
                flexDirection: 'column',
                gap: 2
            }}>
                <CreativeAccordion
                    title='How do I pay for the Essentials or Premium plan?'
                    description='You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.'
                />
                <CreativeAccordion
                    title='How do I pay for the Essentials or Premium plan?'
                    description='You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.'
                />
                <CreativeAccordion
                    title='How do I pay for the Essentials or Premium plan?'
                    description='You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.'
                />
            </Box>
        </Box>
    );
};

export default FAQ;