import "./tarjeta-episodio.css";
import { useAppSelector } from "../../hooks";

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 * @returns un JSX element
 */
const TarjetaEpisodio = ({ episode }) => {
    const { loading } = useAppSelector((state) => state.personajes);

    if (loading) return <div> Cargando...</div>;

    return (
        <div className="tarjeta-episodio">
            <h4>{episode.name}</h4>
            <div>
                <span>{episode.episode}</span>
                <span>Lanzado el: {episode.air_date}</span>
            </div>
        </div>
    );
};

export default TarjetaEpisodio;
