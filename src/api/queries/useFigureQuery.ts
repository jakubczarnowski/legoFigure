import { FigureResponse } from "./../../shared/types";
import { useQuery } from "@tanstack/react-query";
import { Figure } from "../../shared/types";
import { axiosInstance } from "../../utils/axiosInstance";
import camelcaseKeys from "camelcase-keys";

const getFigure = async (figureId: string) => {
    const { data } = await axiosInstance.get<FigureResponse>(`lego/minifigs/${figureId}`);
    return camelcaseKeys(data);
};

export function useFigureQuery(figureId: string) {
    return useQuery<Figure>(["figure", figureId], () => getFigure(figureId), {
        cacheTime: Infinity,
        staleTime: Infinity,
    });
}
