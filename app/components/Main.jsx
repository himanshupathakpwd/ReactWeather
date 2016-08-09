const React = require('react');
const Nav = require('Nav');

module.exports = (props) => {
  return (
    <div>
      <Nav/>
      <h2>
        Main Component
      </h2>
      {props.children}
    </div>
  );
};
