import React, { ChangeEvent } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// Types
import { SearchBarProps } from '../../types';


const SearchBar: React.FC<SearchBarProps> = ({ input, setInput, ...props }) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setInput(event.target.value);
    };

    return (
        <TextField
            value={input}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
            {...props}
        />
    );
};

export default SearchBar;
