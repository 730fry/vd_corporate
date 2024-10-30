<script setup>
  const prop = defineProps({
    /** @param {String} 画像の代替テキスト */
    altText: String,

    /** @param {String|null} 画像のURL */
    fileName: { type: String, default: ""},

    /** @param {String} PC表示時の画像の幅 */
    pcWidth: { type: String, default: "1280" },

    /** @param {String} SP表示時の画像の幅 */
    spWidth: { type: String, default: "780" },

    /** @param {String} SP表示時の画像の高さ */
    spHeight: { type: String, default: "300" },

    /** @param {String} PC表示時の画像の高さ */
    pcHeight: { type: String, default: "150" },

    /** @param {String} アスペクト比 ('9:16' | '3:2' | '1:1') */
    aspectRatio: { type: String, default: 'null' }, // デフォルトはnull

    /** @param {Boolean} 画像を円形にするかどうか */
    isCircle: {type: Boolean, default: false },

    /** @param {String} border-radiusのサイズ ('50%' | '30%') */
    borderRadius: { type: String, default: '50%' } // デフォルトは50%
  });


/**
 * 関数 スタイルを算出する
 */
const styleset = computed( () => {
  const style = {
    "--width-sp":`${prop.spWidth}em`,
    "--width-pc":`${prop.pcWidth}em`,
    borderRadius: prop.isCircle ? prop.borderRadius : '0'
  }

  // // aspectRatioが設定されている場合のみobjectFitを追加
  // if (prop.aspectRatio) {
  //   Object.assign(style, getObjectFitStyle(prop.aspectRatio));
  // }

  return style
})

/**
 * 関数 スタイルを算出する
 */
const aspectRatioClass = computed(() => {
  switch (prop.aspectRatio) {
    case '9:16':
      return 'aspect-cover-9-16'; // 9:16に対応
    case '3:2':
      return 'aspect-cover-3-2'; // 3:2に対応
    case '1:1':
      return 'aspect-cover-1-1'; // 1:1に対応
    default:
      return ''; // 指定がない場合は空
  }
});

</script>

<template>
  <figure class="cImage">
    <NuxtImg
    :class="[
      'cImage-elem',
      'aspectRatioClass',
      { circle: isCircle }
    ]"
    :style="styleset"
    :src="`${prop.fileName}`"   
    :alt="altText"
    loading="lazy"
    format="webp"
  />
  </figure>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/mediaquery' as *;


.cImage {
  .cImage-elem {
    max-width: 100%;
    height: auto; /* アスペクト比を維持 */
    border-radius: var(--border-radius, 0);

    // SP
    @include mq('SHORT') { width: var(--width-sp); }
    // PC
    @include mq('LARGE') { width: var(--width-pc); }

    // object fitの設定
    &.object-fit-9-16 {
      aspect-ratio: 9/16;
      object-fit: cover; /* 9:16 の場合もカバー */
      height: auto;
    }

    &.object-fit-3-2 {
      aspect-ratio: 3/2;
      object-fit: cover; /* 3:2 の場合はカバー */
      height: auto;
    }

    &.object-fit-1-1 {
      aspect-ratio: 1/1;
      object-fit: cover; /* 3:2 の場合はカバー */
      height: auto;
    }
  }
}
</style>