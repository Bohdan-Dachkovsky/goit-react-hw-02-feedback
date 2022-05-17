import React from 'react';

const Percentage = Success => {
  return class extends React.Component {
    render() {
      return <Success {...this.props} />;
    }
  };
};
export default Percentage;
