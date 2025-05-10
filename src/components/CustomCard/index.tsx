import React from 'react';
import { Card, Box } from '@mui/material';

// Types
import { CardProps } from '../../types';


const CustomCard: React.FC<CardProps> = ({ children, sx, ...props }) => {
    return (
        <Card
            sx={{
                boxShadow: 3,
                overflow: 'hidden',
                backgroundColor: '#fff',
                ...sx,
            }}
            {...props}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                }}
            >
                {children}
            </Box>
        </Card>
    );
};

export default CustomCard;

