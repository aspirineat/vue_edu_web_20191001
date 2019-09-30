const state = {
	layerInfo: {},
	selectedLayerId: 'none',
};

const getters = {
	selectLayerInfo(state) {
		return state.layerInfo[state.selectedLayerId];
    },
};

const actions = {
	setLayerInfo({dispatch, commit, state, rootState}, payload) {
		return new Promise((resolve, reject) => {
			window.console.log('cur layer id: ' + state.selectedLayerId);
			window.console.log('hello2 layer id: ' + rootState.hello2.layerId);
			
			commit('setSelectedLayerId', {layerId: payload.curId});
			dispatch('addLayerInfo')
				.then(() => {
					return dispatch('hello2/addLayerInfo', payload, { root: true });
				})
				.then(() => resolve())
				.catch(() => {
					reject('error!');
				});
		});
	},
	addLayerInfo({commit}) {
		return new Promise((resolve) => {
			// 무언가 비동기 작업!
			resolve();
		});
	},
};

const mutations = {
	setSelectedLayerId(state, payload) {
		state.selectedLayerId = payload.layerId;
	},
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};

