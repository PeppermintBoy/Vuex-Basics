import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
	// data
	state: {
		counter: 0,
		colorCode: 'blue',
	},
	//changes state (cant use async methods)
	// function(state, commit from action)
	//aka commit
	mutations: {
		increaseCounter(state, randomNumber) {
			state.counter += randomNumber;
		},
		decreaseCounter(state, randomNumber) {
			state.counter -= randomNumber;
		},
		setColorCode(state, newValue) {
			state.colorCode = newValue;
		},
	},
	//cant change data but can use async methods such as api
	//aka dispatch
	actions: {
		increaseCounter({ commit }) {
			console.log('increase numba (from actions)');
			axios(
				'https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new'
			).then(response => commit('increaseCounter', response.data));
		},
		decreaseCounter({ commit }) {
			console.log('increase numba (from actions)');
			axios(
				'https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new'
			).then(response => commit('decreaseCounter', response.data));
		},
		setColorCode({ commit }, newValue) {
			commit('setColorCode', newValue);
		},
	},
	//filters state before passed onto components (final touchup)
	getters: {
		counterSquared(state) {
			return state.counter * state.counter;
		},
	},
	modules: {},
});
