<template>
<div>
	<div>나는 Child > 받은 msg: {{parentMsg}}</div>
</div>
</template>

<script>
export default {
	props: {
		parentMsg: {
			type: String,
			default: '',
		},
	},
}
</script>

<style scoped>

</style>


