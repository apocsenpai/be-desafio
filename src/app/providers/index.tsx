
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Theme } from "@/app/styles";
import { BrowserRouter as Router } from "react-router-dom";
import { EmployeeProvider } from "./Employee";


const Provider = ({ children }: React.PropsWithChildren) => {

    return (
        <Router>
            <ThemeProvider theme={Theme}>
                <EmployeeProvider>
                    <GlobalStyle />
                    {children}
                </EmployeeProvider>
            </ThemeProvider>
        </Router>
    )

}

export default Provider;