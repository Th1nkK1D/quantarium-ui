import Vue from 'vue'
import Vuex from 'vuex'

import scenes from '@/assets/scenes.json'

Vue.use(Vuex)

const state = {
  global: {
    apiServer: ''
  },
  story: {
    scenes: [],
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
  initScenes (state) {
    state.story = {
      scenes: scenes,
      total: scenes.length
    }
  },
  applyScene (state, i) {
    Object.keys(state.story.scenes[i]).forEach(key => Object.assign(state[key], state.story.scenes[i][key]))
  }
}

const actions = {
  loadAllScenes ({ commit }) {
    commit('initScenes')
    commit('applyScene', 0)
    commit('applyScene', 1)
  }
}

export default new Vuex.Store({ state, mutations, actions })
