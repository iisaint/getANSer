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
                <img src={require('../assets/img/index.png')}/>
                <form onSubmit={this.onFormSumit}>
                    
                    <input type="text" ref="address" placeholder="請輸入地址 ex 新竹市光復路一段"/>
                    <div className="row">
                    <div className="columns medium-4 large-4 small-centered">
                    <button className="button expanded hollow">Get Anser</button>
                    </div>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = AnserForm;