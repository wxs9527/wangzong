<template>
  		<section>
			<div class="lists" v-for="(one,index) in parent.ones">
				<img :src="one.pic"/>
				<p>{{one.title}}</p>
				<div class="sec_bot">
					<img :src="one.pics"/>
					<span>{{one.titles}}</span>
				</div>
			</div>
			<!-- <div class="lists">
				<img src="../../../static/img/a.png"/>
				<p>时髦街头潮搭</p>
				<div class="sec_bot">
					<img src="../../../static/img/asics.png"/>
					<span>唯品会旗舰店</span>
				</div>
			</div>
			<div class="lists">
				<img src="../../../static/img/a.png"/>
				<p>时髦街头潮搭</p>
				<div class="sec_bot">
					<img src="../../../static/img/asics.png"/>
					<span>唯品会旗舰店</span>
				</div>
			</div>
			<div class="lists">
				<img src="../../../static/img/a.png"/>
				<p>时髦街头潮搭</p>
				<div class="sec_bot">
					<img src="../../../static/img/asics.png"/>
					<span>唯品会旗舰店</span>
				</div>
			</div>
			<div class="lists">
				<img src="../../../static/img/a.png"/>
				<p>时髦街头潮搭</p>
				<div class="sec_bot">
					<img src="../../../static/img/asics.png"/>
					<span>唯品会旗舰店</span>
				</div>
			</div>
			<div class="lists">
				<img src="../../../static/img/a.png"/>
				<p>时髦街头潮搭</p>
				<div class="sec_bot">
					<img src="../../../static/img/asics.png"/>
					<span>唯品会旗舰店</span>
				</div>
			</div>
			<div class="lists">
				<img src="../../../static/img/a.png"/>
				<p>时髦街头潮搭</p>
				<div class="sec_bot">
					<img src="../../../static/img/asics.png"/>
					<span>唯品会旗舰店</span>
				</div>
			</div> -->
		</section>
</template>

<script>
    export default {
		name: "MineFooter",
		props:["parent"]
    }
</script>

<style scoped>
</style>
