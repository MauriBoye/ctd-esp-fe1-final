import "./filtros.css";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { personajesSlice } from "../../slices";

/**
 * Componente para realizar el filtrado de personajes
 * @returns un JSX element
 */
const Filtros = () => {
    const dispatch = useAppDispatch();
    const { filter } = useAppSelector((state) => state.personajes);

    return (
        <div className="filtros">
            <label for="nombre">Filtrar por nombre:</label>
            <div>
                <input
                    type="text"
                    placeholder="Rick, Morty, Beth, Alien, ...etc"
                    name="nombre"
                    value={filter}
                    onChange={(e) => {
                        dispatch(personajesSlice.actions.filter(e.target.value));
                        dispatch(personajesSlice.actions.resetPage());
                    }}
                />
                <button onClick={() => {
                        dispatch(personajesSlice.actions.resetFilter());
                        dispatch(personajesSlice.actions.resetPage());
                    }}>
                    Limpiar filtros
                </button>
            </div>
        </div>
    );
};

export default Filtros;
