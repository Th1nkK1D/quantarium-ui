import Qapi from '@/lib/Qapi'
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
  async fireEvent ({ state, commit, dispatch }, payload) {
    console.log(payload)

    if (state.stage.storyMode) {
      const { trigger, parameter, result } = state.stage.passConditions[0]
      let compareRes

      if (result) {
        compareRes = await Qapi.compare(state.global.apiServer, result, payload.result)
      }

      if (
        (!trigger || trigger === payload.trigger) &&
        (!parameter || parameter === payload.parameter) &&
        (!result || compareRes.result)
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
}

export default { state, mutations, actions }
