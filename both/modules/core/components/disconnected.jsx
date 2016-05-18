import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AVReplay from 'material-ui/svg-icons/av/replay';
const Disconnected = React.createClass({
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
  handleConnect(event){
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    const status = Meteor.status().status;
    //alert(status);
    if (status === 'connected') {
      FlowRouter.go('/');
    }
    return;
  },
  // the app bar and button will receive our theme through
  // context and style accordingly
  render() {
    return (
      <div style={{padding:'10%'}}>
        <RaisedButton icon={<AVReplay />} fullWidth={true} onClick={this.handleConnect} label="Thử lại"/>
      </div>
    );
  },
});


export default Disconnected;
