import React from "react";
export default function Footer() {
	return (
		<React.Fragment>
			<footer className="footer_wrap">
				<section className="footer_nav-wrap" style={{ backgroundImage: 'url("assets/img/starts-bg.png")' }}>
					<div className="footer_nav frosted">
						<div className="container">
							<div className="row">
								<div className="col-md-6">
									<ul>
										<li>
											<a href="https://www.facebook.com/Star-Metaverse-102905962410944"><img src="assets/img/facebook.svg" alt="footer-img" /></a>
										</li>
										<li>
											<a href="https://www.youtube.com/channel/UC4faPiaK3WCmxQ6O2rju9TQ"><img src="assets/img/youtube.svg" alt="footer-img" /></a>
										</li>
										<li>
											<a href="https://www.instagram.com/starmeta_verse"><img src="assets/img/instagram.svg" alt="footer-img" /></a>
										</li>
										<li>
											<a href="https://discord.gg/yGWBQKxh"><img src="assets/img/discord.svg" alt="footer-img" /></a>
										</li>
										<li>
											<a href="https://t.me/STARMETAVERSE"><img src="assets/img/telegram.svg" alt="footer-img" /></a>
										</li>
									</ul>
								</div>
								<div className="col-md-6">
									<ul>
										<li>
											<a href="https://www.tiktok.com/@starmeta_verse"><img src="assets/img/tiktok.svg" alt="footer-img" /></a>
										</li>
										<li>
											<a href="https://twitter.com/starmeta_verse"><img src="assets/img/twitter.svg" alt="footer-img" /></a>
										</li>
										<li>
											<a href="https://www.linkedin.com/company/starmeta-verse"><img src="assets/img/linkedin.svg" alt="footer-img" /></a>
										</li>
										<li>
											<a href="https://www.reddit.com/user/starverse_io"><img src="assets/img/reddit.svg" alt="footer-img" /></a>
										</li>
										<li>
											<a href="https://medium.com/@starmeta_verse"><img src="assets/img/medium.svg" alt="footer-img" /></a>
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
									<a className="theme-btn btn-filled" href="#">Subscribe</a>
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
											<img src="assets/img/brand-star.png" alt="footer-img" />
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

		</React.Fragment>
	)
}