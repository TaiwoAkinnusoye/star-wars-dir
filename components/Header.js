import React from "react";
import Link from "next/link";
import HeaderStyles from "./styles/headerStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = props => {
  return (
    <HeaderStyles>
      <div id="Hero">
        <div className="Hero-Logo">
          <Link href="/">
            <a>
              <img src="https://res.cloudinary.com/dx5p60gon/image/upload/v1565435039/star-wars-dir/logo_wknbl8.png" />
            </a>
          </Link>
        </div>
        <div className="Hero-Body">
          <div className="Head">
            <img src="https://res.cloudinary.com/dx5p60gon/image/upload/v1565435039/star-wars-dir/logo_wknbl8.png" />
            <h1>Directory</h1>
            <hr />
            <p>
              Find your favorite Characters, Films, Species, Starships and
              Planets
            </p>
          </div>
          <div className="Input">
            <form>
              {/* <FontAwesomeIcon icon={faSearch} /> */}
              <input type="text" placeholder="Enter a search term" />
            </form>
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
