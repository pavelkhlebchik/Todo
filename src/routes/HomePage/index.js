import React from 'react';
import { useNavigate } from 'react-router';

import Layout from '../../components/Layout';

const HomePage = () => {
  const navigate = useNavigate();

  const handleClickViewAll = () => {
    navigate('/all');
  };

  return <>
        <Layout />
        <button onClick={handleClickViewAll}>View All</button>
        <button>Add Todo</button>
        <span>or</span>
        <button>Add random Todo :)</button>
    </>;
};

export default HomePage;
