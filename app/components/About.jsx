var React = require('react');

// var About = React.createClass({
//     render: function () {
//         return (
//             <h3>About component</h3>
//         );
//     }
// });

var About = (props) => {
    return (
        <section className="marketing-site-three-up">
  <h2 className="marketing-site-three-up-headline">Furry, Reliable, Cuddly</h2>
  <div className="row medium-unstack">
    <div className="columns medium-4 large-4 small-centered">
      <img src={require('../assets/img/seo_place_optimization.png')}/>
      <h4 className="marketing-site-three-up-title">地址校正</h4>
      <p className="marketing-site-three-up-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sint, voluptatibus eaque natus ad eius.</p>
    </div>
    <div className="columns medium-4 large-4 small-centered">
      <img src={require('../assets/img/SEO_favorite.png')}/>
      <h4 className="marketing-site-three-up-title">地址確認</h4>
      <p className="marketing-site-three-up-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sint, voluptatibus eaque natus ad eius.</p>
    </div>
    <div className="columns medium-4 large-4 small-centered">
      <img src={require('../assets/img/Programming_Development_Api.png')}/>
      <h4 className="marketing-site-three-up-title">Open API</h4>
      <p className="marketing-site-three-up-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sint, voluptatibus eaque natus ad eius.</p>
    </div>
  </div>
</section>


    );
};

module.exports = About;