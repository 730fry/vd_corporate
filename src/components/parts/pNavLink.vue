<script setup>
  import cAnker from '@/components/commons/cAnker.vue'
  
	const prop = defineProps({ 
		
	});
</script>


<template>
  <div class="pNavLink">
    <cAnker class="pNavLink-elem" href="/about" linkType="INNER">About Us</cAnker>
    <cAnker class="pNavLink-elem" href="/works" linkType="INNER">Works</cAnker>
    <cAnker class="pNavLink-elem" href="/Lab" linkType="INNER">Lab</cAnker>
    <cAnker class="pNavLink-elem" href="/Company" linkType="INNER">Company</cAnker>
  </div>
</template>

<style lang="scss">
  .pNavLink {
    display: flex;
    align-items: center;
    column-gap: 1em;
    @include fontEng;
  }
</style>