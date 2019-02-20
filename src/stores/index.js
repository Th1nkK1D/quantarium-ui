import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  global: {
    server: ''
  },
  story: {
    sequence: [],
    total: 0
  },
  stage: {
    id: 0,
    storyMode: false,
    passConditions: []
  },
  narrator: {
    text: ''
  },
  composer: {
    isDisplay: false,
    availableGates: [],
    allowMeasure: false,
    appliedGates: [],
    collapsed: false,
    measurement: {
      batchSize: 0,
      result: [0, 0]
    }
  }

}

const mutations = {

}

const actions = {

}

export default new Vuex.Store({ state, mutations, actions })
