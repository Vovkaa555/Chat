import React from 'react';
import styles from './Contacts.module.scss';

import Logo from '../../assets/confirm-icon.png';

const Contacts = ({ parentCallback, ...obj }) => {
  const [activeContact, setActiveContact] = React.useState(obj.contactID);
  const onClickContact = () => {
    setActiveContact(obj.contactID);
    parentCallback(obj.contactID);
  };

  const lastInfo = obj.values.length - 1;
  let date = new Date(obj.values[0].time);
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  const dateFormat = new Intl.DateTimeFormat('en-US', options).format(date);

  return (
    <div className={styles.root} onClick={onClickContact}>
      <div className={styles.photo}>
        <img alt="" src={obj.photo} />
        <img src={Logo} alt="confirm" />
      </div>
      <div className={styles.information}>
        <div className={styles.contact}>
          <span>
            {obj.name} {obj.surname}
          </span>
          <span>{dateFormat}</span>
        </div>
        <p>{obj.values[lastInfo].value}</p>
      </div>
    </div>
  );
};

export default Contacts;
