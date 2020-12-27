import formItem from './form-item.js'
import Form from 'element-ui/lib/form'
export default {
  name: 'formRender',
  data() {
    return {
      value: {}
    }
  },
  props: Object.assign({}, Form.props, {
    queryConfig: {
      type: Array,
      required: true
    },
    // 禁用所有表单 TODO 扩展单个
    disabled: {
      type: Boolean,
      default: false
    }
  }),
  methods: {
    /**
     * @description 初始化数据如果有默认值
     * @future 后期可能扩展group的形式
     * @param {*} item 配置的项Obj
     */
    initData (item) {
      if (!item.key || this.value[item.key] !== undefined) return
      let defaultVal = item.$default
      // let defaultVal
      // if (item.$type === 'group') {
      //   // group
      //   defaultVal = item.$items.reduce((acc, cur) => {
      //     cur.$default && cur.key && (acc[cur.key] = cur.$default)
      //     return acc
      //   }, {})
      // } else if (item.$default !== undefined) {
      //   // not group
      //   defaultVal = item.$default
      // }
      // defaultVal !== undefined && this.updateValue({ id: item.key, value: defaultVal })
      defaultVal && this.updateValue({ id: item.key, value: defaultVal })
    },
    updateValue ({ id, value }) {
      this.value = Object.assign({}, this.value, {
        [id]: value
      })
      this.$emit('getData', this.value)
    },
  },
  render(h) {
    this.queryConfig.forEach(this.initData)
    return h(
      'el-form', {
        props: Object.assign({}, this._props,{ // this._props是from组件的props,做合并
          model: this.value
        }),
        ref: 'YForm'
      },
      this.queryConfig.map((item, index) => {
        const data = {
          props: {
            key: index,
            data: item,
            value: this.value,
            itemValue: this.value[item.key],
            disabled: this.disabled,
            rules: item.rules
          },
          on: {
            updateValue: this.updateValue
          }
        }
        return h('form-item',data)
      })
      .concat(this.$slots.default)
    )
  },
  mounted() {
    // this.$nextTick(() => {
    //   Object.keys(Form.methods).forEach((item) => { // 扩展继承Form的方法
    //     this[item] = this.$refs.YForm[item]
    //   })
    // })
  },
  components: {
    formItem
  }
}