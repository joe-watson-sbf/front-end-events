import React from 'react';
import Button from '../../Button/Button';

const search = (props) => {
    return (
        <form className="d-flex" onSubmit={(e)=>e.preventDefault()}>
            <input className="form-control me-sm-2" type="text"
                placeholder={props.placeholder}
                onChange={props.change}
                />
            <Button
                class="btn btn-secondary my-2 my-sm-0"
                type='submit'
            >Search</Button>
        </form>
    )
};

export default search;