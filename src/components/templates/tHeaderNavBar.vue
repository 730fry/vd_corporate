<script setup>
  import pNavToggle from '@/components/parts/pNavToggle.vue'
  import pHeadLogo from '@/components/parts/pHeadLogo.vue'
  import pHeadButton from '@/components/parts/pHeadButton.vue'
	const prop = defineProps({ 
		
	});
</script>


<template>
  <div class="tHeaderNavBar">
    <pHeadLogo
      fileName="vd_logo_sml.png"
      class="tHeaderNavBar-logo"
    />

    <pNavToggle/>

    <pHeadButton
      href="/contact"
		  linkType="INNER"
      class="tHeaderNavBar-contact"
    >Contact</pHeadButton>
  </div>
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
  }
</style>