import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// Types
import { SearchBarProps } from '../../types';


const SearchBar: React.FC<SearchBarProps> = ({ ...props }) => {
    return (
        <TextField
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
