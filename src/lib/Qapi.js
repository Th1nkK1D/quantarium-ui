import axios from 'axios'

const API_URL = 'http://localhost:3000/api'

async function requestHandler (method, endpoint) {
  try {
    const res = await axios[method](API_URL + endpoint)

    if (res.status !== 200) {
      console.log(res)
    }

    return res.data
  } catch (e) {
    console.log(e)
  }
}

const Qapi = {
  getStatus: () => requestHandler('get', '/state'),
  reset: () => requestHandler('post', '/reset'),
  previewGate: gateSymbol => requestHandler('get', '/gate/' + gateSymbol),
  pushGate: gateSymbol => requestHandler('put', '/gate/' + gateSymbol),
  popGate: () => requestHandler('delete', '/gate'),
  measure: batchSize => requestHandler('post', '/measure/' + batchSize),
  unmeasure: () => requestHandler('post', '/unmeasure')
}

export default Qapi
