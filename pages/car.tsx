import { createContext, SetStateAction, useState } from "react";

export interface IInfoProps {
    Valor: string 
    AnoModelo: number
    Marca: string
}

export interface IContextData {
    carInfo: IInfoProps
    setValor: React.Dispatch<SetStateAction<IInfoProps>>
}

interface ICarContextProviderProps {
    children: React.ReactNode
}

const DEFAULT_STATE = {
    carInfo: {
        Valor: "",
        AnoModelo: 0,
        Marca: ""
    },
    setValor: () => {},
}

export const CarContext = createContext<IContextData>(DEFAULT_STATE)

export const CarContextProvider: React.FC<ICarContextProviderProps> = ({ children }) => {
    const [carInfo, setValor] = useState(DEFAULT_STATE.carInfo)

    return (
        <CarContext.Provider value={{ carInfo, setValor}}>
            {children}
        </CarContext.Provider>
    )
}