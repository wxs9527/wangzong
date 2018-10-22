<template>
		<div class="header-two">
			<div class="banner">
				<a href="http://localhost:8080">关注</a>
				<a href="http://localhost:8080/#/cho">精选</a>
				<a href="http://localhost:8080/#/mat">搭配</a>
				<a href="#">视频</a>
				<a href="#">攻新计</a>
				<a href="#">直播</a>
			</div>
			<div class="banner-a">
				<p>我的关注</p>
				<div class="banner-a-one">
					<img src="../../../static/img/jinba.png"/>
					<i class="iconfont">&#xe625;</i>
				</div>
			</div>
		</div>
</template>

<script>
    export default {
        name: "MineBanner"
    }
</script>

<style scoped>
.banner a:nth-child(3){
		color: #ff1314;
		border-bottom: 3px solid #ff1314;
}
.banner a:nth-child(1){
		color:  #6c6a6c;;
		border-bottom: none;
}
</style>