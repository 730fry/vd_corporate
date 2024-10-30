<script setup>

const prop = defineProps({
	/** @param {Array} テキスト */
	texts: { type: Array, default: [''] },
	//CSSの設定

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
	<p :class="[
		'cParagraph',
		`cParagraph--pcnewline-${prop.pcnewline}`,
		`cParagraph--spnewline-${prop.spnewline}`,
		`cParagraph--color-${prop.color}`,
	]" :style="styleset">

		<span v-for="text in prop.texts" :key="`text-${index}`" class="cParagraph--elem" >
			{{text}}
		</span>
	</p>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/mediaquery' as *;
@use '@/assets/styles/color' as *;

.cParagraph {
	.cParagraph--elem {
		// 設定値からCSSを変更	
		font-size: var(--fontsize);
		line-height: var(--lheight);
	}
}
//改行の設定
.cParagraph {
	@include mq('SHORT') {
		&.cParagraph--spnewline-extrusion {
			.cParagraph--elem {
				display: inline-block;
			}
		}

		&.cParagraph--spnewline-force {
			.cParagraph--elem {
				display: inline-block;
				width: 100%;
			}
		}
		
		text-align: var(--spTxAlign);
	}

	@include mq('LARGE') {
		&.cParagraph--pcnewline-extrusion {
			.cParagraph--elem {
				display: inline-block;
			}
		}

		&.cParagraph--pcnewline-force {
			.cParagraph--elem {
				display: inline-block;
				width: 100%;
			}
		}

		text-align: var(--pcTxAlign);
	}
}

//文字色の設定
.cParagraph {
	&.cParagraph--color-main {
		color: $textP;
	}

	&.cParagraph--color-basic {
		color: $textW;
	}
}
</style>