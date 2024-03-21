import {
  Box,
  Center,
  Flex,
  List,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { api } from "../api";

interface UserData {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string;
}

const ContaInfo = () => {
  const dataUser = useContext(AppContext);
  const [UserData, setUserData] = useState<UserData>();
  const navigate = useNavigate();
  const diobank = JSON.stringify(localStorage.getItem("diobank"));
  //  console.log(diobank[12]);
  //console.log(dataUser.isLoggedIn)

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api;
      setUserData(data);
    };

    getData();
  }, []);

  useEffect(() => {
    //!dataUser.isLoggedIn && navigate('/')

    if (diobank[12] === "f") {
      navigate("/");
    }
  });

  //console.log(UserData)

  return (
    <>
      <Box margin={"1rem"} backgroundColor={"#fff"} borderRadius={"10px"}>
        <Center display={"Flex"} flexDirection={"column"}>
          <Text fontSize="3xl" fontWeight="bold">
            Informações da conta
          </Text>
          <UnorderedList >
            <ListItem>id: {UserData?.id}</ListItem>
            <ListItem>Nome: {UserData?.name}</ListItem>
            <ListItem>Email: {UserData?.email}</ListItem>
            <ListItem>Balance: {UserData?.balance}</ListItem>
          </UnorderedList>
          <Link to="/conta/1">Conta</Link>
        </Center>
      </Box>
    </>
  );
};

export default ContaInfo;
