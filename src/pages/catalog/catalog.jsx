import React from 'react';
import CardList from '../../components/cardList/cardList.jsx';

const CatalogPage = ({ cards, currentUser, handleProductLike }) => {
  return (
    <>
      <div className='content__cards'>
        <CardList
          data={cards}
          currentUser={currentUser}
          onProductLike={handleProductLike}
        />
      </div>
    </>
  );
};

export default CatalogPage;