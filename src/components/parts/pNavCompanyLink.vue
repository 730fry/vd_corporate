<script setup>
  import { defineProps, computed } from 'vue'
  import cAnker from '@/components/commons/cAnker.vue'
  
  // 矢印アイコンのパス
  import arrowP from '@/assets/images/arrow_p.svg'
  import arrowW from '@/assets/images/arrow_w.svg'

	const prop = defineProps({ 
		/** @param {String} フォントカラー */ 
		color: { type: String, default: 'main' }, 

    /** @param {boolean} 矢印アイコンカラー */ 
		arrowColor: { type: Boolean, default: true } 
	});

  /**　矢印アイコンの表示を切り替える computed プロパティ
   * 　arrowColor が true の場合は arrow_p.svg、false の場合は arrow_w.svg を返す。
  */ 
  const arrowSrc = computed(() => prop.arrowColor ? arrowP : arrowW);
</script>


<template>
  <div class="pNavCompanyLink">
    <cAnker class="pNavCompanyLink-elem" href="/" linkType="INNER" :color="color">
      <span class="pNavCompanyLink-elem--info">
        <span class="pNavCompanyLink-info--elem">〒100-0013</span>
        <span class="pNavCompanyLink-info--elem">東京都千代田区霞ヶ関1丁目4番1号</span>
        <span class="pNavCompanyLink-info--elem">日土地ビル2F SENQ霞が関
          <img 
            class="pNavCompanyLink-arrow" 
            :src="arrowSrc"
            alt="arrow">
        </span>
      </span>
    </cAnker>
    <cAnker class="pNavCompanyLink-elem" href="/" linkType="INNER" :color="color">
      <span class="pNavCompanyLink-elem--info">
        <span class="pNavCompanyLink-info--bold">tel:</span>03-4405-5225
        <img 
          class="pNavCompanyLink-arrow" 
          :src="arrowSrc"
          alt="arrow">
      </span>
    </cAnker>
    <cAnker class="pNavCompanyLink-elem" href="/" linkType="INNER" :color="color">
      <span class="pNavCompanyLink-elem--info">
        <span class="pNavCompanyLink-info--bold">e-mail:</span>info@visionary-design.tokyo
        <img 
          class="pNavCompanyLink-arrow" 
          :src="arrowSrc"
          alt="arrow">
      </span>
    </cAnker>
  </div>
</template>

<style lang="scss">
  .pNavCompanyLink {

    .pNavCompanyLink-elem {
      width: fit-content;
      display: block;

      .pNavCompanyLink-elem--info {
        display: flex;

        .pNavCompanyLink-info--bold {
          text-transform: uppercase;
          font-weight: 900;
        }

        .pNavCompanyLink-arrow {
          width: 1em;
        }
      }

      &:nth-child(1) {
        .pNavCompanyLink-elem--info {
          flex-direction: column;

          .pNavCompanyLink-info--elem {
            display: flex;
          }
        }
        
      }

      &:nth-child(n+2) {
        @include fontEng;
        .pNavCompanyLink-elem--info {
          display: flex;
          align-items: center;
        }
        
      }

      
    }
  }
</style>