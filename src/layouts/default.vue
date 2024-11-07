<script setup>
  import vHeader from '@/components/views/vHeader.vue'
  import vHeaderNavBar from '@/components/views/vHeaderNavBar.vue'
	import vFooter from '@/components/views/vFooter.vue'
</script>

<template>
  <!--ヘッダー-->
  <vHeader class="layoutHeader" />
  <!-- メニューバー -->
  <vHeaderNavBar/>
  <!--ページ個別コンテンツ-->
  <div class="layoutContent">
    <!-- slotの中に各ページが入る -->
    <slot></slot>
  </div>
  <!--フッターー-->
  <vFooter class="layoutFooter" />  
</template>


<style lang="scss" >

.layoutContent {
  
}
</style>