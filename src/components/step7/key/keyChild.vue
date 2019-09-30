<template>
<div>
	{{itemInfo.val}}
</div>
</template>

<script>
export default {
	props: {
		itemInfo: {
			type: Object,
			default: () => {},
		},
	}
}
</script>

<style scoped>

</style>


