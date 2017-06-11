var React = require('react');

var Compare = React.createClass({
    render: function () {
        var {anser, google, tgos} = this.props;

        var anserObj = JSON.parse(anser);

        var googleObj = JSON.parse(google);

        var tgosObj = JSON.parse(tgos);

        function renderCard() {

            var anserItems = anserObj
                .results
                .map((item, index) => {
                    var addr = item.city + item.region + item.village + item.road + item.remainder;
                    return (
                            <tr><td key={index}>
                                {addr}
                            </td></tr>
                    );
                });

            var googleItems = googleObj
                .results
                .map((item, index) => {
                    var addr = item.formatted_address;
                    return (
                        <tr><td key={index}>
                                {addr}
                            </td></tr>
                    );
                });
            
            var tgosItems = tgosObj['candidate-list']
                .map((item, index) => {
                    var addr = item.TGOS_addr;
                    return (
                        <tr><td key={index}>
                                {addr}
                            </td></tr>
                    );
                });

            return (
                <div className="row">
                    <div className="columns medium-4 large-4 small-4">
                        <table className="hover">
                            <thead>
                                <tr>
                                    <th>ANSer候選地址</th>
                                </tr>
                            </thead>
                            <tbody>
                                {anserItems}
                            </tbody>
                        </table>
                    </div>
                    <div className="columns medium-4 large-4 small-4">
                        <table className="hover">
                            <thead>
                                <tr>
                                    <th>Google Map候選地址</th>
                                </tr>
                            </thead>
                            <tbody>
                                {googleItems}
                            </tbody>
                        </table>
                    </div>
                    <div className="columns medium-4 large-4 small-4">
                        <table className="hover">
                            <thead>
                                <tr>
                                    <th>TGOS候選地址</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tgosItems}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }

        return (
            <div className="columns medium-12 large-12 small-centered">
                {renderCard()}
            </div>
        );
    }
});

module.exports = Compare;