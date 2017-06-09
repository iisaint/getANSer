var React = require('react');
var {TouchableHighlight} = require('react');

// google static maps api key
var mapApiURL = 'https://maps.googleapis.com/maps/api/staticmap?center=';
var mapZoomSize = '&zoom=17&size=640x400&maptype=roadmap&&markers=color:red%7Clabel:S%7C';
var mapApiKey = '&key=AIzaSyBrcFzsCWg3tdoyQ0Ca40BwPJSUFNxFlFk';

var AnserMessage = React.createClass({
    getInitialState: function () {
        return {isToggled: false}
    },
    showMap: function (addr) {
        window.location.href = mapApiURL + addr + mapZoomSize + addr + mapApiKey;
        /*this.setState({
            isToggled: !this.state.isToggled
        });

        if (!that.state.isToggled) {
            return (
                <div></div>
            );
        }
        return (
            <div className="columns medium-7 large-7 small-centered">
                <img className="map" src={mapApiURL + addr + mapZoomSize + addr + mapApiKey}/>
            </div>
        );*/
    },
    render: function () {
        var that = this;

        var {isToggled} = this.state;

        var {anser} = this.props;

        var anserObj = JSON.parse(anser);

        function renderCard() {

            var resultItems = anserObj
                .results
                .map((item, index) => {
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
                                        <span>
                                            通過地址校正
                                        </span>
                                        <img src={require('../assets/img/Close_Icon_Dark.png')}/>
                                        <span>
                                            內政部地址查詢</span>
                                        <img className="map" src={mapApiURL + addr + mapZoomSize + addr + mapApiKey}/>
                                    </div>
                                </div>
                            </div>
                        )
                    } else {
                        var addr = item.city + item.region + item.village + item.road + item.remainder;
                        return (
                                <div key={index} className="columns medium-5 large-5 small-centered">
                                        <li>{addr}</li>
                                </div>
                        );
                    }
                });
            
            if (resultItems.length == 1) {
                return (
                    <div>{resultItems}</div>
                )
            } else {
                return (
                    <div className="columns medium-12 large-12 small-centered">
                        <div className="columns medium-3 large-3 small-centered">
                        <h3>候選地址</h3>
                        </div>
                        {resultItems}
                    </div>
                )
            }
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
                var land = anserObj.results[0].city + anserObj.results[0].region + anserObj.results[0].section + anserObj.results[0].subsection + anserObj.results[0].land_num;
                return (
                    <div className="row">
                        <div className="columns medium-6 large-6 small-centered">
                            <h4>{land}</h4>
                        </div>
                        <div className="columns medium-6 large-6 small-centered">
                            <img className="page-img" src={require('../assets/img/type-L.png')}/>
                        </div>
                    </div>
                )
            } else if (anserObj.type === 'U') {
                return (
                    <div className="row">
                        <div className="columns medium-10 large-6 small-centered">
                            <img className="page-img" src={require('../assets/img/type-U.png')}/>
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