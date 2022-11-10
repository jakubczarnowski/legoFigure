import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import sampleSize from "lodash.samplesize";
import { ApiResponse, Figure } from "../../shared/types";
import { axiosInstance } from "../../utils/axiosInstance";

const getRandomFigures = async () => {
	const { data } = await axiosInstance.get<ApiResponse<Figure>>("lego/minifigs?in_theme_id=246&page_size=10000");
	// some figures have no images, so we filter them out, we also could use a placeholder image depending on the client's wishes...
	const filteredData = { ...data, results: data.results.filter((figure: Figure) => figure.set_img_url) };
	return sampleSize(filteredData.results, 3);
};

export function useRandomFiguresQuery() {
	// Stale time and cache time are set to infinite to avoid unnecessary data requests
	return useQuery<Figure[]>(["figures"], () => getRandomFigures(), {
		staleTime: Infinity,
		cacheTime: Infinity,
	});
}
