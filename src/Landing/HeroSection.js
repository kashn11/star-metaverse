import StarImg from "./landing-images/star-token.png";
import Minimap from "./landing-images/minimap.svg";
export default function HeroSection() {
  return (
    <div className="heroSection">
        <div className="heroSectionContainer">
      <div className="contentHeroSection">
        <img src={StarImg} alt="token-img" className="heroSectionImg" />
        <h4 className="headingHero">STAR METAVERSE</h4>
        <button type="btn" className="joinWishList">
          JOIN WHITELIST{" "}
        </button>
      </div>
      <div className="heroSectionMid">
        <div className="text-sectionDiv">
          <h4>THE METAVERSE OF</h4>
          <h5>CINEMA, SPORTS AND ENTERTAINMENT</h5>
        </div>
        <img src={Minimap} className="miniMapImg" alt="mini-map" />
        <div className="contectWithStars">
          <h4>CONNECT WITH THE</h4>
          <h2>STARS</h2>
        </div>
        <div className="descConectWithStarts">
          <h4>
            Gain Privileged Access With Premium Nfts <br />&<br /> Chance To
            Interact With Stars
          </h4>
          <p>
            STAR METAVERSE is a world reimagined to bring together Cinema,
            Sports and Entertainment, exploring the world of possibilities in
            digital and reality.
          </p>
          <h5>
            This is a land where Stars hangout and offer access without the
            boundaries like in real life.{" "}
          </h5>
          <p>
            Stars from different industries like cinema, sports and
            entertainment have a huge fan base, and in real life being in the
            right place and right time or making your way to even a concert or a
            sports match won't give you access to them on a personal basis. But
            with Star Metaverse, everyone will have an opportunity to meet the
            Star-Partners of the Star Metaverse and way more opportunities that
            can be imagined.
          </p>
          <a  className="btnLitePaper">LITEPAPER</a>
        </div>
      </div>
      </div>
    </div>
  );
}
