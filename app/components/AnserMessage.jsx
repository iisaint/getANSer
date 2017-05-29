var React = require('react');

var AnserMessage = React.createClass({
    render: function () {
        var {anser} = this.props;

        return (
            <div>
            <h3>{anser}</h3>
            </div>
        );
    }
});

module.exports = AnserMessage;