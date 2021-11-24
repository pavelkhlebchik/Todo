import React from 'react';
import { useNavigate } from 'react-router';

import Layout from '../../components/Layout';
import List from '../../components/List';

import s from './style.module.css';

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
      <button
        onClick={handleClickViewAll}
        className={s.view_all_btn}>
        View All</button>
        <button
          onClick={handleClickAdd}
          className={s.add_task_btn}>
          Add Todo</button>
        <button className={s.add_random_task}>
          Add random Todo :)
        </button>
    </Layout>
  </>;
};

export default HomePage;
