var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    onSearch: function (e) {
        e.preventDefault();
        alert('not yet wired up');
    },
    render: function () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">GetAnser App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>ANSer</IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                        </li>
                        <li>
                            <Link to="/team" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Team</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                               <input type="search" placeholder="Search Address"/> 
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get ANSer"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = Nav;
