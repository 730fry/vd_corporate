<script setup>
  import cAnker from '@/components/commons/cAnker.vue'
  
	const prop = defineProps({ 
		/** @param {String} フォントカラー */ 
		color: { type: String, default: 'main' } // デフォルトの色を設定
	});
</script>


<template>
  <div class="pNavCompanyLink">
    <cAnker class="pNavCompanyLink-elem" href="/" linkType="INNER" :color="color">
      <span class="pNavCompanyLink-elem--info">
        <span class="pNavCompanyLink-info--elem">〒100-0013</span>
        <span class="pNavCompanyLink-info--elem">東京都千代田区霞ヶ関1丁目4番1号</span>
        <span class="pNavCompanyLink-info--elem">日土地ビル2F SENQ霞が関<img class="pNavCompanyLink-arrow" src="/assets/images/arrow_p.svg" alt=""></span>
      </span>
    </cAnker>
    <cAnker class="pNavCompanyLink-elem" href="/" linkType="INNER" :color="color">
      <span class="pNavCompanyLink-elem--info">
        <span class="pNavCompanyLink-info--bold">tel:</span>03-4405-5225<img class="pNavCompanyLink-arrow" src="/assets/images/arrow_p.svg" alt="">
      </span>
    </cAnker>
    <cAnker class="pNavCompanyLink-elem" href="/" linkType="INNER" :color="color">
      <span class="pNavCompanyLink-elem--info">
        <span class="pNavCompanyLink-info--bold">e-mail:</span>info@visionary-design.tokyo<img class="pNavCompanyLink-arrow" src="/assets/images/arrow_p.svg" alt="">
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