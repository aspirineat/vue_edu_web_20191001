<template>
<div>
	<h4>Axios 사용하기!</h4>
	<div><input v-model="cnt"><button v-on:click="getList()">get list</button></div>
	<br/>
	<div 
		v-for="(item, idx) in list"
		v-bind:key="idx">{{item}}</div>
</div>
</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
	data() {
		return {
			cnt: '',
		};
	},
	computed: {
		...mapState('step5', {
			'list': 'list',
		}),
	},
	methods: {
		...mapActions('step5', {
			'getListAct': 'getList',
		}),

		getList() {
			let param = {
				cnt: this.cnt
			};

			this.getListAct(param)
				.then(() => {
					alert('list 조회 성공!');
				})
				.catch(msg => {
					alert(msg);
				})
		},
	},
}
</script>

<style scoped>

</style>