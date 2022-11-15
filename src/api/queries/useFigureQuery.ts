import { useQuery } from "@tanstack/react-query";
import { Figure } from "../../shared/types";
import { axiosInstance } from "../../utils/axiosInstance";

const getFigure = async (figureId: string) => {
    const { data } = await axiosInstance.get<Figure>(`lego/minifigs/${figureId}`);
    return data;
};

export function useFigureQuery(figureId: string) {
    return useQuery<Figure>(["figure", figureId], () => getFigure(figureId), {
        cacheTime: Infinity,
        staleTime: Infinity,
    });
}
