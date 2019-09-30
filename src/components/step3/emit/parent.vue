<template>
<div>
	<h4>Parent 이벤트 호출!</h4>
	<div>나는 Parent > parent cnt: {{cnt}}</div>
	<child-component
		v-on:parentEvt="incrementCnt"></child-component>
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
			cnt: 0,
		}
	},
	methods: {
		incrementCnt() {
			this.cnt ++;
		}
	},
}
</script>

<style scoped>

</style>


