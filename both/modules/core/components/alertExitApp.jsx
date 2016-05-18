import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


const styles = {
  "disconnectionMask": {
    position: 'fixed', top: '0', right: '0', bottom: '0', left: '0', zIndex: '9999'
  },
  "maskBg": {
    backgroundColor: 'black', opacity: '0.2', width: '100%', height: '100%'
  },
  "contents": {
    position: 'fixed', top: '0', right: '0', bottom: '0', left: '0'
  }
}

const AlertExitApp = React.createClass({
  // contextTypes declares the keys that this component expects
  // to receive through context, and their corresponding value types
  contextTypes: {
    muiTheme: React.PropTypes.object,
  },
  getInitialState() {
    return {
      muiTheme: this.context.muiTheme,
    };
  },
  // update theme here
  componentWillMount() {
    let newMuiTheme = this.state.muiTheme;
    this.setState({
      muiTheme: newMuiTheme,
    });
  },

  handleExitAppCancel(route, event) {
    Session.set("showAlertExitApp", false);
  },
  handleExitAppAccept() {
    Session.set("showAlertExitApp", false);
    if(navigator.app) {
      console.log('isCordova app');
      navigator.app.exitApp();
    } else if(navigator.device) {
      console.log('isCordova device');
      navigator.device.exitApp();
    }
  },

  render() {
    const {status} = this.props;
    console.log(status);
    const actions = [
      <FlatButton
        label="Hủy Bỏ"
        primary={true}
        onTouchTap={this.handleExitAppCancel}
      />,
      <FlatButton
        label="Chấp Nhận"
        primary={true}
        onTouchTap={this.handleExitAppAccept}
      />,
    ];

    return (
      <div>
        {status ? <Dialog
          actions={actions}
          modal={false}
          open={true}
          onRequestClose={this.handleClose}
        >
          Thoát ?
        </Dialog> : ""}
      </div>
    );
  },
});


export default AlertExitApp;
