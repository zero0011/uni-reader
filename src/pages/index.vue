<template>
	<div class="ebook">
		<title-bar :ifTitleAndMenuShow="ifTitleAndMenuShow"></title-bar>
		<div class="read-wrapper">
      <div id="read"></div>
      <div class="mask">
        <div class="left" @click="prevPage"></div>
        <div class="center" @click="toggleTitleAndMenu"></div>
        <div class="right" @click="nextPage"></div>
      </div>
    </div>
	</div>
</template>

<script>
import TitleBar from '@/components/TitleBar'
import Epub from 'epubjs';
const DOWNLOAD_URL = 'https://7072-prod-5gh32l65f8b623ca-1302196729.tcb.qcloud.la/book/258745.epub?sign=29d3f2ba6f92135c910eaeec31bd927f&t=1714896659'
global.ePub = Epub
export default {
	components: {
		TitleBar,
	},
	data() {
		return {
			ifTitleAndMenuShow: false,
			fontSizeList: [
				{ fontSize: 12 },
				{ fontSize: 14 },
				{ fontSize: 16 },
				{ fontSize: 18 },
				{ fontSize: 20 },
				{ fontSize: 22 },
				{ fontSize: 24 }
			],
			defaultFontSize: 16,
			themeList: [
				{
					name: 'default',
					style: {
						body: {
							'color': '#000', 'background': '#fff'
						}
					}
				},
				{
					name: 'eye',
					style: {
						body: {
							'color': '#000', 'background': '#ceeaba'
						}
					}
				},
				{
					name: 'night',
					style: {
						body: {
							'color': '#fff', 'background': '#000'
						}
					}
				},
				{
					name: 'gold',
					style: {
						body: {
							'color': '#000', 'background': 'rgb(241, 236, 226)'
						}
					}
				}
			],
			defaultTheme: 0,
			// 图书是否处于可用状态
			bookAvailable: false,
			navigation: {}
		}
	},
	onReady () {
		this.downloadText()
			.then((textData) => {
				this.showEpub(textData)
			})
			.catch((err) => {
				console.log(err)
			})
	},
	methods: {
		// 下载电子书资源
		downloadText() {
			return new Promise((resolve, reject) => {
					uni.request({
						url: DOWNLOAD_URL,
						responseType: "arraybuffer",
						success: (res) => {
							resolve(res.data)
						},
						fail: () => {
							reject()
						}
				})
			})
		},

		// 切换标题和菜单的显示状态
		toggleTitleAndMenu() {
			this.ifTitleAndMenuShow = !this.ifTitleAndMenuShow
		},
		// 上一页
		prevPage() {
			if (this.rendition) {
				this.rendition.prev()
			}
		},
		// 下一页
		nextPage() {
			if (this.rendition) {
				this.rendition.next()
			}
		},
		// 电子书的解析和渲染
		showEpub(textData) {
			// 生成Book对象
			this.book = new Epub(textData);
			// 通过Book.renderTo生成Rendition对象
			this.rendition = this.book.renderTo('read', {
				height: '100%',
				width: '100%',
				// 兼容iOS
				method: 'default'
			})
			// 通过Rendtion.display渲染电子书
			this.rendition.display()
			// 获取Theme对象
      this.themes = this.rendition.themes
      // Book对象的钩子函数ready
      this.book.ready.then(() => {
        this.navigation = this.book.navigation
        // 生成Locations对象
        return this.book.locations.generate()
      }).then(result => {
        // 保存locations对象
        this.locations = this.book.locations
        // 标记电子书为解析完毕状态
        this.bookAvailable = true
      })

		}
	}
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/global';

.ebook {
	position: relative;
	height: 100%;
	overflow: hidden;

	.read-wrapper {
		height: 100%;
		width: 100%;

		#read {
			height: 100%;
			width: 100%;
		}

		.mask {
			position: absolute;
			top: 0;
			left: 0;
			z-index: 100;
			display: flex;
			width: 100%;
			height: 100%;

			.left {
				flex: 0 0 px2rem(200);
			}

			.center {
				flex: 1;
			}

			.right {
				flex: 0 0 px2rem(200);
			}
		}
	}
}
</style>
