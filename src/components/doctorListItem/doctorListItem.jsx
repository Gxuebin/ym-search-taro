/**
 * @Author: lvshaoli
 * @DATE: 2020-01-27
 * @TIME: 11:08
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Commonimage from '@components/commonimage/commonimage'
// import PropTypes from 'prop-types'
import './doctorListItem.scss'

class Doctorlistitem extends Component {
  // static propTypes = {
  //   children: PropTypes.any,
  //   data: PropTypes.array
  // }
  //
  // static defaultProps = {
  //   data: []
  // }

    
  constructor () {
    super(...arguments)
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='doctorListItem'>
        <View>
          <Commonimage
            imageSource={require('@assets/images/home/home_jddyfsyy.png')}
          />
        </View>

        <View className='doctor-list-item-right-container'>
          {/* 医生介绍 */}
          <View className='doctor-lite-item-right-intr'>
            <Text className='doctor-list-item-name'>张默默</Text>
            <Text className='doctor-list-item-dept'>小儿科</Text>
            <Text className='doctor-list-item-grade'>主治医生</Text>
          </View>
          {/* 所属医院 */}
          <View className='doctor-list-item-right-hos'>
            <Text className='doctor-list-item-right-text'>解放军总医院第七医学中心八一儿童医院</Text>
          </View>
          {/* 描述 */}
          <View className='doctor-list-item-right-desc'>
            <View className='doctor-list-item-right-desc-text'>
              早产、低体重儿、新生儿黄疸、新生儿肺炎早产、低体重儿、新生儿黄疸、新生儿肺炎早产、低体重儿、新生儿黄疸、新生儿肺炎
            </View>
          </View>

          <View className='doctor-list-item-line'>
            <Text>
            </Text>
          </View>
        </View>


      </View>
    )
  }
}

export default Doctorlistitem
