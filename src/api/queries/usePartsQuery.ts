import { useQuery } from "@tanstack/react-query";
import camelcaseKeys from "camelcase-keys";
import { ApiResponse, Part, PartsResponse } from "shared/types";
import { axiosInstance } from "utils/axiosInstance";

export const getParts = async (setId: string) => {
    const { data } = await axiosInstance.get<ApiResponse<PartsResponse>>(`lego/minifigs/${setId}/parts/`);
    return data.results.map((part) => camelcaseKeys(part.part));
};

export function usePartsQuery(setId: string) {
    return useQuery<Part[]>({
        queryKey: ["parts"],
        queryFn: () => getParts(setId),
    });
}
