import React, { useState } from "react";
import {useHistory} from "react-router-dom";

import './SearchBar.sass';

//Routing
import {DETAIL_ITEM_URL} from '../../configs/routing';

//Assets
import Logo_ML from '../../Assets/Logo_ML.png';
import SearchIcon from '../../Assets/ic_Search.png';

const SearchBar = () => {
    let history = useHistory();
    const [searchedValue, setSearchedValue] = useState('');

    function handleSearchSubmit() {
        if(searchedValue) {
            var redirectPath = DETAIL_ITEM_URL+'?query='+searchedValue;
            var baseRedirectPath = redirectPath.substring(0, redirectPath.indexOf('?'));
            if (history.location.pathname === baseRedirectPath) {
                history.push('/');
                setTimeout(() => history.push(redirectPath), 10);
            } else {
            history.push(redirectPath);
            }
        }
      }

    function handleChange(e) {
        setSearchedValue(e.target.value);
     }

    function submitSearchForm(event) {
        event.preventDefault();
        return handleSearchSubmit(searchedValue);
    }

    return(
        <div id="search-bar">
            <nav>
                <div className='row'>
                    <div className='col-1'>
                        <img src={Logo_ML} />
                    </div>
                    <div className='col-10'>
                        <form className="nav-search" role="search" onSubmit={submitSearchForm}>
                            <input type='text' placeholder='Nunca dejes de buscar' onChange={handleChange}></input>
                            <button>
                                <img src={SearchIcon} />
                            </button>
                        </form>
                    </div>
                    <div className='col-1'>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default SearchBar;