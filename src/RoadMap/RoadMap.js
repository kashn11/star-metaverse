import React from "react";
import bg from "../Img/bg3.png";
import "../RoadMap/RoadMap.css";
import shapes from "../Img/blur.png";

function RoadMap() {
  return (
    <div className="road_container">
      <img src={bg} className="road_img" />
      <div className="road">
        <div className="road_content">
          <h3 className="road_header">RoadMap</h3>
          <div className="row">
            <div className="col1">
              <div className="col1_1">
                <p className="col_1_p">
                  Setup up legal entity <br /> Market research <br /> R&D
                  confirming the feasibility of the <br /> project <br />{" "}
                  Validating business model
                </p>
              </div>
              <div className="col1_1">
                <p className="col_1_p">
                  Stress test smart contracts
                  <br /> Securing strategic partners & advisors
                  <br /> Creating proprietary smart contract
                  <br /> architecture
                  <br />
                  Website Launch
                  <br /> Awareness marketing & PR
                  <br /> campaigns
                  <br /> Trailer Video <br /> Token Generation Event <tr />{" "}
                  Private Sale <br /> Pre-launch marketing campaigns <br />{" "}
                  Opening whitelist <br /> NFT Presale <br /> NFT Marketplace
                  Launch
                </p>
              </div>
              <div className="col1_1">
                <p className="col_1_p">
                  Prototype Launch <br /> Land Sales
                </p>
              </div>
            </div>
            <div className="col2">
              <div className="col2_1">
              <img className="pentagon" src={shapes} />
              <h2 className="phase">PHASE <br/>1</h2>
              </div>
              <div className="col2_1">
              <img className="pentagon" src={shapes} />
              <h2 className="phase">PHASE <br/>2</h2>
              </div><div className="col2_1">
              <img className="pentagon" src={shapes} />
              <h2 className="phase">PHASE <br/>3</h2>
              </div>
              <div className="col2_1">
              <img className="pentagon" src={shapes} />
              <h2 className="phase">PHASE <br/>4</h2>
              </div><div className="col2_1">
              <img className="pentagon" src={shapes} />
              <h2 className="phase">PHASE <br/>5</h2>
              </div>
            </div>
            <div className="col3">
              <div className="col3_1">
                <p className="col_3_p">
                  Initial talks with high-profile investors
                  <br />
                  Core team formation
                  <br />
                  Creating marketing strategy
                  <br />
                  Establishing 5-year plan & vision
                  <br />
                  Premium brand creation
                  <br />
                </p>
              </div>
              <div className="col3_1">
                <p className="col_3_p">
                  Public presale registration
                  <br />
                  Token Listing
                  <br />
                  Land Whitelist
                  <br />
                </p>
              </div>
            </div>
            <div className="col5">
            <div className="col2_1">
              <img className="pentagon" src={shapes} />
              <h2 className="phase">PHASE <br/>1</h2>
              </div>
              <div className="col2_1">
              <img className="pentagon" src={shapes} />
              <h2 className="phase">PHASE <br/>2</h2>
              </div><div className="col2_1">
              <img className="pentagon" src={shapes} />
              <h2 className="phase">PHASE <br/>3</h2>
              </div>
              <div className="col2_1">
              <img className="pentagon" src={shapes} />
              <h2 className="phase">PHASE <br/>4</h2>
              </div><div className="col2_1">
              <img className="pentagon" src={shapes} />
              <h2 className="phase">PHASE <br/>5</h2>
              </div>

            </div>
            <div className="col4">
            <div className="col1_1">
                <p className="col_1_p">
                  Setup up legal entity <br /> Market research <br /> R&D
                  confirming the feasibility of the <br /> project <br />{" "}
                  Validating business model
                </p>
              </div>
              <div className="col1_1">
                <p className="col_1_p">
                  Stress test smart contracts
                  <br /> Securing strategic partners & advisors
                  <br /> Creating proprietary smart contract
                  <br /> architecture
                  <br />
                  Website Launch
                  <br /> Awareness marketing & PR
                  <br /> campaigns
                  <br /> Trailer Video <br /> Token Generation Event <tr />{" "}
                  Private Sale <br /> Pre-launch marketing campaigns <br />{" "}
                  Opening whitelist <br /> NFT Presale <br /> NFT Marketplace
                  Launch
                </p>
              </div>
              <div className="col1_1">
                <p className="col_1_p">
                  Prototype Launch <br /> Land Sales
                </p>
              </div>
              <div className="col1_1">
                <p className="col_1_p">
                  Initial talks with high-profile investors
                  <br />
                  Core team formation
                  <br />
                  Creating marketing strategy
                  <br />
                  Establishing 5-year plan & vision
                  <br />
                  Premium brand creation
                  <br />
                </p>
              </div>
              <div className="col1_1">
                <p className="col_1_p">
                  Public presale registration
                  <br />
                  Token Listing
                  <br />
                  Land Whitelist
                  <br />
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoadMap;
