import styled from "styled-components";

const PopularCharactersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-column-gap: 10px;
  grid-row-gap: 50px;

  .character-card-grid {
    display: grid;
    grid-template-columns: 360px 280px;
    grid-template-rows: 100px 100px 150px;
  }

  .character-card-grid .image {
    grid-column: 1/2;
    grid-row: 1/5;
  }
  .character-card-grid .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .character-card-grid .details {
    grid-column: 2/3;
    grid-row: 1/5;
    background: #f2f2f2;
    padding-left: 30px;
    padding-right: 20px;
    display: grid;
    grid-template-rows: 100px 50px 150px;

    .name {
      align-self: end;

      h4 {
        margin: 0;
        font-size: 18px;
      }
      p {
        margin: 0;
        font-size: 15px;
        color: #7c7c86;
      }
    }
    .bio {
      grid-row: 3/4;

      p {
        margin: 0;
        font-size: 16px;
        color: #7c7c86;

        a {
          text-decoration: underline;
          font-weight: bold;
        }
      }
    }
  }
`;

export default PopularCharactersGrid;
