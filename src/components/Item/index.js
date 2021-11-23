import React, { useState } from 'react';
import cn from 'classnames';

import s from './item.module.css';

const Item = ({
  handleClickCard, title, description, status, value, listMode, viewFullCard,
}) => {
  const [isDone, setIsDone] = useState(status);

  const handleClick = () => handleClickCard && handleClickCard(value);

  const handleClickStatus = () => {
    setIsDone((prevstate) => !prevstate);
  };

  return <div className={cn(s.task, {
    [s.task_full_card]: viewFullCard === true,
  })}>
    <button className={cn(s.task_status, {
      [s.task_status_completed]: isDone === true,
      [s.task_status_not_completed]: isDone === false,
    })}
      onClick={handleClickStatus}><span className={s.task_checkmark}></span></button>
    <section className={s.task_inner}>
      <h2 className={s.task_title}>{title}</h2>
      <p className={s.task_description}>{description}</p>
    </section>
    {
      listMode
      && <button
        className={s.task_view_btn}
        onClick={handleClick}
      >View</button>
    }
  </div>;
};

export default Item;
