<script setup>

const prop = defineProps({
	/** @param {Array} テキスト */
	titles: { type: Array, default: [''] },
	
	/** @param {String} フォントタイプ */
	headline: { type: String, default: 'h1' },

	/** @param {String} フォントカラー */
	color: { type: String, default: 'main' },

	/** @param {String} 行の高さ */
	lheight: { type: Number, default: 1.5 },

	/** @param {Number} フォントサイズ */
	fontsize: { type: Number, default: 1 },

	//改行の設定 force（絶対改行） or extrusion (はみ出したときキリ良く改行) or none （自働改行しない）
	/** @param {String} PC時の改行設定 */
	pcnewline: { type: String, default: 'none' },

	/** @param {String} SP時の改行設定 */
	spnewline: { type: String, default: 'none' },

	/** @param {String} PC表示時のテキストの配置 */
	pcTxAlign: { type: String, default: 'left' },

	/** @param {String} SP表示時のテキストの配置 */
	spTxAlign: { type: String, default: 'left' },
});


/**
 * 関数 スタイルを算出する
 */
const styleset = computed(() => {
	const style = {
		/** @property {string} 行の高さ */
		"--lheight": `${prop.lheight}`,

		/** @property {string} fontsize フォントサイズ */
		"--fontsize": `${prop.fontsize}em`,

		/** @property {string} PC表示時のテキストの配置 */
		"--pcTxAlign": `${prop.pcTxAlign}`,

		/** @property {string} SP表示時のテキストの配置 */
		"--spTxAlign": `${prop.spTxAlign}`,
	}
	return style
})

</script>



<template>
	<!-- テキスト全体要素 クラスで全体のスタイルを設定する -->
	<component :is="prop.headline" :class="[
		'cHeadLine',
		`cHeadLine--pcnewline-${prop.pcnewline}`,
		`cHeadLine--spnewline-${prop.spnewline}`,
		`cHeadLine--color-${prop.color}`,
	]" :style="styleset">

		<span v-for="text in prop.titles" :key="`text-${index}`" class="cHeadLine--elem" >
			{{text}}
		</span>
	</component>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/mediaquery' as *;
@use '@/assets/styles/color' as *;
@use '@/assets/styles/font' as *;

.cHeadLine {
	.cHeadLine--elem {
		// 設定値からCSSを変更	
		font-size: var(--fontsize);
		line-height: var(--lheight);
	}
}
//改行の設定
.cHeadLine {
	@include fontEng;

	@include mq('SHORT') {
		&.cHeadLine--spnewline-extrusion {
			.cHeadLine--elem {
				display: inline-block;
			}
		}

		&.cHeadLine--spnewline-force {
			.cHeadLine--elem {
				display: inline-block;
				width: 100%;
			}
		}
		
		text-align: var(--spTxAlign);
	}

	@include mq('LARGE') {
		&.cHeadLine--pcnewline-extrusion {
			.cHeadLine--elem {
				display: inline-block;
			}
		}

		&.cHeadLine--pcnewline-force {
			.cHeadLine--elem {
				display: inline-block;
				width: 100%;
			}
		}

		text-align: var(--pcTxAlign);
	}
}

//文字色の設定
.cHeadLine {
	&.cHeadLine--color-main {
		color: $textP;
	}

	&.cParagraph--color-basic {
		color: $textW;
	}
}
</style>