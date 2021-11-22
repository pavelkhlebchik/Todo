import React from 'react';

import TASKS from '../../assets/data';
import Item from '../Item';

import s from './list.module.css';

const List = () => (
  <div>
    <div className={s.flex}>
      {
        TASKS.map((item) => <Item
          key={item.title}
          status={item.done}
          title={item.title}
          description={item.description}
          />)
      }
      <div />
    </div>
    <button>View All</button>
    <button>Add Todo</button>
    <span>or</span>
    <button>Add random Todo :)</button>
  </div>
);

export default List;
