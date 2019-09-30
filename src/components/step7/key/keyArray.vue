<template>
<div>
	<h4>v-bind:key Index</h4>
	<div><button v-on:click="initArr()">초기화</button> / <button v-on:click="chgArr()">값 삭제</button></div>
	<div>
		<ul>
			<li
				v-for="(item, idx) in testArr"
				v-bind:key="idx">
				<key-child
					v-bind:itemInfo=item></key-child>
			</li>
		</ul>
	</div>
</div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
import keyChild from './keyChild';

export default {
	components: {
		keyChild,
	},
	data() {
		return {
			testArr: [],
		};
	},
	mounted() {
		this.initArr();
	},
	methods: {
		initArr() {
			this.testArr = [{
				id: 1,
				val: '테스트1'
			}, {
				id: 2,
				val: '테스트2'
			}, {
				id: 3,
				val: '테스트3'
			}, {
				id: 4,
				val: '테스트4'
			}, {
				id: 5,
				val: '테스트5'
			}];
		},
		chgArr() {
			this.testArr = [{
				id: 1,
				val: '테스트1'
			}, {
				id: 2,
				val: '테스트 chg'
			}, {
				id: 3,
				val: '테스트3'
			}, {
				id: 4,
				val: '테스트4'
			}, {
				id: 5,
				val: '테스트5'
			}];
		}
	},
}
</script>

<style scoped>

</style>


