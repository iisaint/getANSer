var React = require('react');
var AnserForm = require('AnserForm');
var AnserMessage = require('AnserMessage');
var getAnser = require('getAnser');
var Compare = require('Compare');

var Anser = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false,
            isCompare: false
        }
    },
    handleSearch: function (address) {
        console.log('handleSearch is called');
        var that = this;
        
        this.setState({
            isLoading: true
        });

        getAnser.getAnser(address).then(function (anser) {
            that.setState({
                anser: JSON.stringify(anser, undefined, 2),
                isLoading: false,
                isCompare: false              
            });
        }, function (errorMessage) {
            alert(errorMessage);
            that.setState({
                isLoading: false
            });
        });
    },
    handleCompare: function (address) {
        console.log('handleCompare is called');
        var that = this;
        
        this.setState({
            isLoading: true,
            isCompare: true
        });

        getAnser.getAll(address).then(function (results) {
            // console.log('results = ' + JSON.stringify(results, undefined, 2));
            that.setState({
                anser: JSON.stringify(results.anser, undefined, 2),
                google: JSON.stringify(results.google, undefined, 2),
                tgos: JSON.stringify(results.tgos, undefined, 2),
                isLoading: false             
            });
        }, function (errorMessage) {
            alert(errorMessage);
            that.setState({
                isLoading: false
            });
        });
    },
    render: function () {
        var {isLoading, isCompare, anser, google, tgos} = this.state;

        function renderMessage () {
            console.log("iscompare = " + isCompare);
            if (isLoading) {
                return (
                    <div className="columns medium-10 large-6 small-centered">
                        <h3>get ANSering...</h3>
                    </div>
                );
            } else if (isCompare && anser && google && tgos) {
                return <Compare anser={anser} google={google} tgos={tgos}/>;
            } else if (!isCompare && anser) {
                return <AnserMessage anser={anser} />;
            }
        }

        return (
            <div>
                <AnserForm onSubmit={this.handleSearch} onCompare={this.handleCompare}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Anser;