import "./boton-favorito.css";
import { useState } from "react";
import { useAppDispatch } from "../../hooks";
import { personajesSlice } from "../../slices";

/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * @returns un JSX element
 */
const BotonFavorito = ({ esFavorito, personaje }) => {
    const [favorito, setFavorito] = useState(esFavorito);
    const dispatch = useAppDispatch();

    /**
     * Función que maneja el cambio de estados y la agregacion/eliminacion de favoritos
     * @author Mauricio Boye
     */
    const handleChange = () => {
        if (favorito) {
            setFavorito(false);
            dispatch(personajesSlice.actions.deleteFav(personaje));
        } else {
            setFavorito(true);
            dispatch(personajesSlice.actions.addFav(personaje));
        }
    };

    return (
        <div className="boton-favorito">
            <img
                src={favorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"}
                alt={"favorito"}
                onClick={() => handleChange()}
            />
        </div>
    );
};

export default BotonFavorito;
