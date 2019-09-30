<template>
<div>
	<h4>Font awesome 사용하기!</h4>
	
	<div>
		<font-awesome-icon icon="play-circle" size="3x"
			:style="{color: 'blue'}"/>
		/
		<font-awesome-icon icon="stop-circle" size="3x"
			:style="{color: 'blue'}"></font-awesome-icon>
		/
		<font-awesome-icon  size="3x"
			:style="{color: '#00D8FF'}" :icon="['far', 'copyright']"></font-awesome-icon>
	</div>
</div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { faPlayCircle, faStopCircle } from '@fortawesome/free-solid-svg-icons'
library.add(faCopyright, faPlayCircle, faStopCircle)

export default {
	
}
</script>

<style scoped>

</style>