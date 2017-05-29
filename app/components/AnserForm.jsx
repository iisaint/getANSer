var React = require('react');

var AnserForm = React.createClass({
    onFormSumit: function (e) {
        e.preventDefault();

        var address = this.refs.address.value;

        if (address.length > 0) {
            this.refs.address.value = '';
            this.props.onSearch(address);
        }
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSumit}>
                <input type="text" ref="address"/>
                <button>Get Anser </button>
                </form>
            </div>
        );
    }
});

module.exports = AnserForm;