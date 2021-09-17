<template>
	<page-meta :root-font-size="rootFontSize"></page-meta>
	<view id="container">
		<view class="search-header">
			<uni-icons class="icons" type="list" size="22"></uni-icons>
			<uni-search-bar class="search" v-model="searchInput" @input="search" cancelButton="none"
				placeholder="请输入歌曲名/歌手名" />

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchInput: '',
				rootFontSize: this.$rootFontSize
			}
		},
		methods: {
			search: function(e) {
				console.log(this.searchInput)
			}
		}
	}
</script>


<style lang="scss" scoped>
	.search-header {
		background-color: #d44439;
		display: flex;
		height: 44px;
		align-items: center;

		.icons {
			padding: 11px;
		}

		.search {

			/deep/ .uni-searchbar__box {
				height: 22px;
			}
		}
	}
</style>
