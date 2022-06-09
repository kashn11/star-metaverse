
import { useEffect } from 'react';
import './App.css';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div>
        <div className="header-wrap" data-aos="fade-down" data-aos-duration={2000}>
          <div className="container">
            <div className="header-wrap-inner">
              <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#">
                  <img src="assets/img/brand-star.png" alt="brand logo" />
                  <span className="brand-name txt-shadow">Star <span className="brand-last-name">Metaverse</span></span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay={1500} data-aos-offset={0}>
                      <a className="nav-link" aria-current="page" href="#">Overview</a>
                    </li>
                    <li className="nav-item" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay={1500} data-aos-offset={0}>
                      <a className="nav-link" href="#">Team</a>
                    </li>
                    <li className="nav-item" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay={1500} data-aos-offset={0}>
                      <a className="nav-link" href="#">Properties</a>
                    </li>
                    <li className="nav-item" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay={1500} data-aos-offset={0}>
                      <a className="nav-link" href="#">Litepaper</a>
                    </li>
                  </ul>
                  <a className="nav-link theme-btn btn-bordered" href="#">NFT Store</a>
                  <a className="nav-link theme-btn btn-filled" href="#">Buy Star</a>
                </div>
              </nav>
            </div>
            {/*/.header-wrap-inner*/}
          </div>
          {/*/.container*/}
        </div>
        {/*header-wrap*/}
        <div className="site-banner" style={{ backgroundImage: 'url("assets/img/landing-bg.png")' }}>
          <div className="meta-girl mb-hide">
            <img src="assets/img/meta-girl.png" alt="img" data-aos="fade-right" data-aos-offset={300} data-aos-duration={1500} data-aos-easing="ease-in-sine" />
          </div>
          <div className="meta-boy mb-hide">
            <img src="assets/img/meta-boy.png" alt="img" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-offset={0} data-aos-duration={1500} />
          </div>
          <div className="banner-heading">
            <h1 data-aos="fade-down" data-aos-easing="linear" data-aos-duration={1500}>Star Metaverse <small className="text-border frosted-gray" data-aos="fade-right" data-aos-offset={300} data-aos-easing="ease-in-sine" data-aos-duration={1000}>Join WhiteList &gt;</small></h1>
          </div>
          {/*/.banner-heading*/}
          <div className="brand-info">
            <div className="brand-info-inner frosted-gray-blue">
              <h4 className="txt-gradient-v"> The Metaverse of </h4>
              <small className="text-border"> Cinema, Sports and Entertainment </small>
            </div>
          </div>{/*/.brand-info*/}
          <div className="site-main-heading">
            <div className="site-main-heading-inner">
              <small>Connect With The</small>
              <h1 className="txt-gradient">Stars</h1>
              <p>Gain Privileged Access With <br />
                Premium Nftsbr <br />
                &amp; <br />
                Chance To Interact With Stars</p>
              <a href="#" className="theme-btn btn-bordered">Litepaper</a>
            </div>{/*/.site-main-heading-inner*/}
          </div>{/*/.site-main-heading*/}
        </div>
        {/*/.site-banner*/}
        <div className="principle-section section-space">
          <div className="principle-section-inner">
            <div className="section-title" data-aos="fade-down" data-aos-easing="linear" data-aos-duration={1500}>
              <h4>
                Star Key Principle
              </h4>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="principle-col">
                  <div className="principle-left-col box-shadow-pink principle-col-inner" data-aos="fade-right" data-aos-offset={300} data-aos-easing="ease-in-sine">
                    <div className="col-title">
                      <h4>
                        EDUCATION IN
                        THE WORLD OF CRYPTO
                      </h4>
                      <p>The crypto world is overwhelming if you're just
                        finding your way around. Star Metaverse aims
                        to be a central hub where users can come and
                        learn in an open environment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="principle-col">
                  <div className="principle-right-col principle-col-inner">
                    <div className="principle-btn" data-aos="fade-down" data-aos-easing="linear" data-aos-duration={1500}>
                      <a href="#" className="box-shadow-pink">Learn</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="principle-col">
                  <div className="principle-left-col principle-col-inner">
                    <div className="principle-btn" data-aos="fade-down" data-aos-easing="linear" data-aos-duration={1500}>
                      <a href="#" className="box-shadow-pink">Earn</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="principle-col">
                  <div className="principle-right-col box-shadow-blue principle-col-inner" data-aos="fade-left" data-aos-offset={300} data-aos-duration={1500}>
                    <div className="col-title">
                      <h4>
                        REVENUE THROUGH
                        MULTIPLE INCOME STREAM
                      </h4>
                      <p>
                        Star Metaverse will be a land of multiple
                        income streams, inclusive of passive earning,
                        staking and advertising.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="principle-col">
                  <div className="principle-left-col box-shadow-pink principle-col-inner" data-aos="fade-right" data-aos-offset={300} data-aos-easing="ease-in-sine">
                    <div className="col-title">
                      <h4>
                        HAVE FUN
                        AND BE COMPETITIVE
                      </h4>
                      <p>
                        Users can come and play games,
                        complete and win.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="principle-col">
                  <div className="principle-right-col principle-col-inner">
                    <div className="principle-btn" data-aos="fade-down" data-aos-easing="linear" data-aos-duration={1500}>
                      <a href="#" className="box-shadow-pink">Play</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="principle-col">
                  <div className="principle-left-col principle-col-inner">
                    <div className="principle-btn" data-aos="fade-down" data-aos-easing="linear" data-aos-duration={1500}>
                      <a href="#" className="box-shadow-pink">Create</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="principle-col">
                  <div className="principle-right-col box-shadow-blue principle-col-inner" data-aos="fade-left" data-aos-offset={300} data-aos-duration={1500}>
                    <div className="col-title">
                      <h4>
                        BE CREATIVE AND BUILD
                      </h4>
                      <p>
                        The crypto world is overwhelming if you're just
                        finding your way around. Star Metaverse aims
                        to be a central hub where users can come and
                        learn in an open environment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="principle-col">
                  <div className="principle-left-col box-shadow-pink principle-col-inner" data-aos="fade-right" data-aos-offset={300} data-aos-easing="ease-in-sine">
                    <div className="col-title">
                      <h4>
                        CONNECT AND ADVANCE
                      </h4>
                      <p>
                        In the world today, connection is how you
                        grow. With the right access, your reach can be
                        accelerated to the right people and audience.
                        Imagine being able to all this virtually.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="principle-col">
                  <div className="principle-right-col principle-col-inner">
                    <div className="principle-btn" data-aos="fade-down" data-aos-easing="linear" data-aos-duration={1500}>
                      <a href="#" className="box-shadow-pink">Connect</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{/*/.principle-section-inner*/}
        </div>
        <div className="star-properties" style={{ backgroundImage: 'url("assets/img/properties-bg.png")' }}>
          <div className="container">
            <div className="star-properties-inner">
              <div className="section-title" data-aos="fade-down" data-aos-easing="linear" data-aos-duration={1500}>
                <h4>Star Properties</h4>
              </div>
              <div className="properties-cols section-space">
                <div className="properties-cols-inner">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="props-inner-col" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay={400} data-aos-offset={300} data-aos-duration={500}>
                        <img src="assets/img/brand-mark.svg" alt="img" />
                        <p className="txt-shadow">Land</p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="props-inner-col" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay={800} data-aos-offset={300} data-aos-duration={500}>
                        <img src="assets/img/brand-mark.svg" alt="img" />
                        <p className="txt-shadow">Buildings</p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="props-inner-col" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay={1200} data-aos-offset={300} data-aos-duration={500}>
                        <img src="assets/img/brand-mark.svg" alt="img" />
                        <p className="txt-shadow">Biz <br /> Establishment</p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="props-inner-col" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay={1600} data-aos-offset={300} data-aos-duration={500}>
                        <img src="assets/img/brand-mark.svg" alt="img" />
                        <p className="txt-shadow">Advertisement Boards</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{/*/.properties-cols*/}
            </div>{/*/.star-properties-inner*/}
          </div>{/*/.container*/}
        </div>{/*/.star-properties*/}
        {/*coding of road_map section is going to start */}
        {/*coding of road_map section is going to start */}
        <section className="road_map section-space">
          <div className="section-title" data-aos="fade-down" data-aos-easing="linear" data-aos-duration={1500}>
            <h4>Roadmap</h4>
          </div>{/* /.section-title */}
          <div className="container">
            <div className="map_inner">
              <div className="row">
                <div className="col-md-5">
                  <div className="col-outer">
                    <div className="col-inner">
                      <div className="roadmap_col roadmap_left-col frosted-gray-blue" data-aos="fade-left" data-aos-easing="linear" data-aos-duration={1500}>
                        <ul>
                          <li>Setup the legal entity</li>
                          <li>Market research</li>
                          <li>R&amp;D confirming the feasinbility of the project</li>
                          <li>Validating business model</li>
                        </ul>
                      </div>{/* /.roadmap_col */}
                      <div className="roadmap_col roadmap_left-col col_left-custom-margin frosted-gray-blue" data-aos="fade-left" data-aos-easing="linear" data-aos-duration={1500}>
                        <ul>
                          <li>Stress test smart contracts</li>
                          <li>Secueing strategic partners &amp; advisors</li>
                          <li>Creating proprietary smart contract</li>
                          <li>architecture</li>
                          <li>Website Launch</li>
                          <li>Awareness marketing &amp; PR</li>
                          <li>campaigns</li>
                          <li>Trailer Video</li>
                          <li>Token Generation Event</li>
                          <li>Private Sale</li>
                          <li>Pre-launch marketing campaigns</li>
                          <li>NFT Presale</li>
                          <li>NFT Marketplace Launch</li>
                        </ul>
                      </div>{/* /.roadmap_col */}
                      <div className="roadmap_col roadmap_left-col frosted-gray-blue" data-aos="fade-left" data-aos-easing="linear" data-aos-duration={1500}>
                        <ul>
                          <li>Prototype Launch</li>
                          <li>Land Sales</li>
                        </ul>
                      </div>{/* /.roadmap_col */}
                    </div>
                  </div>
                </div>{/* /.col-md-5 */}
                <div className="col-md-2">
                  <div className="roadmap_col roadmap_middle-col" data-aos="fade-down" data-aos-easing="linear" data-aos-duration={1500}>
                    <figure>
                      <img src="assets/img/penta.png" alt="img" />
                      <figcaption>
                        <h4 className="text-border">Phase <br /> 1</h4>
                      </figcaption>
                    </figure>
                  </div>{/* /.roadmap_col */}
                  <div className="roadmap_col roadmap_middle-col" data-aos="fade-down" data-aos-easing="linear" data-aos-duration={1500}>
                    <figure>
                      <img src="assets/img/penta.png" alt="img" />
                      <figcaption>
                        <h4 className="text-border">Phase <br /> 2</h4>
                      </figcaption>
                    </figure>
                  </div>{/* /.roadmap_col */}
                  <div className="roadmap_col roadmap_middle-col" data-aos="fade-down" data-aos-easing="linear" data-aos-duration={1500}>
                    <figure>
                      <img src="assets/img/penta.png" alt="img" />
                      <figcaption>
                        <h4 className="text-border">Phase <br /> 3</h4>
                      </figcaption>
                    </figure>
                  </div>{/* /.roadmap_col */}
                  <div className="roadmap_col roadmap_middle-col" data-aos="fade-down" data-aos-easing="linear" data-aos-duration={1500}>
                    <figure>
                      <img src="assets/img/penta.png" alt="img" />
                      <figcaption>
                        <h4 className="text-border">Phase <br /> 4</h4>
                      </figcaption>
                    </figure>
                  </div>{/* /.roadmap_col */}
                  <div className="roadmap_col roadmap_middle-col" data-aos="fade-down" data-aos-easing="linear" data-aos-duration={1500}>
                    <figure>
                      <img src="assets/img/penta.png" alt="img" />
                      <figcaption>
                        <h4 className="text-border">Phase <br /> 5</h4>
                      </figcaption>
                    </figure>
                  </div>{/* /.roadmap_col */}
                </div>{/* /.col-md-2 */}
                <div className="col-md-5">
                  <div className="col-outer">
                    <div className="col-inner">
                      <div className="roadmap_col roadmap_right-col col_right-custom-margin frosted-gray-blue" data-aos="fade-right" data-aos-easing="linear" data-aos-duration={1500}>
                        <ul>
                          <li>Initial talks with high profile investors</li>
                          <li>Core team formation</li>
                          <li>Creating marketing strategy</li>
                          <li>Establishing 5-year plan &amp; vision</li>
                          <li>Premium brand creation</li>
                        </ul>
                      </div>{/* /.roadmap_col */}
                      <div className="roadmap_col roadmap_right-col frosted-gray-blue" data-aos="fade-right" data-aos-easing="linear" data-aos-duration={1500}>
                        <ul>
                          <li>Public presale registration</li>
                          <li>Token Listing</li>
                          <li>Land Whitelist</li>
                        </ul>
                      </div>{/* /.roadmap_col */}
                    </div>
                  </div>
                </div>{/* /.col-md-5 */}
              </div>{/* /.row */}
            </div>{/* /.map_inner */}
          </div>{/* /.container */}
        </section>{/*/.road_map*/}
        {/*coding of TOKEN_UTILITY section is going to start */}
        <section className="token_utility">
        </section>{/* /.token_utility */}
        {/*coding of TOKEN_UTILITY section is going to start */}
        <section className="token_utility">
          <div className="container">
            <div className="token_inner">
              <div className="section-title" data-aos="fade-down" data-aos-easing="linear" data-aos-duration={1500}>
                <h4>Star token Utility</h4>
              </div>{/* /.section_title */}
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="token_utility-card box-shadow-pink" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration={2000} data-aos-delay={200}>
                    <figure>
                      <img src="assets/img/token-star.svg" alt="img" />
                      <figcaption>
                        <p>Native token for <br /><span>Star Metaverse</span><br /> </p>
                        <small>Tokenholder will be known as xx</small>
                      </figcaption>
                    </figure>
                  </div>{/* /.token_utility-card */}
                </div>{/* /.col */}
                <div className="col-lg-3 col-md-6">
                  <div className="token_utility-card box-shadow-pink" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration={2000} data-aos-delay={400}>
                    <figure>
                      <img src="assets/img/token-star.svg" alt="img" />
                      <figcaption>
                        <p> <span>Star</span> will be sold during TGC to purchase Real Estate within the
                          Star Avenues with
                          the
                          NFT mechanism acting as title of ownership</p>
                      </figcaption>
                    </figure>
                  </div>{/* /.token_utility-card */}
                </div>{/* /.col */}
                <div className="col-lg-3 col-md-6">
                  <div className="token_utility-card box-shadow-pink" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration={2000} data-aos-delay={600}>
                    <figure>
                      <img src="assets/img/token-star.svg" alt="img" />
                      <figcaption>
                        <p> <span>Star</span> will be used as the only currency in the Star Metaverse</p>
                      </figcaption>
                    </figure>
                  </div>{/* /.token_utility-card */}
                </div>{/* /.col */}
                <div className="col-lg-3 col-md-6">
                  <div className="token_utility-card box-shadow-pink" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration={2000} data-aos-delay={800}>
                    <figure>
                      <img src="assets/img/token-star.svg" alt="img" />
                      <figcaption>
                        <p><span>Star</span> be used for Event Tickets </p>
                      </figcaption>
                    </figure>
                  </div>{/* /.token_utility-card */}
                </div>{/* /.col */}
                <div className="col-lg-3 col-md-6">
                  <div className="token_utility-card box-shadow-pink" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration={2000} data-aos-delay={1000}>
                    <figure>
                      <img src="assets/img/token-star.svg" alt="img" />
                      <figcaption>
                        <p><span>Star</span> reward program through community participation </p>
                      </figcaption>
                    </figure>
                  </div>{/* /.token_utility-card */}
                </div>{/* /.col */}
                <div className="col-lg-3 col-md-6">
                  <div className="token_utility-card box-shadow-pink" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration={2000} data-aos-delay={1200}>
                    <figure>
                      <img src="assets/img/token-star.svg" alt="img" />
                      <figcaption>
                        <p><span>Star</span> <br />as Goverance </p>
                      </figcaption>
                    </figure>
                  </div>{/* /.token_utility-card */}
                </div>{/* /.col */}
                <div className="col-lg-3 col-md-6">
                  <div className="token_utility-card box-shadow-pink" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration={2000} data-aos-delay={1400}>
                    <figure>
                      <img src="assets/img/token-star.svg" alt="img" />
                      <figcaption>
                        <p><span>Star</span><br /> Marketplace</p>
                      </figcaption>
                    </figure>
                  </div>{/* /.token_utility-card */}
                </div>{/* /.col */}
                <div className="col-lg-3 col-md-6">
                  <div className="token_utility-card box-shadow-pink" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration={2000} data-aos-delay={1600}>
                    <figure>
                      <img src="assets/img/token-star.svg" alt="img" />
                      <figcaption>
                        <p>Staking of <span>Star</span> </p>
                        <small>Tokenholder will be known as xx</small>
                      </figcaption>
                    </figure>
                  </div>{/* /.token_utility-card */}
                </div>{/* /.col */}
              </div>{/* /.row */}
            </div>{/* /.token_inner */}
          </div>{/* /.container */}
        </section>{/* /.token_utility */}
        <div className="key-zone-section section-space">
          <div className="section-title" data-aos="fade-down" data-aos-easing="linear" data-aos-duration={1500}>
            <h4>Key Zone</h4>
          </div>
          <div className="key-zone-inner">
            <div className="key-zone-pod" style={{ backgroundImage: 'url("assets/img/zone-1.png")' }}>
              <div className="container">
                <div className="zone-inner-pod frosted-gray" data-aos="fade-right" data-aos-offset={300} data-aos-duration={1500} data-aos-easing="ease-in-sine">
                  <div className="pod-content">
                    <h4 className="txt-gradient">Star Hub Concourse</h4>
                    <p>
                      All Starlites will enter through the
                      STAR HUB Concourse. This will be the
                      key meeting area which contains
                      help desk, event board, navigation
                      area as well major advertisement
                      Totems. Special presence by key
                      crypto names will also be in this
                      Concourse.
                    </p>
                  </div>
                </div>
                {/*/.zone-inner-pod*/}
              </div>
            </div>
            <div className="key-zone-pod" style={{ backgroundImage: 'url("assets/img/zone-2.png")' }}>
              <div className="container">
                <div className="zone-inner-pod frosted-gray margin-left-auto" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-offset={300} data-aos-duration={1500}>
                  <div className="pod-content">
                    <h4 className="txt-gradient">Business Lounge</h4>
                    <p>
                      An exclusive NFT holder's only
                      Business Lounge. So access to this
                      Lounge for casual business meets,
                      and Special Investor Events, all
                      possible only for NFT holders.
                    </p>
                  </div>
                </div>
                {/*/.zone-inner-pod*/}
              </div>
            </div>
            <div className="key-zone-pod" style={{ backgroundImage: 'url("assets/img/zone-3.png")' }}>
              <div className="container">
                <div className="zone-inner-pod frosted-gray" data-aos="fade-right" data-aos-offset={300} data-aos-duration={1500} data-aos-easing="ease-in-sine">
                  <div className="pod-content">
                    <h4 className="txt-gradient">Stadium</h4>
                    <p>
                      The Stadium will host events, concerts and more. Weekly interactive learning sessions by
                      people from the Crypto world will be hosted, and promoted
                      within Star Metaverse &amp; attendance will be encouraged by rewarding of $STAR.
                    </p>
                  </div>
                </div>
                {/*/.zone-inner-pod*/}
              </div>
            </div>
            <div className="key-zone-pod" style={{ backgroundImage: 'url("assets/img/zone-4.png")' }}>
              <div className="container">
                <div className="zone-inner-pod frosted-gray margin-left-auto" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-offset={300} data-aos-duration={1500}>
                  <div className="pod-content">
                    <h4 className="txt-gradient">NFT Gallery</h4>
                    <p>
                      An exhibition of the main NFTs
                    </p>
                  </div>
                </div>
                {/*/.zone-inner-pod*/}
              </div>
            </div>
            <div className="key-zone-pod" style={{ backgroundImage: 'url("assets/img/zone-5.png")' }}>
              <div className="container">
                <div className="zone-inner-pod frosted-gray" data-aos="fade-right" data-aos-offset={300} data-aos-duration={1500} data-aos-easing="ease-in-sine">
                  <div className="pod-content">
                    <h4 className="txt-gradient">NFT Shop</h4>
                    <p>
                      Sale, Purchase and Merchandise NFTS
                    </p>
                  </div>
                </div>
                {/*/.zone-inner-pod*/}
              </div>
            </div>
            <div className="key-zone-pod" style={{ backgroundImage: 'url("assets/img/zone-6.png")' }}>
              <div className="container">
                <div className="zone-inner-pod frosted-gray margin-left-auto" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-offset={300} data-aos-duration={1500}>
                  <div className="pod-content">
                    <h4 className="txt-gradient">Starline Bar</h4>
                    <p>
                      Luxury bar to connect and meet
                      other Starlites
                    </p>
                  </div>
                </div>
                {/*/.zone-inner-pod*/}
              </div>
            </div>
          </div>
          {/*/.key-zone-inner*/}
        </div>
        {/*/.key-zone-section*/}
        {/*coding of Core Team section is going to start */}
        <section className="core_team sec_space">
          <div className="container">
            <div className="core_team-inner">
              <div className="section-title" data-aos="fade-down" data-aos-easing="linear" data-aos-duration={1500}>
                <h4>Core Team</h4>
              </div>{/* /.section_title */}
              <div className="row">
                <div className="col-md-4">
                  <div className="core_team-card">
                    <figure>
                      <img src="assets/img/penta.png" alt="img" />
                      <div className="member-image">
                        <img src="assets/img/team-member.png" alt="img" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay={300} data-aos-offset={0} />
                      </div>
                      <figcaption>
                        <h4 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay={2000} data-aos-offset={0}>Name</h4>
                        <a className="btn_main" href="#" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay={2400} data-aos-offset={0}>Linkedin</a>
                      </figcaption>
                    </figure>
                  </div>{/* /.core_team-card */}
                </div>
                <div className="col-md-4">
                  <div className="core_team-card">
                    <figure>
                      <img src="assets/img/penta.png" alt="img" />
                      <div className="member-image">
                        <img src="assets/img/team-member.png" alt="img" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay={600} data-aos-offset={0} />
                      </div>
                      <figcaption>
                        <h4 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay={2000} data-aos-offset={0}>Name</h4>
                        <a className="btn_main" href="#" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay={2400} data-aos-offset={0}>Linkedin</a>
                      </figcaption>
                    </figure>
                  </div>{/* /.core_team-card */}
                </div>
                <div className="col-md-4">
                  <div className="core_team-card">
                    <figure>
                      <img src="assets/img/penta.png" alt="img" />
                      <div className="member-image">
                        <img src="assets/img/team-member.png" alt="img" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay={900} data-aos-offset={0} />
                      </div>
                      <figcaption>
                        <h4 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay={2000} data-aos-offset={0}>Name</h4>
                        <a className="btn_main" href="#" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay={2400} data-aos-offset={0}>Linkedin</a>
                      </figcaption>
                    </figure>
                  </div>{/* /.core_team-card */}
                </div>
                <div className="col-md-4">
                  <div className="core_team-card">
                    <figure>
                      <img src="assets/img/penta.png" alt="img" />
                      <div className="member-image">
                        <img src="assets/img/team-member.png" alt="img" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay={1200} data-aos-offset={0} />
                      </div>
                      <figcaption>
                        <h4 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay={2000} data-aos-offset={0}>Name</h4>
                        <a className="btn_main" href="#" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay={2400} data-aos-offset={0}>Linkedin</a>
                      </figcaption>
                    </figure>
                  </div>{/* /.core_team-card */}
                </div>
                <div className="col-md-4">
                  <div className="core_team-card">
                    <figure>
                      <img src="assets/img/penta.png" alt="img" />
                      <div className="member-image">
                        <img src="assets/img/team-member.png" alt="img" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay={1500} data-aos-offset={0} />
                      </div>
                      <figcaption>
                        <h4 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay={2000} data-aos-offset={0}>Name</h4>
                        <a className="btn_main" href="#" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay={2400} data-aos-offset={0}>Linkedin</a>
                      </figcaption>
                    </figure>
                  </div>{/* /.core_team-card */}
                </div>
                <div className="col-md-4">
                  <div className="core_team-card">
                    <figure>
                      <img src="assets/img/penta.png" alt="img" />
                      <div className="member-image">
                        <img src="assets/img/team-member.png" alt="img" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay={1800} data-aos-offset={0} />
                      </div>
                      <figcaption>
                        <h4 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay={2000} data-aos-offset={0}>Name</h4>
                        <a className="btn_main" href="#" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay={2400} data-aos-offset={0}>Linkedin</a>
                      </figcaption>
                    </figure>
                  </div>{/* /.core_team-card */}
                </div>
              </div>{/* /.row */}
            </div>{/* /.core_team-inner */}
          </div>{/* /.container */}
        </section>{/* /.core_team */}
        {/*coding of Adviser section is going to start */}
        <section className="adviser">
          <div className="container">
            <div className="adviser_inner">
              <div className="section-title" data-aos="fade-down" data-aos-easing="linear" data-aos-duration={1500}>
                <h4>Advisor</h4>
              </div>{/* /.section_title */}
              <div className="row">
                <div className="col-md-4">
                  <div className="adviser_section-card">
                    <figure>
                      <img src="assets/img/token-star.svg" alt="img" />
                      <figcaption>
                        <h4>Name</h4>
                        <a className="btn_main" href="#">Linkedin</a>
                      </figcaption>
                    </figure>
                  </div>{/* /.adviser_section-card */}
                </div>
                <div className="col-md-4">
                  <div className="adviser_section-card">
                    <figure>
                      <img src="assets/img/token-star.svg" alt="img" />
                      <figcaption>
                        <h4>Name</h4>
                        <a className="btn_main" href="#">Linkedin</a>
                      </figcaption>
                    </figure>
                  </div>{/* /.adviser_section-card */}
                </div>
                <div className="col-md-4">
                  <div className="adviser_section-card">
                    <figure>
                      <img src="assets/img/token-star.svg" alt="img" />
                      <figcaption>
                        <h4>Name</h4>
                        <a className="btn_main" href="#">Linkedin</a>
                      </figcaption>
                    </figure>
                  </div>{/* /.adviser_section-card */}
                </div>
              </div>{/* /.row */}
            </div>{/* /.adviser_inner */}
          </div>{/* /.container */}
        </section>{/* /.adviser */}
        {/*coding of investors and Partner section is going to start */}
        <section className="investors section-space">
          <div className="container">
            <div className="investors_inner">
              <div className="section-title" data-aos="fade-down" data-aos-easing="linear" data-aos-duration={1500}>
                <h4>Investors and Partners</h4>
              </div>{/* /.section_title */}
              <div className="row">
                <div className="col-md-3">
                  <div className="investor_section-card">
                    <h2 className="heading_primary">Logo</h2>
                  </div>{/* /.investor_section-card */}
                </div>
                <div className="col-md-3">
                  <div className="investor_section-card">
                    <h2 className="heading_primary">Logo</h2>
                  </div>{/* /.investor_section-card */}
                </div>
                <div className="col-md-3">
                  <div className="investor_section-card">
                    <h2 className="heading_primary">Logo</h2>
                  </div>{/* /.investor_section-card */}
                </div>
                <div className="col-md-3">
                  <div className="investor_section-card">
                    <h2 className="heading_primary">Logo</h2>
                  </div>{/* /.investor_section-card */}
                </div>
                <div className="col-md-3">
                  <div className="investor_section-card">
                    <h2 className="heading_primary">Logo</h2>
                  </div>{/* /.investor_section-card */}
                </div>
                <div className="col-md-3">
                  <div className="investor_section-card">
                    <h2 className="heading_primary">Logo</h2>
                  </div>{/* /.investor_section-card */}
                </div>
                <div className="col-md-3">
                  <div className="investor_section-card">
                    <h2 className="heading_primary">Logo</h2>
                  </div>{/* /.investor_section-card */}
                </div>
                <div className="col-md-3">
                  <div className="investor_section-card">
                    <h2 className="heading_primary">Logo</h2>
                  </div>{/* /.investor_section-card */}
                </div>
              </div>{/* /.row */}
            </div>{/* /.adviser_inner */}
          </div>{/* /.container */}
        </section>{/* /.adviser */}
        {/*coding of products section is going to start */}
        <section className="products">
          <img className="product_img" src="assets/img/bg-products.png" alt="img" />
        </section>
        {/*coding of footer section is been started */}
        <footer className="footer_wrap">
          <section className="footer_nav-wrap" style={{ backgroundImage: 'url("assets/img/starts-bg.png")' }}>
            <div className="footer_nav frosted">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/Star-Metaverse-102905962410944"><img src="assets/img/facebook.svg" alt="img" /></a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/channel/UC4faPiaK3WCmxQ6O2rju9TQ"><img src="assets/img/youtube.svg" alt="img" /></a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/starmeta_verse"><img src="assets/img/instagram.svg" alt="img" /></a>
                      </li>
                      <li>
                        <a href="https://discord.gg/yGWBQKxh"><img src="assets/img/discord.svg" alt="img" /></a>
                      </li>
                      <li>
                        <a href="https://t.me/STARMETAVERSE"><img src="assets/img/telegram.svg" alt="img" /></a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul>
                      <li>
                        <a href="https://www.tiktok.com/@starmeta_verse"><img src="assets/img/tiktok.svg" alt="img" /></a>
                      </li>
                      <li>
                        <a href="https://twitter.com/starmeta_verse"><img src="assets/img/twitter.svg" alt="img" /></a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/company/starmeta-verse"><img src="assets/img/linkedin.svg" alt="img" /></a>
                      </li>
                      <li>
                        <a href="https://www.reddit.com/user/starverse_io"><img src="assets/img/reddit.svg" alt="img" /></a>
                      </li>
                      <li>
                        <a href="https://medium.com/@starmeta_verse"><img src="assets/img/medium.svg" alt="img" /></a>
                      </li>
                    </ul>
                  </div>
                </div>{/* /.row */}
              </div>{/* /.container */}
            </div>{/* /.footer_nav */}
          </section>
          {/*coding of footer_cards section is been started */}
          <section className="footer_cards">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="footer_card">
                    <h4>Get the latest version</h4>
                    <p>Enter your Email address</p>
                    <a className="theme-btn btn-bordered" href="#">Subscribe</a>
                  </div>{/* /.footer_card */}
                </div>
                <div className="col-md-4">
                  <div className="footer_card">
                    <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">MarketPlace</a></li>
                      <li><a href="#">Blog</a></li>
                      <li><a href="#">Contact us</a></li>
                      <li><a href="#">Policy</a></li>
                      <li><a href="#">Whitepaper</a></li>
                    </ul>
                  </div>{/* /.footer_card */}
                </div>
                <div className="col-md-4">
                  <div className="footer_card">
                    <div className="right_card">
                      <div>
                        <img src="assets/img/brand-star.png" alt="img" />
                        <h4>Star <br /> Metaverse</h4>
                      </div>
                    </div>
                  </div>{/* /.footer_card */}
                </div>
              </div>{/* /.row */}
            </div>
          </section>
          <section className="community_business">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="community_card">
                    <p>Community Business Partnership</p>
                    <a href="#"> Contact us<small>Sign Up</small></a>
                  </div>{/* /.community_card */}
                </div>{/* /.col */}
                <div className="col-md-4">
                  <div className="community_card">
                    <p>Community Business Partnership</p>
                    <a href="#"> Contact us<small>Sign Up</small></a>
                  </div>{/* /.community_card */}
                </div>{/* /.col */}
                <div className="col-md-4">
                  <div className="community_card">
                    <p>Community Business Partnership</p>
                    <a href="#"> Contact us<small>Sign Up</small></a>
                  </div>{/* /.community_card */}
                </div>{/* /.col */}
              </div>{/* /.row */}
            </div>
          </section>
          {/*coding of company_registeration section is going to start */}
          <section className="company_registeration">
            <p>@Star Metaverse.All rights reserved</p>
          </section>{/* /.company_registeration */}
        </footer>
      </div>


    </>
  );
}

export default App;
