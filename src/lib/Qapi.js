import axios from 'axios'

async function requestHandler (url, method, endpoint) {
  try {
    const res = await axios[method](url + endpoint)

    if (res.status !== 200) {
      console.log(res)
    }

    return res.data
  } catch (e) {
    console.log(e)
  }
}

const Qapi = {
  getStatus: url => requestHandler(url, 'get', '/state'),
  reset: url => requestHandler(url, 'post', '/reset'),
  previewGate: (url, gateSymbol) => requestHandler(url, 'get', '/gate/' + gateSymbol),
  pushGate: (url, gateSymbol) => requestHandler(url, 'put', '/gate/' + gateSymbol),
  popGate: url => requestHandler(url, 'delete', '/gate'),
  measure: (url, batchSize) => requestHandler(url, 'post', '/measure/' + batchSize),
  unmeasure: url => requestHandler(url, 'post', '/unmeasure'),
  compare: (url, q1, q2) => requestHandler(url, 'get', '/compare/' + q1.join(',') + '/' + q2.join(',')),
  mark: (url, q) => requestHandler(url, 'put', '/marker/' + q.join(',')),
  unmark: url => requestHandler(url, 'delete', '/marker'),
  playCutscene: (url, sceneName) => requestHandler(url, 'post', '/cutscene/' + sceneName),
  clearCutscene: url => requestHandler(url, 'delete', '/cutscene')

}

export default Qapi
