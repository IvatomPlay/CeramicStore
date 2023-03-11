import './search.css';
import { ReactComponent as SearchIcon } from './ic-search.svg';
import {ReactComponent as CloseIcon} from './ic-close-input.svg';

function Search({ changeInput }) {
    return (
        <form className="search" action="#">
            <input type="text" className="search__input" placeholder="Search" onInput={changeInput}/>
            <button className="search__btn">
                <SearchIcon />
                {false && <CloseIcon/>}
            </button>
        </form>
    )
}

export default Search;
