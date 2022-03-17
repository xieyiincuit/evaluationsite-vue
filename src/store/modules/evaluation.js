//initial state
const state = () => ({
    typeList: []
})

//getters
const getters = {
    categoryMap(state) {
        var map = new Map()
        state.typeList.forEach(element => {
            map.set(element.categoryId, element.categoryType)
        });
        return map
    }
}

// actions
const actions = {

}

// mutations
const mutations = {
    saveTypeList(state, types) {
        state.typeList = types
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}