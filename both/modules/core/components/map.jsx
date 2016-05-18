import React from 'react';
import GoogleMap from 'google-map-react';
import SocialDomain from 'material-ui/lib/svg-icons/social/domain';
import Popover from 'material-ui/lib/popover/popover';
import PopoverAnimationFromTop from 'material-ui/lib/popover/popover-animation-from-top';
import Divider from 'material-ui/lib/divider';
import RaisedButton from 'material-ui/lib/raised-button';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import {backendUrl} from '../configs/backendUrl';

const Map = React.createClass({
  // contextTypes declares the keys that this component expects
  // to receive through context, and their corresponding value types
  contextTypes: {
    muiTheme: React.PropTypes.object,
  },
  getInitialState() {
    return {
      muiTheme: this.context.muiTheme,
      open: false,
    };
  },
  // update theme here
  componentWillMount() {
    let newMuiTheme = this.state.muiTheme;

    this.setState({
      muiTheme: newMuiTheme,
    });
  },
  Info(data){
    console.log(data);
  },
  handleTouchTap(item, event) {
    console.log(item);
    const {setMapData,changeCenter} = this.props;
    changeCenter({
      lat: item.geometry.lat,
      lng: item.geometry.lng
    });
    setMapData(item);
    this.setState({
      open: true
    });
  },
  handleClose() {
    this.setState({open: false});
  },
  _onChildClick(key, childProps) {
    this.props.onCenterChange([childProps.lat, childProps.lng]);
  },
  render() {
    const {geodata,mapData,mapCenter} = this.props;
    const actions = [
      <FlatButton
        label="Đóng lại"
        secondary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Chi tiết"
        primary={true}
        keyboardFocused={true}
        onTouchTap={()=>{FlowRouter.go(`/projectcategory/${mapData._id}/${mapData.ProjectName}`)}}
      />,
    ];

    let height = window.innerHeight - 64;
    if (!FlowRouter.subsReady()) {
      return <div style={{textAlign:'center'}}><CircularProgress size={0.5}/></div>;
    }
    return (
      <div style={{height: `${height}px`}}>
        {geodata.length > 0 ? <GoogleMap
          onChildClick={this._onChildClick}
          center={mapCenter ? mapCenter : {lat: geodata[0].geometry.lat, lng: geodata[0].geometry.lng}}
          defaultZoom={9}>
          {geodata.map((item)=> (
            <img onClick={(event) => {this.handleTouchTap(item,event)}} key={item._id}
                 lat={item.geometry.lat}
                 lng={item.geometry.lng} src="/images/office-building-icon.png" alt=""/>
          ))}
        </GoogleMap> : ""}
        {mapData ? <Dialog
          title={<div></div>}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}>
          <img src={backendUrl + mapData.Thumbnail_H768} style={{width:'100%'}}/>
          <div>
            <p style={{margin:'5px',fontSize:'23px'}}>{mapData.ProjectName}</p>
            <p style={{margin:'5px',fontSize:'17px',textTransform:'uppercase'}}>{mapData.Investors}</p>
            <p style={{margin:'5px',fontSize:'17px'}}>{mapData.Location}</p>
          </div>
        </Dialog> : ""}

      </div>
    );
  },
});


export default Map;
