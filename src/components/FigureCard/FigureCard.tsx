import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Figure } from "../../shared/types";

type Props = {
	imgUrl: string;
	name: string;
	isSelected?: boolean;
	figureId: string;
	onClick: () => void;
	openModal: () => void;
};

export const FigureCard = ({ imgUrl, name, isSelected, onClick, openModal }: Props) => {
	return (
		<Flex
			display={"flex"}
			flexDirection={"column"}
			justifyContent={"space-around"}
			alignItems={"center"}
			flex={"1"}
			p={5}
			bg={"white"}
			borderRadius={"3xl"}
			shadow={isSelected ? "0px 0px 47px -8px rgba(255, 105, 0, 1);" : "0px 0px 30px 0px rgba(0, 0, 0, 1);"}
			transition={"ease-out 0.2s"}
			onClick={onClick}
		>
			<Image src={imgUrl} objectFit={"contain"} width={"200px"} height={"200px"} fallbackSrc={"/assets/ImagePlaceholder.png"} mb={5} />
			<Text textAlign={"center"} fontSize={"md"} color={"black"} fontWeight={"700"} mb={5} overflowWrap={"anywhere"}>
				{name}
			</Text>
			<Button
				variant={"outline"}
				color={"orange"}
				fontWeight={"bold"}
				onClick={(e) => {
					e.stopPropagation();
					openModal();
				}}
			>
				Show Details
			</Button>
		</Flex>
	);
};
