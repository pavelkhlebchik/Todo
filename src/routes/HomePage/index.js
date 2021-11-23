import React from 'react';
import { useNavigate } from 'react-router';

import Layout from '../../components/Layout';
import List from '../../components/List';

const HomePage = () => {
  const navigate = useNavigate();

  const handleClickViewAll = () => {
    navigate('/all');
  };

  const handleClickAdd = () => {
    navigate('/new');
  };
  return <>
    <Layout>
      <List
        viewFull={false}
      />
      <button onClick={handleClickViewAll}>View All</button>
      <button onClick={handleClickAdd}>Add Todo</button>
      <span>or</span>
      <button>Add random Todo :)</button>
    </Layout>
  </>;
};

export default HomePage;
