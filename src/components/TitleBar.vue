<template>
  <uni-transition class="transition-container":mode-class="['fade','slide-top']" :show="ifTitleAndMenuShow">
    <div class="title-wrapper">
      <div class="left">
        <span class="icon-back icon"></span>
      </div>
      <div class="right">
        <div class="icon-wrapper">
          <span class="icon-cart icon"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-person icon"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-more icon"></span>
        </div>
      </div>
    </div>
  </uni-transition>
</template>

<script>
export default {
  props: {
    ifTitleAndMenuShow: {
      type: Boolean,
      default: false
    }
  }
}

</script>

<style lang='scss' scoped>
@import '../assets/styles/global';

.transition-container {
  position: relative;
  z-index: 100
}

.title-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 101;
  display: flex;
  width: 100%;
  height: px2rem(120);
  background: white;
  box-shadow: 0 px2rem(10) px2rem(10) rgba(0, 0, 0, .15);

  .left {
    flex: 0 0 px2rem(120);
    @include center;

    .icon {
      font-size: px2rem(40);
    }
  }

  .right {
    flex: 1;
    display: flex;
    justify-content: flex-end;

    .icon-wrapper {
      flex: 0 0 px2rem(80);
      @include center;

      .icon {
        font-size: px2rem(50);
      }
    }
  }
}
</style>
