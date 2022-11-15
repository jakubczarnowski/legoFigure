import { ShippingData } from "../shared/types";

export const mockSubmitShippingData = (data: ShippingData): Promise<Boolean> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, 500);
    });
};
