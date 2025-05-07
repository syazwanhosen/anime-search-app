import { useState } from 'react';
import {
    CardContent,
    CardMedia,
    Typography,
    SelectChangeEvent,
    Container,
    Box
} from '@mui/material';

// Components
import SearchBar from '../../components/SearchBar';
import CustomCard from '../../components/CustomCard';
import PaginationWithPageSize from '../../components/PaginationWithPageSize';

import image from '../../assets/images.jpeg';

const ANIME_LIST = ['Naruto', 'One Piece', 'Attack on Titan', 'My Hero Academia', 'Demon Slayer'];

const SearchPage = () => {
    const [input, setInput] = useState<string>('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const totalRecords = 137;

    const handlePageChange = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleRowsPerPageChange = (event: SelectChangeEvent<number>) => {
        const value = parseInt(event.target.value as string, 10);
        setRowsPerPage(value);
        setPage(0);
    };

    return (
        <Container sx={{ py: 4 }}>
            <SearchBar label="Search" input={input} setInput={setInput} fullWidth />

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                    gap: 2,
                    mt: 2
                }}
            >
                {ANIME_LIST.map(anime => (
                    <CustomCard
                        key={anime}
                        sx={{
                            width: '100%',
                            transition: 'transform 0.2s',
                            cursor: 'pointer',
                            '&:hover': {
                                transform: 'scale(1.03)',
                                boxShadow: 6,
                            }
                        }}
                    >
                        <CardMedia
                            component="img"
                            height={300}
                            image={image}
                            alt="Anime Poster"
                        />
                        <CardContent sx={{ padding: 1 }}>
                            <Typography variant="subtitle1" noWrap sx={{ textAlign: 'left' }}>
                                {anime}
                            </Typography>
                        </CardContent>
                    </CustomCard>
                ))}
            </Box>


            <PaginationWithPageSize
                totalRecords={totalRecords}
                page={page}
                rowsPerPage={rowsPerPage}
                onPageChange={handlePageChange}
                onTableRowsPerPageChange={handleRowsPerPageChange}
            />
        </Container>
    );
};

export default SearchPage;
