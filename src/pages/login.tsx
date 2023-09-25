import React from "react";
import {
  Flex,
  Image,
  Container,
  FormControl,
  Input,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";

type LoginInputs = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<LoginInputs>();

  const onSubmit = (data: LoginInputs) => {
    console.log(data);
  };

  return (
    <Container maxW="1280px" py="25px">
      <Flex w="100%" gridGap="20px" justifyContent="space-around">
        {/* Carousel and images */}
        <Flex flexDir="column">
          <Image src="img/login-carousel-1.png" alt="login-carousel-1" />
        </Flex>

        <Flex flexDir={"column"}>
          <Image src="img/login-logo.png" alt="Login" />
          <Tabs colorScheme="brand" mt="10px">
            <TabList>
              <Tab width="50%">Entrar</Tab>
              <Tab width="50%">Registrar</Tab>
            </TabList>

            <TabPanels>
              {/* Login form (Entrar) */}
              <TabPanel p="0" mt="50px">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Flex
                    flexDir={{ lg: "column", base: "row" }}
                    gridGap={"50px"}
                  >
                    <FormControl isRequired>
                      <Input
                        type="email"
                        placeholder="E-mail ou telefone"
                        textAlign="center"
                        fontWeight="bold"
                        {...register("email", {})}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <Input
                        type="password"
                        placeholder="Senha"
                        textAlign="center"
                        fontWeight="bold"
                        {...register("password")}
                      />
                    </FormControl>
                    {/* <Button width="100%" colorScheme="brand" type="submit">
											Entrar
										</Button> */}
                    <a href="/agendamento" target="_self">
                      <Button width="100%" colorScheme="brand">
                        Entrar
                      </Button>
                    </a>
                  </Flex>
                </form>
              </TabPanel>

              {/* Sign up form (Registrar) */}
              <TabPanel p="0" mt="50px">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Flex flexDir={"column"} gridGap={"50px"}>
                    <FormControl isRequired>
                      <Input
                        type="email"
                        placeholder="Insira seu E-mail"
                        textAlign="center"
                        fontWeight="bold"
                        {...register("email", {})}
                      />
                    </FormControl>
                    <Button width="100%" colorScheme="brand" type="submit">
                      Entrar
                    </Button>
                  </Flex>
                </form>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Login;
