import React from 'react';

import s from './item.module.css';
// eslint-disable-next-line react/prop-types
const Item = ({ title, description, status }) => (
  <div className={s.task}>
    <button className={s.task_status}>{status}</button>
    <section className={s.task_inner}>
    <h2 className={s.task_title}>{title}</h2>
    <p className={s.task_description}>{description}</p>
    </section>
    <button className={s.task_view_btn}>View</button>
  </div>
);

export default Item;
