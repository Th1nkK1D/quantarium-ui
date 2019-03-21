import Vue from 'vue'
import Vuex from 'vuex'

import stageDirector from './stageDirector'
import composerController from './composerController'

Vue.use(Vuex)

console.log(window.location.hostname)

const state = {
  global: {
    apiServer: `http://${window.location.hostname}:3000/api`
  },
  ...stageDirector.state,
  ...composerController.state
}
const getters = {
  ...stageDirector.getters,
  ...composerController.getters
}

const mutations = {
  ...stageDirector.mutations,
  ...composerController.mutations
}

const actions = {
  ...stageDirector.actions,
  ...composerController.actions
}

export default new Vuex.Store({ state, getters, mutations, actions })
