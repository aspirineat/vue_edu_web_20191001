import axiosService from '@/components/service/AxiosService'
import { reject } from 'q';

const state = {
	list: [],
};

const getters = {
	
};

const actions = {
	getList({commit}, payload) {
		return new Promise((resolve) => {
			axiosService.getList(payload)
				.then(listData => {
					commit('setList', {listData});

					resolve();
				})
				.catch(err => {
					reject(err);
				});
		});
	},
};

const mutations = {
	setList(state, payload) {
		state.list = payload.listData;
	},
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};

