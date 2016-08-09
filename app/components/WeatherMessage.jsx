const React = require('react');

module.exports = ({temp, location}) => {
  return (
    <div>
      <h3>Weather is : {temp} C in {location}</h3>
    </div>
  );
};
