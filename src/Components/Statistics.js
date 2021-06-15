import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Statistics extends Component {
    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props;
        return (
            <div>
                <div>
                    <span>Good</span>
                    <span>{good}</span>
                </div>
                <div>
                    <span>Neutral</span>
                    <span>{neutral}</span>
                </div>
                <div>
                    <span>Bad</span>
                    <span>{bad}</span>
                </div>
                <div>
                    <span>Total</span>
                    <span>{total}</span>
                </div>
                <div>
                    <span>Positive feedback</span>
                    <span>{positivePercentage} %</span>
                </div>
            </div >
        )
    }
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number
}
export default Statistics;
