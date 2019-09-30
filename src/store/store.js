import Vue from 'vue'
import Vuex from 'vuex'

import hello from './modules/hello/helloModule'
import hello2 from './modules/hello/hello2Module'
import step4 from './modules/step4Module'
import step5 from './modules/step5Module'
import step7 from './modules/step7Module'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		hello,
		hello2,
		step4,
		step5,
		step7,
	},
});


