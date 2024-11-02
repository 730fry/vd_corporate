<script setup>
  import cAnker from '@/components/commons/cAnker.vue'
  
	const prop = defineProps({ 
		/** @param {String} フォントカラー */ 
		color: { type: String, default: 'main' } // デフォルトの色を設定
	});
</script>


<template>
  <div class="pNavLinkTerms">
    <cAnker class="pNavLinkTerms-elem" href="/" linkType="INNER" :color="color">プライバシーポリシー</cAnker>
    <cAnker class="pNavLinkTerms-elem" href="/" linkType="INNER" :color="color">免責事項</cAnker>
    <cAnker class="pNavLinkTerms-elem" href="/" linkType="INNER" :color="color">反社会勢力に対する基本方針</cAnker>
  </div>
</template>

<style lang="scss">
  .pNavLinkTerms {
    .pNavLinkTerms-elem {
      @include fontEng;
    }
  }
</style>