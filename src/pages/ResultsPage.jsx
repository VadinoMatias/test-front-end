import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Page from "../components/Page/Page";

import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import ItemResult from "../components/ItemResult/ItemResult";

import SearchService from '../services/SearchService';

const ResultsPage = () => {
    const [searchResults, setSearchResults] = useState({items: []});
    
    var query = new URLSearchParams(useLocation().search);

    useEffect(() => {
        
        var searchedValue = query.get('query');
        SearchService.findSearch(searchedValue).then((data) => {
                setSearchResults(data);
        });
    }, []);

    return(
        <Page>
            <section className='breadcrumb-section'>
                <Breadcrumb />
            </section>
            <section className='results-section'>
                {
                searchResults.items.map((data) => {
                    return <ItemResult key={data.id} item={data}></ItemResult>
                    })
                }
            </section>
        </Page>
    )
}


export default ResultsPage;