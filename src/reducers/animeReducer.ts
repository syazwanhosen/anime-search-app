import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AnimeState {
    animeList: any[];
    totalRecords: number;
    loading: boolean;
    error: string | null;
    selectedAnime: any | null;
}

const initialState: AnimeState = {
    animeList: [],
    totalRecords: 0,
    loading: false,
    error: null,
    selectedAnime: null,
};

const animeSlice = createSlice({
    name: 'anime',
    initialState,
    reducers: {
        fetchAnimeStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchAnimeSuccess(state, action: PayloadAction<{ data: any[]; totalRecords: number }>) {
            state.animeList = action.payload.data;
            state.totalRecords = action.payload.totalRecords;
            state.loading = false;
        },
        fetchAnimeFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        setSelectedAnime(state, action: PayloadAction<any>) {
            state.selectedAnime = action.payload;
            state.loading = false;
        },
    },
});

export const { fetchAnimeStart, fetchAnimeSuccess, fetchAnimeFailure, setSelectedAnime } = animeSlice.actions;
export default animeSlice.reducer;
