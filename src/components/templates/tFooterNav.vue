<script setup>
  import pHeadLogo from '@/components/parts/pHeadLogo.vue'
  import pNavCompanyLink from '@/components/parts/pNavCompanyLink.vue'
  import pNavButtonLink from '@/components/parts/pNavButtonLink.vue'
	
  const prop = defineProps({ 
		/** @param {String} フォントカラー */ 
		color: { type: String, default: 'main' },

    /** @param {boolean} 矢印アイコンカラー */ 
		arrowColor: { type: Boolean, default: true }
	});
</script>


<template>
  <div class="tFooterNav">
    <pHeadLogo class=""
      fileName="vd_logo_lrg.png"
    />
    <div class="tFooterNav-container">
      <pNavButtonLink 
        class="tFooterNav-elem" 
        :color="color"
        :arrowColor="prop.arrowColor"
        />
      <pNavCompanyLink 
        class="tFooterNav-elem" 
        :color="color" 
        :arrowColor="prop.arrowColor"
      />
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

      .tFooterNav-elem {
        @include mq('LARGE'){
          width: 50%;
        }
      }
    }
  }
</style>