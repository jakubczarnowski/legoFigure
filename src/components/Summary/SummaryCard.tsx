import { Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { usePartsQuery } from "api/queries/usePartsQuery";
import { useFormContext } from "react-hook-form";
import { SinglePart } from "../SinglePart";
import { SummarySkeleton } from "./SummarySkeleton";

type Props = {
	name: string;
	imgUrl: string;
	setId: string;
	isSubmitting: boolean;
};
export const SummaryCard = ({ name, imgUrl, setId, isSubmitting }: Props) => {
	const { data, isLoading, error } = usePartsQuery(setId);
	const parts = data?.results;
	const {
		formState: { isValid },
	} = useFormContext();
	if (isLoading) return <SummarySkeleton />;
	return (
		<Stack bg={"white"} color={"bg"} rounded={"2xl"} p={"2rem"} maxWidth={"400px"} gap={"1.5rem"}>
			<Heading>SUMMARY</Heading>
			<Flex alignItems={"center"} justifyContent={"center"} direction={"column"}>
				<Image src={imgUrl} objectFit={"contain"} width={"150px"} height={"150px"} fallbackSrc={"/assets/ImagePlaceholder.png"} mb={5} />
				<Text fontSize={"sm"} fontWeight={"bold"} textAlign={"center"} overflowWrap={"break-word"}>
					{name}
				</Text>
			</Flex>
			<Text fontSize={"md"} fontWeight={"semibold"}>
				There are {data?.count} parts in this minifig
			</Text>
			<Flex direction={"column"} gap={5} mb={"30px"}>
				{parts &&
					parts.map((part) => (
						<SinglePart key={part.part.part_num} name={part.part.name} partId={part.part.part_num.toString()} imgUrl={part.part.part_img_url} />
					))}
			</Flex>
			<Button variant={"filled"} bgColor={"blue.600"} color={"white"} disabled={!isValid} type={"submit"} _hover={{}} isLoading={isSubmitting}>
				Submit
			</Button>
		</Stack>
	);
};
