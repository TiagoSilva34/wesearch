import { useEffect, useState } from "react"
import { avatarService } from "./api/avatar.service"

const Ex03: React.FC = () => {
    const [avatares, setAvatares] = useState<any[]>([])

    useEffect(() => {
        avatarService.getAvatar()
        .then(result => {
            if(result instanceof Error) {
                alert(result.message)
            } else {
                const response = result.results
                .filter((item: any) => item.name.includes("Smith") || item.name.includes("Sanchez"))
                .map((item: any) => ({
                    id: item.id,
                    nome: item.name,
                    genero: item.gender,
                    avatar: item.image,
                    especie: item.species
                }))

                setAvatares(response)
            }
        })
    })
    return (
        <ul>
          {avatares.map(item => (
            <li key={item.id}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        margin: '8px'
                    }}
                >
                     <img
                        src={item.avatar}
                        width="100px"
                       
                    />
                    <span>Nome: {item.nome}</span>
                    <span>Genero: {item.genero}</span>
                   
                    <span>Especie: {item.especie}</span>
                </div>
            </li>
          ))}
        </ul>
    )
}

export default Ex03