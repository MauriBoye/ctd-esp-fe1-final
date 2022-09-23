export interface IPersonaje {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    image: string;
    episode: string[];
    url: string;
    create: string;
    esFavorito?: boolean
}

export interface IEpisodio {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string
}

export type PersonajeContextType = {
    personajes: IPersonaje[];
    savePersonaje: (personaje: IPersonaje) => void;
};