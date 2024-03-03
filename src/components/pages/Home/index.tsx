import { Link } from "react-router-dom";
import { Header, ImageWrapper, InputGroup, Main, SearchContainer, Table, TableRow } from "./styled";

import { MdOutlineSearch } from "react-icons/md";

import Logo from "@/assets/logo.png"

import { useEffect, useState } from "react";
import { IEmployeesResponseData } from "@/interfaces/employes";
import employeesService from "@/services/employees";
import { transformDateIsoStringToBrazilianDate } from "@/utils"

const Home = () => {

    const [data, setData] = useState<IEmployeesResponseData[]>([]);

    useEffect(() => {
        async function getAllEmployees() {
            setData((await employeesService.getAll()).data as IEmployeesResponseData[])
        }

        getAllEmployees();
    }, [])


    return <>
        {/* Header */}
        <Header>
            <Link to="/"> <img src={Logo} alt="BeMobile - Soluções digitais" /></Link>
        </Header>


        <Main>

            {/* Search Bar */}
            <SearchContainer>
                <h1>Funcionários</h1>
                <InputGroup>
                    <input placeholder="Pesquisar" />
                    <MdOutlineSearch />
                </InputGroup>
            </SearchContainer>

            {/* Employees table */}
            <Table>
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
                        <span>{phone}</span>
                    </TableRow>))}

            </Table>
        </Main>
    </>
}

export default Home;