import { TextFieldProps } from '@mui/material';

export interface SearchBarProps extends Omit<TextFieldProps, 'value' | 'onChange'> {
    input: string;
    setInput: (value: string) => void;
}
