const state = {
    title: {
        num:"",
        msg:""
    }
};
const getters = {
    title: state => state.title
};
const mutations = {
    setTitle: (state, title) => state.title = title
};
const actions = {
    setTitleAsync: ({ commit }, title) => commit("setTitle", title)
};
export default {
    state, getters, mutations, actions
}