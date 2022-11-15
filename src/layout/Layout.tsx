import { Box, Container } from "@chakra-ui/react";
import React from "react";
import { Image } from "@chakra-ui/react";
type Props = {
    children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
    return (
        <Container
            minH={"100vh"}
            maxW={"container.xl"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
        >
            <Image
                src={"./assets/QuestionMark.svg"}
                alt="question-mark"
                position={"fixed"}
                top={"20%"}
                left={"20%"}
                zIndex={-10}
                height={"15%"}
                sx={{ transform: "rotate(-30deg)" }}
            />
            <Image
                src={"./assets/QuestionMark.svg"}
                alt="question-mark"
                position={"fixed"}
                bottom={"0%"}
                right={"0%"}
                height={"30%"}
                zIndex={-10}
                sx={{ transform: "rotate(30deg)" }}
            />
            <Box zIndex={1}>{children}</Box>
        </Container>
    );
};
