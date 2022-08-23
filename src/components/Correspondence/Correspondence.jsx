import React from 'react';
import styles from './Correspondence.module.scss';

import Logo from '../../assets/confirm-icon.png';
import Sended from './Sended';
import Recieved from './Recieved';

function Correspondence({ ...objId }) {
  const messages = objId.values.map((message, i) =>
    message.type === 'recieved' ? (
      <Recieved key={i} {...message} />
    ) : (
      <Sended key={i} {...message} />
    ),
  );

  return (
    <div className={styles.root}>
      <div className={styles.info}>
        <div className={styles.photo}>
          <img alt="" src={objId.photo} />
          <img src={Logo} alt="confirm" />
        </div>
        <span>{objId.name}</span>
      </div>
      <div className={styles.correspondence}>{messages}</div>
    </div>
  );
}

export default Correspondence;
