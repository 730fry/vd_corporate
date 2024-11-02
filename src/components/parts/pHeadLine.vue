<script setup>
import cHeadLine from '@/components/commons/cHeadLine.vue'
import cParagraph from '@/components/commons/cParagraph.vue'

	
const prop = defineProps({ 
  /** @param {String} タイトル */
  title:{ type: String, default: 'タイトル' },

  /** @param {String} タイトルカラー */
  titleColor:{ type: String, default: 'main' },

  /** @param {Number} タイトルフォントサイズ */
	titleFontsize: { type: Number, default: 1 },

  /** @param {String} 説明文 */
  text:{ type: String, default: 'テキスト' },

  /** @param {String} フォントカラー */
  textColor:{ type: String, default: 'main' },

  /** @param {Number} タイトルフォントサイズ */
	textFontsize: { type: Number, default: 1 },
});

</script>

<template>
	<div class="pHeadLine">
    <!-- タイトルがない場合はタイトル要素は表示されない -->
    <cHeadLine 
      class="pHeadLine-headLine"
      v-if="prop.title != null"
      :titles="[prop.title]"
      :color="[prop.titleColor]"
      :fontsize="[prop.titleFontsize]"
    />

    <!-- テキストがない場合はテキスト要素は表示されない -->
    <cParagraph 
      v-if="prop.text != null"
      class="pHeadLine-text"
      :texts="[prop.text]"
      :color="[prop.textColor]"
      :fontsize="[prop.textFontsize]"
    />
</div>
</template>

<style lang="scss">
	.pHeadLine{}
</style>