import React from 'react';
import axios from 'axios';

import styles from './Home.module.scss';

import Logo from '../assets/confirm-icon.png';
import Search from '../components/Search/Search';
import SendMessage from '../components/SendMessage/SendMessage';
import Contacts from '../components/Contacts/Contacts';
import Correspondence from '../components/Correspondence/Correspondence';

const Home = ({ searchValue }) => {
  const [items, setItems] = React.useState([]);
  const [messages, setMessages] = React.useState([]);
  const [activeContact, setActiveContact] = React.useState(0);
  const [activeObject, setActiveObject] = React.useState(0);
  const [isSended, setIsSended] = React.useState(false);

  const activeObjectCallback = React.useCallback((activeObject) => {
    setActiveObject(activeObject);
  }, []);

  const activeContactCallback = React.useCallback((activeContact) => {
    setActiveContact(activeContact);
  }, []);

  //rerender after POST/GET requests
  const isSendedCallback = React.useCallback((isSended) => {
    setIsSended(isSended);
  }, []);

  const contactId = activeContact > 0 ? `${activeContact}/messages` : ``;
  const search = searchValue ? `&search=${searchValue}` : ``;

  //scrolls chat-window to the last message
  React.useEffect(() => {
    const chatScroll = document.getElementById('Correspondence');
    const windowScroll = () => (chatScroll ? chatScroll.scrollBy(0, 10000) : window.scrollTo(0, 0));
    return () => {
      setTimeout(windowScroll(), 100);
    };
  }, [messages]);

  //get main data from MockAPI, search with MockAPI (min 3 symbols in the search field)
  React.useEffect(() => {
    axios
      .get(`https://63038e9a0de3cd918b38f666.mockapi.io/chat?${search}`)
      .then((response) => setItems(response.data));
  }, [searchValue]);

  //get messages-list from MockAPI with active user.
  React.useEffect(() => {
    axios
      .get(`https://63038e9a0de3cd918b38f666.mockapi.io/chat/${contactId}`)
      .then((response) => setMessages(response.data));
  }, [contactId, isSended]);

  //shows contact-list
  const contacts = items.map((obj) => (
    <Contacts
      key={obj.id}
      activeContactCallback={activeContactCallback}
      activeObjectCallback={activeObjectCallback}
      {...obj}
    />
  ));

  return (
    <div className={styles.root}>
      <div className={styles.main_menu}>
        <div className={styles.account_search}>
          <div className={styles.login}>
            <div className={styles.avatar}>
              <img
                alt=""
                src="	https://flyclipart.com/thumb2/account-avatar-login-man-person-user-icon-935699.png"
              />
              <img src={Logo} alt="confirm" />
            </div>
          </div>
          <Search />
        </div>
        <h4>Chats</h4>
        <div className={styles.contact_list}>{contacts}</div>
      </div>
      {activeObject ? (
        <div className={styles.chat}>
          <Correspondence {...messages} photo={activeObject.photo} name={activeObject.name} />
          <div className={styles.send_block}>
            <SendMessage isSendedCallback={isSendedCallback} {...activeObject} />
          </div>
        </div>
      ) : (
        <h2>Choose contact and start messaging</h2>
      )}
    </div>
  );
};

export default Home;
