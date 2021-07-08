import React from 'react';
import Item from '../Menu/Item/Item';

const menu = (props) => {
    return (
        <>
            <Item class="nav-link" clic={props.home}> Home </Item>
            <Item class="nav-link" clic={props.instructors}> Instructors </Item>
            <Item class="nav-link" clic={props.events}> Events </Item>
        </>
    );
};

export default menu;
