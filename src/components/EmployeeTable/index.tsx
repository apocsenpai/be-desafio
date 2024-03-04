import { transformDateIsoStringToBrazilianDate, transformToPhoneFormat } from "@/utils"
import { ImageWrapper, Table, TableRow } from "./styled";
import { useContext } from "react";
import { EmployeeContext } from "@/app/providers/Employee";

const EmployeeTable = () => {

    const { employees } = useContext(EmployeeContext);

    return (<Table>
        <TableRow $header>
            <h2>FOTO</h2>
            <h2>NOME</h2>
            <h2>CARGO</h2>
            <h2>DATA DE ADMISSÃO</h2>
            <h2>TELEFONE</h2>
        </TableRow>
        {employees.length !== 0 && (employees.map(({ id, name, job, phone, image, admission_date }) =>
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