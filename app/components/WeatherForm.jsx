const React = require('react');

module.exports = React.createClass({
  handleSubmit: function(event) {
    event.preventDefault();
    const location = this.refs.location.value;
    if (location.length) {
      this.refs.location.value = '';
    }
    this.props.onSearch(location);
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="location" name="location" />
          <button>Get Weather</button>
        </form>
      </div>
    );
  }
});
