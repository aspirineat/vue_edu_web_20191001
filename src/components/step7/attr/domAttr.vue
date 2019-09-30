<template>
<div>
	<h4>v-bind:attr</h4>
	<div
		:id="id"
		:class="testArr.join('_')">속성 테스트</div>
</div>
</template>

<script>
export default {
	data() {
		return {
			testArr: ['test', 'class'],
		}
	},
	created() {
		this.id = 'created_id';
	},
	mounted() {
		// this.id = 'mounted_id';
	},
}
</script>

<style scoped>
.test_class {
	color: gray;
}
</style>


