import React from 'react';
import styles from './Recieved.module.scss';

const Recieved = ({ ...message }) => {
  let date = new Date(message.time);

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
        <img
          alt=""
          src="https://novitains.com/wp-content/uploads/2021/07/IPP-woman-coffee-computer.png"
        />
        <p>{message.value}</p>
      </div>
      <span>{dateFormat}</span>
    </div>
  );
};

export default Recieved;
