import React from 'react';
import styles from './Correspondence.module.scss';

import Logo from '../../assets/confirm-icon.png';
import Message from './Message';

export const Correspondence = ({ name, photo, ...messages }) => {
  const messageId = Object.keys(messages).map((key) => (
    <Message key={messages[key].id} {...messages[key]} photo={photo} />
  ));

  return (
    <div className={styles.root}>
      <div className={styles.info}>
        <div className={styles.photo}>
          <img alt="" src={photo} />
          <img src={Logo} alt="confirm" />
        </div>
        <span>{name}</span>
      </div>
      <div className={styles.correspondence} id="Correspondence">
        {messageId}
      </div>
    </div>
  );
};

export default Correspondence;
