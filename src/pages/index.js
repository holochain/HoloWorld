import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import withRoot from '../withRoot';
import TextField from 'material-ui/TextField'

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  button: {
    margin: theme.spacing.unit
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '500px'
  }
})

class Index extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      entryText: '',
      entryHash: ''
    }
  }
  handleChangeText = (e) => {
    this.setState({
      entryText: e.target.value,
    });
  }

  handleChangeHash = (e) => {
    this.setState({
      entryHash: e.target.value,
    });
  }

  onEntrySubmit = (e) => {
    e.preventDefault()
    if (!this.state.entryText) return
    this.props.holoWorldEntryCreate(this.state.entryText)
  }

  onEntryRead = (e) => {
    e.preventDefault()
    if (!this.state.entryHash) return
    this.props.holoWorldEntryRead(this.state.entryHash)
  }
  render() {
    const { classes, state } = this.props;
    return (
      <div className={classes.root}>
        <form className={classes.container} noValidate autoComplete='off'>
          <TextField
            id='entry'
            label='Entry'
            onChange={this.handleChangeText}
            className={classes.textField}
            margin='normal'
          />
          <TextField
            id='hash'
            label='Hash'
            className={classes.textField}
            value={this.props.entryHash}
            margin='normal'
          />
          <Button variant="raised" color="secondary" onClick={this.onEntrySubmit}>
            Submit
          </Button>
        </form>
        <form className={classes.container} noValidate autoComplete='off'>
          <TextField
            id='hash'
            label='Hash to Read from Holochain'
            className={classes.textField}
            onChange={this.handleChangeHash}
            margin='normal'
          />
          <TextField
            id='entryRead'
            label='Entry Read from Holchain'
            className={classes.textField}
            value={this.props.entryText}
            margin='normal'
          />
          <Button variant="raised" color="secondary" onClick={this.onEntryRead}>
            Read
          </Button>
        </form>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
