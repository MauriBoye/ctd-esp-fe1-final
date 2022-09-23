import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { useLocation } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../hooks";
import { useEffect } from "react";
import { loadEpisodios, personajesSlice } from "../slices";

/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 * Uso:
 * ``` <PaginaDetalle /> ```
 *
 * @returns la pagina de detalle
 */
const PaginaDetalle = () => {
    const location = useLocation();
    const personaje = location.state;

    const { favourites, episodes } = useAppSelector((state) => state.personajes);
    const dispatch = useAppDispatch();

    const numeroDeEpisodios = personaje.episode.map((episode) =>
        parseInt(episode.slice(40))
    );

    useEffect(() => {
        dispatch(personajesSlice.actions.getEpisodes(numeroDeEpisodios));
        dispatch(loadEpisodios());
    }, []);

    return (
        <div className="container">
            <h3>{personaje.name}</h3>
            <div className={"detalle"}>
                <div className={"detalle-header"}>
                    <img src={personaje.image} alt={personaje.name} />
                    <div className={"detalle-header-texto"}>
                        <p>{personaje.name}</p>
                        <p>Planeta: {personaje.origin.name}</p>
                        <p>Genero: {personaje.gender}</p>
                    </div>
                    <BotonFavorito
                        esFavorito={!!favourites.find((obj) => obj.id === personaje.id)}
                        personaje={personaje}
                    />
                </div>
            </div>
            <h4>Lista de episodios donde apareció el personaje</h4>
            <div className={"episodios-grilla"}>
                {Array.isArray(episodes) ? (
                    episodes.map((episode, index) => (
                        <TarjetaEpisodio episode={episode} key={index} />
                    ))
                ) : (
                    <TarjetaEpisodio episode={episodes} />
                )}
            </div>
        </div>
    );
};

export default PaginaDetalle;
