import { useState } from "react"
import { Container } from "../styles/ex01"

export const Ex01: React.FC = () => {
    const [newValue, setNewValue] = useState<any>()
    const [newEmail, setNewEmail] = useState<any>()
    const [emailMaskfied, setEmailMaskfied] = useState<string>()
    const [valueMaskfied, setValueMaskfied] = useState<string>()
    const [options] = useState<any[]>([
        {
            label: "Email",
            value: "email"
        },
        {
            label: "Tel",
            value: "tel"
        },
        {
            label: "N° cartão",
            value: "n° cartão"
        }
    ])
    const maskfy = () => {
       var maskValue = newValue.replace(/.(?=.{4})/g, 'x');

       var email = newValue.replace(/^(.)(.*)(.@.*)$/,(_: any, a: any, b: string, c: any) => a + b.replace(/./g, '*') + c);

       setEmailMaskfied(email) 
       setValueMaskfied(maskValue)
    }

    return (
        <Container>
            <form>
                <select
                    onChange={event => setNewEmail(event.target.value)}
                >
                    <option value="">Selecione</option>
                    {options.map(option => (
                        <option 
                            key={option.value}
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    ))}
                </select>
                <input 
                    onChange={event => setNewValue(event.target.value)}
                    placeholder="Digite o email, cartão ou celular"
                />
                <button
                    type="button"
                    onClick={maskfy}
                >
                    maskfy
                </button>
            </form>

            <p>
                Resultado: {
                   newEmail === "email" ? emailMaskfied :  valueMaskfied
                }
            </p>
        </Container>
    )
}

export default Ex01