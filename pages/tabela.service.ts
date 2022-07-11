import { IInfoProps } from "./car";
import { IAvatar, ICar, IModels } from "./interface";
import { Api } from "./index.service";

const getBrands = async(): Promise<ICar[] | Error> => {
    try {
        const { data } = await Api().get("marcas")
        return data
    } catch (error: any) {
        throw new Error(error.message || "Nada encontrado!")
    }
}

const getModels = async(code: string): Promise<IModels | Error> => {
    try {
        const { data } = await Api().get(`marcas/${code}/modelos`)
        return data
    } catch (error: any) {
        throw new Error(error.message || "Nada encontrado!")
    }
}

const getYears = async(code: string, codeYear: string): Promise<ICar[] | Error> => {
    try {
        const { data } = await Api().get(`marcas/${code}/modelos/${codeYear}/anos`)
        return data
    } catch (error: any) {
        throw new Error(error.message || "Nada encontrado!")
    }
}

const getCarInfo = async(code: string, codeYear: string, codeInfo: string): Promise<IInfoProps | Error> => {
    try {
        const { data } = await Api().get(`marcas/${code}/modelos/${codeYear}/anos/${codeInfo}`)
        return data
    } catch (error: any) {
        throw new Error(error.message || "Nada encontrado!")
    }
}


const tabelaService =  {
    getBrands,
    getModels,
    getYears,
    getCarInfo,
}

export default tabelaService