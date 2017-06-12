var React = require('react');
var {Link} = require('react-router');

var AnserForm = React.createClass({
    getInitialState: function () {
        return {
            isLogoShow: true,
            isSearched: false
        }
    },
    onFormSumit: function (e) {
        e.preventDefault();

        this.setState({
            isLogoShow: false,
            isSearched: true
        });

        var address = this.refs.address.value;

        if (address.length > 0) {
            this.props.onSearch(address);
        }
    },
    buttonClick: function() {
        var address = this.refs.address.value;

        if (address.length > 0) {
            this.props.onCompare(address);
        }
    },
    render: function () {
        var {isLogoShow, isSearched, address} = this.state;

        var that = this;

        function renderImg () {
            if (isLogoShow) {
                return (
                    <div className="columns medium-10 large-6 small-centered">
                        <img className="page-img" src={require('../assets/img/tp101-3.gif')}/>
                    </div>
                )
            } else {
                return <div className="columns medium-12 large-12 small-centered">&nbsp;</div>
            }
        }

        function renderSearchBar () {
            if (isSearched) {
                return (
                    <div className="row">
                        <div className="columns medium-3 large-3 small-3">
                            <a href="/">
                            <img width="100" height="100" src={require('../assets/img/anser_logo.png')}/>
                            </a>
                        </div>
                        <div className="columns medium-8 large-8 small-8"> 
                            <div className="input-group">
                                <input className="input-group-field" type="search" ref="address" placeholder="請輸入地址 ex 新竹市光復路一段1號"/>
                            <div className="input-group-button">
                                <button className="button secondary">Get Anser</button>
                            </div>
                            </div>
                        </div>
                        <div className="columns medium-1 large-1 small-1">
                            <button className="button" onClick={that.buttonClick}>Compare</button>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="columns medium-10 large-10 small-centered">
                            <input type="search" ref="address" placeholder="請輸入地址 ex 新竹市光復路一段1號"/>
                        
                        <div className="columns medium-4 large-4 small-centered">
                            <button className="button expanded hollow">Get Anser</button>
                        </div>
                    </div>
                )
            }
        }

        return (
            <div className="row">
                {renderImg()}
                <div className="columns medium-10 large-6 small-centered">
                    <form onSubmit={this.onFormSumit}>
                        {renderSearchBar()}
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = AnserForm;