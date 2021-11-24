import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import cn from 'classnames';

import { selectTask } from '../../store/selectedTask';
import Item from '../Item';

import s from './list.module.css';

const List = ({ viewFull = true }) => {
  const tasks = useSelector((state) => state.tasks);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (task) => {
    const currentTask = tasks.filter((item) => item.title === task)
      .map((obj) => obj);

    dispatch(selectTask(currentTask[0]));
    navigate('/card');
  };

  return <div className={cn({
    [s.full]: viewFull === true,
    [s.short]: viewFull === false,
  })}>
    {
      tasks.map((item) => (viewFull
        ? <Item
          key={item.id}
          status={item.status}
          title={item.title}
          description={item.description}
          value={item.title}
          handleClickCard={handleClick}
          listMode={true}
          viewFullCard={true}
        />
        : <Item
          key={item.id}
          status={item.status}
          title={item.title}
          description={item.description}
          value={item.title}
          handleClickCard={handleClick}
          listMode={true}
        />))
    }
  </div>;
};

export default List;
