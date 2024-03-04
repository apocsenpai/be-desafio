
import { MdOutlineSearch } from "react-icons/md";
import { Container, InputGroup } from "./styled";
import { useSearch, useDebouncer } from "@/app/hooks";

const SearchContainer = () => {

    const { handleSearchBarChange } = useSearch();
    const delayedSearchBarChange = useDebouncer({
        fn: handleSearchBarChange,
        delay: 1000,
      });

    return (<Container>
        <h1>Funcionários</h1>
        <InputGroup>
            <input placeholder="Pesquisar" onChange={delayedSearchBarChange} />
            <MdOutlineSearch />
        </InputGroup>
    </Container>)
}

export default SearchContainer;