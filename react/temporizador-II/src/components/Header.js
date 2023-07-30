import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => (
    <nav className="header navbar navbar-dark bg-dark">
        <div className="container">
            <div className="row m-auto">
                <i className="fa fa-hourglass-half fa-3x text-white my-auto"></i>
                <div className="h2 ml-3 my-auto text-light" href="/">{props.title}</div>
            </div>
        </div>
    </nav>
);

Header.defaultProps = {
    title: 'Title'
};

Header.propTypes = {
    title: PropTypes.string
};

export default Header;