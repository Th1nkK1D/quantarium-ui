import Vue from 'vue'
import Vuex from 'vuex'

import stageDirector from './stageDirector'
import composerController from './composerController'

import baseConfig from '@/assets/baseConfig.json'

Vue.use(Vuex)

const state = {
  ...baseConfig,
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
