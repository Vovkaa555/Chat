import React from 'react';
import styles from './Message.module.scss';

const Message = ({ photo, ...messages }) => {
  let date = new Date(messages.time);
  let dateFormat = date.toLocaleString('en-US');

  return (
    <div>
      {messages.type === 'recieved' ? (
        <div className={styles.root}>
          <div className={styles.recieved}>
            <img alt="" src={photo} />
            <p>{messages.value}</p>
          </div>
          <span>{dateFormat}</span>
        </div>
      ) : (
        <div className={styles.root}>
          <div className={styles.sended}>
            <p>{messages.value}</p>
            <span>{dateFormat}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;
