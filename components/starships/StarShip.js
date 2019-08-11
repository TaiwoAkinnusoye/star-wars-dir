import PSSGrid from "../styles/popstarshipStyles";

const StarShip = props => {
  return (
    <PSSGrid>
      <div className="PSS-Card">
        <div className="image">
          <img src="https://res.cloudinary.com/dx5p60gon/image/upload/v1565435040/star-wars-dir/starship-2_k1rizz.jpg" />
        </div>
        <div className="body">
          <p className="title">Name: {props.name}</p>
          <p className="summary">
            Model: {props.model}
            <br />
            Cargo Capacity: {props.cargo}
          </p>
          <a style={{ width: "84px" }} className="read-more">
            Read More
          </a>
        </div>
      </div>
    </PSSGrid>
  );
};

export default StarShip;
