<template>
<div>
	<h4>Parent > Child 데이터 전달!</h4>
	<div>나는 Parent > 전달할 msg: {{pMsg}}</div>
	<child-component
		v-bind:parentMsg="pMsg"></child-component>
</div>
</template>

<script>
import childComponent from './child';

export default {
	components: {
		childComponent
	},
	data() {
		return {
			pMsg: 'hellow child!',
		}
	},
}
</script>

<style scoped>

</style>


