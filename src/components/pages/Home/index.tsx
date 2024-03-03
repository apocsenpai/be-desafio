import { Link } from "react-router-dom";
import { Header } from "./styled";

import Logo from "@/assets/logo.png"

const Home = () => {
    return <>
        {/* Header */}
        <Header>
            <Link to="/"> <img src={Logo} alt="BeMobile - Soluções digitais" /></Link>
        </Header>

        {/* Search Bar */}
    </>
}

export default Home;