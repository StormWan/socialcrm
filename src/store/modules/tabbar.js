
const state = {
  activeTab: 0
}

// mutations
const mutations = {
  setActiveTab (state, index) {
    state.activeTab = index
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
