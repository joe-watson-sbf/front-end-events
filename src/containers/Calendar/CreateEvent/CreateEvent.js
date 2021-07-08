import React from 'react';

const createEvent = (props) => {

    return (
        <>
            <div id="newEventModal">
                <h2>New Event</h2>

                <input 
                className={props.error ? 'error' : ''}
                value={props.title} 
                onChange={e => props.setTitle(e.target.value)} 
                id="eventTitleInput" 
                placeholder="Event Title" 
                />

                <button 
                onClick={() => {
                    if (props.title) {
                    props.setError(false);
                    props.onSave(props.title);
                    } else {
                    props.setError(true);
                    }
                }} 
                id="saveButton">Save</button>


                <button 
                onClick={props.onClose}
                id="cancelButton">Cancel</button>
            </div>

            <div id="modalBackDrop"></div>
        </>
    );
}

export default createEvent;