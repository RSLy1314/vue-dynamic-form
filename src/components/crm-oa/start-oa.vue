<template>
  <div class="crm-start-oa">
    <FormRender
      inline
      :query-config='queryConfig'
      @getData='getData'
      ref='fromRender'
    >
      <el-button type="primary" @click="submitForm('fromRender')">查询</el-button>
      <el-button type="primary" @click="resetForm('fromRender')">重置</el-button>
    </FormRender>
  </div>
</template>

<script>
/*
  组件提供增删改查的功能，
    1.查询时，查询条件可以提供插槽，然后选择条件后提供给查询的条件
    2.数据返回时拿到提供的配置项去做展示，
    3.table支持增删改
*/
import FormRender from '../form-render/index.js'
export default {
  name: 'startOa',
  components: {
    FormRender
  },
  data() {
    return {
      queryConfig: [
        {
          key: 'select', // 对象的Key值，必须唯一
          type: 'select',
          label: '下拉框',
          $default: 'cq',
          $el: {
            placeholder: '请选择内容'
          },
          $option: {
            options: [
              {
                label: '广东',
                value: 'gd'
              },
              {
                label: '江苏',
                value: 'js'
              },
              {
                label: '重庆',
                value: 'cq'
              },
            ],
            type: 'option'
          },
          rules: [{ required: true, message: '请输入活动名称1', trigger: 'blur' }]
        },
        {
          key: 'input2', // 对象的Key值，必须唯一
          type: 'input',
          label: '输入框',
          $default: '这是默认值2',
          $el: {
            placeholder: '请选择内容2'
          },
          rules: [{ required: true, message: '请输入活动名称2', trigger: 'blur' }]
        },
        {
          key: 'radio', // 对象的Key值，必须唯一
          type: 'radio',
          label: '单选框',
          $default: false,
          $el: {
            label: 'Radio'
          },
        },
        {
          key: 'checkbox1', // 对象的Key值，必须唯一
          type: 'checkbox',
          label: '单选框',
          $default: true,
          $el: {
            label: 'QQ'
          },
        },
        {
          key: 'checkbox2', // 对象的Key值，必须唯一
          type: 'group',
          label: '多选框',
          $default: ['gd'],
          $option: {
            options: [
              {
                label: '广东',
                value: 'gd'
              },
              {
                label: '江苏',
                value: 'js'
              },
              {
                label: '重庆',
                value: 'cq'
              },
            ],
            type: 'checkbox'
          },
        },
        {
          key: 'radio2', // 对象的Key值，必须唯一
          type: 'group',
          label: '多选框',
          $default: 'gd',
          $option: {
            options: [
              {
                label: '广东',
                value: 'gd'
              },
              {
                label: '江苏',
                value: 'js'
              },
              {
                label: '重庆',
                value: 'cq'
              },
            ],
            type: 'radio'
          },
        },
        {
          key: 'render', // 对象的Key值，必须唯一
          label: 'RENDER',
          formatter: () => (
            <div>1111</div>
          ),
        },
      ],
      input3: 222
    }
  },
  methods: {
    getData(v) {
    },
    changeNum(e) {
      console.log(e, '----e')
      this.input3 = e
    },
    submitForm(formName) {
      this.$refs[formName].$refs.YForm.validate((valid) => {
        console.log(valid, '---valid')
        if (valid) {
          console.log(this.$refs[formName].value)
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].$refs.YForm.resetFields()
    }
  },
}
</script>

<style lang="scss" scoped>
  .crm-start-oa {
  }
</style>
