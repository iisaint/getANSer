var React = require('react');

var AnserForm = React.createClass({
    getInitialState: function () {
        return {
            isImgShow: true,
            isSearched: false
        }
    },
    onFormSumit: function (e) {
        e.preventDefault();

        this.setState({
            isImgShow: false,
            isSearched: true
        });

        var address = this.refs.address.value;

        if (address.length > 0) {
            // this.refs.address.value = '';
            this
                .props
                .onSearch(address);
        }
    },
    render: function () {
        var {isImgShow, isSearched} = this.state;

        function renderImg () {
            if (isImgShow) {
                return (
                    <div className="columns medium-10 large-6 small-centered">
                        <img className="page-img" src={require('../assets/img/index.png')}/>
                    </div>
                )
            } else {
                return <div className="columns medium-12 large-12 small-centered">&nbsp;</div>
            }
        }

        function renderSearchBar () {
            if (isSearched) {
                return (
                    <div className="columns medium-10 large-10 small-centered input-group input-group-rounded">
                            <input className="input-group-field" type="search" ref="address" placeholder="請輸入地址 ex 新竹市光復路一段1號"/>
                        <div className="input-group-button">
                            <button className="button secondary">Get Anser</button>
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