import { IAvatar } from "../interface"
import { ApiAvatar } from "./index.service"

const getAvatar = async(): Promise<IAvatar | Error> => {
    try {
        const { data } = await ApiAvatar().get("character")

        return data
    } catch (error: any) {
        throw new Error(error.message || "Nada encontrado!")
    }
}

export const avatarService = {
    getAvatar
}