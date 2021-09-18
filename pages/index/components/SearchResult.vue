<template>
	<view class="search-result">
		<text class="title">最佳匹配</text>
		
		<view class="hot-body">
			<Singer></Singer>
			<Sings></Sings>
		</view>
	</view>
</template>

<script>
	import Singer from './Singer'
	import Sings from './Sings'
	
	export default {
		components: {
			Singer,
			Sings
		},
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	.title {
		color: #d44439;
		font-size: 11px;
		padding: 15px 20px;
		display: inline-block;
	}
	
	.hot-body {
		
	}
</style>
