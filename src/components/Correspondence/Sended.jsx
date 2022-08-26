import React from 'react';
import styles from './Sended.module.scss';

function Sended({ ...messages }) {
  console.log(messages.type);
  let date = new Date(messages.time);
  const options = {
    month: 'numeric',
    day: 'numeric',
    year: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
  };
  const dateFormat = new Intl.DateTimeFormat('en-US', options).format(date);
  return (
    <div className={styles.root}>
      <div className={styles.sended}>
        <p>{messages.value}</p>
        <span>{dateFormat}</span>
      </div>
    </div>
  );
}

export default Sended;

//
