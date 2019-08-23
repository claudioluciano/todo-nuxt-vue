export const state = () => ({
  listTodos: []
})

export const getters = {
  DONE_TODO (state) {
    return state.listTodos.filter(x => x.done) || []
  }
}

export const mutations = {
  ADD_TODO (state, payload) {
    state.listTodos.push({
      id: Math.random().toString(36).substr(2, 9), // https://gist.github.com/gordonbrander/2230317
      text: payload,
      done: false
    })
  },
  TOGGLE_TODO_DONE (state, payload) {
    const { id, done } = payload

    const index = state.listTodos.findIndex(x => x.id === id)

    state.listTodos[index].done = done
  },
  REMOVE_TODO (state, payload) {
    const index = state.listTodos.findIndex(x => x.id === payload)
    state.listTodos.splice(index, 1)
  }
}
