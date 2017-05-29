var React = require('react');
var AnserForm = require('AnserForm');
var AnserMessage = require('AnserMessage');
var getAnser = require('getAnser');

var Anser = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        }
    },
    handleSearch: function (address) {
        var that = this;
        
        this.setState({isLoading: true});

        getAnser.getAnser(address).then(function (anser) {
            console.log(anser);
            that.setState({
                anser: JSON.stringify(anser, undefined, 2),
                isLoading: false                
            });
        }, function (errorMessage) {
            alert(errorMessage);
            that.setState({
                isLoading: false
            });
        });
        // this.setState({
        //     address: address,
        //     cAddress: 'xxxxxxx'
        // });
    },
    render: function () {
        var {isLoading, anser} = this.state;

        function renderMessage () {
            if (isLoading) {
                return <h3>get ANSering...</h3>;
            } else if (anser) {
                return <AnserMessage anser={anser} />;
            }
        }

        return (
            <div>
                <AnserForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Anser;