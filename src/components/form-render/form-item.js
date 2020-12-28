import { isObject, toString } from './utils'
import { COMPONENTS_MAP } from './config'
import { EL_OPTION } from './option'
export default {
  props: {
    data: Object,
    prop: {
      type: String,
      default () {
        return this.data.key
      }
    },
    itemValue: {},
    value: Object,
    disabled: Boolean
  },
  methods: {
    renderFromItem(h, data, value) {
      const { $el, type, key, formatter, $option, $slot } = data
      let obj = isObject($el) ? $el : {}
      let props = Object.assign({}, obj, { value })
      this.disabled && (props.disabled = this.disabled) // TODO 单个禁用
      let TAG = COMPONENTS_MAP[type]
      // TODO 扩展，这里只是指定了elementUI的组件，如果是其他的呢，支持插槽或者render
      if (TAG) {
        if (type === 'group') {
          TAG = `el-${$option.type}-group`
        }
        return h(TAG, {
            attrs: props, // 用于支持placeholder等原生属性(同时造成dom上挂载一些props)
            props,
            on: {
              input: (value) => {
                this.$emit('updateValue', { id: key, value })
              },
              change: (value) => {
                console.log(value)
                this.$emit('updateValue', { id: key, value })
              }
            }
          },
          [
            data.$slot && toString(data.$slot) === '[object Function]' && $slot(),
            ...EL_OPTION(h, $option)
          ]
        )
      } else {
        return formatter && toString(data.formatter) === '[object Function]' && formatter()
      }
    }
  },
  render(h) {
    return h('el-form-item', {
      props: {
        prop: this.prop,
        label: this.data.label,
        rules: this.data.rules
      },
      attrs: this.data.$attrs,
    }, [
      this.renderFromItem(h, this.data, this.itemValue)
    ])
  },
}
