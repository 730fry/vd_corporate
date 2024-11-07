<script setup>
import { ref } from 'vue';
import tHeaderNavBar from '@/components/templates/tHeaderNavBar.vue'
import tHeaderNavBarMenu from '@/components/templates/tHeaderNavBarMenu.vue'
const prop = defineProps({
  /** @param {String} フォントカラー */ 
  color: { type: String, default: 'main' },

  /** @param {boolean} 矢印アイコンカラー */ 
  arrowColor: { type: Boolean, default: true },
})

// pNavToggle の状態を管理する
const isOpen = ref(false);

// トグル関数
const toggleNav = () => {
  isOpen.value = !isOpen.value;
};

const arrowColor = false;

</script>

<template>
  <div class="vHeaderNavBar">
    <tHeaderNavBar  
    :isOpen="isOpen" 
    @toggle-nav="toggleNav" 
    />
  </div>

  <tHeaderNavBarMenu
    :isOpen="isOpen" 
    :class="['vHeaderNavBar-nav', { 'vHeaderNavBar-nav--open': isOpen }]"
    color="basic"
    :arrowColor="arrowColor"
    />

  <div
    :isOpen="isOpen" 
    :class="['vHeaderNavBar-overlay', { 'vHeaderNavBar-overlay--open': isOpen }]"
    class="vHeaderNavBar-overlay" 
    @click="toggleNav"
    >
  </div>
</template>

<style lang="scss">

.vHeaderNavBar {
  position: fixed;
  z-index: 999;

  @include mq('SHORT'){
    width: 100%;
    top: 0;
    left: 0;
  }

  @include mq('LARGE'){
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}

// ナビゲーションメニュー
.vHeaderNavBar-nav {
  position: fixed;
  z-index: 1;
  top: 0;
  
  @include mq('SHORT'){
    transform: translateY(-100%);
  }

  @include mq('LARGE'){
    transform: translateX(137%);

  }
  
  // アニメーションは後で調整
  transition: transform 0.5s ease;

  // 開いた時のスタイル
  &--open {
    @include mq('SHORT'){
      transform: translateY(0);
    }

    @include mq('LARGE'){
      transform: translateX(37%);
    }
    
  }
}

// オーバレイ
.vHeaderNavBar-overlay {
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
  @include backgroundOpacity;

  // 開いた時のスタイル
  &--open {
    opacity: 1;
    visibility: visible;
  }
}

</style>