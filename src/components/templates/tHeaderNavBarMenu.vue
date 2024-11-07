<script setup>
  import pHeadLogo from '@/components/parts/pHeadLogo.vue'
  import pNavLinkTerms from '@/components/parts/pNavLinkTerms.vue'
  import pNavButtonLink from '@/components/parts/pNavButtonLink.vue'
	
  const prop = defineProps({ 
		/** @param {String} フォントカラー */ 
		color: { type: String, default: 'main' },

    /** @param {boolean} 矢印アイコンカラー */ 
		arrowColor: { type: Boolean, default: true },
	});
</script>


<template>
  <div class="tHeaderNavBarMenu">
    <pHeadLogo class="tHeaderNavBarMenu-logo"
    fileName="vd_logo_lrg.png"
    />
    <div class="tHeaderNavBarMenu-container">
      <pNavButtonLink 
        class="tHeaderNavBarMenu-elem tHeaderNavBarMenu-links" 
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
    @include gradationGB(100deg);
    height: 100vh;
    position: relative;

      @include mq('SHORT'){
        padding-top: 8em;
        padding-bottom: 4em;
        padding-left: 2em;
        padding-right: 2em;
        width: 100%;
      }

      @include mq('LARGE'){
        width: 73%;
        padding-top: 4em;
        padding-bottom: 4em;
        padding-left: 8em;
        padding-right: 4em;
        
      }

      // ボーダー
      &::after {
        content: "";
        position: absolute;
        background-color: var(--border-color-white);
        
        @include mq('SHORT'){
          width: 95%;
          height: 1px;
          top: 5em;
          left: 50%;
          transform: translateX(-50%);
        }

        @include mq('LARGE'){
          width: 1px;
          height: 100%;
          top: 0;
          right: 6.5em;
        }
      }

      .tHeaderNavBarMenu-logo {
        @include mq('SHORT'){ display: none; }
      }

      .tHeaderNavBarMenu-container {

        @include mq('SHORT'){ }

        @include mq('LARGE'){ }

        // テキストの調整
        .tHeaderNavBarMenu-links {
          .pNavButtonLink-elem { @include mqFontSize(2.8em, 2.4em); }

          .pNavButtonLink-list {
            .pNavButtonLink-list--elem { @include mqFontSize(0.5em, 0.5em); }
          }
        }

        .tHeaderNavBarMenu-terms {
          flex-direction: column;
          @include mq('SHORT'){ }

          @include mq('LARGE'){ }
        }
      }
    
  }
</style>