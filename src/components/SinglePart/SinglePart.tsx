import { Flex, Image, Text } from "@chakra-ui/react";

type Props = {
	name: string;
	partId: string;
	imgUrl: string;
};
export const SinglePart = ({ name, partId, imgUrl }: Props) => (
	<Flex alignItems={"center"} justifyContent={"flex-start"} direction={"row"} gap={2}>
		<Image src={imgUrl} objectFit={"contain"} width={"60px"} height={"60px"} fallbackSrc={"/assets/ImagePlaceholder.png"} mb={5} />
		<Flex direction={"column"}>
			<Text fontSize={"md"} fontWeight={"bold"} noOfLines={1}>
				{name}
			</Text>
			<Text color={"orange.500"} fontSize={"md"} fontWeight={"bold"}>
				{partId}
			</Text>
		</Flex>
	</Flex>
);
