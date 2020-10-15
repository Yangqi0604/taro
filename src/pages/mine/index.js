/*
 * @Author: YangQi
 * @Date: 2020-10-15 15:37:52
 * @LastEditors: YangQi
 * @LastEditTime: 2020-10-15 22:47:56
 */
import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

@connect(({ global }) => ({
  ...global
}))
export default class Mine extends Component {
  config = {
    navigationBarTitleText: 'mine',
  };

  componentDidMount = () => {

  };
  handleClick = () => {
    console.log(1)
    console.log(this.props.dataList)
  }
  render() {
    const {list = []} = this.props;
    return (
      <View className="mine-page">
        {console.log(list)}
        <Button onClick={this.handleClick}>3</Button>
      </View>
    )
  }
}
