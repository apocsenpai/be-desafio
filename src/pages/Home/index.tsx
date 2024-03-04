import { Main } from "./styled";

import { Header, SearchContainer, EmployeeTable } from "@/components";

const Home = () => {

    return <>

        <Header />

        <Main>
            <SearchContainer />
            {/* Employees table */}
            <EmployeeTable />
        </Main>
    </>
}

export default Home;