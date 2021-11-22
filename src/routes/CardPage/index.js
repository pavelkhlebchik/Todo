import React from 'react';
import { useSelector } from 'react-redux';
import Item from '../../components/Item';

const CardPage = () => {
  const task = useSelector((state) => state.selected);
  return <div>
      {
        task.map((item) => <Item
          key={item.title}
          title={item.title}
          description={item.description}
          status={item.status}
          editMode={true}
        />)
      }
    </div>;
};
export default CardPage;
