// Holochain actions
export const HOLOWORLDENTRYCREATE = 'holoWorldEntryCreate'
export const HOLOWORLDENTRYREAD = 'holoWorldEntryRead'

export function holoWorldEntryCreate (entry, then) {
    return {
      type: HOLOWORLDENTRYCREATE,
      meta: {
        isHc: true,
        namespace: 'HoloWorld',
        data: entry,
        then
      }
    }
  }

  export function holoWorldEntryRead (hash, then) {
    return {
      type: HOLOWORLDENTRYREAD,
      meta: {
        isHc: true,
        namespace: 'HoloWorld',
        data: {hash: hash},
        then
      }
    }
  }
