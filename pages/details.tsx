import { Box, Container, Typography } from "@mui/material";
import { SERVFAIL } from "dns";
import { NextPage } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { IInfoProps } from "../contexts/car";
import styles from "../styles/Details.module.css"

const Result: NextPage = () => {
    const router = useRouter();
    const [data, setData] = useState<IInfoProps>({} as IInfoProps)

    useEffect(() => {
        const info = JSON.parse(router.query.data as any) || {}

        setData(info)
    }, [router.query.data])

    return (
        <Container
            className={styles.container}
        >
            <Box
                display={'flex'}
                alignItems="center"
                height={'100%'}
                justifyContent="center"
                width={'100%'}
                flexDirection="column"
                paddingTop={'24px'}
                paddingBottom={'24px'}
            >
                <Typography 
                    variant="h2" 
                    component="div" 
                    gutterBottom
                    fontSize={'1.6rem'}
                    fontWeight={700}
                    color="#434242"
                >
                    {`Tabela Fipe: Preço ${data.Marca} ${data.AnoModelo}`}
                </Typography>
                <Typography 
                    variant="h1" 
                    component="div" 
                    gutterBottom
                    bgcolor={'#00a38c'}
                    fontSize={'1.6rem'}
                    borderRadius="50px"
                    padding={'16px'}
                    color="#fff"
                    fontWeight={400}
                >
                    {`R$: ${data.Valor}`}
                </Typography>
                <Typography 
                    variant="subtitle2" 
                    component="div" 
                    gutterBottom
                    color="#8A98A4"
                >
                    Este é o preço de compra do veículo
                </Typography>
            </Box>
        </Container>   
    )
}

export default Result