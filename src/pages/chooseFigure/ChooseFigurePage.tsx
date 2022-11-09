import { Box, Button, Flex, Heading, Spinner, useDisclosure } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import sampleSize from "lodash.samplesize";
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { FigureCard } from "../../components/FigureCard/FigureCard";
import { FigureDetailsModal } from "../../components/FigureDetailsModal";
import { Routes } from "../../shared";
import { selectedFigureIdAtom } from "../../shared/atoms";
import { ApiResponse, Figure } from "../../shared/types";
import { axiosInstance } from "../../utils/axiosInstance";
type Props = {};

export const ChoosePage = (props: Props) => {
	const navigate = useNavigate();
	const [modalFigure, setModalFigure] = useState<Figure | null>(null);
	const { status, data, error, isLoading } = useRandomFigures();
	const [selectedFigureId, setSelectedFigureId] = useAtom(selectedFigureIdAtom);
	if (isLoading) return <Spinner />;
	const openModal = (figure: Figure) => {
		setModalFigure(figure);
	};
	const closeModal = () => {
		setModalFigure(null);
	};
	return (
		<>
			<Flex justifyContent={"center"} alignItems={"center"} flexDirection={"column"} p={5}>
				<Heading mb={5}>CHOOSE YOUR MINIFIG</Heading>
				<Flex gap={"30px"} minH={"400px"} flexWrap={"wrap"} mb={10}>
					{data?.map((figure) => (
						<FigureCard
							key={figure.set_num}
							figureId={figure.set_num}
							imgUrl={figure.set_img_url}
							name={figure.name}
							isSelected={selectedFigureId === figure.set_num}
							onClick={() => setSelectedFigureId(figure.set_num)}
							openModal={() => openModal(figure)}
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
					onClick={() => navigate(Routes.checkout)}
				>
					PROCEED TO SHIPMENT
				</Button>
			</Flex>
			{modalFigure && (
				<FigureDetailsModal
					imgUrl={modalFigure.set_img_url}
					name={modalFigure.name}
					numParts={modalFigure.num_parts}
					setUrl={modalFigure.set_url}
					figureId={modalFigure.set_num}
					isOpen={!!modalFigure}
					onClose={closeModal}
				/>
			)}
		</>
	);
};

const getFigures = async () => {
	const { data } = await axiosInstance.get<ApiResponse<Figure>>("lego/minifigs?in_theme_id=246&page_size=10000");
	// some figures have no images, so we filter them out, we also could use a placeholder image depending on the client's wishes...
	return { ...data, results: data.results.filter((figure: Figure) => figure.set_img_url) };
};

export function useRandomFigures() {
	// Stale time and cache time are set to infinite to avoid unnecessary data requests
	return useQuery<Figure[]>({
		queryKey: ["figures"],
		staleTime: Infinity,
		cacheTime: Infinity,
		queryFn: async () => {
			const figures = await getFigures();
			return sampleSize(figures.results, 3);
		},
	});
}
