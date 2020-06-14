import React, { useState, useEffect } from "react";
import { HomePagaContainer } from "./style";
import NavbarComponent from "../../component/Navbar";
import swirl1 from "../../static/42675.svg";
import swirl2 from "../../static/1437380.svg";
import Typing from "react-typing-animation";

export const HomePage: React.FC = () => {
    return (
        <HomePagaContainer>
            <NavbarComponent />
            <div className="asset1">
                <img src={swirl1} style={{ width: "20vw", height: "30vh" }} />
            </div>
            <div className="home">
                <div className="content">
                    <h1>Hello! I'm Nasya</h1>
                    <Typing speed={70}>
                        <p>
                            I'm a,
                            <Typing.Delay ms={2000} />
                            <span> future Software Engineer.</span>
                            <Typing.Backspace count={19} />
                            <Typing.Delay ms={2000} />
                            <span> Developer.</span>
                            <Typing.Backspace count={20} />
                            <Typing.Delay ms={2000} />
                            <span> going to make difference.</span>
                            <Typing.Backspace count={25} />
                            <Typing.Delay ms={2000} />
                            <span> a future Software Engineer.</span>
                        </p>
                    </Typing>
                </div>
            </div>
            <div className="asset2">
                <img src={swirl2} style={{ width: "20vw", height: "40vh" }} />
            </div>
        </HomePagaContainer>
    );
};

export default HomePage;
