import React, { useState } from 'react';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMapEvents, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import useCountryDetails from '../hooks/useCountryDetails';
import CountryDetail from './CountryDetail';
import CountryDetailEmpty from './CountryDetailEmpty';
import SeaDetails from './SeaDetails';

const Map = () => {
  const [clickedCoordinates, setClickedCoordinates] = useState(null);

  const position = [28.613939, 77.209023];
  const customIcon = new Icon({
    iconUrl: "/marker-icon-2x.png",
    iconSize: [25, 41],
    iconAnchor: [15, 50],
    popupAnchor: [0, -50]
  });

  // Fetch country details based on clicked coordinates
  const countryData = useCountryDetails(clickedCoordinates);
  console.log(countryData);

  // Extract relevant data from the country details
  const countryName = countryData && countryData.components && countryData.components.country;
  const waterBody = countryData && countryData.components && countryData.components._category;
  console.log(waterBody);
  const address = countryData && countryData.formatted;

  // Handle map click event and update clicked coordinates
  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    setClickedCoordinates({ lat, lng });
  };

  // Component to handle map click events
  const MapClickHandler = () => {
    useMapEvents({
      click: handleMapClick,
    });

    return null;
  };

  return (
    <div className='content'>
      {/* MapContainer for Leaflet map */}
      <MapContainer className='map' center={position} zoom={13} scrollWheelZoom={true}>
        {/* TileLayer for map tiles */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* MapClickHandler component to handle map click events */}
        <MapClickHandler />

        {/* Render marker and popup when coordinates are clicked */}
        {clickedCoordinates && (
          <Marker position={clickedCoordinates} icon={customIcon}>
            <Popup>
              {console.log(clickedCoordinates, countryName)}
              Latitude: {clickedCoordinates.lat},
              <br />
              Longitude: {clickedCoordinates.lng},
              <br />
              {address}
              <br />
              {/* Render country name if available, otherwise show "No Data Available" */}
              {countryName ? (
                <b className='country'>Country: {countryName}</b>
              ) : (
                "No Data Available"
              )}
            </Popup>
          </Marker>
        )}
      </MapContainer>

      {/* Conditional rendering based on the waterBody category */}
      {waterBody === "natural/water" ? (
        // Render SeaDetails component if waterBody is "natural/water"
        <SeaDetails data={countryData} />
      ) : (
        <>
          {/* Render CountryDetailEmpty component if countryData is not available */}
          {!countryData ? (
            <CountryDetailEmpty />
          ) : (
            // Render CountryDetail component with countryData
            <CountryDetail data={countryData} />
          )}
        </>
      )}
    </div>
  );
};

export default Map;
