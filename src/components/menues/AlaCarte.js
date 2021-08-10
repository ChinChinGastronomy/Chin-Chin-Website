import React from "react";
import "../../App.css";

const AlaCarte = ({ events }) => {
  return (
    <div className="ctnAlaCarte">
      <h1 className="titleAlaCarte">Drinks Menu & Events</h1>
      <div className={events.length < 2 ? "singleCard" : "innerSectionh"}>
        {events.map((item, index) => {
          return (
            <>
              {item.displayInSection ? (
                <div className="bgcard" key={index}>
                  <div className="card-text">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>

                    <a
                      href={item.pdf}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-event"
                    >
                      {!item.pdf ? "Coming soon ..." : "Download Menu"}
                    </a>
                  </div>
                  <div className="card-image">
                    <img src={item.imageEvent} alt="hey" />
                  </div>
                </div>
              ) : null}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default AlaCarte;
