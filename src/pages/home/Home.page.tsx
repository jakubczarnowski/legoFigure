import React from "react";
import Layout from "../../layout";
import { Text, Flex, Button, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import Routes from "../../shared/routes";
type Props = {};

const Home = (props: Props) => {
	const navigate = useNavigate();
	return (
		<Flex flexDir={"column"} alignItems={"center"} gap={"3rem"}>
			<Heading fontSize={["1rem", "2rem", "3rem"]} fontWeight={"extrabold"}>
				LEGO MINIFIGS MYSTERY BOX
			</Heading>
			<Button onClick={() => navigate(Routes.choose)} rounded={"full"} px={6} bg={"blue.500"} variant={"solid"} shadow={"lg"} fontSize={"md"}>
				LET'S GO!
			</Button>
		</Flex>
	);
};

export default Home;
