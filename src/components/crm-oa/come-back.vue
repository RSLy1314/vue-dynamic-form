<template>
    <div class="kye-search-pager">
    <section class="search-pager-warp">
      <a v-if="backUrl"
         style="height:28px;line-height:28px;display:inline-flex;cursor:pointer;"
         @click="goBack">
        <i class="iconfont icon-yemianfanhui iconback"></i>
        <span class="title">
          返回
        </span>
      </a>
      <div class="tools-wrap">
        <slot></slot>
      </div>
    </section>
    <p class="line"></p>
  </div>
</template>

<script>
export default {
  name: 'comeBack',
  props: {
    backUrl: {
      type: String,
      requier: true
    }
  },
  methods: {
    goBack () {
      this.$router.replace(this.backUrl)
    },
  },
}
</script>

<style lang="scss">

  .kye-search-pager {
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: white;
    margin: 0 -16px;
    padding: 0 16px 4px;

    .el-input__inner {
      padding-left: 8px !important;
      padding-right: 8px !important;
    }
    .el-input--suffix {
      .el-input__inner {
        padding-left: 8px !important;
        padding-right: 25px !important;
      }
    }
    .el-input-group__append > .el-button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    .line {
      margin: 0 -16px;
      background-color: #e3e3e6;
      height: 2px;
    }

    .search-pager-warp {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 4px 0;

      .tools-wrap {
        display: flex;
        flex: 1;
        max-height: 28px;
        margin-left: 24px;
      }
      .title {
        white-space: nowrap;
        color: 333333;
        font-size: 14px;
        font-weight: bold;
        height: 28px;
        line-height: 28px;
      }
      .iconback {
        margin-right: 6px;
        font-size: 18px;
        color:  #8b60f0;
      }
    }
  }
</style>

