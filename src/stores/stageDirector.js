import Vue from 'vue'

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

const getters = {
  narrativeIsPending (state) {
    return state.stage.passConditions && state.stage.passConditions.length > 0 && state.stage.passConditions[0].trigger === 'narrator-text-read'
  },
  storyIsDone (state) {
    return state.stage.id === state.story.total
  },
  currentObjective (state) {
    return state.stage.passConditions[0]
  }
}

const mutations = {
  initScenes (state) {
    Vue.set(state, 'story', {
      scenes: JSON.parse(JSON.stringify(scenes)), // Deep clone
      total: scenes.length
    })
    Vue.set(state, 'stage', {
      id: 0,
      storyMode: true,
      passConditions: []
    })
  },
  applySetting (state, setting) {
    Object.keys(setting).forEach(key => {
      Vue.set(state, key, Object.assign({}, state[key], setting[key]))
    })
  },
  popPassCondition (state) {
    Vue.delete(state.stage.passConditions, 0)
  }
}

const actions = {
  preApplySetting ({ state, commit, dispatch }, setting) {
    if (setting.dispatch) {
      setting.dispatch.forEach(dp => dispatch(dp.action, dp.payload))
      delete setting.dispatch
    }

    commit('applySetting', setting)
  },
  loadAllScenes ({ state, commit, dispatch }) {
    commit('initScenes')
    dispatch('preApplySetting', state.story.scenes[0])
  },
  loadNextScene ({ state, dispatch }) {
    const nextSceneId = state.stage.id + 1

    let nextScene = state.story.scenes[nextSceneId]
    nextScene.stage.id = nextSceneId

    dispatch('preApplySetting', nextScene)
  },
  async fireEvent ({ state, getters, commit, dispatch }, payload) {
    console.log(payload)

    if (state.stage.storyMode) {
      const { trigger, parameter, result } = state.stage.passConditions[0]
      let challengeResult

      if (result) {
        challengeResult = await dispatch('checkChallenge', {
          q1: result,
          q2: payload.result
        })
      }

      if (
        (!trigger || trigger === payload.trigger) &&
        (!parameter || parameter === payload.parameter) &&
        (!result || challengeResult)
      ) {
        commit('popPassCondition')

        if (state.stage.passConditions.length === 0) {
          if (state.stage.id === state.story.total - 1) {
            console.log('story mode completed')
            commit('applySetting', {
              stage: {
                id: state.stage.id + 1
              }
            })
          } else {
            dispatch('loadNextScene')
          }
        }
      }
    }
  }
}

export default { state, getters, mutations, actions }
