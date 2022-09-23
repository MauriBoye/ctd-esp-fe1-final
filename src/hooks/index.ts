import { AsyncThunkPayloadCreator, createAsyncThunk } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const createThunk = <ReturnValue, ArgType>(
    typePrefix: string,
    fn: AsyncThunkPayloadCreator<
        ReturnValue, // esto es el tipo de dato de mi data, que es lo que me devuelve el fetch, e.g ITodo[]
        ArgType, // cuando llamo a la funcion thunk, le paso un argumento, que necesito para enviarlo al fetch
        {
            dispatch: AppDispatch;
            state: RootState;
        }
    >
) => createAsyncThunk(typePrefix, fn);