export const getMonth = (date: Date) => {
  const displayMonth = date.getMonth() + 1;

  return displayMonth < 10 ? `0${displayMonth}` : displayMonth.toString();
};

export const getDate = (date: Date) => {
  const day = date.getDate();

  return day < 10 ? `0${day}` : day.toString();
};

export const getPhoneCountryCode = (phone: string) => phone.substring(0, 2);
export const getPhoneRegionDDD = (phone: string) => phone.substring(2, 4);
export const getPhoneFirstNumbers = (phone: string) => phone.substring(4, 9);
export const getPhoneLastNumbers = (phone: string) => phone.substring(9);

export const employeeCompareSearchEngine = ({
  value,
  name,
  job,
  admission_date,
  phone,
}: {
  value: string;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
}) =>
  name.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
  job.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
  admission_date.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
  phone.toLocaleLowerCase().includes(value.toLocaleLowerCase());
