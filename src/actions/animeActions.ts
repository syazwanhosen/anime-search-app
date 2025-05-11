// actions/animeActions.ts

import { AppDispatch } from '../store';
import { fetchAnime, fetchAnimeById } from '../services/animeService';
import {
    fetchAnimeStart,
    fetchAnimeSuccess,
    fetchAnimeFailure,
    setSelectedAnime,
} from '../reducers/animeReducer';

export const searchAnime =
    ({ query, page = 1, limit }: { query: string; page?: number; limit: number }) =>
        async (dispatch: AppDispatch) => {
            dispatch(fetchAnimeStart());
            try {
                const data = await fetchAnime(query, page, limit);
                dispatch(fetchAnimeSuccess({ data: data.data, totalRecords: data.pagination.items.total }));
            } catch (error: any) {
                dispatch(fetchAnimeFailure(error.message));
            }
        };

export const getAnimeDetails = (id: number) => async (dispatch: AppDispatch) => {
    dispatch(fetchAnimeStart());
    try {
        const data = await fetchAnimeById(id);
        dispatch(setSelectedAnime(data.data));
    } catch (error: any) {
        dispatch(fetchAnimeFailure(error.message));
    }
};
