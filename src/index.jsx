import React, {Component} from 'react';
import {render} from 'react-dom';
import { HashRouter, Link } from 'react-router-dom';
// import Main from './routers';
import './index.less'
// import SUCCESS from './assets/img/success.png';
// import moment from 'moment';
// import UpdateComponent from './components/UpdateComponent'
// import ActiveElement from './components/ActiveElement'
// import UpdateList from './components/UpdateList'
// import MyForWard from './components/MyForWard'
import { DatePicker, Space } from 'antd';
import Main from './routers';

class App extends Component {

  componentDidMount(){
    // var pivotIndex = function(nums) {
    //   console.log(nums)
    //   var idx = nums.findIndex((item,index)=>{
    //       var leftTotal = index === 0 ? 0:nums.slice(0,index).reduce((prev,item) => prev+item)
    //       var rightTotal = index === nums.length-1 ? 0 : nums.slice(index+1,nums.length).reduce((prev,item) => prev+item)
    //       // console.log(leftTotal,rightTotal)
    //       return leftTotal === rightTotal
    //   })
    //   return idx
    // };
    // console.log(pivotIndex([1,7,3,6,5,6])) 
    // console.log(pivotIndex([2, 1, -1]))

  }

  render() {
    return (
      <HashRouter>
        <Main></Main>
        <div>
          <h1 onClick={() => window.location.href='#ff'}>点击window.location.href</h1>
          <a href='#bottom'>点击a链接bottom</a>
          <a href='#bottom/content'>点击a链接bottom/content</a>
        </div>
      </HashRouter>
    );
  }
}

render(<App />, document.getElementById('root'));
1