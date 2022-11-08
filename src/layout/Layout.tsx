import { Box } from "@chakra-ui/react";
import React from "react";
import { Image } from "@chakra-ui/react";
import QuestionMark from "../assets/QuestionMark.svg";
type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<Box display={"flex"} overflow={"hidden"} position={"relative"} alignItems={"center"} justifyContent={"center"} h={"100vh"}>
			<Image
				src={QuestionMark}
				alt="question-mark"
				position={"absolute"}
				top={"20%"}
				left={"20%"}
				zIndex={0}
				height={"15%"}
				sx={{ transform: "rotate(-30deg)" }}
			/>
			<Image
				src={QuestionMark}
				alt="question-mark"
				position={"absolute"}
				bottom={"0%"}
				right={"0%"}
				height={"30%"}
				zIndex={0}
				sx={{ transform: "rotate(30deg)" }}
			/>

			<Box zIndex={1}>{children}</Box>
		</Box>
	);
};

export default Layout;
