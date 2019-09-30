const state = {
	msg: 'step4 state',
	cnt: 0,
};

const getters = {
	reverseMsg(state) {
		return state.msg.split('').reverse().join('');
	},
	perCnt(state) {
		return state.cnt + '%';
	},
};

const actions = {
	testAct1({commit}) {
		return new Promise((resolve) => {
			commit('addCnt');

			resolve();
		});
	},
	testAct2({commit}, payload) {
		return new Promise((resolve, reject) => {
			if (payload.isResolve) {
				commit('addCnt');

				resolve();
			} else {
				reject('reject!!!');
			}
		});
	},
};

const mutations = {
	addCnt(state) {
		state.cnt++;
	},
	setMsg(state, payload) {
		state.msg = payload.newMsg;
	},
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};

