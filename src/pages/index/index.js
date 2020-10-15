import Taro, { Component } from '@tarojs/taro'
import { Button, View } from '@tarojs/components'
import { getResultData_servers } from '../../servers/servers'
import {connect} from '@tarojs/redux'
import './index.scss'


@connect(({global})=>({
  ...global,
}))
export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页',
    enablePullDownRefresh: true,
    backgroundTextStyle: "dark",
  };

  constructor() {
    super(...arguments);
  }

  componentDidMount = () => {

  };

  onPullDownRefresh = () => {

  };

  onReachBottom = () => {

  };
  handleClick = () => {
    let params = { pageSize:'10',pageNum:'1'}
    getResultData_servers(params).then(res => {
      this.props.dispatch({
        type:'global/dataList',
        payload:res.data.data
      });
    }).catch(err => {
      console.log(err)
    })
    // this.props.dispatch({
    //   type:'global/AddArticle',
    //   payload:params
    // }).then(res=>{
    //   console.log(res.data.data)
    // })
  }
  handleAdd=()=>{
    console.log(this.props.dataList)
  }
  updateList = () => {

  }
  render() {
    return (
      <View>
        <View>
          <Button onClick={this.handleClick}>2141</Button>
          <Button onClick={this.handleAdd}>444</Button>
        </View>
      </View>
    )
  }
}

