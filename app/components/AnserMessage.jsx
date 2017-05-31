var React = require('react');

var AnserMessage = React.createClass({
    render: function () {
        var {anser} = this.props;
        
        var anserObj = JSON.parse(anser);

        function renderResult () {
            if (anserObj.地址類別 === 'P') {
                return (
                    <div className="row">
                <div className="columns medium-12 large-12 small-centered">
                    <h3 className="page-title">候選地址</h3>
                </div>
                <div className="columns medium-12 large-12 small-centered">
                    <h4>{anserObj.候選地址}</h4>
                </div>
            </div>
                )
            } else if (anserObj.地址類別 === 'L') {
                return (
                <div className="row">
                <div className="columns medium-12 large-12 small-centered">
                    <h3>土地地址 (痾....吃土了)</h3>
                </div>
                <div className="columns medium-12 large-12 small-centered">
                    <h4>{anserObj.候選地址}</h4>
                </div>
            </div>)
        } else if (anserObj.地址類別 === 'U') {
            return (
                <div className="row">
                <div className="columns medium-12 large-12 small-centered">
                    <h3>痾....請丟個地址吧</h3>
                </div>
                </div>
            )
            }
        }

        return (
            <div>
            {renderResult()}
            </div>
        );
    }
});

module.exports = AnserMessage;