import { useState, useEffect } from 'react'
import axios from 'axios'; // Import axios for API calls


// Custom hook to fetch country details based on clicked coordinates
const useCountryDetails = (clickedCoordinates) => {

  // State to store country details
  const [countryData, setCountryData] = useState('');


  // Fetch country details when clicked coordinates change
  useEffect(() => {
    if (clickedCoordinates) {
      fetchCountryData();
    }
  }, [clickedCoordinates]);

  // Function to fetch country details
  const fetchCountryData = async () => {


    // Extract latitude and longitude from clicked coordinates
    const { lat, lng } = clickedCoordinates;
    const apiKey = '9fc79dde1dd1481e835c59253f0e6688';


    // Fetch country details from OpenCageData API
    try {
      const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${apiKey}`);
      const data = response.data;
      console.log(data.results[0]);
      setCountryData(data.results[0]);
    } catch (error) {
      console.error('Error fetching country name:', error);
    }
  };

  // Return country details
  return countryData;
};

export default useCountryDetails;