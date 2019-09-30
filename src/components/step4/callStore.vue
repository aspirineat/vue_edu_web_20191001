<template>
<div>
	<h4>Store 사용하기!</h4>
	<div>state: {{msg}} / {{cnt}}</div><br/>
	<div>getter: {{reverseMsgGetters}} / {{perCntGett}}</div><br/>
	<div>mutation: <button v-on:click="addCnt()">cnt++</button> / <input v-model="dataMsg"><button v-on:click="setMsg()">set msg</button></div><br/>
	<div>action: <button v-on:click="callACt()">call action</button></div><br/>
</div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';

export default {
	data() {
		return {
			dataMsg: '',
		};
	},
	computed: {
		...mapState('step4', ['msg', 'cnt']),
		...mapGetters('step4', {
			'reverseMsgGetters': 'reverseMsg',
			'perCntGett': 'perCnt',
		}),
	},
	methods: {
		...mapMutations('step4', {
			'addCnt': 'addCnt',
			'setMsgMu': 'setMsg',
		}),
		...mapActions('step4', {
			'testAct1': 'testAct1',
			'testAct2': 'testAct2'
		}),

		setMsg() {
			this.setMsgMu({
				newMsg: this.dataMsg,
			});
		},
		callACt() {
			this.testAct1()
				.then(() => {
					return this.testAct2({
						isResolve: false,
					});
				})
				.then(() => {
					// nothing
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