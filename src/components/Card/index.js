import React, { useState } from 'react';

import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import cn from 'classnames';

import { add } from '../../store/tasks';
import s from './card.module.css';

const Card = () => {
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

  return (
    <>
      <form className={s.card_form}>
        <button
        className={cn(s.card_status, {
          [s.card_status_complete]: status === true,
          [s.card_status_not_complete]: status === false,
        })}
          type="button"
          onClick={() => setStatus((prevstate) => !prevstate)}
        ><span className={s.card_checkmark}></span></button>
        <div className={s.card_title_wrapper}>
        <label className={s.card_title_label} htmlFor="title">Title</label>
        <input
        className={s.card_title_input}
          type="text"
          id="title"
          value={title}
          onChange={(e) => handleChange(e, setTitle)}
        />
        </div>
        <div className={s.card_description_wrapper}>
        <label className={s.card_description_label} htmlFor="description">Description</label>
        <textarea
        className={s.card_description_input}
          type="text"
          id="description"
          value={description}
          onChange={(e) => handleChange(e, setDescription)}
        />
        </div>
        <button
        className={s.card_update_btn}
          type="submit"
          onClick={handleClickSubmit}
        >Update</button>
        <button
        className={s.card_delete_btn}
        type="button">Delete</button>
      </form>
    </>
  );
};

export default Card;
