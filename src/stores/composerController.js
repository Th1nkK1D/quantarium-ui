import Qapi from '../lib/Qapi'
import gates from '../assets/gates.json'

const state = {
  composer: {
    isDisplay: false,
    availableGates: gates.map(gate => gate.symbol),
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
  updateComposerStates (state, newComposerState) {
    Object.assign(state.composer, newComposerState)
  },
  pushAppliedGate (state, gateSymbol) {
    state.composer.appliedGates.push(gateSymbol)
  },
  popAppliedGate (state) {
    state.composer.appliedGates.splice(state.composer.appliedGates.length - 1, 1)
  }
}

const actions = {
  initComposer ({ commit }) {
    commit('updateComposerStates', state)
  },
  async getComposerStatus ({ state, commit }) {
    const newState = await Qapi.getStatus(state.global.apiServer)
    console.log(newState)

    commit('updateComposerStates', {
      appliedGates: newState.gates,
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
        parameter: gate.symbol
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
  async measure ({ state, commit }, batchSize = 1) {
    if (!state.composer.collapsed) {
      const measurement = await Qapi.measure(state.global.apiServer, batchSize)
      console.log(measurement)

      commit('updateComposerStates', {
        collapsed: true,
        measurement: measurement
      })
    }
  },
  async unmeasure ({ state, commit }) {
    if (state.composer.collapsed) {
      commit('updateComposerStates', {
        collapsed: true,
        measurement: {
          batchSize: 0,
          result: [0, 0]
        }
      })

      this.measurement = {
        batchSize: 0,
        result: [0, 0]
      }

      const newState = await Qapi.unmeasure(state.global.apiServer)
      console.log(newState)
    }
  }
}

export default { state, mutations, actions }
