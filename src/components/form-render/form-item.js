import { toCamelCase, isObject, toString } from './utils'

// function validator (data) {
//   if (!data) {
//     throw new Error('item data must be an Object.')
//   } else if (!data.key) {
//     throw new Error('item key is unvalidated.')
//   } else if (!data.type) {
//     throw new Error('item type is unvalidated.')
//   }
// }
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
      const { $el, type, key, $solt } = data
      let obj = isObject($el) ? $el : {}
      let props = Object.assign({}, obj, { value })
      console.log(props,'props-');
      this.disabled && (props.disabled = this.disabled) // 全局禁用, false时不处理 TODO 单个禁用
      // TODO 扩展，这里只是指定了elementUI的组件，如果是其他的呢，支持插槽或者render
        return h(`el-${type}`, {
          attrs: props, // 用于支持placeholder等原生属性(同时造成dom上挂载一些props)
          props,
          on: {
            input: (value) => {
              console.log(this,' this.$attrs');
              this.$emit('updateValue', { id: key, value })
            }
          }
        },
        [
          data.$solt && toString(data.$solt) === '[object Function]' && $solt()
        ]
      )
    }
  },
  render(h) {
    // validator(this.data)
    return h('el-form-item', {
      props: {
        prop: this.prop,
        label: this.data.label,
        rules: this.data.rules
      },
      attrs: this.data.$attrs,
    },[
      this.renderFromItem(h, this.data, this.itemValue)
    ])
  },
}