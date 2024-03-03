import {
  getDate,
  getMonth,
  getPhoneCountryCode,
  getPhoneFirstNumbers,
  getPhoneLastNumbers,
  getPhoneRegionDDD,
} from '@/utils';

export const transformDateIsoStringToBrazilianDate = (isoString: string) => {
  const date = new Date(isoString);

  return `${getDate(date)}/${getMonth(date)}/${date.getFullYear()}`;
};

export const transformToPhoneFormat = (phone: string) =>
  `+${getPhoneCountryCode(phone)} (${getPhoneRegionDDD(phone)}) ${getPhoneFirstNumbers(phone)}-${getPhoneLastNumbers(phone)}`;
