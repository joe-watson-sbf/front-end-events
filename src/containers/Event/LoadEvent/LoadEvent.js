import React from 'react';

const loadEvent = (props) => {

    return (
        <div className= "accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
                
                <h2 className="accordion-headerOne"
                    id="headingOne" style={{
                        borderStyle: 'solid',
                        borderColor: '#dee1ec',
                        borderRadius: 14 + 'px'
                    }}>
                    <button className="accordion-button collapsed" type="button"
                        data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                        aria-expanded="false" aria-controls="flush-collapseOne">
                        {props.type}
                    </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">

                    <div className="accordion-body" style={{
                        borderStyle: 'solid',
                        borderColor: '#364f6b',
                        borderRadius: 14 + 'px',
                        marginBottom: 14 +'px'
                    }}>
                        <p> <strong>Start: </strong> { props.start.split('T')[0] }</p>
                        <p> <strong>End: </strong> {props.end.split('T')[0]}</p>
                        <code> <p> <strong>Duration: </strong> { props.duration }</p></code>
                        <p> <strong>Description: </strong>{ props.description }</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default loadEvent;