import { reactive } from 'vue'

const userInicialState = {
  currentUser: {}
}

let state = reactive(userInicialState)

export default state

export function resetUserStore () {
  state = reactive(userInicialState)
}

export function cleanCurrentUser () {
  state.currentUser = {}
}

export function setCurrentUser (user) {
  state.currentUser = user
}

export function setApiKey (apiKey) {
  const currentUser = { ...state.currentUser, apiKey }
  state.currentUser = currentUser
}
