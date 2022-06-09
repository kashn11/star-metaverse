import React from "react";
export default function Header() {
	return (
		<React.Fragment>    <div className="header-wrap" data-aos="fade-down" data-aos-duration={2000}>
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
		</React.Fragment>
	)
}