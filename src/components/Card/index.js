import React from 'react';

import cn from 'classnames';

import s from './card.module.css';

const Card = ({
  handleClickSubmit,
  handleClickDelete,
  handleChangeStatus,
  handleChangeTitle,
  handleChangeDescription,
  title,
  description,
  status,
}) => (
  <>
    <form onSubmit={handleClickSubmit} className={s.card_form}>
      <button
        className={cn(s.card_status, {
          [s.card_status_complete]: status === true,
          [s.card_status_not_complete]: status === false,
        })}
        type="button"
        onClick={handleChangeStatus}
      >
        <span className={s.card_checkmark}></span>
      </button>
      <div className={s.card_title_wrapper}>
        <label className={s.card_title_label} htmlFor="title">Title</label>
        <input
          className={s.card_title_input}
          type="text"
          id="title"
          value={title}
          onChange={handleChangeTitle}
        />
      </div>
      <div className={s.card_description_wrapper}>
        <label className={s.card_description_label} htmlFor="description">Description</label>
        <textarea
          className={s.card_description_input}
          type="text"
          id="description"
          value={description}
          onChange={handleChangeDescription}
        />
      </div>
      <button
        className={s.card_update_btn}
        type="submit"
      >Update</button>
      <button
        className={s.card_delete_btn}
        type="button"
        onClick={handleClickDelete}>Delete</button>
    </form>
  </>
);

export default Card;
