var React = require('react');
var AnserForm = require('AnserForm');
var AnserMessage = require('AnserMessage');
var getAnser = require('getAnser');
var Compare = require('Compare');

var Anser = React.createClass({
    getInitialState: function () {
        return {isLoading: false, isCompare: false, addr: ''}
    },
    handleSearch: function (address) {
        var that = this;

        this.setState({isLoading: true, addr: address});

        getAnser
            .getAnser(address)
            .then(function (anser) {
                that.setState({
                    anser: JSON.stringify(anser, undefined, 2),
                    isLoading: false,
                    isCompare: false
                });
            }, function (errorMessage) {
                alert(errorMessage);
                that.setState({isLoading: false});
            });
    },
    handleCompare: function (address) {
        var that = this;

        this.setState({isLoading: true, isCompare: true, addr: address});

        getAnser
            .getAll(address)
            .then(function (results) {
                // console.log('results = ' + JSON.stringify(results, undefined, 2));
                that.setState({
                    anser: JSON.stringify(results.anser, undefined, 2),
                    google: JSON.stringify(results.google, undefined, 2),
                    tgos: JSON.stringify(results.tgos, undefined, 2),
                    isLoading: false
                });
            }, function (errorMessage) {
                alert(errorMessage);
                that.setState({isLoading: false});
            });
    },
    componentDidMount: function () {
        var address = this.props.location.query.address;
        var op = this.props.location.query.op;

        if (address && address.length > 0) {
            if (op && op === 'anser') {
                this.refs.anserform.runExample(address);
                this.handleSearch(address);
                window.location.hash = '#/';
            } else {
                this.refs.anserform.runExample(address);
                this.handleCompare(address);
                window.location.hash = '#/';
            }
        }
    },
    render: function () {
        var {
            isLoading,
            isCompare,
            anser,
            google,
            tgos,
            addr
        } = this.state;

        function renderMessage() {
            if (isLoading) {
                return (
                    <div className="columns medium-10 large-6 small-centered">
                        <h3>get ANSering...</h3>
                    </div>
                );
            } else if (isCompare && anser && google && tgos) {
                return <Compare anser={anser} google={google} tgos={tgos}/>;
            } else if (!isCompare && anser) {
                return <AnserMessage anser={anser}/>;
            }
        }

        return (
            <div>
                <AnserForm ref='anserform' onSubmit={this.handleSearch} onCompare={this.handleCompare} addr={addr}/> 
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Anser;