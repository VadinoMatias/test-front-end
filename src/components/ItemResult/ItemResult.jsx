import React from "react";
import {useHistory} from "react-router-dom";

import './ItemResult.sass';

//Routing
import {
    DETAIL_ITEM_URL
  } from '../../configs/routing';

import Free_Shipping_Logo from '../../Assets/ic_shipping.png';

const ItemResult = ({item}) => {
    let history = useHistory();

    function selectItem(id) {
        history.push(`${DETAIL_ITEM_URL}/${id}`);
    }

    return(
        <div className='row item-result' onClick={() => {selectItem(item.id)}}>
            <table className='item-container'>
                <tbody>
                    <tr>
                        <td className='image-container'>
                            <img src={item.picture} />
                        </td>
                        <td className='detail-container'>
                            
                            <div className='item-price'>
                                $ {item.price.amount} { item.free_shipping && <img src={Free_Shipping_Logo} /> } 
                            </div>
                            <div className='item-title'>
                                {item.title}
                            </div>
                        </td>
                        <td className='extra-container'>
                            <div className='item-from'>
                                Locacion
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


export default ItemResult;