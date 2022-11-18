import { Button, Flex, Heading, Spinner } from "@chakra-ui/react";
import { useAtom } from "jotai";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useRandomFiguresQuery } from "../../api/queries/useRandomFiguresQuery";
import { FigureCard } from "../../components/FigureCard/FigureCard";
import { FigureDetailsModal } from "../../components/FigureDetailsModal";
import { Routes } from "../../shared";
import { selectedFigureIdAtom } from "../../shared/atoms";
import { Figure } from "../../shared/types";

export const ChooseFigurePage = () => {
    const navigate = useNavigate();
    const [modalFigure, setModalFigure] = useState<Figure | null>(null);
    const { data, isLoading } = useRandomFiguresQuery();
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
                            key={figure.setNum}
                            {...figure}
                            isSelected={selectedFigureId === figure.setNum}
                            onClick={() => setSelectedFigureId(figure.setNum)}
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
            {modalFigure && <FigureDetailsModal {...modalFigure} isOpen={!!modalFigure} onClose={closeModal} />}
        </>
    );
};
