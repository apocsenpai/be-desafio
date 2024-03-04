import { transformDateIsoStringToBrazilianDate, transformToPhoneFormat } from "@/utils"
import { ImageWrapper, Table, TableRow } from "./styled";
import { IEmployeesResponseData } from "@/interfaces/employes";

import employeesService from "@/services/employees";
import { useEffect, useState } from "react";

const EmployeeTable = () => {
    const [data, setData] = useState<IEmployeesResponseData[]>([]);

    useEffect(() => {
        async function getAllEmployees() {
            setData((await employeesService.getAll()).data as IEmployeesResponseData[])
        }

        getAllEmployees();
    }, [])


    return ( <Table>
        <TableRow $header>
            <h2>FOTO</h2>
            <h2>NOME</h2>
            <h2>CARGO</h2>
            <h2>DATA DE ADMISSÃO</h2>
            <h2>TELEFONE</h2>
        </TableRow>
        {data.length !== 0 && (data.map(({ id, name, job, phone, image, admission_date }) =>
            <TableRow key={id}>
                <ImageWrapper $image={image} />
                <span>{name}</span>
                <span>{job}</span>
                <span>{transformDateIsoStringToBrazilianDate(admission_date)}</span>
                <span>{transformToPhoneFormat(phone)}</span>
            </TableRow>))}

    </Table>)
}

export default EmployeeTable;