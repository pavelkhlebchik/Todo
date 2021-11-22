/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { selectTask } from '../../store/selectedTask';
import Item from '../Item';

import s from './list.module.css';

const List = () => {
  const tasks = useSelector((state) => state.tasks);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (task) => {
    const taskObj = tasks.filter((item) => item.title === task)
      .map((obj) => obj);

    dispatch(selectTask(taskObj[0]));
    navigate('/card');
  };

  return <div>
    <div className={s.flex}>
      {
        tasks.map((item) => <Item
          key={item.title}
          status={item.done}
          title={item.title}
          description={item.description}
          value={item.title}
          handleClickCard={handleClick}
          listMode={true}
        />)
      }
    </div>
  </div>;
};

export default List;
