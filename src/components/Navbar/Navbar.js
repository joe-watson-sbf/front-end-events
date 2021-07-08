import React from 'react';
import Search from '../Navbar/Search/Search';
import Menu from "../Navbar/Menu/Menu";

const navbar = (props) => {
    return (

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <p className="navbar-brand">Event</p>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarColor03" aria-controls="navbarColor03"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav me-auto">
              <Menu
                home={props.homeClic}
                instructors={props.instructorClic}
                events={props.eventClic}
              />
            </ul>
            <Search
              btnClick={props.click}
              change={props.change}
              placeholder={props.inputText}
              />
          </div>
        </div>
      </nav>
    );
};

export default navbar;