import React, { Component} from 'react';
import axios from 'axios';
import LoadEvent from './LoadEvent/LoadEvent';
import Navbar from '../../components/Navbar/Navbar';
import Calendar from '../Calendar/Calendar';


class event extends Component{

    state = {
        events: null ,
        loading: false,
        showEvents: false,
        showInstructors: false,
        showHome: true,
        eventFound:null
    }

    componentDidMount = () => {
        this.setState({ loading: true });
        axios.get("http://localhost:8080/api/v1/event")
            .then(response => {
                const events = Object.values(response.data)
                this.setState({
                    events,
                    loading:false
                })
            })
            .catch(error => {
                console.log(error);
                this.setState({ loading: false });
            })
    }

    handleEvents = () => {
        this.setState({
            showEvents: true,
            showInstructors: false,
            showHome: false,
            eventFound: null
        });
    }

    handleInstructors = () => {
        this.setState({
            showEvents: false,
            showInstructors: true,
            showHome: false,
            eventFound: null
        });
    }

    handleHome = () => {
        this.setState({
            showEvents: false,
            showInstructors: false,
            showHome: true,
            eventFound: null
        });
    }

    handleSearchById = (e) => {
        let num = +e.target.value;
        if (num > 0) {
            const eventfound = this.state.events.filter(event => event.id === num);
            if (eventfound.length > 0) {
                this.setState({ showEvents: false, eventFound: eventfound[0]});
            } else {
                this.setState({ showEvents: true, eventFound: null});
            }
        }
        e.preventDefault();
    }

    render() {
        return (
            <>
                <Navbar
                    eventClic={this.handleEvents}
                    instructorClic={this.handleInstructors}
                    homeClic={this.handleHome}
                    change={(e) => {
                        if (this.state.showEvents || this.state.eventFound) {
                            this.handleSearchById(e);
                        }
                        
                    }}
                    
                    inputText={(this.state.showEvents || this.state.eventFound) ?
                        "Search event by id..." : "Search instructor by id..."}
                />

                {!this.state.loading && this.state.showEvents &&
                    <div className="d-flex text-center align-self-center flex-column m-3" >
                        <h1 className="title">All Event</h1>
                    {
                        this.state.events &&
                        this.state.events.map((event, index) => {
                            return (
                                <div key={event.id} 
                                    style={{
                                        marginLeft: 30 + '%',
                                        marginRight: 30 + '%'
                                    }}>
                                    <LoadEvent
                                        index={index}
                                        {...event} />
                                </div>
                            )
                        })
                    }
                    </div>
                }


                {
                    !this.state.showEvents && this.state.eventFound &&
                    <div className="d-flex text-center align-self-center flex-column m-3" >
                        <div style={{
                                        marginLeft: 30 + '%',
                                        marginRight: 30 + '%'
                                    }}>
                            <LoadEvent {...this.state.eventFound} />
                        </div>
                    </div>
                }

                {
                    !this.state.loading && this.state.showHome &&
                    <div className="d-flex text-center align-self-center flex-column m-3">
                        <Calendar />
                    </div>
                }
            </>
            );
    }
}

export default event;