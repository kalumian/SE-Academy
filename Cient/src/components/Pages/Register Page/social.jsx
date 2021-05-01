import React from 'react'
import {Social_Link, Social_Link_span,Social_under_li_Rp} from '../../styled/PagesStyle'
import '../../styled/styleLogin.css'


 const Social = ({title, icon, Mode}) => {
    return(
        <Social_under_li_Rp>
        <Social_Link href="#" Mode={Mode}>
            <Social_Link_span Mode={Mode}>{title}<i className={icon+ " iconLRP"} ></i></Social_Link_span>
        </Social_Link>
    </Social_under_li_Rp>
    )
} 
export default Social;