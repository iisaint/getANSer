var React = require('react');

var Compare = React.createClass({
    render: function () {
        var {anser, google, tgos} = this.props;

        var anserObj = JSON.parse(anser);

        var googleObj = JSON.parse(google);

        var tgosObj = JSON.parse(tgos);

        function checkEmpty(items) {
            if (items.length == 0) {
                return (
                    <tr><td>查無資料</td></tr>
                );
            } else {
                return items;
            }
        }

        function checkExist() {
            if (anserObj.type === 'P') {
                if (!anserObj.exist) {
                    return(
                        <th>ANSer候選地址<font color='red'>(原始地址不存在)</font></th>
                    )
                } else {
                    return(
                        <th>ANSer候選地址<font color='green'>(原始地址存在)</font></th>
                    )
                }
            } else if (anserObj.type === 'L') {
                return(
                    <th>ANSer候選地址<font color='brown'>(這是土地地址)</font></th>
                )
            }
        }

        function renderCard() {

            var anserItems = anserObj
                .results
                .map((item, index) => {
                    if (anserObj.type === 'P') {
                        var addr = item.zipcode + item.city + item.region + item.village + item.road + item.remainder;
                    } else if (anserObj.type === 'L') {
                        var addr = item.city + item.region + item.section + item.subsection + item.land_num;
                    }
                    
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
                                   {checkExist()} 
                                </tr>
                            </thead>
                            <tbody>
                                {checkEmpty(anserItems)}
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
                                {checkEmpty(googleItems)}
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
                                {checkEmpty(tgosItems)}
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