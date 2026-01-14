import React from "react";
import taj from "./images/taj.jpg";
import fort from "./images/agraford.jpg";
import redfort from "./images/Red-fort.jpg";
import gate from "./images/Newdehli.jpg";
import minar from "./images/charminar.jpg";
import goafort from "./images/fort-aguada-goa.jpg";

function Cards() {
  return (
    <>
      <div className="fadeIn">
        <div className="placeHeading container-fluid row text-center">
          <div className="col-md-12" id="Agra">
            ✨ Agra ✨
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="fadeIn container row my-4">
          <div className="col-lg-4"></div>
          <div
            className="card  border-0 shadow-lg rounded-4 overflow-hidden"
            style={{ maxWidth: "700px" }}
          >
            <img
              src={taj}
              className="card-img-top"
              alt="Taj Mahal"
              style={{
                height: "400px",
                objectFit: "cover",
                filter: "brightness(90%)",
              }}
            />
            <div className="card-body text-center p-4 bg-light">
              <h2 className="card-title text-primary fw-bold mb-2">
                Taj Mahal
              </h2>
              <p className="card-text text-muted mb-3">
                A Symbol of Eternal Love
              </p>
              <ul className="list-group list-group-flush text-start mb-3">
                <li className="list-group-item bg-transparent border-0">
                  <strong>Built:</strong> 1632-1653
                </li>
                <li className="list-group-item bg-transparent border-0">
                  <strong>Location:</strong> Agra, India
                </li>
              </ul>
              <a href="#" className="btn btn-primary btn-lg rounded-pill px-4">
                Explore
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className=" fadeIn cards container row my-4">
        <div className="col-md-4"></div>

        <div
          className="card border-0 shadow-lg rounded-4 overflow-hidden"
          style={{ maxWidth: "700px" }}
        >
          <img
            src={fort}
            className="card-img-top"
            alt="Taj Mahal"
            style={{
              height: "400px",
              objectFit: "cover",
              filter: "brightness(90%)",
            }}
          />
          <div className="card-body text-center p-4 bg-light">
            <h2 className="card-title text-primary fw-bold mb-2">Agra Fort</h2>
            <p className="card-text text-muted mb-3">
              The Glorious Red Sandstone Fortress
            </p>
            <ul className="list-group list-group-flush text-start mb-3">
              <li className="list-group-item bg-transparent border-0">
                <strong>Built:</strong> 1555-1563
              </li>
              <li className="list-group-item bg-transparent border-0">
                <strong>Location:</strong> Agra, India
              </li>
            </ul>
            <a href="#" className="btn btn-primary btn-lg rounded-pill px-4">
              Explore
            </a>
          </div>
        </div>
      </div>

      <div className="slideLeft">
        <div className="placeHeading container-fluid row text-center">
          <div className="col-md-12" id="Delhi">
            ✨ Delhi ✨
          </div>
        </div>
      </div>

      <div className="cards">
        <div className=" slideLeft container row my-4">
          <div className="col-md-4"></div>

          <div
            className="card border-0 shadow-lg rounded-4 overflow-hidden"
            style={{ maxWidth: "700px" }}
          >
            <img
              src={redfort}
              className="card-img-top"
              alt="Taj Mahal"
              style={{
                height: "400px",
                objectFit: "cover",
                filter: "brightness(90%)",
              }}
            />
            <div className="card-body text-center p-4 bg-light">
              <h2 className="card-title text-primary fw-bold mb-2">Red Ford</h2>
              <p className="card-text text-muted mb-3">The Pride of Delhi</p>
              <ul className="list-group list-group-flush text-start mb-3">
                <li className="list-group-item bg-transparent border-0">
                  <strong>Built:</strong> 1620-1648
                </li>
                <li className="list-group-item bg-transparent border-0">
                  <strong>Location:</strong> Delhi, India
                </li>
              </ul>
              <a href="#" className="btn btn-primary btn-lg rounded-pill px-4">
                Explore
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className=" slideLeft cards container row my-4">
        <div className="col-md-4"></div>

        <div
          className="card border-0 shadow-lg rounded-4 overflow-hidden"
          style={{ maxWidth: "700px" }}
        >
          <img
            src={gate}
            className="card-img-top"
            alt="Taj Mahal"
            style={{
              height: "400px",
              objectFit: "cover",
              filter: "brightness(90%)",
            }}
          />
          <div className="card-body text-center p-4 bg-light">
            <h2 className="card-title text-primary fw-bold mb-2">India Gate</h2>
            <p className="card-text text-muted mb-3">A Tribute to the Brave</p>
            <ul className="list-group list-group-flush text-start mb-3">
              <li className="list-group-item bg-transparent border-0">
                <strong>Built:</strong> 1900-1931
              </li>
              <li className="list-group-item bg-transparent border-0">
                <strong>Location:</strong> New Delhi, India
              </li>
            </ul>
            <a href="#" className="btn btn-primary btn-lg rounded-pill px-4">
              Explore
            </a>
          </div>
        </div>
      </div>

      <div className="slideRight" id="Hydrabad">
        <div className="placeHeading container-fluid row text-center">
          <div className="col-md-12">✨ Hydrabad ✨</div>
        </div>
      </div>
      <div className=" slideRight cards container row my-4">
        <div className="col-md-4"></div>

        <div
          className="card border-0 shadow-lg rounded-4 overflow-hidden"
          style={{ maxWidth: "700px" }}
        >
          <img
            src={minar}
            className="card-img-top"
            alt="Taj Mahal"
            style={{
              height: "400px",
              objectFit: "cover",
              filter: "brightness(90%)",
            }}
          />
          <div className="card-body text-center p-4 bg-light">
            <h2 className="card-title text-primary fw-bold mb-2">
              Chand Minar
            </h2>
            <p className="card-text text-muted mb-3">The symbol of the Moon</p>
            <ul className="list-group list-group-flush text-start mb-3">
              <li className="list-group-item bg-transparent border-0">
                <strong>Built:</strong> 1450-1515
              </li>
              <li className="list-group-item bg-transparent border-0">
                <strong>Location:</strong> Hydrabad, India
              </li>
            </ul>
            <a href="#" className="btn btn-primary btn-lg rounded-pill px-4">
              Explore
            </a>
          </div>
        </div>
      </div>

      <div className="slideRight">
        <div className="placeHeading container-fluid row text-center">
          <div className="col-md-12" id="Goa">
            ✨ Goa ✨
          </div>
        </div>
      </div>
      <div className=" slideRight cards container row my-4">
        <div className="col-md-4"></div>

        <div
          className="card border-0 shadow-lg rounded-4 overflow-hidden"
          style={{ maxWidth: "700px" }}
        >
          <img
            src={goafort}
            className="card-img-top"
            alt="Taj Mahal"
            style={{
              height: "400px",
              objectFit: "cover",
              filter: "brightness(90%)",
            }}
          />
          <div className="card-body text-center p-4 bg-light">
            <h2 className="card-title text-primary fw-bold mb-2">
              Aguada Fort
            </h2>
            <p className="card-text text-muted mb-3">The Sentinel of the Sea</p>
            <ul className="list-group list-group-flush text-start mb-3">
              <li className="list-group-item bg-transparent border-0">
                <strong>Built:</strong> 1550-1612
              </li>
              <li className="list-group-item bg-transparent border-0">
                <strong>Location:</strong> Goa, India
              </li>
            </ul>
            <a href="#" className="btn btn-primary btn-lg rounded-pill px-4">
              Explore
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
