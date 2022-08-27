import React from 'react';
import styles from './Contacts.module.scss';

import Logo from '../../assets/confirm-icon.png';

export const Contacts = ({ activeObjectCallback, activeContactCallback, ...obj }) => {
  const [activeContact, setActiveContact] = React.useState(obj.id);
  const [activeObject, setActiveObject] = React.useState(obj);

  const onClickContact = () => {
    setActiveContact(obj.id);
    activeContactCallback(obj.id);
    activeObjectCallback(obj);
    setActiveObject(obj);
  };

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
        </div>
      </div>
    </div>
  );
};

export default Contacts;
