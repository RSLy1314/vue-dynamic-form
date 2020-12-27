<template>
  <div>
    <h1 style="margin-bottom:50px">公共OA组件测试----</h1>
    <crm-oa
    :data='oaData'
    >
    </crm-oa>
  </div>
</template>

<script>
import crmOa from '../crm-oa'
export default {
  name: 'home',
  components: {
    crmOa
  },
  data() {
    return {
      oaData: {
        backUrl: '/crm/customerv2/list'
      }
    }
  },
}
</script>

<style>

</style>
