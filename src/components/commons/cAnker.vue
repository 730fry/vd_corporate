<script setup>
const prop = defineProps({
  /** @param {String} リンク先 */
  href: String,

  /** @param {Boolean} リンクを新しいウィンドウ、タブで開くかどうか。 */
  targetBlank: { type: Boolean, default: false },

  /** @param {String} リンクのタイプ ('INNER' | 'OUTER' | 'DLOAD') */
  linkType: { type: String, default: 'INNER' },

  /** @param {String} フォントカラー */
  color: { type: String, default: 'main' },

  /** @param {Number} フォントサイズ */
  fontsize: { type: Number, default: 1.3 },
});

// hrefが空かどうかをチェック
const isEmptyHref = computed(() => {
    return !prop.href || prop.href === '';
});

/**
 * リンク先のターゲットを返す。
 */
const linkTarget = () => {
    return prop.targetBlank ? '_blank' : '_self';
};

// イベントクリックハンドラー (必要に応じて実装)
const eventClick = (event) => {
    // ここにクリック時の処理を書く
    console.log('リンクがクリックされました:', prop.href);
};

// getElem関数が必要な場合は、適切に定義してください。
const getElem = () => {
    // 条件に基づいて返すコンポーネント名を決定する処理を書く
    return 'span'; // デフォルトで<span>を返す例
};

/**
 * 関数 スタイルを算出する
 */
 const styleset = computed(() => {
	const style = {
		/** @property {string} fontsize フォントサイズ */
		"--fontsize": `${prop.fontsize}em`,
	}
	return style
})
</script>


<template>
  <template v-if="isEmptyHref">
    <component :is="getElem()"
      :class="[
      'cAnker',
      'cAnker--nolink',
      `cAnker--color-${prop.color}`,
      // 他のコンポーネントからクラスを得るための記述
      // $attrs.class が配列かどうかをチェックし、配列であればそのまま、
      // そうでなければ配列としてラップして返す
      ...(Array.isArray($attrs.class) ? $attrs.class : [$attrs.class])
      ]"
      :style="styleset"
      >
      <slot>click</slot>
    </component>
  </template>
  
  <template v-else>
    <NuxtLink
      v-if="linkType === 'INNER'"
      :to="href"
      :class="[
      'cAnker',
      'cAnker--inner',
      `cAnker--color-${prop.color}`,
      // 他のコンポーネントからクラスを得るための記述
      // $attrs.class が配列かどうかをチェックし、配列であればそのまま、
      // そうでなければ配列としてラップして返す
      ...(Array.isArray($attrs.class) ? $attrs.class : [$attrs.class])
      ]"
      :style="styleset"
      @click="eventClick"
    >
      <slot>click</slot>
    </NuxtLink>

    <a
      v-else-if="linkType === 'OUTER'"
      :class="[
      'cAnker',
      'cAnker--outer',
      `cAnker--color-${prop.color}`,
      // 他のコンポーネントからクラスを得るための記述
      // $attrs.class が配列かどうかをチェックし、配列であればそのまま、
      // そうでなければ配列としてラップして返す
      ...(Array.isArray($attrs.class) ? $attrs.class : [$attrs.class])
      ]"
      :href="href"
      :style="styleset"
      target="_blank"
      @click="eventClick"
      rel="noopener noreferrer"
    >
      <slot>click</slot>
    </a>

    <a
      v-else-if="linkType === 'DLOAD'"
      :class="[
      'cAnker',
      'cAnker--download',
      `cAnker--color-${prop.color}`,
      // 他のコンポーネントからクラスを得るための記述
      // $attrs.class が配列かどうかをチェックし、配列であればそのまま、
      // そうでなければ配列としてラップして返す
      ...(Array.isArray($attrs.class) ? $attrs.class : [$attrs.class])
      ]"
      :href="href"
      :style="styleset"
      download
      @click="eventClick"
    >
      <slot>click</slot>
    </a>
  </template>
</template>


<style lang="scss" scoped>
@use '@/assets/styles/color' as *;

	.cAnker {
    text-decoration: none;
    cursor: pointer;
    user-select: none;
    font-size: var(--fontsize);

    // 文字の色設定
    &.cAnker--color-main {
      color: $textP;
    }

    &.cAnker--color-basic {
      color: $textW;
    }
  }
</style>