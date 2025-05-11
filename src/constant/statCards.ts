// Types
import { StatCards } from "../types";


export const STAT_CARDS = (anime: StatCards) => [
    {
        title: 'SCORE',
        value: anime.score ?? 'N/A',
        backgroundColor: '#E3F2FC',
        fontColor: '#06479E',
    },
    {
        title: 'RANK',
        value: anime.rank ? `#${anime.rank}` : 'N/A',
        backgroundColor: '#E8F5E9',
        fontColor: '#388E3C',
    },
    {
        title: 'POPULARITY',
        value: anime.popularity ? `#${anime.popularity}` : 'N/A',
        backgroundColor: '#FFEBEE',
        fontColor: '#C62828',
    },
    {
        title: 'MEMBERS',
        value: anime.members?.toLocaleString() ?? 'N/A',
        backgroundColor: '#FFF3E0',
        fontColor: '#EF6C00',
    },
];