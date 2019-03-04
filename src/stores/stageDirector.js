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
    state.stage = {
      id: 0,
      storyMode: true
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
  loadAllScenes ({ state, commit }) {
    commit('initScenes')
    commit('applySetting', state.story.scenes[0])
  },
  loadNextScene ({ state, commit }) {
    const nextSceneId = state.stage.id + 1

    let nextScene = state.story.scenes[nextSceneId]
    nextScene.stage.id = nextSceneId

    commit('applySetting', nextScene)
  },
  fireEvent ({ state, commit, dispatch }, payload) {
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
          dispatch('loadNextScene')
        }
      }
    }
  }
}

export default { state, mutations, actions }
