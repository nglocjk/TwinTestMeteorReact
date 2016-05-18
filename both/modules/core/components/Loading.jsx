import React from 'react';
import CircularProgress from 'material-ui/lib/circular-progress';

const MyLoading = React.createClass({
  render(){
    return <div style={{textAlign:'center'}}><CircularProgress size={0.5}/></div>;
  }
});

export default MyLoading;
