<script setup>
	const prop = defineProps({ 

		/** @param {String} 背景色 */
		background : { type: String, default: ''},

  });

   /**
     * 関数
     * 背景色のクラス名を返す
     * @returns {string} 背景のクラス名
     */
    const backgroundType = () => {
      switch(prop.background) {
        case 'ダーク':
          return 'dark';
        case '':
        default:
          return ''; 
      }
    }
</script>


<template>
	<section 
    :class="['pSectionArea', `pSectionArea-bg--${backgroundType()}`]"
    >
    <div class="pSectionArea-container">
      <slot></slot>
    </div>
  </section>
</template>


<style lang="scss">
	.pSectionArea {
		&.pSectionArea-bg--dark {
      background-color: $backgroundB;
    }

    .pSectionArea-container {
      margin-left: auto;
      margin-right: auto;

      @include mq('SHORT'){ 
        width: 95%;
      }

      @include mq('LARGE'){
        width: 95%;
        max-width: 1230px;
      }
    }
	}
</style>