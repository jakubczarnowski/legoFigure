import { useMutation } from "@tanstack/react-query";
import { ShippingData } from "../../shared/types";
import { mockSubmitShippingData } from "../../utils/restApi";

const postFigure = async (values: ShippingData) => {
	const result = await mockSubmitShippingData(values);
	return result;
};

export function useShippingMutation() {
	return useMutation((values: ShippingData) => postFigure(values));
}
