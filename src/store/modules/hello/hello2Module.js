const state = {
	layerId: 'hello2',
};

const getters = {
	
};

const actions = {	
	addLayerInfo({commit}) {
		return new Promise((resolve) => {
			// 무언가 비동기 작업!
			resolve();
		});
	},
};

const mutations = {

};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};

