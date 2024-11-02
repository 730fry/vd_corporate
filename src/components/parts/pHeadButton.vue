<script setup>
  import cAnker from '@/components/commons/cAnker.vue'

	const prop = defineProps({ 
		/** @param {String} リンク先 */ 
		href: String,
	});

	const getHref = () => {
		return prop.href
	}

</script>


<template>
	<cAnker
		class="pHeadButton"
		color="basic"
		:href="getHref()" 
	  >
		<slot>click</slot>
	</cAnker>
</template>


<style lang="scss">
	.pHeadButton {
		@include fontEng;
		display: inline-block;
    border-radius: 30px;
		padding: 0.3em 1em;
		@include gradationP;
	}
</style>