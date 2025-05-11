import React from 'react';
import { Button as MuiButton } from '@mui/material';

// Types
import { ButtonProps } from '../../types';

const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
    return (
        <MuiButton variant="contained" color="primary" {...props}>
            {label}
        </MuiButton>
    );
};

export default Button;
