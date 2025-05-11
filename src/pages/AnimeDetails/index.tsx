import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
    Box,
    Typography,
    Container,
    CardMedia,
    CardContent,
    CircularProgress,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Store
import { RootState, AppDispatch } from '../../store';

// Action
import { getAnimeDetails } from '../../actions/animeActions';

// Components
import CustomCard from '../../components/CustomCard';
import Button from '../../components/Button';

// Constants
import { STAT_CARDS } from '../../constant';

const AnimeDetail: React.FC = () => {
    const isFirstRun = useRef(true);

    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const { selectedAnime, loading } = useSelector((state: RootState) => state.anime);

    useEffect(() => {
        if (!id) return;

        if (isFirstRun.current) {
            isFirstRun.current = false;
            dispatch(getAnimeDetails(Number(id)));
        }
    }, [id]);

    if (loading) {
        return (
            <Container sx={{ py: 4 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                    <CircularProgress />
                </Box>
            </Container>
        );
    }

    if (!selectedAnime) {
        return (
            <Container sx={{ py: 4 }}>
                <Typography variant="h6" color="error">
                    Anime not found.
                </Typography>
            </Container>
        );
    }


    return (
        <Container sx={{ py: 4 }}>
            <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={3}>
                {/* Anime Poster */}
                <CustomCard
                    sx={{
                        borderRadius: 1,
                        boxShadow: 3,
                        width: { xs: '100%', md: 300 },
                        alignSelf: { xs: 'center', md: 'flex-start' },
                    }}
                >
                    <CardMedia
                        component="img"
                        height={300}
                        src={selectedAnime.images.jpg.image_url}
                        alt={selectedAnime.title}
                    />
                </CustomCard>

                {/* Synopsis and Stats */}
                <Box flex={1} display="flex" flexDirection="column" sx={{ height: { md: 300 } }}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                        {selectedAnime.title}
                    </Typography>
                    <Typography variant="body2" paragraph>
                        {selectedAnime.synopsis ?? 'No synopsis available.'}
                    </Typography>

                    <Box display="flex" gap={2} flexWrap="wrap" sx={{ mt: { xs: 2, md: 'auto' } }}>
                        {STAT_CARDS(selectedAnime).map(({ title, value, backgroundColor, fontColor }) => (
                            <CustomCard
                                key={title}
                                sx={{
                                    backgroundColor,
                                    width: { xs: '48%', sm: 150 },
                                    flexGrow: 1,
                                }}
                            >
                                <CardContent sx={{ textAlign: 'center', p: 2 }}>
                                    <Typography variant="h5" fontWeight="bold" sx={{ color: fontColor }}>
                                        {value}
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: fontColor }}>
                                        {title}
                                    </Typography>
                                </CardContent>
                            </CustomCard>
                        ))}
                    </Box>
                </Box>
            </Box>

            <Button
                startIcon={<ArrowBackIcon />}
                label="Back"
                onClick={() => navigate(-1)}
                sx={{ marginTop: 4 }}
            />
        </Container>
    );
};

export default AnimeDetail;
