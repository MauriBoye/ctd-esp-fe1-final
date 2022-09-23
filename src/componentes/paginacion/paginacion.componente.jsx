import "./paginacion.css";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { personajesSlice } from "../../slices";

/**
 * Componente que contiene los botones para paginar
 * @returns un JSX element
 */
const Paginacion = () => {
    const dispatch = useAppDispatch();

    const { personajes } = useAppSelector((state) => state.personajes);

    /**
     * Función que ejecuta el action para avanzar de pagina
     * @author Mauricio Boye
     */
    function nextPage() {
        dispatch(personajesSlice.actions.nextPage());
    }

    /**
     * Función que ejecuta el action para retroceder de pagina
     * @author Mauricio Boye
     */
    function prevPage() {
        dispatch(personajesSlice.actions.prevPage());
    }

    return (
        <div className="paginacion">
            <button
                disabled={personajes.info?.prev == null ? true : false}
                className={"primary"}
                onClick={prevPage}
            >
                Anterior
            </button>
            <button
                disabled={personajes.info?.next == null ? true : false}
                className={"primary"}
                onClick={nextPage}
            >
                Siguiente
            </button>
        </div>
    );
};

export default Paginacion;
