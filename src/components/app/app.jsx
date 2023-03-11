import React, { useState, useEffect } from 'react';
import { Routers, Route} from 'react' 
import './app.css';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import CardList from '../cardList/cardList.jsx';
import data from '../../assets/data.json';
import SearchInfo from '../searchInfo/searchInfo';
import api from '../utils/api';
import CatalogPage from '../../pages/catalog/catalog.jsx';

const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debounceValue;
};

function App() {
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  const debounceSearchQuery = useDebounce(searchQuery, 2000);

  useEffect(() => {
    handleRequest();
    console.log('INPUT', searchQuery);
  }, [debounceSearchQuery]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleRequest();
  };

  const handleInputChange = (inputValue) => {
    setSearchQuery(inputValue);
  };

  const handleInput = (e) => {
    setSearchQuery(e.target.value); 
    
  } 

  // Для поля поиска товара по названию
  useEffect(() => {
    const filteredCards = data.filter((item)=>
    item.name.toUpperCase().includes(searchQuery.toUpperCase())
    );
    setCards([...filteredCards]);
  }, [searchQuery]);
  
  useEffect(() => {
    api.getUserInfo().then((userData)=>setCurrentUser(userData))
  }, []);
  
  useEffect(() => {
    if (currentUser) {
      api.search('').then((data) => {
        const myCards = data.filter((card) => card.author._id === currentUser._id);

        setCards(myCards);
      })
    }
  }, [currentUser]);

  return (
    <>
      <Header changeInput={handleInput} />
      <main className='content__container'>
        <SearchInfo searchText={searchQuery} searchCount={cards.length}/>
        <div className='content__cards'>
          <CardList data={cards}/>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
