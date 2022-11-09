import { Box, Button, Flex, Heading, Spinner } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import sampleSize from "lodash.samplesize";
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { FigureCard } from "../../components/FigureCard/FigureCard";
import { Routes } from "../../shared";
import { ApiResponse, Figure } from "../../shared/types";
import { axiosInstance } from "../../utils/axiosInstance";
type Props = {};

export const ChoosePage = (props: Props) => {
	const { status, data, error, isLoading } = useFigures();
	const navigate = useNavigate();
	const [selectedFigureId, setSelectedFigureId] = useState<string | null>(null);
	const figures = data?.results;
	const randomFigures = useMemo(() => {
		if (!figures) return null;
		return sampleSize(figures, 3);
	}, [data]);
	console.log(randomFigures);
	if (isLoading) return <Spinner />;
	return (
		<Flex justifyContent={"center"} alignItems={"center"} flexDirection={"column"} p={5}>
			<Heading mb={5}>CHOOSE YOUR MINIFIG</Heading>
			<Flex gap={"30px"} minH={"400px"} flexWrap={"wrap"} mb={10}>
				{randomFigures?.map((figure) => (
					<FigureCard
						key={figure.set_num}
						{...figure}
						selected={selectedFigureId === figure.set_num}
						onClick={() => setSelectedFigureId(figure.set_num)}
					/>
				))}
			</Flex>
			<Button
				color={"white"}
				bgColor={"blue.600"}
				rounded={"full"}
				variant="solid"
				disabled={!selectedFigureId}
				p={7}
				// To small of an app to use global state manager, that's enough for now
				onClick={() => navigate(Routes.checkout, { state: { figureId: selectedFigureId } })}
			>
				PROCEED TO SHIPMENT
			</Button>
		</Flex>
	);
};

const getFigures = async () => {
	const { data } = await axiosInstance.get<ApiResponse<Figure>>("lego/minifigs?in_theme_id=246&page_size=10000");
	// some figures have no images, so we filter them out
	return { ...data, results: data.results.filter((figure: Figure) => figure.set_img_url) };
};

function useFigures() {
	// Stale time and cache time are set to infinite to avoid unnecessary data requests
	return useQuery<ApiResponse<Figure>>({
		queryKey: ["figures"],
		staleTime: Infinity,
		cacheTime: Infinity,
		queryFn: () => getFigures(),
	});
}
