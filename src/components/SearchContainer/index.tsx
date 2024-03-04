
import { MdOutlineSearch } from "react-icons/md";
import { Container, InputGroup } from "./styled";

const SearchContainer = () => {
    return (<Container>
        <h1>Funcionários</h1>
        <InputGroup>
            <input placeholder="Pesquisar" />
            <MdOutlineSearch />
        </InputGroup>
    </Container>)
}

export default SearchContainer;