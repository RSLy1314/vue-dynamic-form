<template>
  <div id="app">
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
import FormRender from './components/form-render/index.js'
export default {
  name: 'App',
  data() {
    return {
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
//         {
//           key:'btn', // 对象的Key值，必须唯一
//           type: 'button',
//           $attrs: { 'data-name': 'btn' }, // 可选, 写法与 Vue 的 Render 函数规范保持一致
//           label: "", // el-form-item上的属性
//           $default: "",
//           $el: {
//             type: "primary",
//             size: 'medium',
//           },
//           $solt: () => {
//             return (<div>查询（F）</div>)
//           }
//         },
      ]
    }
  },
  methods: {
    getData(data) {
      console.log(data);
    },
    submitForm(formName) {
      this.$refs[formName].$refs.YForm.validate((valid) => {
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
      this.$refs[formName].$refs.YForm.resetFields();
    }
  },
  components: {
    FormRender
  }
}
</script>

<style>
</style>
