import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import "../../App.css";
import logo from "../../assets/logo.jpg";
import { FaParking } from "react-icons/fa";

const containerStyle = {
  width: "100%",
  height: "40vh",
};

const center = {
  lat: -32.00515,
  lng: 115.85962,
};

const positionRestaurant = {
  lat: -32.00515,
  lng: 115.85962,
};

const positionParking = {
  lat: -32.00527,
  lng: 115.85989,
};

const Maps = () => {
  const [openWindowRestaurant, setOpenWindowRestaurant] = useState(false);
  const [openWindowParking, setOpenWindowParking] = useState(false);
  const logoRestaurant = (
    <img src={logo} alt="logo" className="logoRestaurant" />
  );

  const onLoad = (marker) => {
    console.log("marker: ", marker);
    setOpenWindowRestaurant(!openWindowRestaurant);
    setOpenWindowParking(!openWindowParking);
  };

  const handleCloseWindowRestaurant = () => {
    setOpenWindowRestaurant(!openWindowRestaurant);
  };
  const handleCloseWindowParking = () => {
    setOpenWindowParking(!openWindowParking);
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={19}>
        <Marker
          onLoad={onLoad}
          position={positionRestaurant}
          onClick={handleCloseWindowRestaurant}
        >
          {openWindowRestaurant ? (
            <InfoWindow
              position={positionRestaurant}
              onCloseClick={handleCloseWindowRestaurant}
            >
              <div className="markerLogo">
                {logoRestaurant}
                <h3>Chin Chin Gastronomy</h3>
                <a
                  href="https://www.google.com/maps/place/Chin+Chin+Gastronomy/@-32.0051871,115.857379,17z/data=!3m1!4b1!4m5!3m4!1s0x2a32bd07d05eb3bd:0xd994797bad6ca867!8m2!3d-32.0051917!4d115.8595677"
                  target="_blank"
                  rel="noreferrer"
                >
                  Directions
                </a>
              </div>
            </InfoWindow>
          ) : null}
        </Marker>
        <Marker
          onLoad={onLoad}
          position={positionParking}
          onClick={handleCloseWindowParking}
        >
          {openWindowParking ? (
            <InfoWindow
              position={positionParking}
              onCloseClick={handleCloseWindowParking}
            >
              <div className="markerLogo">
                <h3>
                  <FaParking /> Parking
                </h3>
                <a
                  href="https://www.google.com/maps/place/Chin+Chin+Gastronomy/@-32.0051871,115.857379,17z/data=!3m1!4b1!4m5!3m4!1s0x2a32bd07d05eb3bd:0xd994797bad6ca867!8m2!3d-32.0051917!4d115.8595677"
                  target="_blank"
                  rel="noreferrer"
                >
                  Show on Google Maps
                </a>
              </div>
            </InfoWindow>
          ) : null}
        </Marker>
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(Maps);
