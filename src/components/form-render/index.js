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
     * @param {*} item 配置的项Obj
     */
    initData (item) {
      if (!item.key || this.value[item.key] !== undefined) return
      let defaultVal = item.$default
      defaultVal && this.updateValue({ id: item.key, value: defaultVal })
    },
    updateValue ({ id, value }) {
      this.value = Object.assign({}, this.value, {
        [id]: value
      })
      // this.$emit('getData', this.value) // 是否发散出去？可以通过ref拿值
    },
    async validate() {
      let valid = await this.$refs.YForm.validate()
      return valid
    },
    async resetFields() {
      await this.$refs.YForm.resetFields()
    }
  },
  render(h) {
    this.queryConfig.forEach(this.initData)
    return h(
      'el-form', {
        props: Object.assign({}, this._props, { // this._props是from组件的props,做合并
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
            rules: item.rules,
            $option: item.$option
          },
          on: {
            updateValue: this.updateValue
          }
        }
        return h('form-item', data)
      })
      .concat(this.$slots.default)
    )
  },
  mounted() {
    // this.$nextTick(() => {
    //   Object.keys(Form.methods).forEach((item) => { // 扩展继承Form的方法 放弃直接使用refs
    //     this[item] = this.$refs.YForm[item]
    //   })
    // })
  },
  components: {
    formItem
  }
}
