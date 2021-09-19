<template>
	<page-meta :root-font-size="rootFontSize" page-style="font-size: 16px;height: 100%;box-sizing: border-box;">
	</page-meta>

	<view id="container">
		<view class="search-header">
			<uni-icons class="icons" color="#FFFFFF" type="list" size="22"></uni-icons>
			<uni-search-bar class="search" v-model="searchInput" @focus="showSearchComp" cancelButton="none"
				placeholder="请输入歌曲名、歌手名" />
		</view>

		<!--搜索组件-->
		<uni-transition mode-class="slide-right" :show="SearchComp"
			:styles="{ 'position': 'absolute', top: '0', zIndex: 1000 }">
			<Search class="search" @closeSearchBox="SearchComp = false"></Search>
		</uni-transition>


		<uni-segmented-control :current="0" :values="values" styleType="button" activeColor="#d44439"
			@clickItem="onClickItem" />
		<view v-show="current === 0">
			<RecommendSong />
		</view>
		<view v-show="current === 1">
			1
		</view>
		<view v-show="current === 2">
			w
		</view>

	</view>
</template>

<script>
	import Search from './components/Search'
	import RecommendSong from './components/RecommendSong'
	export default {
		components: {
			Search,
			RecommendSong
		},
		data() {
			return {
				searchInput: '',
				rootFontSize: this.$rootFontSize,
				SearchComp: false,
				current: 0,
				values: ['推荐', '排行', '歌手']
			}
		},
		methods: {
			search(e) {
				console.log(this.searchInput)
			},
			showSearchComp() {
				this.SearchComp = true
			},
			onClickItem(e) {
				this.current = e.currentIndex
			}
		}
	}
</script>

<style lang="scss" scoped>
	/deep/ :not(not) {
		box-sizing: border-box;
	}
	
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

	#container {
		/deep/ .segmented-control__text {
			color: #FFFFFF !important;
		}

		/deep/ .segmented-control__item--button--active .segmented-control__text::after {
			content: '';
			width: 100%;
			background-color: #FFFFFF;
			height: 1px;
			display: block;
		}

		/deep/ .segmented-control {
			background-color: #d44439;
		}

		/deep/ .segmented-control__item--button--first {
			border-radius: 0;
		}

		/deep/ .segmented-control__item--button--last {
			border-radius: 0;
		}
	}
</style>
