import React, { Component } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Header from "./Header";
import PopularStarShips from "./starships/PopularStarships";
import PlanetSlider from "./planets/PopularPlanets";
import PopularCharacters from "../components/characters/PopularCharacters";

const theme = {
  black: "#393939",
  grey: "#3a3a3a",
  lightgrey: "#e1e1e1",
  offWhite: "#ededed",
  // maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0 , 0 , 0 , 0.9)" /* box shadow */
};

const StyledPage = styled.div`
  background: #ffffff;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  /* max-width: ${props => props.theme.maxWidth}; */
  /* margin: 0 auto; */
  padding: 2rem;
`;

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Montserrat', sans-serif;
      src: url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
      font-weight: normal;
      font-style: normal;
  }
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
      box-sizing: inherit;
  }
  body {
      padding: 0;
      margin: 0;
      font-size: 1.5rem;
      /* line-height: 2; */
      font-family: 'Montserrat', sans-serif;
  }
  a {
      text-decoration: none;
      color: ${theme.black};
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Header />
          <GlobalStyle />
          <Inner>
            {/* {this.props.children} */}
            <PopularStarShips />
            <PlanetSlider />
            <PopularCharacters />
          </Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
