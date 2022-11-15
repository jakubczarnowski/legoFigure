import React from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { Routes } from "../../shared";

export const Error = () => {
    const navigate = useNavigate();
    return (
        <Flex direction={"column"} alignItems={"center"} justifyContent={"center"} gap={"10px"}>
            <Text fontSize={"xl"} fontWeight={"bold"}>
                Oops! Nothing here!
            </Text>
            <Button onClick={() => navigate(Routes.home)}>Go back</Button>
        </Flex>
    );
};
