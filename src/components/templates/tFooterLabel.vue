<script setup>
  import pHeadButton from '@/components/parts/pHeadButton.vue'
  import pNavLink from '@/components/parts/pNavLink.vue'
	const prop = defineProps({ 
		
	});
</script>


<template>
  <div class="tFooterLabel">
    <pNavLink/>
    <pHeadButton
      href="/contact"
		  linkType="INNER"
    >Contact</pHeadButton>
  </div>
</template>

<style lang="scss">
  .tHeaderLabel {
    display: flex;
    align-items: center;
    column-gap: 1em;
  }
</style>