import React from 'react';

const item = (props) => (
    
    <li className="nav-item">
        <p className={props.class} 
            onClick={props.clic}
            style={{cursor:'pointer'}}
        >{props.children} </p>
     </li>
);

export default item;