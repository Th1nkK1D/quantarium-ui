const state = {
  global: {
    apiServer: `http://${window.location.hostname}:3000/api`,
    language: 1
  }
}

const getters = {
  langSwitch (state) {
    return function (textList) {
      return textList[state.global.language]
    }
  }
}

const mutations = {
  setLanguage (state, value) {
    state.global.language = value
  }
}

const actions = {
  toggleNextLanguage ({ state, commit }) {
    commit('setLanguage', (state.global.language + 1) % 2)
  }
}

export default { state, getters, mutations, actions }
