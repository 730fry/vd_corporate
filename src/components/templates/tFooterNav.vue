<script setup>
  import pHeadLogo from '@/components/parts/pHeadLogo.vue'
  import pNavCompanyLink from '@/components/parts/pNavCompanyLink.vue'
  import pNavButtonLink from '@/components/parts/pNavButtonLink.vue'
	
  const prop = defineProps({ 
		
	});
</script>


<template>
  <div class="tFooterNav">
    <pHeadLogo class=""
      fileName="vd_logo_lrg.png"
    />
    <div class="tFooterNav-container">
      <pNavButtonLink class=""/>
      <pNavCompanyLink class=""/>
    </div>
  </div>
</template>

<style lang="scss">
  .tFooterNav {
    .tFooterNav-container {
      @include mq('LARGE'){
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
      }
    }
  }
</style>