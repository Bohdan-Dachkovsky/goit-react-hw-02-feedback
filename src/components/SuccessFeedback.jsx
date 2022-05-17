import React from 'react';
import Percentage from './HOC/Percentage.jsx';
const SuccessFeedback = ({ SuccessResult }) => {
  return (
    <>
      <p>Feedback: &nbsp; {SuccessResult} %</p>
    </>
  );
};
export default Percentage(SuccessFeedback);
