import { useQuery } from "@tanstack/react-query";
import { ApiResponse, PartsResponse } from "shared/types";
import { axiosInstance } from "utils/axiosInstance";

export const getParts = async (setId: string) => {
	const { data } = await axiosInstance.get<ApiResponse<PartsResponse>>(`lego/minifigs/${setId}/parts/`);
	return data;
};

export function usePartsQuery(setId: string) {
	return useQuery<ApiResponse<PartsResponse>>({
		queryKey: ["parts"],
		queryFn: () => getParts(setId),
	});
}
