import { Link } from "react-router-dom"
import { HeaderContainer } from "./styled"

import Logo from "@/assets/logo.png"

const Header = () => {
    return (<HeaderContainer>
        <Link to="/"> <img src={Logo} alt="BeMobile - Soluções digitais" /></Link>
    </HeaderContainer>)
}

export default Header;