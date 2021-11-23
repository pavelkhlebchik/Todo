import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { editTask, deleteTask } from '../../store/tasks';
import Card from '../../components/Card';
import Layout from '../../components/Layout';

const CardPage = () => {
  const task = useSelector((state) => state.selected);

  const [title, setTitle] = useState(task[0].title);
  const [description, setDescription] = useState(task[0].description);
  const [status, setStatus] = useState(task[0].status);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleClickUpdate = (e) => {
    e.preventDefault();
    const card = {
      title,
      description,
      status,
      id: task[0].id,
    };

    dispatch(editTask(card));

    navigate('/');
  };

  const handleChange = (e, setValue) => {
    setValue(e.target.value);
  };

  const handleChangeStatus = () => setStatus((prevstate) => !prevstate);

  const handleClickDelete = () => {
    dispatch(deleteTask(task[0]));

    navigate('/');
  };

  return <>
    <Layout>
      <Card
        handleClickSubmit={handleClickUpdate}
        handleClickDelete={handleClickDelete}
        handleChangeStatus={handleChangeStatus}
        handleChangeTitle={(e) => handleChange(e, setTitle)}
        handleChangeDescription={(e) => handleChange(e, setDescription)}
        status={status}
        title={title}
        description={description}
      />
    </Layout>
  </>;
};
export default CardPage;
