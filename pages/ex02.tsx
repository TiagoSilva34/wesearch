import { useState } from "react"

export const Ex01: React.FC = () => {
    const [name, setName] = useState<string>("")
    const [nameField, setNameField] = useState<string>("")
    const [country, setCountry] = useState<string>("")
    const [countryField, setCountryField] = useState<string>("")
    const [age, setAge] = useState<string>("")
    const [ageField, setAgeField] = useState<string>("")

    const updateData = (currentObject: Object, newDataObject: Object) => {
    
        newDataObject = {
            [nameField]: name,
            [countryField]: country,
            [ageField]: age
        }

        currentObject = Object.assign({}, newDataObject)  

        if(
            Object.keys(
                currentObject).toString() 
                !== Object.keys(newDataObject).toString() 
                && Object.keys(currentObject).length !== 0
          ) {
            currentObject = {
                ...currentObject,
                nome: name,
                country: country,
                age: age
            }
    
        } else {
            currentObject = {
                nome: name,
                country: country,
                age: age
            }
        }

        console.log(currentObject)
     
    }


    return (
        <div>
            <form >
                <div>
                    <input 
                        type="text" 
                        placeholder="Digite o campo"
                        onChange={event => setNameField(event.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="Digite seu nome"
                        onChange={event => setName(event.target.value)}
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        placeholder="Digite o campo"
                        onChange={event => setCountryField(event.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="Digite seu país"
                        onChange={event => setCountry(event.target.value)}
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        placeholder="Digite o campo"
                        onChange={event => setAgeField(event.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="Digite a idade"
                        onChange={event => setAge(event.target.value)}
                    />
                </div>
                <button
                    type="button"
                    onClick={() => updateData({}, {})}
                >
                    add
                </button>
            </form>
        </div>
    )
}

export default Ex01