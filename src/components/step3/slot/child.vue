<template>
<div>
	<div>Parent Msg > {{parentMsg}}</div>
	<slot name="header"
		v-bind:childM="childMsg"
		v-bind:childEtc="etcMsg"
		v-bind:childF="childFunc">
	</slot>
	<slot name="footer"
		v-bind:childF="childFunc">
	</slot>
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
	data() {
		return {
			childMsg: 'child msg!',
			etcMsg: 'etc msg!',
		}
	},
	methods: {
		childFunc() {
			alert('call child function!');
		}
	},
}
</script>

<style scoped>

</style>


