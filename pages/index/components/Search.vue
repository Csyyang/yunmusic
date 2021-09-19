<template>
	<view class="c-search">
		<view class="header">
			<uni-icons class="search-icon" @click="closeSearchBox" color="#fff" type="arrowleft" size="22"></uni-icons>
			<input class="input" placeholder-class="search-input" type="text" placeholder="搜索歌曲、歌手"
				@input="searchHot" />
		</view>

		<view class="search-body">
			<!-- <HotSearch /> -->
			<SearchResult />
		</view>
	</view>
</template>

<script>
	import HotSearch from './HotSearch'
	import SearchResult from './SearchResult'
	export default {
		components: {
			HotSearch,
			SearchResult
		},
		methods: {
			closeSearchBox() {
				this.$emit('closeSearchBox')
			},
			searchHot(e) {
				console.log(e.detail.value)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.c-search {
		background-color: #FFFFFF;


		.header {
			border-top: 1px solid #e47871;

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
	
	.search-body {
		height: calc(100vh - 88px);
		overflow: scroll;
	}
</style>
