import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Ctexteara from "../../components/texteara"
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  setTextareaValue(value) {
    this.setState({
      textareaValue: value,
    })
  }

  formSubmit() {

  }

  render () {
    return (
      <View className='index'>
        <Form onSubmit={this.formSubmit}>
          <View className='formItem'>
            <View className='lable'>
              <Text>剧组名称</Text>
              <Text className='requiredIcon'>*</Text>
            </View>
            <Input className='input' name='name' title='剧组名称' type='text' placeholder={`请输入剧组名称`} placeholder-style='color: #999' />
          </View>
          <View className='formItem'>
            <View className='lable'>
              <Text>剧组名称</Text>
              <Text className='requiredIcon'>*</Text>
            </View>
            <Input className='input' name='name' title='剧组名称' type='text' placeholder={`请输入剧组名称`} placeholder-style='color: #999' />
          </View>
          <View className='formItem'>
            <View className='lable'>
              <Text>剧组名称</Text>
              <Text className='requiredIcon'>*</Text>
            </View>
            <Input className='input' name='name' title='剧组名称' type='text' placeholder={`请输入剧组名称`} placeholder-style='color: #999' />
          </View>
          <View className='formItem'>
            <View className='lable'>
              <Text>剧组名称</Text>
              <Text className='requiredIcon'>*</Text>
            </View>
            <Input className='input' name='name' title='剧组名称' type='text' placeholder={`请输入剧组名称`} placeholder-style='color: #999' />
          </View>
          <View className='formItem'>
            <View className='lable'>
              <Text>剧组名称</Text>
              <Text className='requiredIcon'>*</Text>
            </View>
            <Input className='input' name='name' title='剧组名称' type='text' placeholder={`请输入剧组名称`} placeholder-style='color: #999' />
          </View>
          <View className='formItem'>
            <View className='lable'>
              <Text>剧组名称</Text>
              <Text className='requiredIcon'>*</Text>
            </View>
            <Input className='input' name='name' title='剧组名称' type='text' placeholder={`请输入剧组名称`} placeholder-style='color: #999' />
          </View>
          <View className='formItem'>
            <View className='lable'>
              <Text>剧组名称</Text>
              <Text className='requiredIcon'>*</Text>
            </View>
            <Input className='input' name='name' title='剧组名称' type='text' placeholder={`请输入剧组名称`} placeholder-style='color: #999' />
          </View>
          <View className='formItem'>
            <View className='lable'>
              <Text>剧组名称</Text>
              <Text className='requiredIcon'>*</Text>
            </View>
            <Input className='input' name='name' title='剧组名称' type='text' placeholder={`请输入剧组名称`} placeholder-style='color: #999' />
          </View>
          {/* 引入组件 */}
          <Ctexteara title='剧组介绍' required name='introduce' placeholder='请输入...' onChange={(value) => this.setTextareaValue(value)} />
          <Button className='btn-create' formType='submit' type="warn" >立即创建</Button>
        </Form>
      </View>
    )
  }
}
