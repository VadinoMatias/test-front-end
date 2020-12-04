import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";

//Routing
import {
    ERROR_URL
  } from '../configs/routing';

import Page from "../components/Page/Page";

import './DetailsPage.sass';

import SearchService from '../services/SearchService';

import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

const DetailsPage = ({match}) => {
    const [details, setDetails] = useState(null);
    let history = useHistory();
    useEffect(() => {
        SearchService.findItem(match.params.id).then((data) => {
            if(data.error) {
                history.push(`${ERROR_URL}`);
            }
            setDetails(data.item);
        });
    }, [])

    return( 
        <Page>
            <section className='breadcrumb-section'>
                <Breadcrumb />
            </section>
            {
            details && 
            <section className='detail-section'>
                <div className='item-result'>
                    <table className='item-container'>
                        <tbody>
                            <tr>
                                <td className='image-container'>
                                    <img src={details.picture} />
                                </td>
                                <td className='detail-container'>
                                    <div className='item-state'>
                                        {details.condition} - {details.sold_quantity} vendidos
                                    </div>
                                    <div className='item-title'>
                                        {details.title}
                                    </div>
                                    <div className='item-price'>
                                        $ {details.price.amount}
                                    </div>
                                    <button type="button" className="btn btn-primary">Comprar</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='item-description'>
                        <div className='description-title'>
                            Descripción del producto
                        </div>
                        <div className='description-info'>
                            {details.description}
                        </div>
                    </div>
                </div>
            </section>
            }
        </Page>
    )
}


export default DetailsPage;