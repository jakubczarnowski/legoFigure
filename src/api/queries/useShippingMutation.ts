import { useMutation } from "@tanstack/react-query";
import { ShippingData } from "../../shared/types";
import { mockSubmitShippingData } from "../../utils/restApi";

const postFigure = async (values: ShippingData) => {
    // should be the server worker, but for the sake of the demo, we use a mock function
    const result = await mockSubmitShippingData(values);
    return result;
};

export function useShippingMutation() {
    return useMutation((values: ShippingData) => postFigure(values));
}
