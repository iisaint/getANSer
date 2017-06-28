var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div className="columns medium-10 large-6 small-centered">
      <h1 className="text-center">Examples</h1>
      <p className="text-center">Here are a few example address to try out:</p>
      <p>地址校正</p>
      <ul>
        <li>
          <Link to='/?address=台北市松山區復興北路99號&op=anser'>台北市松山區復興北路99號</Link>
        </li>
        <li>
          <Link to='/?address=北市中山區德惠段一小段72地號&op=anser'>北市中山區德惠段一小段72地號</Link>
        </li>
        <li>
          <Link to='/?address=我今天想要找新竹清大光復路1段1號附近的餐廳&op=anser'>我今天想要找新竹清大光復路1段1號附近的餐廳</Link>
        </li>
      </ul>
      <p>比較</p>
      <ul>
        <li>
          <Link to='/?address=竹市金山23街73號&op=compare'>竹市金山23街73號</Link>
        </li>
        <li>
          <Link to='/?address=竹縣竹東員山路276巷八弄1號&op=compare'>竹縣竹東員山路276巷八弄1號</Link>
        </li>
      </ul>
    </div>
  )
};

module.exports = Examples;
