<script setup>

</script>



<template>
	<div class="pBackTop">
		<img class="pBackTop-arrow" src="/assets/images/arrowUp.svg" alt="">
		<span class="pBackTop-text">
			<span class="pBackTop-text-elem">back to top</span>
		</span>
	</div>
</template>

<style lang="scss" scoped>
	.pBackTop {
		display: flex;
		align-items: center;
		@include mq('SHORT'){
			column-gap: 1.2em;
		}

		@include mq('LARGE'){
			column-gap: 1.6em;
		}
		

		.pBackTop-arrow {
			width: 1em;
		}

		.pBackTop-text {
			.pBackTop-text-elem {
				text-transform: uppercase;
				@include fontEng;
				@include mqFontSize(1.2em, 1.1em);
				font-weight: 600;
				color: $textP;
			}
		}
	}
</style>