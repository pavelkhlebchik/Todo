/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

import { addTask } from '../../store/tasks';
import Card from '../../components/Card';

import Layout from '../../components/Layout';

const NewCardPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleClickAdd = (e) => {
    e.preventDefault();

    const card = {
      title,
      description,
      status,
    };

    dispatch(addTask(card));

    navigate('/');
  };

  const handleChange = (e, setValue) => {
    setValue(e.target.value);
  };

  const handleChangeStatus = () => setStatus((prevstate) => !prevstate);
  return <>
    <Layout>
      <Card
        handleClickSubmit={handleClickAdd}
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
export default NewCardPage;
