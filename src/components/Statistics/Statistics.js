import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Feedback/Feedback.module.css'

const Statistics = ({ good, neutral, bad, total, positivePercentage}) => {
    return(
        <>
        <div className={styles.counter}>
        <span className={styles.label}>Good: {good} </span>
        <span className={styles.label}>Neutral: {neutral} </span>
        <span className={styles.label}>Bad: {bad} </span>
        <span className={styles.label}>Total: {total} </span>
        <span className={styles.label}>Positive feedback: {positivePercentage} %</span>
  
        </div>
        </>
);
};
Statistics.defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };
Statistics.propTypes={
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number
 }

export default Statistics;