import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.
 */
export default class DialogExampleAlert extends React.Component {

  
  render() {
    const {state} = this.props;

    

    return (
      <div>
        <RaisedButton label="Alert" onTouchTap={this.handleOpen}/>
        <Dialog
          actions={actions}
          modal={false}
          open={true}
          onRequestClose={this.handleClose}
        >
          Discard draft?
        </Dialog>
      </div>
    );
  }
}
