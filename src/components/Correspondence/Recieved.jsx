import React from 'react';
import styles from './Recieved.module.scss';

const Recieved = ({ photo, ...messages }) => {
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
      <div className={styles.recieved}>
        <img alt="" src={photo} />
        <p>{messages.value}</p>
      </div>
      <span>{dateFormat}</span>
    </div>
  );
};

export default Recieved;
