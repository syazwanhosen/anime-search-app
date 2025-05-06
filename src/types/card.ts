import { ReactNode } from 'react';
import { SxProps, Theme } from '@mui/material';
export interface CardProps {
    children?: ReactNode;
    sx?: SxProps<Theme>;
}