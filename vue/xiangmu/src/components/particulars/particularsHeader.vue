<template>
  <header>
    <p><i class="iconfont icon-jiankuohaoyuanzuofill1"></i></p>
    <span>
      <i class="iconfont icon-fenxiang"></i>
                    &nbsp;
      <i class="iconfont icon-more"></i>
    </span>
  </header>
</template>

<script>
    export default {
        name: "particularsHeader"
    }
</script>

<style scoped>
  header{
    width: 97%;
    height: 0.4rem;
    display: flex;
    margin: 0 auto;
    position: absolute;
    z-index: 2;
    justify-content: space-between;
  }
  header p{
    width: 0.5rem;
    height: 0.5rem;
    display: block;
    display: flex;
  }
  header p .iconfont{
    font-size: 0.3rem;
    color: #8c8c8c;
    line-height: .5rem;

  }
  header span{
    display: inline-block;
    width: 0.8rem;
    height: 0.5rem;
    display: flex;
  }
  header span .iconfont{
    font-size: 0.2rem;
    color: #8c8c8c;
    border-radius: 50%;
    line-height: 0.5rem;
  }
</style>
