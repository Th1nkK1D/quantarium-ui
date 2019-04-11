import Vue from 'vue'

import Qapi from '../lib/Qapi'
import gates from '../assets/gates.json'

const state = {
  composer: {
    isDisplay: true,
    gateList: gates,
    availableGates: gates.map(g => g.symbol),
    focusedGate: undefined,
    appliedGates: [],
    allowMeasure: true,
    collapsed: false,
    measurement: {
      batchSize: 0,
      result: [0, 0]
    }
  }
}

const getters = {
  composerIsDisplayed (state) {
    return state.composer.isDisplay
  },
  focusedGate (state) {
    return state.composer.focusedGate
  }
}

const mutations = {
  updateComposerStates (state, newComposerState) {
    Vue.set(state, 'composer', Object.assign({}, state.composer, newComposerState))
  },
  pushAppliedGate (state, gateSymbol) {
    Vue.set(state.composer, 'appliedGates', state.composer.appliedGates.concat([gateSymbol]))
  },
  popAppliedGate (state) {
    Vue.delete(state.composer.appliedGates, state.composer.appliedGates.length - 1)
  }
}

const actions = {
  async resetComposer ({ state, commit, dispatch }) {
    const newState = await Qapi.reset(state.global.apiServer)
    console.log(newState)

    commit('updateComposerStates', {
      isDisplay: true,
      availableGates: gates.map(g => g.symbol),
      allowMeasure: true,
      appliedGates: newState.gates,
      collapsed: newState.collapsed !== false,
      measurement: newState.measurement
    })

    dispatch('unfocusGate')
  },
  async getComposerStatus ({ state, commit }) {
    const newState = await Qapi.getStatus(state.global.apiServer)
    console.log(newState)

    commit('updateComposerStates', {
      appliedGates: newState.gates.map(g => g.toLowerCase()),
      collapsed: newState.collapsed !== false,
      measurement: newState.measurement
    })
  },
  async previewGate ({ state }, gate) {
    if (!state.composer.collapsed) {
      const newState = await Qapi.previewGate(state.global.apiServer, gate.symbol)
      console.log(newState)
    }
  },
  async pushGate ({ state, commit, dispatch }, gate) {
    if (!state.composer.collapsed) {
      commit('pushAppliedGate', gate.symbol)

      const newState = await Qapi.pushGate(state.global.apiServer, gate.symbol)
      console.log(newState)

      dispatch('fireEvent', {
        trigger: 'composer-gate-push',
        parameter: gate.symbol,
        result: newState.states[newState.states.length - 1]
      })
    }
  },
  async popGate ({ state, commit }) {
    if (!state.composer.collapsed) {
      commit('popAppliedGate')

      const newState = await Qapi.popGate(state.global.apiServer)
      console.log(newState)
    }
  },
  async measure ({ state, commit, dispatch }, batchSize = 1) {
    if (!state.composer.collapsed) {
      const measurement = await Qapi.measure(state.global.apiServer, batchSize)
      console.log(measurement)

      commit('updateComposerStates', {
        collapsed: true,
        measurement: measurement
      })

      dispatch('fireEvent', {
        trigger: 'composer-measure',
        parameter: measurement.batchSize,
        result: measurement.result
      })
    }
  },
  async unmeasure ({ state, commit }) {
    if (state.composer.collapsed) {
      commit('updateComposerStates', {
        collapsed: false,
        measurement: {
          batchSize: 0,
          result: [0, 0]
        }
      })

      const newState = await Qapi.unmeasure(state.global.apiServer)
      console.log(newState)
    }
  },
  focusGate ({ commit }, gate) {
    commit('updateComposerStates', {
      focusedGate: gate
    })
  },
  unfocusGate ({ commit }) {
    commit('updateComposerStates', {
      focusedGate: undefined
    })
  },
  addChallengeMarker ({ state }, q) {
    Qapi.mark(state.global.apiServer, q)
  },
  checkChallenge ({ state }, { q1, q2 }) {
    return new Promise(async (resolve, reject) => {
      const compareRes = await Qapi.compare(state.global.apiServer, q1, q2)

      if (compareRes.result) {
        Qapi.unmark(state.global.apiServer)
      }

      resolve(compareRes.result)
    })
  }
}

export default { state, mutations, actions, getters }
