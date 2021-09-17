<template>
	<view class="hot-search">
		<text  class="title">热门搜索</text>

		<view class="hot-body">
			<template v-for="x in 6">
				<uni-tag class="hot-tag" type="error" :inverted="true" text="fasfasf"></uni-tag>
				
			</template>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="scss">
	.hot-search {
		padding: 15px 20px 0;
		.title {
			font-size: 12px;
			color: #757575;
			height: 30px;
			margin-bottom: 5px;
			display: block;
		}
		
		.hot-body {
			display: flex;
			flex-wrap: wrap;
			.hot-tag {
				margin-left: 12px;
				transform: translateX(-12px);
				margin-bottom: 4px;
			}
		}
	}
</style>
