import { Theme } from '@mui/material/styles';

// Types
import { StatCards } from "../types";

export const STAT_CARDS = (anime: StatCards, theme: Theme) => [
    {
        title: 'SCORE',
        value: anime.score ?? 'N/A',
        backgroundColor: theme.palette.primary.light,
        fontColor: theme.palette.primary.main,
    },
    {
        title: 'RANK',
        value: anime.rank ? `#${anime.rank}` : 'N/A',
        backgroundColor: theme.palette.success.light,
        fontColor: theme.palette.success.main,
    },
    {
        title: 'POPULARITY',
        value: anime.popularity ? `#${anime.popularity}` : 'N/A',
        backgroundColor: theme.palette.error.light,
        fontColor: theme.palette.error.main,
    },
    {
        title: 'MEMBERS',
        value: anime.members?.toLocaleString() ?? 'N/A',
        backgroundColor: theme.palette.warning.light,
        fontColor: theme.palette.warning.main,
    },
];
