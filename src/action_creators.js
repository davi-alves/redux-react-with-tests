export const setState = (state) => ({
  type: 'SET_STATE',
  state
})

export const vote = (entry) => ({
  meta: { remote: true },
  type: 'VOTE',
  entry
})

export const next = () => ({
  meta: { remote: true },
  type: 'NEXT'
})
