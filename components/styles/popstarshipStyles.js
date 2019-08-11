import styled from "styled-components";

const PSSGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 380px);
  grid-gap: 80px;

  .PSS-Card .image {
    border-bottom: 2px solid #000;
    height: 225px;
  }

  .PSS-Card .image img {
    width: 380px;
    height: 100%;
    object-fit: cover;
  }

  .PSS-Card .body {
    border-left: 7px solid #d8d8d8;
    border-bottom: 7px solid #d8d8d8;
    background: #f2f2f2;
    padding: 15px 20px;
    display: grid;
    grid-template-rows: auto;
  }

  .PSS-Card .body .title {
    margin: 0;
    font-size: 18px;
    color: #494957;
  }

  .PSS-Card .body .summary {
    margin-top: 5px;
    font-size: 15px;
    color: #7c7c86;
  }

  .PSS-Card .body .read-more {
    background: #d8d8d8;
    font-size: 13px;
    padding: 12px 45px;
    cursor: pointer;
    display: inline-block;
    width: 154px;
    justify-self: end;
    text-align: center;

    :hover {
      background: #0d0d19;
      color: #fff;
    }
  }
`;

export const PSSTitle = styled.div`
  h2 {
    text-align: center;
    margin-bottom: 0;
    font-size: 31px;
  }

  hr {
    width: 115px;
    border-width: 3px;
    color: #494957;
    border-style: solid;
    margin-top: 5px;
    margin-bottom: 60px;
  }
`;

export default PSSGrid;
