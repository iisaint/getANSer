var React = require('react');

// google static maps api key
var mapApiURL = 'https://maps.googleapis.com/maps/api/staticmap?center=';
var mapZoomSize = '&zoom=17&size=640x400&maptype=roadmap&&markers=color:red%7Clabel:S%7C';
var mapApiKey = '&key=AIzaSyBrcFzsCWg3tdoyQ0Ca40BwPJSUFNxFlFk';


var AnserMessage = React.createClass({
    render: function () {
        var {anser} = this.props;

        var anserObj = JSON.parse(anser);

        function renderCard() {

            var resultItems = anserObj.results.map((item) => {
                var addr = item.city + item.region + item.village + item.road + item.remainder;
                if (anserObj.results.length == 1) {
                    return (
                        <div className="columns medium-6 large-6 small-centered">
                    <div className="card-info primary">
                        <div className="card-info-label">
                            <div className="card-info-label-text">
                                Win!
                            </div>
                        </div>
                        <div className="card-info-content">
                            <h3 className="lead">候選地址</h3>
                            <p>{addr}</p>
                            <img src={require('../assets/img/Tick_Mark_Dark.png')}/>
                            <span> 通過地址校正    </span>
                            <img src={require('../assets/img/Close_Icon_Dark.png')}/>
                            <span> 內政部地址查詢</span>
                            <img className="map" src={mapApiURL + addr + mapZoomSize + addr + mapApiKey}/>
                        </div>
                    </div>
                    </div>
                    )
                } else {
                    var addr = item.city + item.region + item.village + item.road + item.remainder;
                    return (
                        <div className="columns medium-4 large-4 small-4">
                        <div className="card-info primary">
                            <div className="card-info-label">
                                <div className="card-info-label-text">
                                    Win!
                                </div>
                            </div>
                            <div className="card-info-content">
                                <h3 className="lead">候選地址</h3>
                                <p>{addr}</p>
                                <img src={require('../assets/img/Tick_Mark_Dark.png')}/>
                                <span> 通過地址校正    </span>
                                <img src={require('../assets/img/Close_Icon_Dark.png')}/>
                                <span> 內政部地址查詢</span>
                                <img className="map" src={mapApiURL + addr + mapZoomSize + addr + mapApiKey}/>
                            </div>
                        </div>
                        </div>
                    );
                }
            });

            return <div>{resultItems}</div>
        }

        function renderResult() {
            if (anserObj.type === 'P') {
                return (
                    <div className="row">
                        <div className="columns medium-12 large-12 small-12">
                            {renderCard()}
                        </div>
                    </div>
                )
            } else if (anserObj.type === 'L') {
                return (
                    <div className="row">
                        <div className="columns medium-10 large-6 small-centered">
                            <h3>土地地址 (痾....吃土了)</h3>
                        </div>
                        <div className="columns medium-12 large-12 small-centered">
                            <h4>{anserObj.results[0]}</h4>
                        </div>
                    </div>
                )
            } else if (anserObj.type === 'U') {
                return (
                    <div className="row">
                        <div className="columns medium-10 large-6 small-centered">
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