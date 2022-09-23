export const getPersonajes = async (param: string = "") => {
    const response = await fetch(
        "https://rickandmortyapi.com/api/character/?page=" + param
    );
    return response.json();
};

export const getPersonajesFiltroNombre = async (params: { page: string; name: string }) => {
    const response = await fetch(
        "https://rickandmortyapi.com/api/character/?page=" + params.page + "&name=" + params.name
    );
    return response.json();
};

export const getEpisodios = async (param: number[]) => {
    const response = await fetch(
        "https://rickandmortyapi.com/api/episode/" + param
    );
    return response.json();
};