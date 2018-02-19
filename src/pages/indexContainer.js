import { connect } from 'react-redux'
import Index from './index'
import {
  holoWorldEntryCreate,
  holoWorldEntryRead
} from '../actions'

const mapStateToProps = state => {
  return {
    entryHash: state.entryHash,
    entryText: state.entryText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    holoWorldEntryCreate: (entry) => {
      console.log('HOLOWORLDENTRYCREATE!')
      const holoWorldEntry = {
        content: entry,
        timestamp: Date.now()
      }
      dispatch(holoWorldEntryCreate(holoWorldEntry))
    },
    holoWorldEntryRead: (hash) => {
      console.log('HOLOWORLDENTRYREAD!')
      dispatch(holoWorldEntryRead(hash))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
