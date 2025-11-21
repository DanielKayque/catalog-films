import React from 'react';
import { api } from '../Services/GlobalAPI';
import { useLocation } from 'react-router-dom';

const { searchId } = api;

const Details = () => {
  React.useEffect(() => {
    async function searchForId() {
      const data = await searchId(pathname);
      console.log(data);
    }
    searchForId();
  }, []);

  const { pathname } = useLocation();
  console.log(pathname);

  return <div>Details</div>;
};

export default Details;
