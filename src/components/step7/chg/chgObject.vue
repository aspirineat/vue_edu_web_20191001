<template>
<div>
	<h4>Array/Object 값 변경</h4>

	<h4>Array > {{testArr}} <button v-on:click="initArr()">초기화</button></h4>
	<div><button v-on:click="chgArr()">값 변경</button> / <button v-on:click="chgArr(true)">값 변경</button> / <button v-on:click="addArr()">값 추가</button> / <button v-on:click="delArr()">값 삭제</button></div>
	<br/>
	<h4>Object > {{testObj}} <button v-on:click="initObj()">초기화</button></h4>
	<div><button v-on:click="chgObj()">값 변경</button></div>
</div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';

export default {
	computed: {
		...mapState('step7', {
			'testArr': 'testArr',
			'testObj': 'testObj',
		}),
	},
	methods: {
		...mapMutations('step7', {
			'initTestArr': 'initTestArr',
			'chgTestArr': 'chgTestArr',
			'chgTestArrAll': 'chgTestArrAll',
			'addTestArr': 'addTestArr',
			'spliceTestArr': 'spliceTestArr',
			'initTestObj': 'initTestObj',
			'chgTestObj': 'chgTestObj',
			'chgTestObjAll': 'chgTestObjAll',
		}),

		initArr() {
			this.initTestArr();
		},
		chgArr(isAll) {
			if (isAll) {
				this.chgTestArrAll();
			} else {
				this.chgTestArr();
				alert('store array: ' + this.testArr);
			}
		},
		addArr() {
			this.addTestArr();
		},
		delArr() {
			this.spliceTestArr();
		},
		initObj() {
			this.initTestObj();
		},
		chgObj() {
			this.chgTestObj();
		},
	},
}
</script>

<style scoped>

</style>


