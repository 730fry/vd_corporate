<script setup>
  import { ref } from 'vue';

	const prop = defineProps({ 
    /** @param {Boolean} 開いているか */
	  isOpen : { type: Boolean,   default: false  },
	});

  // ローカル状態のisOpenをrefで管理
  const localIsOpen = ref(prop.isOpen);

  // 開閉をトグルする関数
  const toggleOpen = () => {
    localIsOpen.value = !localIsOpen.value;
  };
</script>


<template>
  <div class="pNavToggle" @click="toggleOpen">
    <div :class="['pNavToggle-hamburger', {'pNavToggle-hamburger--open' : localIsOpen } ]">
      <div class="pNavToggle-hamburger--container">
        <span class="pNavToggle-hamburger--bar"></span>
        <span class="pNavToggle-hamburger--bar"></span>
        <span class="pNavToggle-hamburger--bar"></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .pNavToggle {
    .pNavToggle-hamburger {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;

      @include mq('SHORT'){
        width: 52px;
        height: 32px;
      }

      @include mq('LARGE'){
        width: 52px;
        height: 32px;
      }

      .pNavToggle-hamburger--container {
        position: relative;
        cursor: pointer;

        @include mq('SHORT'){
          width: 36px;
          height: 12px;
        }

        @include mq('LARGE'){
          width: 40px;
          height: 12px;
        }

      .pNavToggle-hamburger--bar {
        display : block;
        width   : 100%;
        height  : 1.5px;
        position: absolute;
        transition: 0.3s ease-in-out;
        
          @include mq('SHORT'){
            background-color: $textP;
          }

          @include mq('LARGE'){
            background-color: $textW;
          }

          &:nth-of-type(1) {
            top: 0;
          }

          &:nth-of-type(2) {
            top: 5.5px;
          }

          &:nth-of-type(3) {
            bottom: 0;
          }
        }
      } 
      
      &--open {
        background-color: rgba(0,0,0, 0.1);

        .pNavToggle-hamburger--container {
          width: 16px;
          height: 14px;

          .pNavToggle-hamburger--bar {
            
            &:nth-of-type(1) {
              transform: rotate(40deg) translateY(8px);
              right: -5px;
            }

            &:nth-of-type(2) {
              opacity: 0;
            }

            &:nth-of-type(3) {
              transform: rotate(-40deg) translateY(-8px);
              left: 5px;
            }
          }
        }
      }
    }
  }
</style>