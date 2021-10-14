import { createStore } from 'vuex';

export default createStore({
	// data
	state: {
		counter: 0,
	},
	//changes state (cant use async methods)
	mutations: {},
	//cant change data but can use async methods such as api
	actions: {},
	//filters state vefore passed onto components
	getters: {},
	modules: {},
});
