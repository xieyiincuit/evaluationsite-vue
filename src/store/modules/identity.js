//initial state
const state = () => ({
    token: null,
    user: null,
    role: null
})

//getters
const getters = {

}

// actions
const actions = {
}

// mutations
const mutations = {
    saveToken(state, newToken) {
        state.token = newToken
        window.localStorage.setItem("access_token", newToken);
    },
    saveUserInfo(state, userInfo) {
        state.user = userInfo.profile
        state.role = userInfo.profile.role
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}