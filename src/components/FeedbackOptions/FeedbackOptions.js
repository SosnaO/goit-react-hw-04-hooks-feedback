import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Feedback/Feedback.module.css';
const FeedbackOptions = ({ options, onLeaveFeedback})=>(
       <>
        {options.map((button) => (
            <button 
            key={button}
            className={styles.button}
            type="button"
            name={button}
            onClick={onLeaveFeedback}>
            {button}
            </button>
    ))}
    </>
 );

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
  };
export default FeedbackOptions;











// Old Code
// const FeedbackOptions = ({ options, onLeaveFeedback})=>{
//     return(
//         <>
//             {options.map(button =>{
//         return (
//             <div className={styles.all_button} key={button}>
//                   <button className={styles.button} type="button" onClick={onLeaveFeedback()}>{button}</button>
//             </div>          
//         )
//         }
//     )
// }
//         </>
// );
// };