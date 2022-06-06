
import './App.css';



function App() {
  return (
    <>

      <div>
        <div className="header-wrap">
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
                    <li className="nav-item">
                      <a className="nav-link" aria-current="page" href="#">Overview</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Team</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Properties</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Litepaper</a>
                    </li>
                  </ul>
                  <a className="nav-link theme-btn btn-bordered" href="#">NFT Store</a>
                  <a className="nav-link theme-btn btn-filled" href="#">Buy Star</a>
                </div>
              </nav>
            </div>{/*/.header-wrap-inner*/}
          </div>{/*/.container*/}
        </div>{/*header-wrap*/}
        <div className="site-banner" style={{ backgroundImage: 'url("assets/img/landing-bg.png")' }}>
          <div className="banner-heading">
            <h1>Star Metaverse <small className="text-border frosted-gray">Join WhiteList  &gt;</small></h1>
          </div>{/*/.banner-heading*/}
        </div>{/*/.site-banner*/}
        <div className="principle-section section-space">
          <div className="principle-section-inner">
            <div className="section-title">
              <h4>
                Star Key Principle
              </h4>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="principle-col">
                  <div className="principle-left-col box-shadow-pink principle-col-inner">
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
                    <div className="principle-btn">
                      <a href="#" className="box-shadow-pink">Learn</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="principle-col">
                  <div className="principle-left-col principle-col-inner">
                    <div className="principle-btn">
                      <a href="#" className="box-shadow-pink">Earn</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="principle-col">
                  <div className="principle-right-col box-shadow-blue principle-col-inner">
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
                  <div className="principle-left-col box-shadow-pink principle-col-inner">
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
                    <div className="principle-btn">
                      <a href="#" className="box-shadow-pink">Play</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="principle-col">
                  <div className="principle-left-col principle-col-inner">
                    <div className="principle-btn">
                      <a href="#" className="box-shadow-pink">Create</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="principle-col">
                  <div className="principle-right-col box-shadow-blue principle-col-inner">
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
                  <div className="principle-left-col box-shadow-pink principle-col-inner">
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
                    <div className="principle-btn">
                      <a href="#" className="box-shadow-pink">Connects</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{/*/.principle-section-inner*/}
        </div>{/*/.principle-section*/}
        {/*coding of TOKEN_UTILITY section is been started */}
        <section className="token_utility sec_space">
          <div className="container">
            <div className="token_inner">
              <div className="section-title">
                <h4>Star token Utility</h4>
              </div>{/* /.section_title */}
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="token_utility-card box-shadow-pink">
                    <figure>
                      <img src="assets/img/token-star.svg" alt />
                      <figcaption>
                        <p>Native token for <br /><span>Star Metaverse</span><br /> </p>
                        <small>Tokenholder will be known as xx</small>
                      </figcaption>
                    </figure>
                  </div>{/* /.token_utility-card */}
                </div>{/* /.col */}
                <div className="col-lg-3 col-md-6">
                  <div className="token_utility-card box-shadow-pink">
                    <figure>
                      <img src="assets/img/token-star.svg" alt />
                      <figcaption>
                        <p> <span>Star</span> will be sold during TGC to purchase Real Estate within the Star Avenues with
                          the
                          NFT mechanism acting as title of ownership</p>
                      </figcaption>
                    </figure>
                  </div>{/* /.token_utility-card */}
                </div>{/* /.col */}
                <div className="col-lg-3 col-md-6">
                  <div className="token_utility-card box-shadow-pink">
                    <figure>
                      <img src="assets/img/token-star.svg" alt />
                      <figcaption>
                        <p> <span>Star</span> will be used as the only currency in the Star Metaverse</p>
                      </figcaption>
                    </figure>
                  </div>{/* /.token_utility-card */}
                </div>{/* /.col */}
                <div className="col-lg-3 col-md-6">
                  <div className="token_utility-card box-shadow-pink">
                    <figure>
                      <img src="assets/img/token-star.svg" alt />
                      <figcaption>
                        <p><span>Star</span> be used for Event Tickets </p>
                      </figcaption>
                    </figure>
                  </div>{/* /.token_utility-card */}
                </div>{/* /.col */}
                <div className="col-lg-3 col-md-6">
                  <div className="token_utility-card box-shadow-pink">
                    <figure>
                      <img src="assets/img/token-star.svg" alt />
                      <figcaption>
                        <p><span>Star</span> reward program through community participation </p>
                      </figcaption>
                    </figure>
                  </div>{/* /.token_utility-card */}
                </div>{/* /.col */}
                <div className="col-lg-3 col-md-6">
                  <div className="token_utility-card box-shadow-pink">
                    <figure>
                      <img src="assets/img/token-star.svg" alt />
                      <figcaption>
                        <p><span>Star</span> <br />as Goverance </p>
                      </figcaption>
                    </figure>
                  </div>{/* /.token_utility-card */}
                </div>{/* /.col */}
                <div className="col-lg-3 col-md-6">
                  <div className="token_utility-card box-shadow-pink">
                    <figure>
                      <img src="assets/img/token-star.svg" alt />
                      <figcaption>
                        <p><span>Star</span><br /> Marketplace</p>
                      </figcaption>
                    </figure>
                  </div>{/* /.token_utility-card */}
                </div>{/* /.col */}
                <div className="col-lg-3 col-md-6">
                  <div className="token_utility-card box-shadow-pink">
                    <figure>
                      <img src="assets/img/token-star.svg" alt />
                      <figcaption>
                        <p>Staking of <span>Star</span> </p>
                        <small>Tokenholder will be known as xx</small>
                      </figcaption>
                    </figure>
                  </div>{/* /.token_utility-card */}
                </div>{/* /.col */}
              </div>{/* /.row */}
              <h4 className="heading_primary">Key Zone</h4>
            </div>{/* /.token_inner */}
          </div>{/* /.container */}
        </section>{/* /.token_utility */}
        <div className="key-zone-section section-space">
          <div className="section-title">
            <h4>Key Zone</h4>
          </div>
          <div className="key-zone-inner">
            <div className="key-zone-pod" style={{ backgroundImage: 'url("assets/img/zone-1.png")' }}>
              <div className="container">
                <div className="zone-inner-pod frosted-gray">
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
                </div> {/*/.zone-inner-pod*/}
              </div>
            </div>
            <div className="key-zone-pod" style={{ backgroundImage: 'url("assets/img/zone-2.png")' }}>
              <div className="container">
                <div className="zone-inner-pod frosted-gray margin-left-auto">
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
                </div> {/*/.zone-inner-pod*/}
              </div>
            </div>
            <div className="key-zone-pod" style={{ backgroundImage: 'url("assets/img/zone-3.png")' }}>
              <div className="container">
                <div className="zone-inner-pod frosted-gray">
                  <div className="pod-content">
                    <h4 className="txt-gradient">Stadium</h4>
                    <p>
                      The Stadium will host events, concerts and more. Weekly interactive learning sessions by people from the Crypto world will be hosted, and promoted
                      within Star Metaverse &amp; attendance will be encouraged by rewarding of $STAR.
                    </p>
                  </div>
                </div> {/*/.zone-inner-pod*/}
              </div>
            </div>
            <div className="key-zone-pod" style={{ backgroundImage: 'url("assets/img/zone-4.png")' }}>
              <div className="container">
                <div className="zone-inner-pod frosted-gray margin-left-auto">
                  <div className="pod-content">
                    <h4 className="txt-gradient">NFT Gallery</h4>
                    <p>
                      An exhibition of the main NFTs
                    </p>
                  </div>
                </div> {/*/.zone-inner-pod*/}
              </div>
            </div>
            <div className="key-zone-pod" style={{ backgroundImage: 'url("assets/img/zone-5.png")' }}>
              <div className="container">
                <div className="zone-inner-pod frosted-gray">
                  <div className="pod-content">
                    <h4 className="txt-gradient">NFT Shop</h4>
                    <p>
                      Sale, Purchase and Merchandise NFTS
                    </p>
                  </div>
                </div> {/*/.zone-inner-pod*/}
              </div>
            </div>
            <div className="key-zone-pod" style={{ backgroundImage: 'url("assets/img/zone-6.png")' }}>
              <div className="container">
                <div className="zone-inner-pod frosted-gray margin-left-auto">
                  <div className="pod-content">
                    <h4 className="txt-gradient">Starline Bar</h4>
                    <p>
                      Luxury bar to connect and meet
                      other Starlites
                    </p>
                  </div>
                </div> {/*/.zone-inner-pod*/}
              </div>
            </div>
          </div> {/*/.key-zone-inner*/}
        </div>{/*/.key-zone-section*/}
        {/*coding of Core Team section is been started */}
        <section className="core_team sec_space">
          <div className="container">
            <div className="core_team-inner">
              <div className="section-title">
                <h4>Core Team</h4>
              </div>{/* /.section_title */}
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="core_team-card">
                    <figure>
                      <img src="assets/img/penta.png" alt />
                      <figcaption>
                        <h4>Name</h4>
                        <a className="btn_main" href="#">Linkedin</a>
                      </figcaption>
                    </figure>
                  </div>{/* /.core_team-card */}
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="core_team-card">
                    <figure>
                      <img src="assets/img/penta.png" alt />
                      <figcaption>
                        <h4>Name</h4>
                        <a className="btn_main" href="#">Linkedin</a>
                      </figcaption>
                    </figure>
                  </div>{/* /.core_team-card */}
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="core_team-card">
                    <figure>
                      <img src="assets/img/penta.png" alt />
                      <figcaption>
                        <h4>Name</h4>
                        <a className="btn_main" href="#">Linkedin</a>
                      </figcaption>
                    </figure>
                  </div>{/* /.core_team-card */}
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="core_team-card">
                    <figure>
                      <img src="assets/img/penta.png" alt />
                      <figcaption>
                        <h4>Name</h4>
                        <a className="btn_main" href="#">Linkedin</a>
                      </figcaption>
                    </figure>
                  </div>{/* /.core_team-card */}
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="core_team-card">
                    <figure>
                      <img src="assets/img/penta.png" alt />
                      <figcaption>
                        <h4>Name</h4>
                        <a className="btn_main" href="#">Linkedin</a>
                      </figcaption>
                    </figure>
                  </div>{/* /.core_team-card */}
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="core_team-card">
                    <figure>
                      <img src="assets/img/penta.png" alt />
                      <figcaption>
                        <h4>Name</h4>
                        <a className="btn_main" href="#">Linkedin</a>
                      </figcaption>
                    </figure>
                  </div>{/* /.core_team-card */}
                </div>
              </div>{/* /.row */}
            </div>{/* /.core_team-inner */}
          </div>{/* /.container */}
        </section>{/* /.core_team */}
        {/*coding of Adviser section is been started */}
        <section className="adviser">
          <div className="container">
            <div className="adviser_inner">
              <div className="section-title">
                <h4>Advisor</h4>
              </div>{/* /.section_title */}
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="adviser_section-card">
                    <figure>
                      <img src="assets/img/token-star.svg" alt />
                      <figcaption>
                        <h4>Name</h4>
                        <a className="btn_main" href="#">Linkedin</a>
                      </figcaption>
                    </figure>
                  </div>{/* /.adviser_section-card */}
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="adviser_section-card">
                    <figure>
                      <img src="assets/img/token-star.svg" alt />
                      <figcaption>
                        <h4>Name</h4>
                        <a className="btn_main" href="#">Linkedin</a>
                      </figcaption>
                    </figure>
                  </div>{/* /.adviser_section-card */}
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="adviser_section-card">
                    <figure>
                      <img src="assets/img/token-star.svg" alt />
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
        {/*coding of investors and Partner section is been started */}
        <section className="investors section-space">
          <div className="container">
            <div className="investors_inner">
              <div className="section-title">
                <h4>Investors and Partners</h4>
              </div>{/* /.section_title */}
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="investor_section-card">
                    <h2 className="heading_primary">Logo</h2>
                  </div>{/* /.investor_section-card */}
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="investor_section-card">
                    <h2 className="heading_primary">Logo</h2>
                  </div>{/* /.investor_section-card */}
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="investor_section-card">
                    <h2 className="heading_primary">Logo</h2>
                  </div>{/* /.investor_section-card */}
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="investor_section-card">
                    <h2 className="heading_primary">Logo</h2>
                  </div>{/* /.investor_section-card */}
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="investor_section-card">
                    <h2 className="heading_primary">Logo</h2>
                  </div>{/* /.investor_section-card */}
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="investor_section-card">
                    <h2 className="heading_primary">Logo</h2>
                  </div>{/* /.investor_section-card */}
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="investor_section-card">
                    <h2 className="heading_primary">Logo</h2>
                  </div>{/* /.investor_section-card */}
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="investor_section-card">
                    <h2 className="heading_primary">Logo</h2>
                  </div>{/* /.investor_section-card */}
                </div>
              </div>{/* /.row */}
            </div>{/* /.adviser_inner */}
          </div>{/* /.container */}
        </section>{/* /.adviser */}
        {/*coding of products section is been started */}
        <section className="products">
          <img className="product_img" src="assets/img/bg-products.png" alt />
        </section>
        {/*coding of footer section is been started */}
        <footer className="footer_wrap section-space">
          <section className="footer_nav-wrap">
            <img className="footer_bgc" src="assets/img/starts-bg.png" alt />
            <div className="footer_nav">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/Star-Metaverse-102905962410944"><img src="assets/img/facebook.svg" alt /></a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/channel/UC4faPiaK3WCmxQ6O2rju9TQ"><img src="assets/img/youtube.svg" alt /></a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/starmeta_verse"><img src="assets/img/instagram.svg" alt /></a>
                      </li>
                      <li>
                        <a href="https://discord.gg/yGWBQKxh"><img src="assets/img/discord.svg" alt /></a>
                      </li>
                      <li>
                        <a href="https://t.me/STARMETAVERSE"><img src="assets/img/telegram.svg" alt /></a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <a href="https://www.tiktok.com/@starmeta_verse"><img src="assets/img/tiktok.svg" alt /></a>
                      </li>
                      <li>
                        <a href="https://twitter.com/starmeta_verse"><img src="assets/img/twitter.svg" alt /></a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/company/starmeta-verse"><img src="assets/img/linkedin.svg" alt /></a>
                      </li>
                      <li>
                        <a href="https://www.reddit.com/user/starverse_io"><img src="assets/img/reddit.svg" alt /></a>
                      </li>
                      <li>
                        <a href="https://medium.com/@starmeta_verse"><img src="assets/img/medium.svg" alt /></a>
                      </li>
                    </ul>
                  </div>
                </div>{/* /.row */}
              </div>{/* /.container */}
            </div>{/* /.footer_nav */}
          </section>
          {/*coding of footer_cards section is been started */}
          <section className="footer_cards">
            <div className="row">
              <div className="col-lg-4">
                <div className="footer_card">
                  <h4>Get the latest version</h4>
                  <p>Enter your Email address</p>
                  <a className="theme-btn btn-bordered" href="#">Subscribe</a>
                  <span className="card_disc">
                    <p>Community Business Partnership</p>
                    <small>Contact us</small>
                    <a href="#">Sign Up</a>
                  </span>
                </div>{/* /.footer_card */}
              </div>
              <div className="col-lg-4">
                <div className="footer_card">
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">MarketPlace</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Policy</a></li>
                    <li><a href="#">Whitepaper</a></li>
                  </ul>
                  <span className="card_disc">
                    <p>Community Business Partnership</p>
                    <small>Contact us</small>
                    <a href="#">Sign Up</a>
                  </span>
                </div>{/* /.footer_card */}
              </div>
              <div className="col-lg-4">
                <div className="footer_card">
                  <img src="assets/img/brand-mark.svg" alt />
                  <span className="card_disc">
                    <p>Community Business Partnership</p>
                    <small>Contact us</small>
                    <a href="#">Sign Up</a>
                  </span>
                </div>{/* /.footer_card */}
              </div>
            </div>{/* /.row */}
          </section>
        </footer>
      </div>

    </>
  );
}

export default App;
