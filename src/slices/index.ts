import { createSlice } from "@reduxjs/toolkit";
import { IPersonaje, IEpisodio } from "../types/personaje";
import { createThunk } from "../hooks";
import { getEpisodios, getPersonajes, getPersonajesFiltroNombre } from "../services";
import type { PayloadAction } from '@reduxjs/toolkit'

export type PersonajesState = {
    personajes: IPersonaje[];
    loading: boolean;
    filter: string;
    page: number;
    favourites: IPersonaje[];
    episodes: IEpisodio[];
    episodesNumber: number[];
};

const initialState: PersonajesState = {
    personajes: [],
    loading: false,
    filter: "",
    page: 1,
    favourites: [],
    episodes: [],
    episodesNumber: []
};

export const loadPersonajes = createThunk<IPersonaje[], void>(
    "personajes/fetchPersonajes",
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const { page } = state.personajes;
        return getPersonajes(page.toString());
    }
);

export const loadPersonajesFiltroNombre = createThunk<IPersonaje[], void>(
    "personajesConFiltro/fetchPersonajesFiltroNombre",
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const { page, filter } = state.personajes;
        return getPersonajesFiltroNombre({ page: page.toString(), name: filter.toString() });
    }
);

export const loadEpisodios = createThunk<IEpisodio[], void>(
    "episodios/fetchEpisodios",
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const { episodesNumber } = state.personajes;
        return getEpisodios(episodesNumber);
    }
);

export const personajesSlice = createSlice({
    name: "personajes",
    initialState,
    reducers: {
        nextPage: (state) => {
            state.page += 1;
        },
        prevPage: (state) => {
            state.page -= 1;
        },
        resetPage: (state) => {
            state.page = 1;
        },
        filter: (state, action: PayloadAction<string>) => {
            state.filter = action.payload;
        },
        resetFilter: (state) => {
            state.filter = "";
        },
        addFav: (state, action: PayloadAction<IPersonaje>) => {
            state.favourites = [...state.favourites, action.payload];
        },
        deleteFav: (state, action: PayloadAction<IPersonaje>) => {
            state.favourites = state.favourites.filter((personaje) => personaje.id !== action.payload.id);
        },
        resetFav: (state) => {
            state.favourites = [];
        },
        getEpisodes: (state, action: PayloadAction<number[]>) => {
            state.episodesNumber = action.payload;
        },
        resetEpisodes: (state) => {
            state.episodesNumber = [];
            state.episodes = [];
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loadPersonajes.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(loadPersonajes.fulfilled, (state, action) => {
            state.personajes = action.payload;
            state.loading = false;
        });
        builder.addCase(loadPersonajes.rejected, (state, action) => {
            state.loading = false;
        });
        builder.addCase(loadPersonajesFiltroNombre.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(loadPersonajesFiltroNombre.fulfilled, (state, action) => {
            state.personajes = action.payload;
            state.loading = false;
        });
        builder.addCase(loadPersonajesFiltroNombre.rejected, (state, action) => {
            state.loading = false;
        });
        builder.addCase(loadEpisodios.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(loadEpisodios.fulfilled, (state, action) => {
            state.episodes = action.payload;
            state.loading = false;
        });
        builder.addCase(loadEpisodios.rejected, (state, action) => {
            state.loading = false;
        });
    },
});

