import React from 'react';
import './Home.css';
import Logo from '../assets/confirm-icon.png';
import Search from '../components/Search/Search';
import SendMessage from '../components/SendMessage/SendMessage';
import Contacts from '../components/Contacts/Contacts';
import Correspondence from '../components/Correspondence/Correspondence';

const Home = ({ searchValue }) => {
  const [items, setItems] = React.useState([]);
  const [itemsId, setItemsId] = React.useState([]);
  const [activeContact, setActiveContact] = React.useState(0);

  const callback = React.useCallback((activeContact) => {
    setActiveContact(activeContact);
  }, []);
  const contactId = activeContact > 0 ? `contactID=${activeContact}` : ``;
  const search = searchValue ? `&search=${searchValue}` : ``;

  const getData = async () => {
    const response = await fetch(`https://63038e9a0de3cd918b38f666.mockapi.io/Chat?${search}`);

    if (!response.ok) {
      throw new Error('Data coud not be fetched!');
    } else {
      return response.json();
    }
  };
  React.useEffect(() => {
    getData()
      .then((res) => {
        setItems(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [searchValue]);

  const getId = async () => {
    const responseId = await fetch(`https://63038e9a0de3cd918b38f666.mockapi.io/Chat?${contactId}`);

    if (!responseId.ok) {
      throw new Error('Data coud not be fetched!');
    } else {
      return responseId.json();
    }
  };
  React.useEffect(() => {
    getId()
      .then((res) => {
        setItemsId(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [contactId]);

  const contacts = items.map((obj) => (
    <Contacts key={obj.contactID} parentCallback={callback} {...obj} />
  ));

  const correspondence = itemsId.map((objId) => (
    <Correspondence key={objId.contactID} {...objId} />
  ));

  return (
    <div className="content">
      <div className="main-menu">
        <div className="account-search">
          <div className="avatar">
            <img
              alt=""
              src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ5924I__M_yoBuyDlqQMxh-FwCSiAul_4gA&usqp=CAU"
            />
            <img src={Logo} alt="confirm" />
          </div>

          <Search />
        </div>
        <h4>Chats</h4>
        <div className="contact-list">{contacts}</div>
      </div>
      {itemsId.length === 1 ? (
        <div className="chat">
          {correspondence}
          <div className="send-block">
            <SendMessage />
          </div>
        </div>
      ) : (
        <h2>Choose contact and start messeging</h2>
      )}
    </div>
  );
};

export default Home;
