import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Section extends Component {
    render() {
        const { title, children } = this.props;
        return (
            <div>
            <h1> {title}</h1>
                {children}
            </div>
        )
    }
}

Section.propTypes = {
    title: PropTypes.string
}

export default Section