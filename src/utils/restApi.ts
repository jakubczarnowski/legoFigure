import { ShippingData } from "../shared/types";

export const mockSubmitShippingData = (data: ShippingData): Promise<ShippingData> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 500);
    });
};
