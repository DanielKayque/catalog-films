import React from 'react';
import { api } from '../Services/GlobalAPI';
import { useLocation, useParams } from 'react-router-dom';

const { searchId } = api;

const Details = () => {
  const params = useParams();
  React.useEffect(() => {
    async function searchForId() {
      const data = await searchId(params.id);
      console.log(data);
    }
    searchForId();
  }, []);

  return <div>Details</div>;
};

export default Details;
