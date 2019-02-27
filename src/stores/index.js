import Vue from 'vue'
import Vuex from 'vuex'

import stageDirector from './stageDirector'
import composerController from './composerController'

Vue.use(Vuex)

const state = {
  global: {
    apiServer: ''
  },
  ...stageDirector.state,
  ...composerController.state
}

const mutations = {
  ...stageDirector.mutations,
  ...composerController.mutations
}

const actions = {
  ...stageDirector.actions,
  ...composerController.actions
}

export default new Vuex.Store({ state, mutations, actions })
