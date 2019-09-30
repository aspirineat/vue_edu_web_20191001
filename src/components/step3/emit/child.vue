<template>
<div>
	<div>나는 Child > <button v-on:click="clickBtn()">부모 evt</button></div>
</div>
</template>

<script>
export default {
	methods: {
		clickBtn() {
			this.$emit('parentEvt');
		}
	},
}
</script>

<style scoped>

</style>


