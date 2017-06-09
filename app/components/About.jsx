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
  <h2 className="marketing-site-three-up-headline">ANSer特色說明</h2>
  <div className="row medium-unstack">
    <div className="columns medium-4 large-4 small-4">
      <img src={require('../assets/img/correction.png')}/>
      <h4 className="marketing-site-three-up-title">地址校正</h4>
      <p className="marketing-site-three-up-desc">校正缺漏字與錯別字之地址</p>
    </div>
    <div className="columns medium-4 large-4 small-4">
      <img src={require('../assets/img/normalization.png')}/>
      <h4 className="marketing-site-three-up-title">地址正規化</h4>
      <p className="marketing-site-three-up-desc">將地址正規化為完整格式 ─ 縣市，鄉鎮區，村里，路街道，巷弄號</p>
    </div>
    <div className="columns medium-4 large-4 small-4">
      <img src={require('../assets/img/check.png')}/>
      <h4 className="marketing-site-three-up-title">地址確認</h4>
      <p className="marketing-site-three-up-desc">確認地址是否為有效地址</p>
    </div>
  </div>
  <div className="row medium-unstack">
    <div className="columns medium-4 large-4 small-4">
      <img src={require('../assets/img/worldwide.png')}/>
      <h4 className="marketing-site-three-up-title">校正範圍廣</h4>
      <p className="marketing-site-three-up-desc">可校正臺澎金馬地區之地址</p>
    </div>
    <div className="columns medium-4 large-4 small-4">
      <img src={require('../assets/img/largeDB.png')}/>
      <h4 className="marketing-site-three-up-title">開放資料</h4>
      <p className="marketing-site-three-up-desc">利用開放資料建立校正基準及測試資料</p>
    </div>
    <div className="columns medium-4 large-4 small-4">
      <img src={require('../assets/img/prevention.png')}/>
      <h4 className="marketing-site-three-up-title">使用方便</h4>
      <p className="marketing-site-three-up-desc">提供RESTful API及批次處理介面</p>
    </div>
  </div>
</section>


    );
};

module.exports = About;