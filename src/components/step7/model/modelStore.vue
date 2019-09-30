<template>
<div>
	<h4>Store Model link</h4>
	<div><input v-model="modelInput"> / {{modelLink}}</div>
</div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';

export default {
	computed: {
		...mapState('step7', {
			'modelLink': 'modelLink',
		}),

		modelInput: {
			get() {
				return this.modelLink;
			},
			set(value) {
				this.setModelLink({value});
			},
		},
	},
	methods: {
		...mapMutations('step7', {
			'setModelLink': 'setModelLink',
		}),
	},
}
</script>

<style scoped>

</style>


