<template>
<div>
	<h4>v-slot!</h4>
	<child-component v-bind:parentMsg="pMsg">
		<template v-slot:header="childData">
			<div>child msg 가져오기 > {{childData}}</div>
		</template>
		<template v-slot:footer="childData">
		<!-- <template v-slot:footer> -->
			<div>
				<button v-on:click="childData.childF">child function 호출</button>
			</div>
		</template>
	</child-component>
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


