<template>
  <div class="container">
    <span class="about">关于我</span>

    <ul class="introduce">
      <li v-for="(item, index) in introduceData" :key="index" class="introduce-li">
        <p>{{ item.key }}:</p>
        <p>{{ item.value }}</p>
      </li>
    </ul>

    <span class="please">麻烦使用到这项项目的大佬们，给个star吧</span>
  </div>

</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  components: {},
  data() {
    return {
      introduceData: [
        {
          key: '- 职业',
          value: '2年前端工程师，熟悉b端系统，编辑器，小程序开发'
        },
        {
          key: '- 此项目github仓库',
          value: 'https://github.com/zero0011/quark-h5'
        },
        {
          key: '- 个人博客',
          value: 'https://juejin.cn/user/1714893871395261/posts'
        }
      ]
    }
  },
  computed: {},
  methods: {},
  watch: {},

  // 页面周期函数--监听页面加载
  onLoad() { },
  // 页面周期函数--监听页面初次渲染完成
  onReady() { },
  // 页面周期函数--监听页面显示(not-nvue)
  onShow() { },
  // 页面周期函数--监听页面隐藏
  onHide() { },
  // 页面周期函数--监听页面卸载
  onUnload() { },
  // 页面处理函数--监听用户下拉动作
  // onPullDownRefresh() { uni.stopPullDownRefresh(); },
  // 页面处理函数--监听用户上拉触底
  // onReachBottom() {},
  // 页面处理函数--监听页面滚动(not-nvue)
  // onPageScroll(event) {},
  // 页面处理函数--用户点击右上角分享
  // onShareAppMessage(options) {},
}) 
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  height: 90%;
  margin: 10px 0 0 10px;

  .about {
    display: inline-block;
    font-size: 20px;
  }

  .introduce {
    margin-top: 20px;

    .introduce-li {
      margin-top: 20px;
    }
  }

  .please {
    position: absolute;
    top: 15rem;
    color: red;
    font-size: 20px;
  }
}
</style>