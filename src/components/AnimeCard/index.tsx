import { Card, CardContent, Typography, CardMedia } from '@mui/material';

// Types
import { CardProps } from '../../types';

const AnimeCard = ({ anime }: { anime: CardProps }) => {
    return (
        <Card
            sx={{
                width: 225,
                height: 360,
                borderRadius: 2,
                boxShadow: 3,
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
                height="300"
                image={anime.images.jpg.image_url}
                alt={anime.title}
                sx={{ objectFit: 'cover' }}
            />
            <CardContent sx={{ padding: 1 }}>
                <Typography variant="subtitle1" fontWeight={600} noWrap>
                    {anime.title}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default AnimeCard;
