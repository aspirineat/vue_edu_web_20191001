import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import step1 from '@/components/step1/step1'
import step3 from '@/components/step3/step3'
import step3_props from '@/components/step3/props/parent'
import step3_emit from '@/components/step3/emit/parent'
import step3_slot from '@/components/step3/slot/parent'
import step4 from '@/components/step4/step4'
import step4_store from '@/components/step4/callStore'
import step5 from '@/components/step5/step5'
import step5_axios from '@/components/step5/callAxios'
import step6 from '@/components/step6/step6'
import step6_faInstall from '@/components/step6/faInstall'
import step6_fa from '@/components/step6/fontawesome'
import step6_elInstall from '@/components/step6/elInstall'
import step6_el from '@/components/step6/elementui'
import step7 from '@/components/step7/step7'
import step7_model from '@/components/step7/model/modelStore'
import step7_chg from '@/components/step7/chg/chgObject'
import step7_attr from '@/components/step7/attr/domAttr'
import step7_key from '@/components/step7/key/keyArray'
import step7_cw from '@/components/step7/c_w/c_w'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: 'hv',
	routes: [{
		path: '/',
		components: {
			main: HelloWorld,
		},
	}, {
		path: '/step1',
		components: {
			main: step1,
		},
	}, {
		path: '/step3',
		components: {
			main: step3,
		},
		children: [{
			path: 'props',
			components: {
				example: step3_props,
			},
		}, {
			path: 'emit',
			components: {
				example: step3_emit,
			},
		}, {
			path: 'slot',
			components: {
				example: step3_slot,
			},
		}],
	}, {
		path: '/step4',
		components: {
			main: step4,
		},
		children: [{
			path: 'store',
			components: {
				example: step4_store,
			},
		}],
	}, {
		path: '/step5',
		components: {
			main: step5,
		},
		children: [{
			path: 'axios',
			components: {
				example: step5_axios,
			},
		}],
	}, {
		path: '/step6',
		components: {
			main: step6,
		},
		children: [{
			path: 'faInstall',
			components: {
				example: step6_faInstall,
			},
		}, {
			path: 'fa',
			components: {
				example: step6_fa,
			},
		}, {
			path: 'elInstall',
			components: {
				example: step6_elInstall,
			},
		}, {
			path: 'el',
			components: {
				example: step6_el,
			},
		}],
	}, {
		path: '/step7',
		components: {
			main: step7,
		},
		children: [{
			path: 'model',
			components: {
				example: step7_model,
			},
		}, {
			path: 'change',
			components: {
				example: step7_chg,
			},
		}, {
			path: 'attr',
			components: {
				example: step7_attr,
			},
		}, {
			path: 'key',
			components: {
				example: step7_key,
			},
		}, {
			path: 'cw',
			components: {
				example: step7_cw,
			},
		}],
	}],
});
