import { employeeService } from "@/services";

import { IEmployeesResponseData } from "@/interfaces";

import React, { useEffect, useMemo, useState } from 'react';
import { useLocalStorage } from "@/app/hooks";

interface IEmployeeContext {
    employees: IEmployeesResponseData[];
    setEmployees: React.Dispatch<React.SetStateAction<IEmployeesResponseData[]>>;
}

export const EmployeeContext = React.createContext<IEmployeeContext>({
    employees: [],
    setEmployees: () => false,
});

export const EmployeeProvider = ({ children }: { children: React.ReactNode }) => {
    const [employees, setEmployees] = useState<IEmployeesResponseData[]>([]);

    const { setItem } = useLocalStorage();

    useEffect(() => {
        async function getAllEmployees() {
            try {
                const employeeList = (await employeeService.getAll()).data;

                setEmployees(employeeList);
                setItem("employeeList", employeeList);
            } catch (error) {
                alert("Ocorreu um erro! Reinicie a página, por favor!");
            }
        }

        getAllEmployees();
    }, [])


    const contextValue = useMemo(
        () => ({ employees, setEmployees }),
        [employees, setEmployees],
    );

    return (
        <EmployeeContext.Provider value={contextValue}>{children}</EmployeeContext.Provider>
    );
};