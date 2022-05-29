import discord from "./landing-images/discord.svg";
import twitter from "./landing-images/twitter.svg";
import telegram from "./landing-images/telegram.svg";
import { Col, Row } from "react-bootstrap";
export default function footer() {
  return (
    <div className="footer-container">
      <div className="top-header">
        <img src={discord} />
        <img src={twitter} />
        <img src={telegram} />
      </div>
      <div className="footer-middle">
        <Row>
          <Col md={4}>
            <h2>Get the latest updates</h2>
            <input
              type="text"
              className="mailInput"
              placeholder="Enter Your Email Address"
            />
          </Col>
          <Col md={4}></Col>
          <Col md={4}></Col>
        </Row>
      </div>
    </div>
  );
}
