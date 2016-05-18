import React from 'react';
import RefreshIndicator from 'material-ui/lib/refresh-indicator';
import Subheader from 'material-ui/lib/Subheader';

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

const LoadingDisconnected = React.createClass({
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
  render() {
    const {status} = this.props;
    console.log(status);
    return (
      <div>
        {status !== "connected" ? <div style={styles.disconnectionMask}>
          <div style={styles.maskBg}>
          </div>
          <div style={styles.contents}>
            <RefreshIndicator
              size={40}
              left={10}
              top={70}
              status="loading"
              style={{display: 'inline-block',position: 'relative',}}
            />
            <Subheader
              style={{position:'absolute',color:'white',top:'65px',left:'40px',fontFamily:'Roboto, sans-serif',fontSize:'16px'}}>Đang
              kết nối đến server</Subheader>
          </div>
        </div> : ""}
      </div>
    );
  },
});


export default LoadingDisconnected;
