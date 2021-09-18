<template>
	<page-meta :root-font-size="rootFontSize" page-style="font-size: 16px;height: 100%;border-box: boxsizing">
	</page-meta>
	<view id="container">
		<view class="search-header">
			<uni-icons class="icons" color="#FFFFFF" type="list" size="22"></uni-icons>
			<uni-search-bar class="search" v-model="searchInput" @focus="showSearchComp" cancelButton="none"
				placeholder="请输入歌曲名、歌手名" />

		</view>

		<Search class="search" v-if="SearchComp" @closeSearchBox="SearchComp = false"></Search>
	</view>
</template>

<script>
	import Search from './components/Search'
	export default {
		components: {
			Search
		},
		data() {
			return {
				searchInput: '',
				rootFontSize: this.$rootFontSize,
				SearchComp: false
			}
		},
		methods: {
			search(e) {
				console.log(this.searchInput)
			},
			showSearchComp() {
				this.SearchComp = true
			}
		}
	}
</script>


<style lang="scss" scoped>
	#container {
		border-top: 1px solid #e47871;
	}

	.search-header {
		background-color: #d44439;
		display: flex;
		height: 44px;
		align-items: center;
		position: relative;
		justify-content: center;

		.icons {
			padding: 11px;
			position: absolute;
			left: 0;
		}

		.search {

			/deep/ .uni-searchbar__box {
				height: 22px;
			}
		}
	}
</style>
