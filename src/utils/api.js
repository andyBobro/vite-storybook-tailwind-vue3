const api = {
  fake: {
    user: {
      register: (data) => delayResponse(data)
    },
    utils: {
      random: {
        number: {
          get(from = 0, to = 100) {
            return delayedResponse(randomInteger(from, to))
          }
        }
      }
    }
  }
}

export default api

export async function r (...rest) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(...rest)
      const json = await response.json()

      resolve(json)
    } catch (error) {
      reject(error)
    }
  })
}

export async function delayedResponse (response, t = 300) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(response)
    }, t)
  })
}

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
