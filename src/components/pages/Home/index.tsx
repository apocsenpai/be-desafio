import { Link } from "react-router-dom";
import { Header, ImageWrapper, InputGroup, Main, SearchContainer, Table, TableRow } from "./styled";

import { MdOutlineSearch } from "react-icons/md";

import Logo from "@/assets/logo.png"
import Man from "@/assets/man.png"

const Home = () => {

    

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
                <TableRow>
                    <ImageWrapper $image={Man} />
                    <span>Giovana L. Arruda</span>
                    <span>Front-end</span>
                    <span>00/00/0000</span>
                    <span>+55 (55) 55555-555</span>
                </TableRow>
            </Table>
        </Main>
    </>
}

export default Home;