import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

import Layout from '../../components/Layout';

import { add } from '../../store/tasks';
import s from './style.module.css';

const NewCardPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleClickSubmit = (e) => {
    e.preventDefault();

    const card = {
      title,
      description,
      status,
    };

    dispatch(add(card));

    navigate('/');
  };

  const handleChange = (e, setValue) => {
    setValue(e.target.value);
  };

  return <>
    <Layout>
      <form className={s.new_card_form}>
        <button
          type="button"
          onClick={() => setStatus((prevstate) => !prevstate)}
        >
          Finish
        </button>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => handleChange(e, setTitle)}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => handleChange(e, setDescription)}
        />
        <button
          type="submit"
          onClick={handleClickSubmit}
        >Update</button>
        <button type="button">Delete</button>
      </form>
    </Layout>
  </>;
};

export default NewCardPage;
