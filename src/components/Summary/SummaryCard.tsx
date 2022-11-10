import { Button, Flex, Heading, Image, Spinner, Stack, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import React, { useMemo } from "react";
import { useFormContext } from "react-hook-form";
import { ApiResponse, Figure, PartsResponse } from "../../shared/types";
import { axiosInstance } from "../../utils/axiosInstance";
import { SinglePart } from "../SinglePart";

type Props = {
	name: string;
	imgUrl: string;
	setId: string;
	isSubmitting: boolean;
};

export const SummaryCard = ({ name, imgUrl, setId, isSubmitting }: Props) => {
	const { data, isLoading, error } = useParts(setId);
	const parts = data?.results;
	const {
		formState: { isValid },
	} = useFormContext();
	if (isLoading) return <Spinner />;
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

export const getParts = async (setId: string) => {
	const { data } = await axiosInstance.get<ApiResponse<PartsResponse>>(`lego/minifigs/${setId}/parts/`);
	return data;
};

export function useParts(setId: string) {
	return useQuery<ApiResponse<PartsResponse>>({
		queryKey: ["parts"],
		queryFn: () => getParts(setId),
	});
}
