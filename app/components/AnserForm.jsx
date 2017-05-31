var React = require('react');

var AnserForm = React.createClass({
    getInitialState: function () {
        return {
            isImgShow: true
        }
    },
    onFormSumit: function (e) {
        e.preventDefault();

        this.setState({isImgShow: false});

        var address = this.refs.address.value;

        if (address.length > 0) {
            // this.refs.address.value = '';
            this.props.onSearch(address);
        }
    },
    render: function () {
        var {isImgShow} = this.state;

        function renderImg () {
            if (isImgShow) {
                return (
                    <div className="columns medium-10 large-6 small-centered">
                <img src={require('../assets/img/index.png')}/>
                </div>
                )
            } else {
                return <div className="columns medium-12 large-12 small-centered">&nbsp;</div>
            }
        }

        return (
            <div className="row">
                {renderImg()}
                <div className="columns medium-10 large-6 small-centered">
                <form onSubmit={this.onFormSumit}>
                    <div className="columns medium-10 large-10 small-centered">
                    <input type="text" ref="address" placeholder="請輸入地址 ex 新竹市光復路一段"/>
                    </div>
                    <div className="columns medium-4 large-4 small-centered">
                    <button className="button expanded hollow">Get Anser</button>
                    </div>
                </form>
                </div>
            </div>
        );
    }
});

module.exports = AnserForm;