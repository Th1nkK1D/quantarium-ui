import baseConfig from '@/assets/baseConfig.json'
import scenes from '@/assets/scenes.json'

const state = {
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
  }
}

const mutations = {
  initScenes (state) {
    state.story = {
      scenes: scenes,
      total: scenes.length
    }
  },
  applySetting (state, setting) {
    Object.keys(setting).forEach(key => Object.assign(state[key], setting[key]))
  },
  popPassCondition (state) {
    state.stage.passConditions.splice(0, 1)
  }
}

const actions = {
  loadAllScenes ({ commit, state }) {
    commit('initScenes')
    commit('applySetting', baseConfig)
    commit('applySetting', state.story.scenes[0])
    commit('applySetting', state.story.scenes[1])
  },
  fireEvent ({ commit, state }, payload) {
    console.log(payload)

    const { trigger, parameter, result, errorRate } = state.stage.passConditions[0]

    if (
      (!trigger || trigger === payload.trigger) &&
      (!parameter || parameter === payload.parameter) &&
      (!result || Math.abs(result - payload.result) < errorRate)
    ) {
      commit('popPassCondition')

      if (state.stage.passConditions.length === 0) {
        if (state.stage.id === state.story.total - 1) {
          console.log('story mode completed')
        } else {
          commit('applySetting', state.story.scenes[state.stage.id + 1])
        }
      }
    }
  }
}

export default { state, mutations, actions }
