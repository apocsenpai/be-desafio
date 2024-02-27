
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Theme } from "@/app/styles";
import { BrowserRouter as Router } from "react-router-dom";


const Provider = ({ children }: React.PropsWithChildren) => {

    return (
        <Router>
            <ThemeProvider theme={Theme}>
                <GlobalStyle />
                {children}
            </ThemeProvider>
        </Router>
    )

}

export default Provider;