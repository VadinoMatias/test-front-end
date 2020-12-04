import React from "react";

import './Page.sass';
import SearchBar from '../Searchbar/SearchBar';


const Page = ({children}) => {
    return(
        <>
            <header>
                <div className='row'>
                    <div className='col-1'></div>
                    <div className='col-11'>
                        <SearchBar />
                    </div>
                </div>
            </header>
            <section className='row'>
                <div className='col-1'></div>
                <div className='col-10'>
                    {children}
                </div>
                <div className='col-1'></div>
            </section>
        </>
    )
}


export default Page;