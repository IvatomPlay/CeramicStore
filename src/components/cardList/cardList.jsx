import './cardList.css';
import Card from '../card/card.jsx';

function CardList({onProductLike, data ,currentUser }) {
    return (
        <div className='cards'>
            {data.map((item) => (<Card 
            key={item._id}
            {...item}
            currentUser={currentUser}
            onProductLike={onProductLike}  
            />))}
        </div>
    )
}

export default CardList;