import React from "react";
import Link from "next/link";
import PSSGrid, { PSSTitle } from "../styles/popstarshipStyles";
import ViewMoreButton from "../styles/viewMoreButton";

const PopularStarShips = () => {
  return (
    <div>
      <PSSTitle className="PSS-Title">
        <h2>Popular Starships</h2>
        <hr />
      </PSSTitle>
      <PSSGrid>
        {/* Card 1 */}
        <div className="PSS-Card">
          <div className="image">
            <img src="https://res.cloudinary.com/dx5p60gon/image/upload/v1565435040/star-wars-dir/starship-2_k1rizz.jpg" />
          </div>
          <div className="body">
            <p className="title">Ghost</p>
            <p className="summary">
              The Ghost is a modified VCX-100 light freighter, manufactured by
              the Corellian Engineering Coropration.
            </p>
            <a className="read-more">Read More</a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="PSS-Card">
          <div className="image">
            <img src="https://res.cloudinary.com/dx5p60gon/image/upload/v1565435040/star-wars-dir/starship-1_dor9ug.jpg" />
          </div>
          <div className="body">
            <p className="title">Corellian Scout</p>
            <p className="summary">
              The Ghost is a modified VCX-100 light freighter, manufactured by
              the Corellian Engineering Coropration.
            </p>
            <a className="read-more">Read More</a>
          </div>
        </div>

        {/* Card 3 */}

        <div className="PSS-Card">
          <div className="image">
            <img src="https://res.cloudinary.com/dx5p60gon/image/upload/v1565435040/star-wars-dir/starship-3_hx8dlr.jpg" />
          </div>
          <div className="body">
            <p className="title">Raven's Claw</p>
            <p className="summary">
              The Ghost is a modified VCX-100 light freighter, manufactured by
              the Corellian Engineering Coropration.
            </p>
            <a className="read-more">Read More</a>
          </div>
        </div>

        {/* Card 4 */}

        <div className="PSS-Card">
          <div className="image">
            <img src="https://res.cloudinary.com/dx5p60gon/image/upload/v1565435041/star-wars-dir/starship-4_nyl9tm.jpg" />
          </div>
          <div className="body">
            <p className="title">Loronar E-9 Explorer</p>
            <p className="summary">
              The Ghost is a modified VCX-100 light freighter, manufactured by
              the Corellian Engineering Coropration.
            </p>
            <a className="read-more">Read More</a>
          </div>
        </div>

        {/* Card 5 */}

        <div className="PSS-Card">
          <div className="image">
            <img src="https://res.cloudinary.com/dx5p60gon/image/upload/v1565435041/star-wars-dir/starship-5_p4oala.jpg" />
          </div>
          <div className="body">
            <p className="title">Lorona E-9 Explorer</p>
            <p className="summary">
              The Ghost is a modified VCX-100 light freighter, manufactured by
              the Corellian Engineering Coropration.
            </p>
            <a className="read-more">Read More</a>
          </div>
        </div>

        {/* Card 6 */}

        <div className="PSS-Card">
          <div className="image">
            <img src="https://res.cloudinary.com/dx5p60gon/image/upload/v1565435041/star-wars-dir/starship-6_znsp2t.jpg" />
          </div>
          <div className="body">
            <p className="title">Outrider</p>
            <p className="summary">
              The Ghost is a modified VCX-100 light freighter, manufactured by
              the Corellian Engineering Coropration.
            </p>
            <a className="read-more">Read More</a>
          </div>
        </div>
      </PSSGrid>
      <Link href="/starships/list/">
        <ViewMoreButton>
          <a>VIEW MORE</a>
        </ViewMoreButton>
      </Link>
    </div>
  );
};

export default PopularStarShips;
