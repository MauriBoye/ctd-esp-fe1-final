import BotonFavorito from "../botones/boton-favorito.componente";
import "./tarjeta-personaje.css";
import { IPersonaje } from "../../types/personaje";
import { useAppSelector } from "../../hooks";
import { Link } from "react-router-dom";

type Props = {
    personaje: IPersonaje;
    esFavorito: boolean;
};

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes.
 * @returns un JSX element
 */
const TarjetaPersonaje = ({ personaje, esFavorito }: Props) => {
    const { favourites } = useAppSelector((state) => state.personajes);

    return (
        <div className="tarjeta-personaje">
            <Link
                to={`/detalle/${personaje.name?.replace(/\s/g, "-")}/${personaje.id}`}
                state={personaje}
            >
                <img src={personaje.image} alt={personaje.name} />
            </Link>
            <div className="tarjeta-personaje-body">
                <span>{personaje.name}</span>
                <BotonFavorito
                    esFavorito={!!favourites.find(obj=> obj.id === personaje.id)}
                    personaje={personaje}
                />
            </div>
        </div>
    );
};

export default TarjetaPersonaje;
