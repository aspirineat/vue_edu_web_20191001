<template>
<div>
	<h4>v-bind:key Index</h4>
	<div><button v-on:click="callWatch()">Call Watch</button></div>
	<br/>
	<div><button v-on:click="chgComputed1()">chg computed1</button> {{testComputed()}} </div>
	<div><button v-on:click="chgComputed2()">chg computed2</button> {{testComputed()}} </div>
</div>
</template>

<script>
export default {
	data() {
		return {
			testWatch: '',
			testComputed1: '',
			testComputed2: '',
			target: '',
		};
	},
	computed: {
		testComputed() {
			return () => {
				window.console.log('computed: ' + this.testComputed1 + '/' + this.testComputed2);

				return this.target;
			};
		},
	},
	watch: {
		testWatch() {
			alert('watch:' + this.testWatch);
		},
	},
	methods: {
		callWatch() {
			this.testWatch = 'chg'
		},
		chgComputed1() {
			this.testComputed1 = 'chg testCompute1';
		},
		chgComputed2() {
			this.testComputed2 = 'chg testCompute1';
		},
	},
}
</script>

<style scoped>
.test_class {
	color: gray;
}
</style>


