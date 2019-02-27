import Qapi from '../lib/Qapi'

const state = {
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
  updateComposerStates (state, newComposerState) {
    Object.assign(state.composer, newComposerState)
  }
}

const actions = {
  async getComposerStatus ({ commit, state }) {
    const res = await Qapi.getStatus(state.global.apiServer)
    console.log(res)

    commit('updateComposerState', {
      appliedGates: res.gates,
      collapsed: res.collapsed !== false,
      measurement: res.measurement
    })
  }
}

export default { state, mutations, actions }
