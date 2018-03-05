import * as A from './actions'

const initialState = {
  entryHash: '',
  entryText: ''
}

export default function holoWorld (state = initialState, action) {
  const { type, meta, payload } = action
  switch (type) {
    case A.HOLOWORLDENTRYCREATE:
        return {
          ...state,
          entryHash: payload
        }
    case A.HOLOWORLDENTRYREAD:
        return {
          ...state,
          entryText: payload.content
        }
    default:
      return state
  }
}
