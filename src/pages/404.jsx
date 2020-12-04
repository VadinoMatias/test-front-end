import React from "react";
import Page from "../components/Page/Page";

import './404.sass';

const NotFoundedPage = () => {
    return(
        <Page>
            <div className='item-result'>
                <div className='not-founded'>
                    <h3>No se ha encontrado la página que buscaba</h3>
                </div>
            </div>
        </Page>
    )
}


export default NotFoundedPage;