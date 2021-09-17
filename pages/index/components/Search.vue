<template>
	<view class="c-search">
		<view class="header">
			<uni-icons class="search-icon" @click="closeSearchBox" color="#fff" type="arrowleft" size="22"></uni-icons>
			<input class="input" placeholder-class="search-input" type="text" placeholder="搜索歌曲、歌手" />
		</view>

		<view class="search-body">
			<HotSearch />
		</view>
	</view>
</template>

<script>
	import HotSearch from './HotSearch'
	export default {
		components: {
			HotSearch
		},
		methods: {
			closeSearchBox() {
				this.$emit('closeSearchBox')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.c-search {
		position: absolute;
		top: 0;
		z-index: 1000;
		height: 100%;
		overflow-y: scroll;

		.header {
			display: flex;
			align-items: center;
			background-color: rgb(212, 68, 57);
			height: 44px;
			width: 100vw;

			.search-icon {
				margin-right: 10px;
			}

			.input {
				color: #FFFFFF;
			}

			/deep/ .search-input {
				color: #FFFFFF;
				font-size: 14px;
			}


		}
	}
</style>
