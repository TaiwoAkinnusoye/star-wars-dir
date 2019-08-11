import { PSSTitle } from "../styles/popstarshipStyles";
import PopularCharactersGrid from "../styles/popcharacterStyles";
import ViewMoreButton from "../styles/viewMoreButton";

const PopularCharacters = () => {
  return (
    <>
      <PSSTitle>
        <h2>Popular Characters</h2>
        <hr />
      </PSSTitle>
      <PopularCharactersGrid>
        {/* Character 1 */}
        <div className="character-card-grid">
          <div className="image">
            <img src="https://res.cloudinary.com/dx5p60gon/image/upload/v1565435040/star-wars-dir/character-1_as4lzl.jpg" />
          </div>
          <div className="details">
            <div className="name">
              <h4>Luke Skywalker</h4>
              <p>Son of Anakin</p>
            </div>
            <div className="bio">
              <p>
                Luke Skywalker, a Force-sensitive human male, was a legendary
                Jedi master who fought in the Galactic Civil War during the
                reign of the Galactic Empire...<a>Read More</a>
              </p>
            </div>
          </div>
        </div>

        {/* Character 2 */}

        <div className="character-card-grid">
          <div className="image">
            <img src="https://res.cloudinary.com/dx5p60gon/image/upload/v1565435039/star-wars-dir/character-2_qb5o4l.jpg" />
          </div>
          <div className="details">
            <div className="name">
              <h4>Han Solo</h4>
              <p>Cadet</p>
            </div>
            <div className="bio">
              <p>
                Han Solo, rose from an impoverished childhood on the mean
                streets of Corellia to become one of the heroes of the Rebel
                Alliance. As captain of the...<a>Read More</a>
              </p>
            </div>
          </div>
        </div>

        {/* Character 3 */}

        <div className="character-card-grid">
          <div className="image">
            <img src="https://res.cloudinary.com/dx5p60gon/image/upload/v1565435039/star-wars-dir/character-3_w1dh3v.jpg" />
          </div>
          <div className="details">
            <div className="name">
              <h4>Darth Vader</h4>
              <p>Anakin Skywalker</p>
            </div>
            <div className="bio">
              <p>
                Anakin Skywalker, is probably one of the most, if not the most
                iconic bad guy in entertainment industry. Darth Vader is...
                <a>Read More</a>
              </p>
            </div>
          </div>
        </div>

        {/* Character 4 */}

        <div className="character-card-grid">
          <div className="image">
            <img src="https://res.cloudinary.com/dx5p60gon/image/upload/v1565435040/star-wars-dir/character-4_wgb4yq.jpg" />
          </div>
          <div className="details">
            <div className="name">
              <h4>Princess Leia</h4>
              <p>Anakin Skywalker</p>
            </div>
            <div className="bio">
              <p>
                Princess Leia, has always been known to be Force sensitive, yet
                she didn't show significant of Force users like other
                characters...
                <a>Read More</a>
              </p>
            </div>
          </div>
        </div>
      </PopularCharactersGrid>
      <ViewMoreButton>VIEW MORE</ViewMoreButton>
    </>
  );
};

export default PopularCharacters;
