import React from 'react';

const button = (props) => {
    return (
        <button
            className={props.class}
            type={props.type}
            onClick={props.click} > {props.children}
            
            
        </button>
    )
};

export default button;