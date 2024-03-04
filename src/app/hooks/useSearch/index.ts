import { EmployeeContext } from '@/app/providers/Employee';
import { ChangeEvent, useContext } from 'react';
import { useLocalStorage } from '..';
import { IEmployeesResponseData } from '@/interfaces';
import { employeeCompareSearchEngine } from '@/utils';

export const useSearch = () => {
  const { setEmployees } = useContext(EmployeeContext);

  const { getItem } = useLocalStorage();

  const handleSearchBarChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const baseList = getItem<IEmployeesResponseData[]>('employeeList');

    setEmployees(
      value
        ? baseList.filter(
            ({ admission_date, job, name, phone }: IEmployeesResponseData) =>
              employeeCompareSearchEngine({
                admission_date,
                job,
                name,
                phone,
                value,
              }),
          )
        : baseList,
    );
  };

  return {
    handleSearchBarChange,
  };
};
