import styled from "styled-components";

const HeaderStyles = styled.div`
  background: url("https://res.cloudinary.com/dx5p60gon/image/upload/v1565435041/star-wars-dir/hero-banner_g3vwzh.jpg"),
    #000;
  height: 642px;
  background-size: cover;

  #Hero {
    height: 100%;
    display: grid;
  }

  #Hero .Hero-Logo a img {
    width: 8%;
    margin: 30px 40px;
  }

  #Hero .Hero-Body {
    text-align: center;
  }

  #Hero .Hero-Body .Head img {
    width: 9%;
  }

  #Hero .Hero-Body .Head hr {
    width: 310px;
    border-width: 1px;
    color: #fff;
  }

  #Hero .Hero-Body .Head h1 {
    color: #fff;
    display: inline-block;
    margin: 0;
    padding: 0 0 0 10px;
    font-size: 40px;
  }

  #Hero .Hero-Body .Head p {
    font-size: 20px;
    color: #cfcfd0;
    font-weight: 100;
    width: 450px;
    display: inline-block;
    margin: 20px 0;
    line-height: 1.5;
  }

  #Hero .Hero-Body .Input input {
    width: 680px;
    height: 50px;
    border: 1px solid transparent;
    border-radius: 5px;

    ::placeholder {
      font-size: 20px;
      background: #cfcfd0;
      padding-left: 30px;
    }
  }
`;

export default HeaderStyles;
