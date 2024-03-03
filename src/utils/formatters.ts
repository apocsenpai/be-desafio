import { getDate, getMonth } from "@/utils";

export const transformDateIsoStringToBrazilianDate = (isoString: string) => {
    const date = new Date(isoString);


    return `${getDate(date)}/${getMonth(date)}/${date.getFullYear()}`
}