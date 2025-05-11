import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    CardContent,
    CardMedia,
    Typography,
    SelectChangeEvent,
    Container,
    Box,
    CircularProgress,
} from '@mui/material';

// Store
import { RootState, AppDispatch } from '../../store';

// Action
import { searchAnime } from '../../actions/animeActions';

// Components
import SearchBar from '../../components/SearchBar';
import CustomCard from '../../components/CustomCard';
import PaginationWithPageSize from '../../components/PaginationWithPageSize';

// Hook
import useDebounce from '../../hooks/useDebounce';

const SearchPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const { animeList, totalRecords, loading } = useSelector((state: RootState) => state.anime);

    const [input, setInput] = useState<string>('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const debouncedInput = useDebounce(input, 250);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handlePageChange = (_: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleRowsPerPageChange = (event: SelectChangeEvent<string>) => {
        const value = parseInt(event.target.value, 10);
        if (!isNaN(value)) {
            setRowsPerPage(value);
            setPage(0);
        }
    };

    useEffect(() => {
        if (debouncedInput.trim()) {
            dispatch(searchAnime({
                query: debouncedInput,
                page: page + 1,
                limit: rowsPerPage,
            }));
        }
    }, [debouncedInput, page, rowsPerPage]);

    return (
        <Container sx={{ py: 4 }}>
            <SearchBar
                label="Search"
                defaultValue={input}
                onChange={handleInputChange}
                fullWidth
            />

            {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                    <CircularProgress />
                </Box>
            ) : (
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(225px, 1fr))',
                        gap: 2,
                        mt: 2,
                    }}
                >
                    {animeList.map((anime) => (
                        <CustomCard
                            key={anime.mal_id}
                            onClick={() => navigate(`/anime/${anime.mal_id}`)}
                            sx={{
                                width: '100%',
                                transition: 'transform 0.2s',
                                cursor: 'pointer',
                                '&:hover': {
                                    transform: 'scale(1.03)',
                                    boxShadow: 6,
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                height={300}
                                image={anime.images.jpg.image_url}
                                alt={anime.title}
                            />
                            <CardContent sx={{ padding: 1 }}>
                                <Typography variant="subtitle1" noWrap sx={{ textAlign: 'left' }}>
                                    {anime.title}
                                </Typography>
                            </CardContent>
                        </CustomCard>
                    ))}
                </Box>
            )}

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
