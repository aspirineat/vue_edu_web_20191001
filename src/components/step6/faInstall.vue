<template>
<div>
	<h4>Font awesome 설치하기!</h4>
	
	<h4>1. 설치</h4>
	<div>npm i --save @fortawesome/fontawesome-svg-core</div>
	<div>npm i --save @fortawesome/vue-fontawesome</div>
	<div>npm i --save @fortawesome/free-solid-svg-icons</div>
	<div>npm i --save @fortawesome/free-regular-svg-icons</div>

	<h4>2. main.js에 컴포넌트 등록</h4>
	<div>import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'</div>
	<div>Vue.component('font-awesome-icon', FontAwesomeIcon)</div>

	<h4>3. 사용할 vue에서 library 등록</h4>
	<div>import { library } from '@fortawesome/fontawesome-svg-core'</div>
	<div>import { faCopyright } from '@fortawesome/free-regular-svg-icons'</div>
	<div>import { faPlayCircle, faStopCircle } from '@fortawesome/free-solid-svg-icons'</div>
	<div>library.add(faCopyright, faPlayCircle, faStopCircle)</div>

	<h4>4. 사용</h4>
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