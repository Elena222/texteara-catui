import Taro, { Component } from "@tarojs/taro"
import { View, Text, } from "@tarojs/components"
import PropTypes from "prop-types"
import "./texteara.scss"
import "../../src/app.scss";

export default class Link extends Component {
  static propTypes = {
    title: PropTypes.string,
    required: PropTypes.bool,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    // showCount: PropTypes.bool,
  }

  readonly defaultProps = {
    title: "剧组介绍",
    required: false,
    placeholder: '请输入...',
    onChange: ()=>{},
    // showCount: false,
  }

  state = {
    isShowText: true,
    textareaValue: this.props.placeholder,
    onFocus: false,
  }

  //  失去焦点，存值
  onTextearaBlur(e) {
    this.setState({
      textareaValue: e.detail.value,
    })
    this.props.onChange(e.detail.value)
  }

  //输入完成，改变显示
  textareaConfirm(e) {
    this.setState({
      isShowText: true,
      onFocus: false,
    })
  }

  showTextarea() {
    const { textareaValue } = this.state
    let resetValue = ''
    if (textareaValue === '请输入...') {
      this.setState({
        textareaValue: resetValue,
      })
    }
    this.setState({
      isShowText: false,
      onFocus: true,
    })
  }

  render() {
    const { required, title } = this.props
    return (
      <View className="texteara-wrap" >
        {!isShowText && <View className="form-textarea">
          <View className='title-box'>
            <Text className="label">{title}</Text>
            {required && <Text className='requiredIcon'>*</Text>}
          </View>
          <View className='text-view'>
            <Textarea className="text-value" autoHeight auto-focus onBlur={this.onTextearaBlur.bind(this)} onConfirm={this.textareaConfirm.bind(this)} focus={onFocus} maxlength={400} name="attention" value={textareaValue} />
          </View>
        </View>

        }
        {isShowText && <View className="form-textarea" onClick={this.showTextarea.bind(this)}>
          <View className='title-box'>
            <Text className="label">{title}</Text>
            {required && <Text className='requiredIcon'>*</Text>}
          </View>
          <View className='text-view'>
            <Text className="text-value">{textareaValue}</Text>
          </View>
        </View>
        }
      </View>
    )
  }
}
