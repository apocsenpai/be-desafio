import { Link } from "react-router-dom";
import { Header, InputGroup, Main, SearchContainer } from "./styled";

import Logo from "@/assets/logo.png"
import { MdOutlineSearch } from "react-icons/md";

const Home = () => {
    return <>
        {/* Header */}
        <Header>
            <Link to="/"> <img src={Logo} alt="BeMobile - Soluções digitais" /></Link>
        </Header>

        {/* Search Bar */}
        <Main>
            <SearchContainer>
                <h1>Funcionários</h1>
                <InputGroup>
                    <input placeholder="Pesquisar" />
                    <MdOutlineSearch/>
                </InputGroup>
            </SearchContainer>
        </Main>
    </>
}

export default Home;