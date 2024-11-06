<script setup>
  import pHeadLogo from '@/components/parts/pHeadLogo.vue'
  import pNavLinkTerms from '@/components/parts/pNavLinkTerms.vue'
  import pNavButtonLink from '@/components/parts/pNavButtonLink.vue'
	
  const prop = defineProps({ 
		/** @param {String} フォントカラー */ 
		color: { type: String, default: 'main' },

    /** @param {boolean} 矢印アイコンカラー */ 
		arrowColor: { type: Boolean, default: true },

    isOpen: { type: Boolean, default: false }
	});
</script>


<template>
  <div :class="['tHeaderNavBarMenu', {'tHeaderNavBarMenu--open': isOpen}]">
    <pHeadLogo class="tHeaderNavBarMenu-logo"
      fileName="vd_logo_lrg.png"
    />
    <div class="tHeaderNavBarMenu-container">
      <pNavButtonLink 
        class="tHeaderNavBarMenu-elem tHeaderNavBarMenu-" 
        :color="color"
        :arrowColor="prop.arrowColor"
        />
      <pNavLinkTerms 
        class="tHeaderNavBarMenu-elem tHeaderNavBarMenu-terms" 
        :color="color" 
        :arrowColor="prop.arrowColor"
      />
    </div>
  </div>
</template>

<style lang="scss">
  .tHeaderNavBarMenu {
    display: none; /* 初期状態は非表示 */
    opacity: 0;
    transition: opacity 0.3s ease-in-out;

    background-color: lightblue;
    .tHeaderNavBarMenu-logo {
      @include mq('SHORT'){ display: none; }
    }
    .tHeaderNavBarMenu-container {
      
      .tHeaderNavBarMenu-terms {
        @include mq('SHORT'){
          flex-direction: column;
        }
      }
    }

    // 開いた時のスタイル
    &--open {
      display: block; 
      opacity: 1;
      background-color: orange;
    }
  }
</style>