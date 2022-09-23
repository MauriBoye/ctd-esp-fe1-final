import "./grilla-personajes.css";
import TarjetaPersonaje from "./tarjeta-personaje.componente";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { loadPersonajes, loadPersonajesFiltroNombre } from "../../slices";
import { personajesSlice } from "../../slices";

/**
 * Grilla de personajes para la pagina de inicio
 * @returns un JSX element
 */
const GrillaPersonajes = () => {
    const { personajes, loading, filter, page } = useAppSelector(
        (state) => state.personajes
    );
    const dispatch = useAppDispatch();

    useEffect(() => {
        filter === ""
            ? dispatch(loadPersonajes())
            : dispatch(loadPersonajesFiltroNombre());
        dispatch(personajesSlice.actions.resetEpisodes());
    }, [page, filter, dispatch]);

    if (loading) return <div> Cargando...</div>;

    return (
        <div className="grilla-personajes">
            {personajes.results?.map((personaje) => (
                <TarjetaPersonaje personaje={personaje} key={personaje.id} />
            ))}
        </div>
    );
};

export default GrillaPersonajes;
