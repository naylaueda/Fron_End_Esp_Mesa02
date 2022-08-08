import { createContext, useReducer, useContext } from 'react';

export const FormContext = createContext();

export function useFormContext() {
    const context = useContext(FormContext);

    if (!context){
        throw new Error ("Para consumir o estado é necessário ser um componente filho")
    }

    return context;
};

const initialState = {};

export function FormProvider({ children }) {

    const formReducer = (state, action) => {
        switch (action.type) {
            case "ATUALIZAR_TREINADOR":
                return { ...state, [action.name]: action.value };

            case "ATUALIZAR_POKEMON":
                return { ...state, [action.name]: action.value };

            default:
                return state;
        }
    };

    const [formState, dispatch] = useReducer(formReducer, initialState);

    return (
        <FormContext.Provider value={{ formState, dispatch }}>
            {children}
        </FormContext.Provider>
    );
};

