import React from 'react';
import axios from 'axios';

import styles from './SendMessage.module.scss';
import { MdOutlineSend } from 'react-icons/md';

const SendMessage = ({ isSendedCallback, ...activeObject }) => {
  const date = new Date();
  const [isSended, setIsSended] = React.useState();
  const [value, setValue] = React.useState();
  const [norrisResponse, setNorrisResponse] = React.useState();
  const [watcher, setWatcher] = React.useState();
  const [inputValue, setInputValue] = React.useState();
  let textInput = React.createRef();
  let activeObjectId = activeObject.id;

  React.useEffect(() => {
    return () => {
      isSendedCallback(isSended);
    };
  }, [isSended, value, norrisResponse, watcher]);

  const postResponse = async () => {
    const recieved = {
      type: 'recieved',
      value: `${norrisResponse.value}`,
      time: `${date}`,
      chatId: `${activeObjectId}`,
      id: '',
    };
    await axios
      .post(`https://63038e9a0de3cd918b38f666.mockapi.io/chat/${activeObjectId}/messages`, recieved)
      .then((response) => setValue(response.data), setIsSended(value));
  };

  React.useEffect(() => {
    axios.get(`https://api.chucknorris.io/jokes/random`).then((response) => {
      setNorrisResponse(response.data);
      setIsSended(norrisResponse);
    });
  }, [watcher]);

  let onOnclickHandler = () => {
    const state = {
      type: 'sended',
      value: `${textInput.current.value}`,
      time: `${date}`,
      chatId: `${activeObjectId}`,
      id: '',
    };
    axios
      .post(`https://63038e9a0de3cd918b38f666.mockapi.io/chat/${activeObjectId}/messages`, state)
      .then(function (response) {
        setIsSended(state);
        setWatcher(state);
      })
      .catch(function (error) {
        console.log(error);
      });
    setTimeout(postResponse, 10000);
    textInput.current.value = '';
    setInputValue('');
  };
  return (
    <div className={styles.root}>
      <input
        placeholder="Type your message"
        onChange={(event) => setInputValue(event.target.value)}
        ref={textInput}
        type="text"
      />
      {inputValue ? (
        <MdOutlineSend onClick={onOnclickHandler} className={styles.logo} />
      ) : (
        <MdOutlineSend className={styles.logo_disabled} />
      )}
    </div>
  );
};

export default SendMessage;
