import Vue from 'vue'
import Vuex from 'vuex'

import globalSetting from './globalSetting'
import stageDirector from './stageDirector'
import composerController from './composerController'

Vue.use(Vuex)

const state = {
  ...globalSetting.state,
  ...stageDirector.state,
  ...composerController.state
}
const getters = {
  ...globalSetting.getters,
  ...stageDirector.getters,
  ...composerController.getters
}

const mutations = {
  ...globalSetting.mutations,
  ...stageDirector.mutations,
  ...composerController.mutations
}

const actions = {
  ...globalSetting.actions,
  ...stageDirector.actions,
  ...composerController.actions
}

export default new Vuex.Store({ state, getters, mutations, actions })
