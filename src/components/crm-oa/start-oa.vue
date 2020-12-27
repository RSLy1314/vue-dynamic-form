<template>
  <div class="crm-start-oa">
    <FromRender
      inline
      :query-config='queryConfig'
      @getData='getData'
      ref='fromRender'
    >
      <el-button type="primary" @click="submitForm('fromRender')">查询</el-button>
      <el-button type="primary" @click="resetForm('fromRender')">重置</el-button>
    </FromRender>
  </div>
</template>

<script>
/*
  组件提供增删改查的功能，
    1.查询时，查询条件可以提供插槽，然后选择条件后提供给查询的条件
    2.数据返回时拿到提供的配置项去做展示，
    3.table支持增删改
*/
import FromRender from '../from-render/index.js'
export default {
  name: 'startOa',
  components: {
    FromRender
  },
  data() {
    return {
      queryConf: [
        {
          label: '输入框',
          value: '',
          type: 'input',
          props: {
            width: 150,
            placeholder: '请输入'
          }
        },
        {
          label: '按钮',
          value: '查询（F）',
          type: 'button',
          props: {
            width: 80,
          }
        },
      ],
      queryConfig: [
        {
          key:'input1', // 对象的Key值，必须唯一
          type: 'input',
          // $attrs: { 'data-name': 'form1' }, // 可选, 写法与 Vue 的 Render 函数规范保持一致
          label: "输入框", // el-form-item上的属性
          $default: "这是默认值",
          $el: {
            placeholder: "请选择内容"
          },
          rules: [{ required: true, message: '请输入活动名称1', trigger: 'blur' }] // el-form-item上的属性
        },
        {
          key:'input2', // 对象的Key值，必须唯一
          type: 'input',
          // $attrs: { 'data-name': 'form1' }, // 可选, 写法与 Vue 的 Render 函数规范保持一致
          label: "输入框", // el-form-item上的属性
          $default: "这是默认值2",
          $attrs: { 'data-name': 'btn' }, // 可选, 写法与 Vue 的 Render 函数规范保持一致
          $el: {
            placeholder: "请选择内容2"
          },
          rules: [{ required: true, message: '请输入活动名称2', trigger: 'blur' }] // el-form-item上的属性
        },
        {
          key:'btn', // 对象的Key值，必须唯一
          type: 'button',
          $attrs: { 'data-name': 'btn' }, // 可选, 写法与 Vue 的 Render 函数规范保持一致
          label: "", // el-form-item上的属性
          $default: "",
          $el: {
            type: "primary",
            size: 'medium',
          },
          $solt: () => {
            return (<div>查询（F）</div>)
          }
        },
      ]
    }
  },
  methods: {
    getData(data) {
      console.log(data);
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        console.log(valid,'---valid');
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  mounted() {
  },
}
</script>

<style lang="scss" scoped>
  .crm-start-oa {
  }
</style>
