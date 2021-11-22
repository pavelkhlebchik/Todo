import React, { useState } from 'react';
import cn from 'classnames';

import s from './item.module.css';

const Item = ({
  handleClickCard, title, description, status, value, listMode, editMode,
}) => {
  const [isDone, setIsDone] = useState(status);

  const handleClick = () => handleClickCard && handleClickCard(value);

  const handleClickStatus = () => {
    setIsDone((prevstate) => !prevstate);
  };
  return <div className={s.task}>
    <button className={cn(s.task_status, {
      [s.task_status_completed]: isDone === true,
      [s.task_status_not_completed]: isDone === false,
    })}
      onClick={handleClickStatus}></button>
    <section className={s.task_inner}>
      <h2 className={s.task_title}>{title}</h2>
      <p className={s.task_description}>{description}</p>
    </section>
    {
      listMode
      && <button
        className={s.task_view_btn}
        onClick={handleClick}
        value={title}
      >View</button>
    }

    {
      editMode
      && <div>
        <button>
          Update
        </button>
        <button>
          Delete
        </button>
      </div>
    }
  </div>;
};

export default Item;
