import { Text } from "@chakra-ui/react"
import { useContext, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AppContext } from "../components/AppContext"
import { getAllLocalStorage } from "../services/storage"



const ContaInfo = () => { 
    const { isLoggedIn } = useContext(AppContext);
    const navigate = useNavigate()
    const  diobank = JSON.stringify(localStorage.getItem("diobank"));
    console.log(diobank[12]);

    useEffect(()=>{

        if(diobank[12] === 'f'){
            navigate("/");
        }
    })
    
    return (
        <>
            <Text fontSize='3xl' fontWeight='bold'>
                Informações da conta
            </Text>
            <Link to='/conta/1'>
                <Text fontSize='xl'>
                    Conta
                </Text>
            </Link>
            <a href='/conta/1'>
                Link com tag a
            </a>
        </>
    )
}

export default ContaInfo
