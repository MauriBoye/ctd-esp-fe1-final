import TarjetaPersonaje from "../componentes/personajes/tarjeta-personaje.componente";
import { useAppSelector, useAppDispatch } from "../hooks";
import "../componentes/personajes/grilla-personajes.css";
import { personajesSlice } from "../slices";
import { useEffect } from "react";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * Uso:
 * ``` <PaginaFavoritos /> ```
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {
    const { favourites } = useAppSelector((state) => state.personajes);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(personajesSlice.actions.resetEpisodes());
    }, [dispatch]);

    return (
        <div className="container">
            <div className="actions">
                <h3>Personajes Favoritos</h3>
                <button
                    className="reset-favs"
                    onClick={() => dispatch(personajesSlice.actions.resetFav())}
                >
                    Borrar favoritos
                </button>
                <button className="danger">Test Button</button>
            </div>
            <div className="grilla-personajes">
                {favourites?.map((personaje) => (
                    <TarjetaPersonaje personaje={personaje} key={personaje.id} />
                ))}
            </div>
        </div>
    );
};

export default PaginaFavoritos;