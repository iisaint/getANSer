var React = require('react');

// google static maps api key
var mapApiURL = 'https://maps.googleapis.com/maps/api/staticmap?center=';
var mapZoomSize = '&zoom=17&size=640x400&maptype=roadmap&&markers=color:red%7Clabel:S%7C';
var mapApiKey = '&key=AIzaSyBrcFzsCWg3tdoyQ0Ca40BwPJSUFNxFlFk';


var AnserMessage = React.createClass({
    render: function () {
        var {anser} = this.props;

        var anserObj = JSON.parse(anser);

        function renderResult() {
            if (anserObj.地址類別 === 'P') {
                return (
                    <div className="row">
                        <div className="columns medium-6 large-6 small-centered">
                    <div className="card-info success">
                        <div className="card-info-label">
                            <div className="card-info-label-text">
                                Win!
                            </div>
                        </div>
                        <div className="card-info-content">
                            <h3 className="lead">候選地址</h3>
                            <p>{anserObj.候選地址}</p>
                            <span className="badge success">V</span>
                            <span> 通過地址校正     </span>
                            <span className="badge warning">X</span>
                            <span> 內政部地址查詢</span>
                            <br/>
                            <img src={mapApiURL + anserObj.候選地址 + mapZoomSize + anserObj.候選地址 + mapApiKey}/>
                        </div>
                    </div>
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
                    </div>
                )
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