import { useState, useEffect } from 'react';
import axios from 'axios';

const useAddress = (address = 'Cartago Valle del cauca') => {
  const [map, setMap] = useState({});
  const API = `http://api.positionstack.com/v1/forward?access_key=c2d9350d60e47da5738454a9ae72790e&query=${address}`;
  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get(API);
      setMap(resp.data.data[0]);
    };
    fetchData();
  }, []);
  return map;
};

export default useAddress;
