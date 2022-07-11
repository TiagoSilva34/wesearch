import { 
    Autocomplete, 
    Box, Button, Container, 
    TextField, 
    Typography 
} from "@mui/material"
import { useContext, useEffect, useState } from "react";
import { tabelaService } from "./api/tabela.service"
import { ICar } from "./interface";
import styles from "../styles/Home.module.css"
import { CarContext } from "../contexts/car";
import { useRouter } from "next/router";

const Home: React.FC = () => {
    const { carInfo, setValor } = useContext(CarContext)
    const router = useRouter();
    const [brands, setBrands] = useState<ICar[]>([])
    const [models, setModels] = useState<ICar[]>([])
    const [years, setYears] = useState<ICar[]>([])
    const [codeBrand, setCodeBrand] = useState<any>("")
    const [codeModel, setCodeModel] = useState<any>("")
    const [codeYear, setCodeYear] = useState<any>("")

    const defaultPropsBrands = {
        options: brands,
        getOptionLabel: (option: ICar) => option.nome,
    };

    const defaultPropsModels = {
        options: models,
        getOptionLabel: (option: ICar) => option.nome,
    };

    const defaultPropsYears = {
        options: years,
        getOptionLabel: (option: ICar) => option.nome,
    };

    useEffect(() => {
        tabelaService.getBrands()
        .then(result => {
            if(result instanceof Error) {
                alert(result.message)
            } else {
                setBrands(result)
            }
        })
    }, [])

    
    useEffect(() => {
        if(codeBrand) {
            tabelaService.getModels(codeBrand)
            .then(result => {
                if(result instanceof Error) {
                    alert(result.message)
                } else {
                    setModels(result.modelos)
                }
            })  
        }
    }, [codeBrand])

    useEffect(() => {
        if(codeModel) {
            tabelaService.getYears(codeBrand, codeModel)
            .then(result => {
                if(result instanceof Error) {
                    alert(result.message)
                } else {
                    setYears(result)
                }
            })
        }
    }, [codeBrand, codeModel])

    useEffect(() => {
        if(codeYear) {
            tabelaService.getCarInfo(codeBrand, codeModel, codeYear)
            .then(result => {
                if(result instanceof Error) {
                    alert(result.message)
                } else {
                    console.log(result)
                    setValor({
                        Valor: result.Valor,
                        AnoModelo: result.AnoModelo,
                        Marca: result.Marca
                    })
                }
            })
        }
    }, [codeBrand, codeModel, codeYear, setValor])

    const handlePrice = () => {
        router.push(
            { pathname: "/details", query: { data: JSON.stringify(carInfo)} }
          );
    }
    
    return (
        <Container
            className={styles.container}
        >
            <Box
                display={'flex'}
                flexDirection="column"
                alignItems={'center'}
                justifyContent="center"
            >
                <Typography 
                    variant="h2" 
                    component="div" 
                    gutterBottom
                    className={styles.title}
                >
                    Tabela Fipe
                </Typography>
                <Typography 
                    variant="subtitle1" 
                    gutterBottom 
                    component="div"
                    className={styles.subtitle}
                >
                    Consulte o valor de um veículo de forma gratuita
                </Typography>
                <Box
                    display={'flex'}
                    flexDirection="column"
                    alignItems={'center'}
                    justifyContent="center"
                    width={'52%'}
                    bgcolor="#f5f5f5"
                    padding={'36px'}
                >
                    <Autocomplete
                        {...defaultPropsBrands}
                        id="combo-box-demo"
                        sx={{
                            margin: '12px 0'
                        }}
                        fullWidth
                        selectOnFocus
                        onChange={(event, value) => setCodeBrand(value?.codigo)}
                        renderInput={(params) => (
                        <TextField 
                            {...params} 
                            label="Escolha a marca" 
                            required
                        />
                        )}
                    />
                    <Autocomplete
                        {...defaultPropsModels}
                        id="combo-box-demo"
                        sx={{
                            margin: '12px 0'
                        }}
                        selectOnFocus
                        fullWidth
                        onChange={(event, value) => setCodeModel(value?.codigo)}
                        renderInput={(params) => (
                        <TextField 
                            {...params} 
                            label="Escolha o modelo" 
                            required
                        />
                        )}
                    />
                    {codeModel && (
                        <Autocomplete
                            {...defaultPropsYears}
                            id="combo-box-demo"
                            sx={{
                                margin: '12px 0'
                            }}
                            selectOnFocus
                            fullWidth
                            onChange={(event, value) => setCodeYear(value?.codigo)}
                            renderInput={(params) => (
                            <TextField 
                                {...params} 
                                label="Escolha ano" 
                                required
                            />
                            )}
                        />
                    )}
                   
                    <Button
                        className={styles.btnConsultar}
                        onClick={handlePrice}
                        disabled={codeYear ? false : true}
                        sx={{
                            marginTop: "8px",
                            backgroundColor: codeYear ? "#5d00bf" : "#cecece",
                            color: "#ffffff",
                            fontSize: ".8rem",
                            padding: "8px 24px"
                        }}
                    >
                        Consultar preço
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}

export default Home