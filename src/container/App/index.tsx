import React from "react";
import logo from "./../../static/logo.svg";
import "./App.css";
import { theme } from "./theme";
import { routes } from "./routes";
import { ThemeProvider } from "styled-components";
import HomePage from "../HomePage";
import { AppContainer } from "./style";
import NavbarComponent from "../../component/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App: React.FC = () => {
    // const pages = routes.map((route) => (
    //     <Route
    //         key={route.component}
    //         component={route.component}
    //         exact={route.exact}
    //         path={route.path}
    //     />
    // ));
    return (
        <Router>
            <AppContainer>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/portofolio" component={HomePage} />
                    {/* <Route path="/about" component={Homepage} />
                    <Route path="/contact" component={Homepage} /> */}
                </Switch>

                {/* <HomePage /> */}
            </AppContainer>
        </Router>
    );
};

export default App;
