<template>
  <div class="crm-oa-container">
    <come-back :back-url="data.backUrl">
      <span class="title">OA申请</span>
    </come-back>
    <el-tabs
      v-model="activeName"
      @tab-click="handleClick"
    >
      <el-tab-pane
        v-for="item in activeNameList"
        :key="item.name"
        :label="item.label"
        :name="item.name"
      >
        <component :is="renderComp">
        </component>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// const CONTEXT_FEE = require.context('./', false, /^(?!index$).+\.vue$/)
// let components = {}
// CONTEXT_FEE.keys().forEach(ele => {
//   let fileName = CONTEXT_FEE(ele).default ? CONTEXT_FEE(ele).default.name : ''
//   if (fileName)components[fileName] = CONTEXT_FEE(ele).default
// })
import startOa from './start-oa'
import myApply from './my-apply'
import comeBack from './come-back'
export default {
  name: 'crmOa',
  props: {
    data: {
      type: Object,
      requier: true
    }
  },
  components: {
    startOa,
    myApply,
    comeBack,
  },
  data() {
    return {
      activeName: 'startOa',
      activeNameList: [
        {
          label: '发起OA申请',
          name: 'startOa'
        },
        {
          label: '我的申请',
          name: 'myApply'
        },
      ]
    }
  },
  computed: {
    renderComp() {
      return this.activeName
    }
  },
  methods: {
    handleClick(tabObj) {
      this.activeName = tabObj.name
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
