import React from 'react';

import styles from './SendMessage.module.scss';
import { MdOutlineSend } from 'react-icons/md';

const SendMessage = () => {
  const date = new Date();
  let textInput = React.createRef();

  const state = {
    type: 'sended',
    value: '{textInput.current.value}',
    time: '',
  };

  let onOnclickHandler = (e) => {
    state.value = textInput.current.value;
    state.time = date;
    console.log(state);
    textInput.current.value = '';
  };

  return (
    <div className={styles.root}>
      <input placeholder="Type your message" ref={textInput} type="text" />
      <MdOutlineSend onClick={onOnclickHandler} className={styles.logo} />
    </div>
  );
};

export default SendMessage;
