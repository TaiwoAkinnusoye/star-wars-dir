import React, { Component } from "react";
import axios from "axios";
import { starshipsUrl } from "../../config";
import StarShip from "./StarShip";
import Header from "../Header";
import StarGrid from "../styles/starshiplistStyles";
import { PSSTitle } from "../styles/popstarshipStyles";

class StarShipsList extends Component {
  state = {
    shipInfo: []
  };

  componentDidMount() {
    const getData = async () => {
      try {
        const res = await axios.get(starshipsUrl);
        this.setState({
          shipInfo: res.data.results
        });
        console.log(this.state.shipInfo);
      } catch (error) {
        console.log(error);
      }
    };
    return getData();
  }
  render() {
    return (
      <>
        <Header />
        <PSSTitle>
          <h2>All Star Ships</h2>
          <hr />
        </PSSTitle>
        <StarGrid>
          {this.state.shipInfo.map(info => (
            <StarShip
              name={info.name}
              key={Math.random()}
              model={info.model}
              cargo={info.cargo_capacity}
            />
          ))}
        </StarGrid>
      </>
    );
  }
}

export default StarShipsList;
