import React from 'react';
import {
    Box,
    Typography,
    Container,
    CardMedia,
    CardContent,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CustomCard from '../../components/CustomCard';
import Button from '../../components/Button';

interface StatCard {
    title: string;
    value: string;
    backgroundColor: string;
    fontColor: string;
}

const STAT_CARDS: StatCard[] = [
    {
        title: "1,132,322 USERS",
        value: "9.2",
        backgroundColor: "#E3F2FC",
        fontColor: "#06479E",
    },
    {
        title: "RANK",
        value: "#1",
        backgroundColor: "#E8F5E9",
        fontColor: "#388E3C",
    },
    {
        title: "POPULARITY",
        value: "#15",
        backgroundColor: "#FFEBEE",
        fontColor: "#C62828",
    },
    {
        title: "MEMBERS",
        value: "1,234,567",
        backgroundColor: "#FFF3E0",
        fontColor: "#EF6C00",
    },
];

const AnimeDetail: React.FC = () => {
    return (
        <Container sx={{ py: 4 }}>
            <Box
                display="flex"
                flexDirection={{ xs: 'column', md: 'row' }}
                gap={3}
            >
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
                        src="https://cdn.myanimelist.net/images/anime/13/17405.jpg"
                        alt="Anime Poster"
                    />
                </CustomCard>

                {/* Synopsis and Stats */}
                <Box
                    flex={1}
                    display="flex"
                    flexDirection="column"
                    sx={{ height: { md: 300 } }}
                >
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                        Synopsis
                    </Typography>
                    <Typography variant="body2" paragraph>
                        It has been two and a half years since Naruto Uzumaki left Konohagakure,
                        the Hidden Leaf Village, for intense training following events which fueled
                        his desire to be stronger. Now Akatsuki, the mysterious organization of
                        elite rogue ninja, is closing in on their grand plan which may threaten
                        the safety of the entire shinobi world...
                    </Typography>

                    <Box
                        display="flex"
                        gap={2}
                        flexWrap="wrap"
                        sx={{ mt: { xs: 2, md: 'auto' } }}
                    >
                        {STAT_CARDS.map(({ title, value, backgroundColor, fontColor }) => (
                            <CustomCard
                                key={title}
                                sx={{
                                    backgroundColor,
                                    width: { xs: '48%', sm: 150 },
                                    flexGrow: 1,
                                }}
                            >
                                <CardContent sx={{ textAlign: "center", p: 2 }}>
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
                sx={{ marginTop: 4 }}
            />
        </Container>
    );
};

export default AnimeDetail;
