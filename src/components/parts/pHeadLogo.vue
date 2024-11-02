<script setup>
  import cAnker from '@/components/commons/cAnker.vue'
  import cImage from '@/components/commons/cImage.vue'

	const prop = defineProps({ 
		/** @param {String} リンク先 */ 
		href: String,

    /** @param {String|null} 画像のURL */
    fileName: { type: String, default: ""}, 
	});

	const getHref = () => {
		return prop.href
	}

  const getFileName = () => {
		return prop.fileName
	}
</script>


<template>
  <div class="pHeadLogo">
    <cAnker :href="getHref()" >
    <cImage
      :fileName="getFileName()"
      altText="logo"
    />
	</cAnker>
  </div>
</template>

<style lang="scss">
  .pHeadLogo {
    width: 24em;
  }
</style>