import {cloneDeep} from 'lodash';

const state = {
	modelLink: '',
	testArr: [1, 2, 3, 4, 5],
	testObj: {
		a: 'a',
		b: 'b',
	},
};

const getters = {
	
};

const actions = {

};

const mutations = {
	setModelLink(state, payload) {
		state.modelLink = payload.value;
	},
	initTestArr(state) {
		state.testArr = [1, 2, 3, 4, 5];
	},
	chgTestArr(state) {
		state.testArr[0] = 10;
	},
	chgTestArrAll(state) {
		state.testArr[0] = 10;

		let cloneTestArr = cloneDeep(state.testArr);
		state.testArr = cloneTestArr;
	},
	addTestArr(state) {
		let newVal = state.testArr.length + 1;

		state.testArr.push(newVal);
	},
	spliceTestArr(state) {
		let delIdx = state.testArr.length - 1;

		state.testArr.splice(delIdx, 1);
		window.console.log(state.testArr);
	},
	setTestArr(state, payload) {
		state.testArr = payload;
	},
	initTestObj(state) {
		state.testObj =  {
			a: 'a',
			b: 'b',
		};
	},
	chgTestObj(state) {
		state.testObj.a = 'chg';
	},
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};

