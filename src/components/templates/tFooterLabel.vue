<script setup>
  import pNavLinkTerms from '@/components/parts/pNavLinkTerms.vue'
  import pFooterCopyright from '@/components/parts/pFooterCopyright.vue'
	
  const prop = defineProps({ 
		
	});
</script>


<template>
  <div class="tFooterLabel">
    <pNavLinkTerms class="tFooterLabel-link"/>
    <pFooterCopyright class="tFooterLabel-copyright"/>
  </div>
</template>

<style lang="scss">
  .tFooterLabel {
    @include border($show-top: true, $show-bottom: false);
    @include mq('SHORT'){
      padding-top: 2em;
      padding-bottom: 2em;
    }

    @include mq('LARGE'){
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 4em;
      padding-bottom: 4em;
    }

    .tFooterLabel-link {
      @include mq('SHORT'){
        flex-direction: column;
      }
    }

    .tFooterLabel-copyright {

    }
  }
</style>