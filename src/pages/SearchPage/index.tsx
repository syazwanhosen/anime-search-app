import { useState, useEffect, useRef, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    Container,
    Box,
    CircularProgress,
    Typography,
    CardContent,
    CardMedia,
    SelectChangeEvent,
} from '@mui/material';

// Store
import { RootState, AppDispatch } from '../../store';

// Actions
import { searchAnime, setAnimeQuery } from '../../actions/animeActions';

// Components
import SearchBar from '../../components/SearchBar';
import CustomCard from '../../components/CustomCard';
import PaginationWithPageSize from '../../components/PaginationWithPageSize';

// Hook
import useDebounce from '../../hooks/useDebounce';

const GRID_STYLE = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(225px, 1fr))',
    gap: 2,
    mt: 2,
};

const CENTERED_BOX_STYLE = {
    display: 'flex',
    justifyContent: 'center',
    mt: 4,
};

const SearchPage = () => {
    const isFirstRun = useRef(true);

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const { animeList, totalRecords, loading, query } = useSelector((state: RootState) => state.anime);

    const [page, setPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(10);

    const debouncedInput = useDebounce(query, 250);

    useEffect(() => {
        if (!debouncedInput.trim()) return;

        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }

        dispatch(
            searchAnime({
                query: debouncedInput,
                page: page + 1,
                limit: rowsPerPage,
            })
        );
    }, [debouncedInput, page, rowsPerPage]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setAnimeQuery(e.target.value));
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

    const renderEmptyState = (message: string) => (
        <Box sx={CENTERED_BOX_STYLE}>
            <Typography variant="h6" color="text.secondary">
                {message}
            </Typography>
        </Box>
    );

    const renderAnimeList = () => (
        <>
            <Box sx={GRID_STYLE}>
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

            <PaginationWithPageSize
                totalRecords={totalRecords}
                page={page}
                rowsPerPage={rowsPerPage}
                onPageChange={handlePageChange}
                onTableRowsPerPageChange={handleRowsPerPageChange}
            />
        </>
    );

    const renderContent = () => {
        if (loading) {
            return (
                <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                    <CircularProgress />
                </Box>
            );
        }

        if (!animeList.length || !debouncedInput.trim()) return renderEmptyState('No results found');

        return renderAnimeList();
    };

    return (
        <Container sx={{ py: 4 }}>
            <SearchBar
                label="Search"
                value={query}
                onChange={handleInputChange}
                fullWidth
            />
            {renderContent()}
        </Container>
    );
};

export default SearchPage;
