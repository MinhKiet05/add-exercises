import React, { useState } from 'react';
import axios from 'axios';

export default function AxiosComponent() {
  const [data, setData] = useState([]);

  const handleAxios = async () => {
    try {
      const response = await axios.get('https://69853ee96964f10bf252acf9.mockapi.io/api/v1/students');
      console.log(response.data);
    } catch (error) {
      console.log("Axios Error:", error);
    }
  };

  return (
    <div>
      <button onClick={handleAxios}>Click to Load (Axios)</button>
    </div>
  );
}