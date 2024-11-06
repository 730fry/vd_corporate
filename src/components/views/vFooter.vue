<script setup>
import tFooterNav from '~/components/templates/tFooterNav.vue'
import tFooterLabel from '~/components/templates/tFooterLabel.vue'

const prop = defineProps({
  /** @param {String} フォントカラー */ 
  color: { type: String, default: 'main' },

  /** @param {boolean} 矢印アイコンカラー */ 
  arrowColor: { type: Boolean, default: true }
})


</script>

<template>
  <div class="vFooter">
    <tFooterNav 
    :color="color"
    :arrowColor="prop.arrowColor"
    />
    <tFooterLabel 
    :color="color"
    />
  </div>
</template>

<style lang="scss">

.vFooter {
  
}
</style>
