<script setup>
  import { ref } from 'vue';
  import pNavToggle from '@/components/parts/pNavToggle.vue'
  import pHeadLogo from '@/components/parts/pHeadLogo.vue'
  import pHeadButton from '@/components/parts/pHeadButton.vue'
  import tHeaderNavBarMenu from '@/components/templates/tHeaderNavBarMenu.vue'
	
  const prop = defineProps({ 
		/** @param {String} フォントカラー */ 
		color: { type: String, default: 'main' },

    /** @param {boolean} 矢印アイコンカラー */ 
		arrowColor: { type: Boolean, default: true }
	});

  // pNavToggle の状態を管理する
  const isOpen = ref(false);

  // トグル関数
  const toggleNav = () => {
    isOpen.value = !isOpen.value;
  };
</script>


<template>
  <div :class="['tHeaderNavBar', {'tHeaderNavBar--open': isOpen}]">
    <pHeadLogo
      fileName="vd_logo_sml.png"
      class="tHeaderNavBar-logo"
    />

    <pNavToggle 
      class="tHeaderNavBar-toggle"
      @click="toggleNav"/>

  
    <pHeadButton
      href="/contact"
		  linkType="INNER"
      class="tHeaderNavBar-contact"
    >Contact</pHeadButton>
  </div>

  <tHeaderNavBarMenu
    :color="color"
    :arrowColor="prop.arrowColor"
    :isOpen="isOpen"
  />
</template>

<style lang="scss">
  .tHeaderNavBar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    @include mq('SHORT'){
      padding-top:1em;
      padding-bottom: 1em;
      padding-left: 5%;
      padding-right: 5%;
      border-radius: 0 0 10px 10px;
      background-color: $textW;
      background-color: lightcoral;
    }

    @include mq('LARGE'){
      flex-direction: column;
      justify-content: center;
      width: 6.5em;
      height: 30em;
      border-radius: 10px 0 0 10px;
      @include gradationGB(230deg);
      position: relative;
    }

    // ロゴ
    .tHeaderNavBar-logo {
      width: 7.5em;
      
      @include mq('LARGE'){
        filter: brightness(0) invert(1);
        transform-origin: center;
        transform: rotate(90deg);
        position: absolute;
        top: 50px;
      }
    }

    // コンタクトボタン
    .tHeaderNavBar-contact {
      display: none;

      @include mq('LARGE'){
        display: inline-block;
        transform-origin: center;
        transform: rotate(90deg);
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.1);
        padding: 0.8em 1.8em;
        position: absolute;
        bottom: 45px;
      }
    }

    // クリックされた時のスタイル
    &--open {
      background: transparent;

      // ロゴ
      .tHeaderNavBar-logo { 
        @include mq('LARGE'){
          display: none;
        }
      }

      // ハンバーガーボタン
      .tHeaderNavBar-toggle {
        .pNavToggle-hamburger--open {
          @include mq('LARGE'){
            width: 48px;
            height: 128px;
          }
        }
      }

      // コンタクトボタン
      .tHeaderNavBar-contact {
        @include mq('LARGE'){
          display: none;
        }
      }

    }
  }
</style>