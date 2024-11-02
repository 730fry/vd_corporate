<script setup>
import pHeadLogo from '@/components/parts/pHeadLogo.vue'
import tHeaderLabel from '~/components/templates/tHeaderLabel.vue'
const prop = defineProps({})
</script>

<template>
  <div class="vHeader">
    <pHeadLogo fileName="vd_logo_lrg.png" />
    <tHeaderLabel />
  </div>
</template>

<style lang="scss">
@use '@/assets/styles/props' as *;

.vHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2em;
  padding-bottom: 2em;

  @include border();
}
</style>
