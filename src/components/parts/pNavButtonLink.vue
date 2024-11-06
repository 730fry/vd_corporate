<script setup>
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
  <div class="pNavButtonLink">
    <div class="pNavButtonLink--container">
      <cAnker class="pNavButtonLink-elem" href="/about" linkType="INNER" :color="color">About Us</cAnker>
      <ul class="pNavButtonLink-list link-elem--2">
        <li class="pNavButtonLink-list--head"><cAnker class="pNavButtonLink-elem" :color="color">Service</cAnker></li>
        <li class="pNavButtonLink-list--elem">
          <cAnker class="pNavButtonLink-elem" linkType="OUTER" :color="color">
            marketing
            <img 
              class="pNavButtonLink-arrow" 
              :src="arrowSrc"
              alt="arrow"
            >
          </cAnker>
        </li>
        <li class="pNavButtonLink-list--elem">
          <cAnker class="pNavButtonLink-elem" linkType="OUTER" :color="color">
            creative direction
            <img class="pNavButtonLink-arrow" 
              :src="arrowSrc"
              alt="arrow"
            >
          </cAnker>
        </li>
        <li class="pNavButtonLink-list--elem">
          <cAnker class="pNavButtonLink-elem" linkType="OUTER" :color="color">
            outbound | inbound
            <img class="pNavButtonLink-arrow" 
              :src="arrowSrc"
              alt="arrow"
            >
          </cAnker>
        </li>
        <li class="pNavButtonLink-list--elem">
          <cAnker class="pNavButtonLink-elem" linkType="OUTER" :color="color">
            leaning
            <img class="pNavButtonLink-arrow" 
              :src="arrowSrc"
              alt="arrow"
            >
          </cAnker>
        </li>
      </ul>
    </div>

    <div class="pNavButtonLink--container">
      <cAnker class="pNavButtonLink-elem" href="/works" linkType="INNER" :color="color">Works</cAnker>
      <cAnker class="pNavButtonLink-elem" href="/Lab" linkType="INNER" :color="color">Lab</cAnker>
      <cAnker class="pNavButtonLink-elem" href="/Company" linkType="INNER" :color="color">Company</cAnker>
      <cAnker class="pNavButtonLink-elem" href="/Contact" linkType="INNER" :color="color">Contact</cAnker>
    </div>
  </div>
</template>

<style lang="scss">
  .pNavButtonLink {

    @include mq('LARGE'){
      display: flex;
    }

    .pNavButtonLink--container {
      display: flex;
      flex-direction: column;

      @include mq('LARGE'){
        width: 50%;
      }
    }
    

    .pNavButtonLink-elem {
      width: fit-content;
      @include fontEng;
    }
    

    .pNavButtonLink-list {
      .pNavButtonLink-list--head {}

      .pNavButtonLink-list--elem {
        .pNavButtonLink-elem {
          display: flex;
          text-transform: uppercase;
          .pNavButtonLink-arrow {
            width: 1em;
          }
        }
      }
    }
  }
</style>